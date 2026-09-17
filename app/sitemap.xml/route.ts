export async function GET() {
  const base = 'https://firebirdrealty.net'
  const now = new Date().toISOString().split('T')[0]

  const pages = [
    { url: base, priority: '1.0', changefreq: 'weekly' },
    { url: `${base}/privacy-policy`, priority: '0.3', changefreq: 'yearly' },
    { url: `${base}/terms-of-service`, priority: '0.3', changefreq: 'yearly' },
    { url: `${base}/cookie-policy`, priority: '0.3', changefreq: 'yearly' },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
