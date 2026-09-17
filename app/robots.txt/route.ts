export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://firebirdrealty.net/sitemap.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  )
}
