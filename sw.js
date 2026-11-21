self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 네트워크 우선 패스스루 (항상 최신 앱 유지)
  event.respondWith(fetch(event.request));
});
