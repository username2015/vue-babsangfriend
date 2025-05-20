self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  // 설치될 때 캐시할 리소스를 여기에 명시할 수 있습니다.
  event.waitUntil(
    caches.open('babsang-cache-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/vite.svg',
        '/manifest.webmanifest',
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== 'babsang-cache-v1')
          .map((name) => caches.delete(name))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
