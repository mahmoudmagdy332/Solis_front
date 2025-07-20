const routes = [
  { path: '/', exact: true, component: 'Home' },
  { path: '/home', component: 'Home' },
  { path: '/market', component: 'Markets' },
  { path: '/market/:id/:title', component: 'Market' },
  { path: '/contact_us', component: 'Contact' },
  { path: '/about_us', component: 'About' },
  { path: '/blogs', component: 'Blog' },
  { path: '/brands', component: 'Brands' },
  { path: '/products/:id', component: 'ProductDetails' },
  { path: '/jop/:id', component: 'SingleJop' },
  { path: '/jop-application/:id', component: 'JopApplication' },
  { path: '/main-category/:id/:name', component: 'Products' },
  { path: '/category/:id/:name', component: 'Category' },
  { path: '/sub-category/:id/:name', component: 'SubCategory' },
  { path: '/product/:id', component: 'Product' },
  { path: '/not-found', component: 'NotFound' },
  { path: '/projects', component: 'Boutiques' },
  { path: '/careers', component: 'Careers' },
  { path: '/blog/:id', component: 'BlogDetails' },
  { path: '/:id', component: 'Page' },
  { path: '*', component: 'NotFound' },
];

// module.exports = routes;
export default routes;
