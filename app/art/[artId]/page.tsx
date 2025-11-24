"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import PurchaseModal from "@/components/PurchaseModal";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Store, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArtworkById, getShopById } from "@/data/mockData";
import { convertEthToInr } from "@/lib/currency";

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

export default function ArtworkPage() {
  const params = useParams();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

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


  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-8 pb-12">
        <Link
          href={`/shop/${artwork.shop.id}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Artwork Image */}
            <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-border">
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Artwork Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
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

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Description</h3>
                  <p className="text-foreground leading-relaxed">{artwork.description}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Owner</h3>
                  <p className="text-foreground font-mono">{artwork.owner}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">Price</h3>
                  <p className="text-3xl font-bold text-primary">{convertEthToInr(artwork.price)}</p>
                </div>
              </div>

              <Button
                onClick={() => setModalOpen(true)}
                size="lg"
                className="w-full text-lg py-6"
              >
                Buy with Sepolia Testnet
              </Button>
            </div>
          </div>
        </div>
      </main>

      <PurchaseModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        artId={artwork.id}
        shopId={artwork.shop.id}
      />
    </div>
  );
}

