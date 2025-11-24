"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Store, CheckCircle2 } from "lucide-react";
import { VerificationStatus } from "@/data/mockData";

interface ShopCardProps {
  shop: {
    id: string;
    name: string;
    username: string;
    tagline: string;
    profileImage: string;
    verificationStatus: VerificationStatus;
  };
}

export default function ShopCard({ shop }: ShopCardProps) {
  const getVerificationBadge = () => {
    if (shop.verificationStatus === "exclusive") {
      // Gold badge for exclusive (similar to Twitter gold checkmark)
      return (
        <div className="flex items-center">
          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-[#fbbf24] flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-3 h-3 text-white"
                fill="currentColor"
              >
                <path d="M9.5 16.5L4 11l1.41-1.41L9.5 13.68 18.59 4.59 20 6l-10.5 10.5z"/>
              </svg>
            </div>
          </div>
        </div>
      );
    } else if (shop.verificationStatus === "verified") {
      // Twitter-style blue verified badge
      return (
        <div className="flex items-center">
          <div className="relative">
            <div className="w-5 h-5 rounded-full bg-[#1DA1F2] flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                className="w-3 h-3 text-white"
                fill="currentColor"
              >
                <path d="M9.5 16.5L4 11l1.41-1.41L9.5 13.68 18.59 4.59 20 6l-10.5 10.5z"/>
              </svg>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Link href={`/shop/${shop.id}`}>
      <Card className="group cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Verification Badge on Left */}
            <div className="flex-shrink-0 pt-1">
              {getVerificationBadge()}
            </div>
            
            {/* Shop Content */}
            <div className="flex items-start space-x-4 flex-1">
              <Avatar className="h-16 w-16 border-2 border-primary/30">
                <AvatarImage src={shop.profileImage} alt={shop.name} />
                <AvatarFallback>
                  <Store className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {shop.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{shop.username}</p>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {shop.tagline}
                </p>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                    asChild
                  >
                    <span>View Shop</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

