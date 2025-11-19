"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, ExternalLink } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useRouter } from "next/navigation";

interface PurchaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  artId: string;
}

export default function PurchaseModal({
  open,
  onOpenChange,
  artId,
}: PurchaseModalProps) {
  const [showQR, setShowQR] = useState(false);
  const router = useRouter();
  const verificationUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/verify/${artId}`;

  // Reset showQR when modal closes
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setShowQR(false);
    }
    onOpenChange(newOpen);
  };

  const handleBuy = () => {
    // Simulate purchase
    setTimeout(() => {
      setShowQR(true);
    }, 1000);
  };

  const handleDownloadQR = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `artyuga-qr-${artId}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  if (!showQR) {
    return (
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Purchase Artwork</DialogTitle>
            <DialogDescription>
              Click the button below to simulate a purchase on Sepolia Testnet.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <Button
              onClick={handleBuy}
              className="w-full"
              size="lg"
            >
              Buy with Sepolia Testnet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Purchase Successful!
          </DialogTitle>
          <DialogDescription>
            Your artwork has been purchased. Download the QR code or visit the verification page.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="rounded-lg bg-white p-4">
            <QRCodeSVG
              id="qr-code"
              value={verificationUrl}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button
              onClick={handleDownloadQR}
              variant="outline"
              className="w-full"
            >
              <Download className="mr-2 h-4 w-4" />
              Download QR
            </Button>
            <Button
              onClick={() => {
                router.push(`/verify/${artId}`);
                onOpenChange(false);
              }}
              className="w-full"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Verification Page
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

