self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("clynico-v1").then(cache => {
      return cache.addAll(["/", "/index.html", "/favicon.ico"]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
