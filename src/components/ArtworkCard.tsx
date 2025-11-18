import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Artwork } from "@/data/artworks";

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-purple">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-5 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {artwork.title}
          </h3>
          <p className="text-sm text-muted-foreground">by {artwork.artist}</p>
        </div>
        
        <p className="text-sm text-foreground/70 line-clamp-2">
          {artwork.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-lg font-bold text-primary">₹{artwork.priceINR.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">{artwork.priceETH} ETH</p>
          </div>
          
          <Link to={`/art/${artwork.id}`}>
            <Button 
              variant="default" 
              className="bg-primary hover:bg-primary/90 glow-purple transition-all"
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ArtworkCard;
