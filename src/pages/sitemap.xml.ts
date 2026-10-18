import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const staticPages = [
    { path: '', lastmod: new Date().toISOString().split('T')[0], priority: '1.0' },
    { path: 'resume', lastmod: new Date().toISOString().split('T')[0], priority: '0.8' },
    { path: 'work', lastmod: new Date().toISOString().split('T')[0], priority: '0.7' },
  ];

  const contentPages = posts.map(post => ({
    path: `content/${post.slug}`,
    lastmod: post.data.pubDate.toISOString().split('T')[0],
    priority: '0.5',
  }));

  const allPages = [...staticPages, ...contentPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(({ path, lastmod, priority }) => {
      const url = path ? `${site}${path}/` : site;

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
