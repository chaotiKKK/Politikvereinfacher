/* Service Worker — Offline-Ebene für Politikvereinfacher / Die Bilanz der Republik
   Alle Pfade relativ, damit die Seite auch unter einem Unterpfad (GitHub Pages) läuft. */
const CACHE_NAME = 'bilanz-v4';
const OFFLINE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './data/history_1981_2026.json',
  './data/terminology.json'
];

const PRECACHE_ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // API-Requests: Network-first
  if (url.pathname.includes('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // JSON-Daten: Cache-first, dann Network
  if (url.pathname.endsWith('.json')) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clone);
            });
          }
          return response;
        }).catch(() => new Response(JSON.stringify({error: 'Offline'}), {status: 503}));
      })
    );
    return;
  }

  // HTML: Network-first mit Fallback
  event.respondWith(
    fetch(request).then((response) => {
      if (response.ok) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, clone);
        });
      }
      return response;
    }).catch(() => caches.match(request)).then((response) => {
      if (response) return response;
      return caches.match('./index.html');
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data.type === 'CACHE_UPDATE') {
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(event.data.assets || []);
    });
  }
});
