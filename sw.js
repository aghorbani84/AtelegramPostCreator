self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open('tgpost-v1').then(c => c.addAll([
      'index.html',
      'manifest.json',
      'https://cdn.jsdelivr.net/fontsource/css/vazirmatn@latest/index.css'
    ]))
  );
});
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => new Response('', {status:200})))
  );
});