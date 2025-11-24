"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { convertEthToInr } from "@/lib/currency";

interface ArtworkCardProps {
  artwork: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: string;
  };
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  const inrPrice = convertEthToInr(artwork.price);
  
  return (
    <Link href={`/art/${artwork.id}`}>
      <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
        <div className="relative aspect-square w-full overflow-hidden bg-muted">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {artwork.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {artwork.description}
          </p>
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-primary">{inrPrice}</span>
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
              onClick={(e) => e.preventDefault()}
            >
              View Artwork
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

