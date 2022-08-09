if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, c) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let t = {};
    const o = (e) => n(e, a),
      r = { module: { uri: a }, exports: t, require: o };
    s[a] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-6a1bf588"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/AvsufdtR9oQL70tsLIs20/_buildManifest.js",
          revision: "d60493d96cd53a87311ab6e3a206efdd",
        },
        {
          url: "/_next/static/AvsufdtR9oQL70tsLIs20/_ssgManifest.js",
          revision: "5352cb582146311d1540f6075d1f265e",
        },
        {
          url: "/_next/static/chunks/277-f2cf1ea867d568f4.js",
          revision: "f2cf1ea867d568f4",
        },
        {
          url: "/_next/static/chunks/framework-db825bd0b4ae01ef.js",
          revision: "db825bd0b4ae01ef",
        },
        {
          url: "/_next/static/chunks/main-84fc44c91b4268d6.js",
          revision: "84fc44c91b4268d6",
        },
        {
          url: "/_next/static/chunks/pages/_app-d38971998fd7cf13.js",
          revision: "d38971998fd7cf13",
        },
        {
          url: "/_next/static/chunks/pages/_error-7397496ca01950b1.js",
          revision: "7397496ca01950b1",
        },
        {
          url: "/_next/static/chunks/pages/index-f17b759c9b794a20.js",
          revision: "f17b759c9b794a20",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-b5970c8fd8aa7fdb.js",
          revision: "b5970c8fd8aa7fdb",
        },
        {
          url: "/_next/static/css/245be494b5246db5.css",
          revision: "245be494b5246db5",
        },
        {
          url: "/favicon-16.png",
          revision: "6f5dcf3fe57ddbb36b2a31cb2b8417d1",
        },
        {
          url: "/favicon-32.png",
          revision: "fbdfc7d650c15ed8643333893857c82a",
        },
        {
          url: "/favicon-48-1.png",
          revision: "0ccb4d5f6b93359edd6de2594d9fdf38",
        },
        {
          url: "/favicon-48.png",
          revision: "0ccb4d5f6b93359edd6de2594d9fdf38",
        },
        { url: "/favicon.ico", revision: "86e732c79d02dd025c3cdd3a3e962764" },
        { url: "/icon.svg", revision: "3f8e32ee14affdf8a106610e829f0f77" },
        {
          url: "/images/icons/icon-120.png",
          revision: "c5169ecce55badc12301a4a758d0605d",
        },
        {
          url: "/images/icons/icon-128.png",
          revision: "8e741a98a9ab2e3eb96a3c113fcda049",
        },
        {
          url: "/images/icons/icon-144.png",
          revision: "f3211c599f75c7aa0291c8289474e62d",
        },
        {
          url: "/images/icons/icon-152.png",
          revision: "57729133a537073dbdfa84d0a0f336c6",
        },
        {
          url: "/images/icons/icon-180.png",
          revision: "d22b437d22d56718f5ac930dead7aedd",
        },
        {
          url: "/images/icons/icon-192.png",
          revision: "ebf9c309367be30fd83130a14584f0d2",
        },
        {
          url: "/images/icons/icon-384.png",
          revision: "be6476fae211a136527d09f4ec4b302b",
        },
        {
          url: "/images/icons/icon-512.png",
          revision: "cb5d1c65fd84f19f1fa84eb51a0420f1",
        },
        {
          url: "/images/icons/icon-72.png",
          revision: "c253f4bcd8eabe05a8410d34070b9323",
        },
        {
          url: "/images/icons/icon-96.png",
          revision: "7226873b57a45632d4097b9a8afac47c",
        },
        { url: "/logo192.png", revision: "4741b39e85e49af9175f6f73d2e3d0da" },
        { url: "/manifest.json", revision: "b851d3e413b4d55c96c91492232b11d2" },
        { url: "/robots.txt", revision: "35adcdeb7766e2f40b1bf03e2534c8b2" },
        {
          url: "/touch-icon-ipad.png",
          revision: "2251f3fa4209a2c6f7c721ee7ee25eb0",
        },
        {
          url: "/touch-icon-iphone-retina.png",
          revision: "66fa00830d1a5c59163c72f61cad28c9",
        },
        {
          url: "/touch-icon-start-up-320x480.png",
          revision: "66fa00830d1a5c59163c72f61cad28c9",
        },
        { url: "/vercel.svg", revision: "4b4f1876502eb6721764637fe5c41702" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
