"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, Share2, Store, Copy, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArtworkById, getShopById, generateTransactionHash } from "@/data/mockData";

interface ArtworkData {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  owner: string;
  shop: {
    id: string;
    name: string;
    username: string;
    profileImage: string;
  };
}

export default function VerifyPage() {
  const params = useParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const artworkData = getArtworkById(params.artId as string);
  
  if (!artworkData) {
    router.push("/");
    return null;
  }

  const shop = getShopById(artworkData.shopId);
  if (!shop) {
    router.push("/");
    return null;
  }

  const artwork: ArtworkData = {
    ...artworkData,
    shop,
  };

  const txHash = generateTransactionHash();

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Verify ${artwork?.title} on Artyuga`,
          text: `Check out this verified artwork on Artyuga Marketplace`,
          url: url,
        });
      } catch (err) {
        // User cancelled or error occurred
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-8 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Verification Badge */}
          <div className="flex items-center justify-center gap-3 mb-8 p-4 bg-primary/10 border border-primary/30 rounded-lg glow-purple">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Verified on Base Blockchain</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Artwork Image */}
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>

            {/* Verification Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                  {artwork.title}
                </h1>
                <Link
                  href={`/shop/${artwork.shop.id}`}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <Avatar className="h-12 w-12 border-2 border-primary/30">
                    <AvatarImage src={artwork.shop.profileImage} alt={artwork.shop.name} />
                    <AvatarFallback>
                      <Store className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{artwork.shop.name}</p>
                    <p className="text-sm text-muted-foreground">{artwork.shop.username}</p>
                  </div>
                </Link>
              </div>

              <div className="space-y-4 p-6 rounded-lg bg-card border border-border">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Owner Address</h3>
                  <p className="text-foreground font-mono text-sm break-all">{artwork.owner}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Transaction Hash</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-foreground font-mono text-sm break-all flex-1">{txHash}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        copyToClipboard(txHash);
                      }}
                      className="h-8 w-8"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Purchase Price</h3>
                  <p className="text-2xl font-bold text-primary">{artwork.price}</p>
                </div>
              </div>

              <Button
                onClick={handleShare}
                variant="outline"
                className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                size="lg"
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share Verification Link
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

