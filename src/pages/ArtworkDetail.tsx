import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Shield, User, Wallet } from "lucide-react";
import Header from "@/components/Header";
import PurchaseModal from "@/components/PurchaseModal";
import { Button } from "@/components/ui/button";
import { getArtworkById } from "@/data/artworks";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  
  const artwork = getArtworkById(id || "");

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artwork Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Gallery
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Artwork Image */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border glow-purple">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Artwork Details */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-semibold">Verified on Base Blockchain</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-glow">
                {artwork.title}
              </h1>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <User className="w-4 h-4" />
                <span>by {artwork.artist}</span>
              </div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {artwork.description}
            </p>

            <div className="space-y-4 p-6 bg-card rounded-xl border border-border">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Current Owner</span>
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-secondary" />
                  <span className="font-mono text-sm">{artwork.owner}</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-primary">
                    ₹{artwork.priceINR.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">
                    ({artwork.priceETH} ETH)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Price on Base Sepolia Testnet</p>
              </div>
            </div>

            <Button 
              onClick={() => setIsPurchaseModalOpen(true)}
              className="w-full bg-primary hover:bg-primary/90 glow-purple text-lg py-6"
              size="lg"
            >
              Buy with Sepolia Testnet ETH
            </Button>

            <div className="p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Note:</span> This artwork is verified on Base Sepolia testnet. 
                After purchase, you'll receive a QR code for authenticity verification.
              </p>
            </div>
          </div>
        </div>
      </main>

      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        artworkId={artwork.id}
        artworkTitle={artwork.title}
      />
    </div>
  );
};

export default ArtworkDetail;
