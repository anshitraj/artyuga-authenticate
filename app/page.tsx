import Header from "@/components/Header";
import ShopCard from "@/components/ShopCard";
import { Sparkles } from "lucide-react";
import { shops } from "@/data/mockData";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-12 pb-12">
        {/* Hero Section */}
        <section className="text-center py-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full glow-purple">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Verified on Base Blockchain</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-glow">
            Discover Authentic
            <br />
            <span className="text-primary">Digital Art</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore unique artist storefronts and collect verified digital artworks
            on the Base Sepolia testnet.
          </p>
        </section>

        {/* Shops Grid */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">Artist Shops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border py-8 text-center text-muted-foreground mt-12">
        <p>© 2024 Artyuga Marketplace. All artworks verified on Base Blockchain.</p>
      </footer>
    </div>
  );
}

