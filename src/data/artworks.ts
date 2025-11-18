import crystalDreams from "@/assets/art-crystal-dreams.jpg";
import neonGenesis from "@/assets/art-neon-genesis.jpg";
import etherealWaves from "@/assets/art-ethereal-waves.jpg";
import digitalBloom from "@/assets/art-digital-bloom.jpg";
import quantumFractals from "@/assets/art-quantum-fractals.jpg";
import cosmicInterface from "@/assets/art-cosmic-interface.jpg";

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  description: string;
  image: string;
  priceINR: number;
  priceETH: string;
  owner: string;
  transactionHash: string;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Crystal Dreams",
    artist: "Maya Chen",
    description: "A mesmerizing blend of glass sculptures and digital geometry, exploring the intersection of physical and virtual reality.",
    image: crystalDreams,
    priceINR: 45000,
    priceETH: "0.025",
    owner: "0x1234...5678",
    transactionHash: "0xabcd...ef01"
  },
  {
    id: "2",
    title: "Neon Genesis",
    artist: "Alex Rivers",
    description: "Futuristic cyberpunk cityscape rendered in vibrant neon colors, capturing the essence of digital culture.",
    image: neonGenesis,
    priceINR: 60000,
    priceETH: "0.033",
    owner: "0x2345...6789",
    transactionHash: "0xbcde...f012"
  },
  {
    id: "3",
    title: "Ethereal Waves",
    artist: "Sofia Martinez",
    description: "Abstract fluid dynamics captured in stunning detail, representing the flow of blockchain transactions.",
    image: etherealWaves,
    priceINR: 38000,
    priceETH: "0.021",
    owner: "0x3456...7890",
    transactionHash: "0xcdef...0123"
  },
  {
    id: "4",
    title: "Digital Bloom",
    artist: "James Park",
    description: "Nature meets technology in this stunning piece featuring algorithmic flower patterns.",
    image: digitalBloom,
    priceINR: 52000,
    priceETH: "0.029",
    owner: "0x4567...8901",
    transactionHash: "0xdef0...1234"
  },
  {
    id: "5",
    title: "Quantum Fractals",
    artist: "Nina Patel",
    description: "Mathematical beauty expressed through infinite recursive patterns and quantum-inspired color palettes.",
    image: quantumFractals,
    priceINR: 70000,
    priceETH: "0.039",
    owner: "0x5678...9012",
    transactionHash: "0xef01...2345"
  },
  {
    id: "6",
    title: "Cosmic Interface",
    artist: "David Kim",
    description: "A futuristic user interface design inspired by cosmic phenomena and stellar formations.",
    image: cosmicInterface,
    priceINR: 48000,
    priceETH: "0.027",
    owner: "0x6789...0123",
    transactionHash: "0xf012...3456"
  }
];

export const getArtworkById = (id: string): Artwork | undefined => {
  return artworks.find(art => art.id === id);
};
