import sections from "sections/sections.json";
const BASE_URL = "https://serviceautomate.com";


async function generateSiteMap() {

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/components</loc>
     </url>
    <url>
      <loc>${BASE_URL}/templates</loc>
    </url>
    <url>
     <loc>${BASE_URL}/blog</loc>
    </url>
   </urlset>
 `;
}

export async function GET() {
  const body = await generateSiteMap();

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
