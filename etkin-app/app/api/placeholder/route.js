import { NextResponse } from "next/server"

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const width = searchParams.get("width") || 100
  const height = searchParams.get("height") || 100

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9" />
      <path d="M${width * 0.3},${height * 0.5} L${width * 0.7},${height * 0.5} M${width * 0.5},${height * 0.3} L${width * 0.5},${height * 0.7}" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
      <text x="50%" y="50%" font-family="sans-serif" font-size="${Math.min(width, height) * 0.1}" text-anchor="middle" dy=".3em" fill="#64748b">Placeholder</text>
    </svg>
  `

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
