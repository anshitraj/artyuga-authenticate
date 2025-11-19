import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ArtworkCard from "@/components/ArtworkCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Store, AlertCircle } from "lucide-react";
import Image from "next/image";

import { getShopById, getArtworksByShopId } from "@/data/mockData";

function getShopData(shopId: string) {
  const shop = getShopById(shopId);
  if (!shop) {
    return null;
  }
  const artworks = getArtworksByShopId(shopId);
  return {
    ...shop,
    artworks,
  };
}


export default async function ShopPage({
  params,
}: {
  params: Promise<{ shopId: string }>;
}) {
  const { shopId } = await params;
  const shopData = getShopData(shopId);

  if (!shopData) {
    notFound();
  }

  const { artworks, ...shop } = shopData;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-8 pb-12">
        {/* Shop Header */}
        <section className="relative mb-8 rounded-lg overflow-hidden">
          <div className="relative h-64 md:h-80 w-full bg-gradient-to-r from-primary/20 to-primary/5">
            <Image
              src={shop.bannerImage}
              alt={shop.name}
              fill
              className="object-cover opacity-30"
              unoptimized
            />
            <div className="absolute inset-0 flex items-end p-6 md:p-12">
              <div className="flex items-end gap-4 md:gap-6">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background">
                  <AvatarImage src={shop.profileImage} alt={shop.name} />
                  <AvatarFallback>
                    <Store className="h-12 w-12 md:h-16 md:w-16" />
                  </AvatarFallback>
                </Avatar>
                <div className="pb-2">
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">{shop.name}</h1>
                  <p className="text-lg text-muted-foreground mb-1">{shop.username}</p>
                  <p className="text-sm text-muted-foreground max-w-2xl">{shop.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Artworks Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Artworks</h2>
          {shop.verificationStatus === "none" ? (
            <div className="text-center py-16 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/50 border border-border mb-4">
                <AlertCircle className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Shop Not Verified</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                This shop is not yet verified. Verified shops can list and sell artworks on the marketplace.
                Please complete verification to start listing your artworks.
              </p>
            </div>
          ) : artworks && artworks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p>No artworks available in this shop.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

