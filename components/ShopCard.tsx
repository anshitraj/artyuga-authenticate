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
      return (
        <div className="flex items-center">
          <CheckCircle2 
            className="h-6 w-6" 
            style={{ 
              color: '#fbbf24', 
              fill: '#fbbf24',
              stroke: '#fbbf24'
            }} 
            strokeWidth={2.5}
          />
        </div>
      );
    } else if (shop.verificationStatus === "verified") {
      return (
        <div className="flex items-center">
          <CheckCircle2 
            className="h-6 w-6" 
            style={{ 
              color: '#3b82f6', 
              fill: '#3b82f6',
              stroke: '#3b82f6'
            }} 
            strokeWidth={2.5}
          />
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

