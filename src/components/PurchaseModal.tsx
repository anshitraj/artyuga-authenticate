import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import { CheckCircle, Download } from "lucide-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  artworkId: string;
  artworkTitle: string;
}

const PurchaseModal = ({ isOpen, onClose, artworkId, artworkTitle }: PurchaseModalProps) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const verificationUrl = `${window.location.origin}/verify/${artworkId}`;

  const handlePurchase = () => {
    // Simulate purchase process
    setTimeout(() => {
      setShowSuccess(true);
    }, 1000);
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("#qr-code canvas") as HTMLCanvasElement;
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `artyuga-verification-${artworkId}.png`;
      link.href = url;
      link.click();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            {showSuccess ? "Purchase Successful!" : "Complete Purchase"}
          </DialogTitle>
        </DialogHeader>
        
        {!showSuccess ? (
          <div className="space-y-4 py-4">
            <div className="text-center space-y-2">
              <p className="text-muted-foreground">
                You are about to purchase:
              </p>
              <p className="text-xl font-bold text-primary">{artworkTitle}</p>
            </div>
            
            <Button 
              onClick={handlePurchase}
              className="w-full bg-primary hover:bg-primary/90 glow-purple"
              size="lg"
            >
              Confirm Purchase with Sepolia ETH
            </Button>
          </div>
        ) : (
          <div className="space-y-6 py-4">
            <div className="flex justify-center">
              <CheckCircle className="w-16 h-16 text-secondary animate-scale-in" />
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-lg font-semibold">Transaction Confirmed!</p>
              <p className="text-sm text-muted-foreground">
                Your artwork ownership has been verified on Base Blockchain
              </p>
            </div>
            
            <div id="qr-code" className="flex justify-center p-6 bg-background rounded-lg">
              <QRCodeSVG 
                value={verificationUrl}
                size={200}
                level="H"
                includeMargin
              />
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-center text-muted-foreground">
                Scan this QR code to verify authenticity
              </p>
              <Button 
                onClick={downloadQRCode}
                variant="outline"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download QR Code
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
