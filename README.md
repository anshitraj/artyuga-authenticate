# Artyuga Marketplace

A premium digital art marketplace built with Next.js 14, TypeScript, and TailwindCSS. This frontend showcases artist shops and verified artworks with a futuristic dark theme featuring neon purple accents.

## Features

- 🏪 **Shop Listings**: Browse artist storefronts on the homepage
- 🎨 **Artwork Gallery**: View artworks organized by shop
- 💰 **Purchase Flow**: Simulated purchase with QR code generation
- ✅ **Verification Page**: Premium verification page with blockchain details
- 📱 **Mobile Responsive**: Optimized for both desktop and mobile (Base app browser)
- 🎭 **Dark Theme**: Futuristic purple-neon aesthetic

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Radix UI** (Dialog, Avatar components)
- **qrcode.react** (QR code generation)
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
bun install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
artyuga-authenticate/
├── app/
│   ├── api/              # API routes (mock data)
│   ├── art/[artId]/      # Artwork detail page
│   ├── shop/[shopId]/    # Shop page
│   ├── verify/[artId]/   # Verification page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage (shops list)
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # Reusable UI components
│   ├── ArtworkCard.tsx   # Artwork card component
│   ├── ShopCard.tsx      # Shop card component
│   ├── Header.tsx        # Header component
│   └── PurchaseModal.tsx # Purchase modal with QR code
├── data/
│   └── mockData.ts       # Mock data for shops and artworks
└── lib/
    └── utils.ts          # Utility functions
```

## Pages

- **`/`** - Homepage showing all shops
- **`/shop/[shopId]`** - Individual shop page with artworks
- **`/art/[artId]`** - Artwork detail page with purchase button
- **`/verify/[artId]`** - Verification page with blockchain details

## API Routes

- **`/api/shops`** - Get all shops
- **`/api/shops/[id]`** - Get shop details with artworks
- **`/api/artworks/[id]`** - Get artwork details with shop info

## Mock Data

The app uses static mock data stored in `data/mockData.ts`:
- 3 shops
- 13 artworks (4-5 per shop)
- Each artwork includes title, description, image, price, and owner

## Deployment

This app is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

## Design

- **Primary Color**: #B020F0 (Neon Purple)
- **Theme**: Dark with purple accents
- **Style**: Premium, futuristic, OpenSea-inspired
- **Animations**: Smooth hover effects and transitions

## Notes

- All purchases are simulated (no real blockchain integration)
- Images use placeholder services (Picsum Photos, DiceBear)
- QR codes link to verification pages
- Transaction hashes are randomly generated

## License

MIT
