import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fetch from 'node-fetch';

const siteUrl = 'https://solis.lighting';
const apiBaseUrl = 'https://dashboard.solis.lighting/en/api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const staticRoutes = [
  '/home',
  '/about_us',
  '/contact_us',
  '/blogs',
  '/brands',
  '/projects',
  '/careers',
];

async function fetchJson(url) {
  const res = await fetch(url);
  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    console.warn(`⚠️ Failed to parse JSON from: ${url}`);
    return null;
  }
}

async function fetchDynamicRoutes() {
  const routes = [];

  // Blogs
  const blogs = await fetchJson(`${apiBaseUrl}/blogs`);
  blogs?.data?.data.forEach((b) => routes.push(`/blog/${b.id}`));

  // Products
  const products = await fetchJson(`${apiBaseUrl}/products`);
  products?.data?.forEach((p) => routes.push(`/product/${p.id}`));

  // Jobs
  const jobs = await fetchJson(`${apiBaseUrl}/jops`);
  jobs?.data?.forEach((j) => {
    routes.push(`/jop/${j.id}`);
    routes.push(`/jop-application/${j.id}`);
  });

  // Main Categories
  const mainCats = await fetchJson(`${apiBaseUrl}/main-categories`);
  mainCats?.data?.forEach((c) =>
    routes.push(`/main-category/${c.id}/${encodeURIComponent(c.name || 'category')}`)
  );

  // Categories
  const cats = await fetchJson(`${apiBaseUrl}/categories`);
  cats?.data?.forEach((c) =>
    routes.push(`/category/${c.id}/${encodeURIComponent(c.name || 'category')}`)
  );

  // Sub Categories
  const subCats = await fetchJson(`${apiBaseUrl}/sub-categories`);
  subCats?.data?.forEach((c) =>
    routes.push(`/sub-category/${c.id}/${encodeURIComponent(c.name || 'subcategory')}`)
  );

  // Markets
  const markets = await fetchJson(`${apiBaseUrl}/markets`);
  markets?.data?.forEach((m) =>
    routes.push(`/market/${m.id}/${encodeURIComponent(m.name || 'market')}`)
  );

  // Pages
  const pages = await fetchJson(`${apiBaseUrl}/pages`);
  pages?.data?.forEach((p) => routes.push(`/${p.id}`)); // assuming it's `/:id`

  return routes;
}

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: siteUrl });
  const writeStream = createWriteStream(resolve(__dirname, 'dist', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  staticRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  });

  const dynamicRoutes = await fetchDynamicRoutes();
  dynamicRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 });
  });

  sitemap.end();
  await streamToPromise(sitemap);
  console.log(`✅ sitemap.xml created with ${staticRoutes.length + dynamicRoutes.length} routes`);
}

generateSitemap().catch(console.error);
