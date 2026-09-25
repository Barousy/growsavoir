/**
 * Configuration Next.js.
 *
 * Le site précédent renvoyait ~100 caractères de texte par page : tout était
 * construit dans le navigateur. Ici, les pages de contenu sont générées au
 * build (generateStaticParams) et servies en HTML complet. C'est la raison
 * d'être de cette reconstruction ; les en-têtes ci-dessous en découlent.
 */
/**
 * En-tête Content-Security-Policy.
 *
 * `script-src` admet 'unsafe-inline', et c'est un choix assumé. Next place ses
 * scripts d'amorçage en ligne dans chaque page : sans cette autorisation, les
 * pages rendues à la demande — le formulaire de contact, la connexion, toute la
 * console — s'affichent vides dans le navigateur, ce qui a été constaté et non
 * supposé. L'alternative, un nonce posé par un middleware, oblige Next à rendre
 * chaque page à la demande : les 143 pages de contenu perdraient leur
 * génération au build, qui est la raison d'être de cette reconstruction.
 *
 * Ce qui tient la place de cette protection :
 *   - aucun HTML brut n'est jamais injecté dans une page. Le markdown des
 *     leçons est échappé avant d'être converti (voir src/lib/markdown.ts), et
 *     les données structurées le sont aussi (src/lib/site.ts, jsonLd) ;
 *   - tout le reste est affiché par React, donc échappé par construction ;
 *   - object-src 'none', base-uri 'self' et form-action 'self' ferment les
 *     détournements qui n'ont pas besoin de script.
 *
 * Le jour où l'on autoriserait du HTML dans une leçon, il faudrait repasser au
 * nonce — et accepter le rendu à la demande.
 */
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: https:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self'",
  "script-src 'self' 'unsafe-inline'" + (process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ''),
].join('; ');

/**
 * Redirections permanentes depuis les URL de l'ancien site.
 *
 * Elles sont présentes dans l'index de Google : sans redirection, chacune
 * deviendrait une 404 et le peu d'autorité accumulée serait perdu. Les
 * matières passent des slugs anglais aux slugs français, plus pertinents pour
 * un site francophone.
 */
const SUBJECT_SLUGS = {
  arabic: 'arabe',
  french: 'francais',
  english: 'anglais',
  mathematics: 'mathematiques',
  sciences: 'sciences',
  'computer-science': 'informatique',
  aqida: 'aqida',
  fiqh: 'fiqh',
  sira: 'sira',
  'islamic-history': 'histoire',
  'personal-development': 'devperso',
};

const redirects = [
  { source: '/lessons/:slug', destination: '/lecons/:slug', permanent: true },
  { source: '/lesson/:slug', destination: '/lecons/:slug', permanent: true },
  { source: '/auth/login', destination: '/connexion', permanent: true },
  { source: '/auth/register', destination: '/inscription', permanent: true },
  { source: '/about', destination: '/a-propos', permanent: true },
  ...Object.entries(SUBJECT_SLUGS)
    .filter(([from, to]) => from !== to)
    .map(([from, to]) => ({
      source: `/catalogue/${from}`,
      destination: `/catalogue/${to}`,
      permanent: true,
    })),
  ...Object.entries(SUBJECT_SLUGS).map(([from, to]) => ({
    source: `/subject/${from}`,
    destination: `/catalogue/${to}`,
    permanent: true,
  })),
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return redirects;
  },
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy', value: csp },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
      ],
    }];
  },
};

export default nextConfig;
