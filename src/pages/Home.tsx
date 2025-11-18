import { Sparkles } from "lucide-react";
import Header from "@/components/Header";
import ArtworkCard from "@/components/ArtworkCard";
import { artworks } from "@/data/artworks";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center py-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full glow-purple">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Verified on Base Blockchain</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-glow animate-fade-in">
            Discover Authentic
            <br />
            <span className="text-primary">Digital Art</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each artwork is verified and secured on the Base Sepolia testnet,
            ensuring authenticity and true ownership.
          </p>
        </section>

        {/* Artworks Grid */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">Featured Artworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border py-8 text-center text-muted-foreground">
        <p>© 2024 Artyuga Marketplace. All artworks verified on Base Blockchain.</p>
      </footer>
    </div>
  );
};

export default Home;
