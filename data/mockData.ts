export type VerificationStatus = "none" | "verified" | "exclusive";

export interface Shop {
  id: string;
  name: string;
  username: string;
  tagline: string;
  profileImage: string;
  bannerImage: string;
  verificationStatus: VerificationStatus;
}

export interface Artwork {
  id: string;
  title: string;
  description: string;
  image: string;
  shopId: string;
  price: string;
  owner: string;
}

export const shops: Shop[] = [
  {
    id: "1",
    name: "Neon Dreams Studio",
    username: "@neondreams",
    tagline: "Futuristic digital art meets cyberpunk aesthetics",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=neondreams",
    bannerImage: "https://picsum.photos/1200/300?random=1",
    verificationStatus: "exclusive",
  },
  {
    id: "2",
    name: "Cosmic Visions",
    username: "@cosmicvisions",
    tagline: "Exploring the infinite cosmos through digital art",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=cosmicvisions",
    bannerImage: "https://picsum.photos/1200/300?random=2",
    verificationStatus: "verified",
  },
  {
    id: "3",
    name: "Quantum Fractals",
    username: "@quantumfractals",
    tagline: "Mathematical beauty in infinite patterns",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=quantumfractals",
    bannerImage: "https://picsum.photos/1200/300?random=3",
    verificationStatus: "verified",
  },
  {
    id: "4",
    name: "Digital Canvas",
    username: "@digitalcanvas",
    tagline: "Where pixels meet passion in every stroke",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=digitalcanvas",
    bannerImage: "https://picsum.photos/1200/300?random=4",
    verificationStatus: "none",
  },
  {
    id: "5",
    name: "Abstract Minds",
    username: "@abstractminds",
    tagline: "Unleashing creativity through abstract expressions",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=abstractminds",
    bannerImage: "https://picsum.photos/1200/300?random=5",
    verificationStatus: "none",
  },
  {
    id: "6",
    name: "Pixel Perfection",
    username: "@pixelperfection",
    tagline: "Crafting digital masterpieces one pixel at a time",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixelperfection",
    bannerImage: "https://picsum.photos/1200/300?random=6",
    verificationStatus: "verified",
  },
  {
    id: "7",
    name: "Artistic Visions",
    username: "@artisticvisions",
    tagline: "Transforming imagination into digital reality",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=artisticvisions",
    bannerImage: "https://picsum.photos/1200/300?random=7",
    verificationStatus: "none",
  },
  {
    id: "8",
    name: "Elite Studios",
    username: "@elitestudios",
    tagline: "Premium digital art for collectors and connoisseurs",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=elitestudios",
    bannerImage: "https://picsum.photos/1200/300?random=8",
    verificationStatus: "exclusive",
  },
];

export const artworks: Artwork[] = [
  // Shop 1 artworks
  {
    id: "1",
    title: "Crystal Dreams",
    description: "A mesmerizing blend of glass sculptures and digital geometry, exploring the intersection of physical and virtual reality.",
    image: "https://picsum.photos/600/600?random=1",
    shopId: "1",
    price: "0.025 ETH", // Will be converted to INR in display
    owner: "0x1234...5678",
  },
  {
    id: "2",
    title: "Neon Genesis",
    description: "Futuristic cyberpunk cityscape rendered in vibrant neon colors, capturing the essence of digital culture.",
    image: "https://picsum.photos/600/600?random=2",
    shopId: "1",
    price: "0.033 ETH",
    owner: "0x2345...6789",
  },
  {
    id: "3",
    title: "Digital Bloom",
    description: "Nature meets technology in this stunning piece featuring algorithmic flower patterns.",
    image: "https://picsum.photos/600/600?random=3",
    shopId: "1",
    price: "0.029 ETH",
    owner: "0x4567...8901",
  },
  {
    id: "4",
    title: "Cyber Nexus",
    description: "A digital representation of interconnected networks and data flows in the metaverse.",
    image: "https://picsum.photos/600/600?random=4",
    shopId: "1",
    price: "0.031 ETH",
    owner: "0x5678...9012",
  },
  // Shop 2 artworks
  {
    id: "5",
    title: "Ethereal Waves",
    description: "Abstract fluid dynamics captured in stunning detail, representing the flow of blockchain transactions.",
    image: "https://picsum.photos/600/600?random=5",
    shopId: "2",
    price: "0.021 ETH",
    owner: "0x3456...7890",
  },
  {
    id: "6",
    title: "Cosmic Interface",
    description: "A futuristic user interface design inspired by cosmic phenomena and stellar formations.",
    image: "https://picsum.photos/600/600?random=6",
    shopId: "2",
    price: "0.027 ETH",
    owner: "0x6789...0123",
  },
  {
    id: "7",
    title: "Stellar Formation",
    description: "The birth of stars visualized through digital art, capturing the beauty of cosmic creation.",
    image: "https://picsum.photos/600/600?random=7",
    shopId: "2",
    price: "0.035 ETH",
    owner: "0x7890...1234",
  },
  {
    id: "8",
    title: "Nebula Dreams",
    description: "Colorful cosmic clouds swirling in the vastness of space, rendered with incredible detail.",
    image: "https://picsum.photos/600/600?random=8",
    shopId: "2",
    price: "0.028 ETH",
    owner: "0x8901...2345",
  },
  {
    id: "9",
    title: "Galactic Core",
    description: "The center of a galaxy, where time and space converge in a spectacular display of light.",
    image: "https://picsum.photos/600/600?random=9",
    shopId: "2",
    price: "0.042 ETH",
    owner: "0x9012...3456",
  },
  // Shop 3 artworks
  {
    id: "10",
    title: "Quantum Fractals",
    description: "Mathematical beauty expressed through infinite recursive patterns and quantum-inspired color palettes.",
    image: "https://picsum.photos/600/600?random=10",
    shopId: "3",
    price: "0.039 ETH",
    owner: "0x5678...9012",
  },
  {
    id: "11",
    title: "Mandelbrot Cascade",
    description: "The famous fractal set visualized in stunning detail, revealing infinite complexity at every scale.",
    image: "https://picsum.photos/600/600?random=11",
    shopId: "3",
    price: "0.032 ETH",
    owner: "0x0123...4567",
  },
  {
    id: "12",
    title: "Fibonacci Spiral",
    description: "Nature's golden ratio expressed through digital art, showing the mathematical harmony of the universe.",
    image: "https://picsum.photos/600/600?random=12",
    shopId: "3",
    price: "0.026 ETH",
    owner: "0x1234...5678",
  },
  {
    id: "13",
    title: "Fractal Dimensions",
    description: "Exploring dimensions beyond our perception through mathematical art and visual complexity.",
    image: "https://picsum.photos/600/600?random=13",
    shopId: "3",
    price: "0.038 ETH",
    owner: "0x2345...6789",
  },
  // Shop 6 artworks (verified)
  {
    id: "14",
    title: "Pixel Symphony",
    description: "A harmonious blend of colors and pixels creating a visual symphony of digital artistry.",
    image: "https://picsum.photos/600/600?random=14",
    shopId: "6",
    price: "0.024 ETH",
    owner: "0x3456...7890",
  },
  {
    id: "15",
    title: "Digital Harmony",
    description: "Perfect balance between technology and artistry in this stunning digital creation.",
    image: "https://picsum.photos/600/600?random=15",
    shopId: "6",
    price: "0.030 ETH",
    owner: "0x4567...8901",
  },
  {
    id: "16",
    title: "Masterpiece Collection",
    description: "A curated collection of digital masterpieces showcasing exceptional artistic vision.",
    image: "https://picsum.photos/600/600?random=16",
    shopId: "6",
    price: "0.036 ETH",
    owner: "0x5678...9012",
  },
  // Shop 8 artworks (exclusive)
  {
    id: "17",
    title: "Elite Collection #1",
    description: "An exclusive piece from our premium collection, reserved for discerning collectors.",
    image: "https://picsum.photos/600/600?random=17",
    shopId: "8",
    price: "0.050 ETH",
    owner: "0x6789...0123",
  },
  {
    id: "18",
    title: "Elite Collection #2",
    description: "Rare and exclusive digital art from our premium studio collection.",
    image: "https://picsum.photos/600/600?random=18",
    shopId: "8",
    price: "0.055 ETH",
    owner: "0x7890...1234",
  },
  {
    id: "19",
    title: "Elite Collection #3",
    description: "A masterpiece from our exclusive collection, crafted with unparalleled attention to detail.",
    image: "https://picsum.photos/600/600?random=19",
    shopId: "8",
    price: "0.060 ETH",
    owner: "0x8901...2345",
  },
];

export function getShopById(id: string): Shop | undefined {
  return shops.find(shop => shop.id === id);
}

export function getArtworksByShopId(shopId: string): Artwork[] {
  return artworks.filter(artwork => artwork.shopId === shopId);
}

export function getArtworkById(id: string): Artwork | undefined {
  return artworks.find(artwork => artwork.id === id);
}

export function generateTransactionHash(): string {
  return "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");
}

