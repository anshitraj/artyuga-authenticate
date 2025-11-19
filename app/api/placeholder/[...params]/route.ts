import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ params: string[] }> }
) {
  const { params: pathParams } = await params;
  const [width, height] = pathParams.map(p => parseInt(p) || 400);
  
  // Generate a simple SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#1a0a2e"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#B020F0" text-anchor="middle" dominant-baseline="middle">
        ${width}x${height}
      </text>
    </svg>
  `.trim();

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

