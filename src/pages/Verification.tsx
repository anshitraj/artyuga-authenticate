import { useParams, Link } from "react-router-dom";
import { CheckCircle, Share2, ExternalLink, Shield, User, Wallet, Hash } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { getArtworkById } from "@/data/artworks";
import { toast } from "sonner";

const Verification = () => {
  const { id } = useParams<{ id: string }>();
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

  const handleShare = () => {
    const verificationUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: `${artwork.title} - Verified on Base Blockchain`,
        text: `Check out this verified artwork: ${artwork.title} by ${artwork.artist}`,
        url: verificationUrl,
      });
    } else {
      navigator.clipboard.writeText(verificationUrl);
      toast.success("Verification link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Verification Badge */}
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full glow-purple animate-scale-in">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-glow">
              ✓ Verified on Base Blockchain
            </h1>
            
            <p className="text-xl text-muted-foreground">
              This artwork's authenticity has been confirmed on Base Sepolia testnet
            </p>
          </div>

          {/* Artwork Card */}
          <div className="bg-card border border-primary/30 rounded-2xl overflow-hidden glow-purple">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Image */}
              <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{artwork.title}</h2>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>by {artwork.artist}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                    <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Blockchain Verified</p>
                      <p className="text-sm text-muted-foreground">
                        Secured on Base Sepolia testnet
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                    <Wallet className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Current Owner</p>
                      <p className="text-sm text-muted-foreground font-mono break-all">
                        {artwork.owner}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border">
                    <Hash className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Transaction Hash</p>
                      <p className="text-sm text-muted-foreground font-mono break-all">
                        {artwork.transactionHash}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Verified Price</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      ₹{artwork.priceINR.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      ({artwork.priceETH} ETH)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-border p-6 bg-muted/20">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleShare}
                  className="flex-1 bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Verification
                </Button>
                
                <Link to={`/art/${artwork.id}`} className="flex-1">
                  <Button 
                    variant="outline"
                    className="w-full"
                    size="lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Full Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-8 p-6 bg-card/50 rounded-xl border border-border">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              What does verification mean?
            </h3>
            <p className="text-sm text-muted-foreground">
              This artwork's authenticity, ownership, and transaction history are permanently 
              recorded on the Base Sepolia blockchain. This ensures the artwork is genuine 
              and ownership can be verified at any time.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Verification;
