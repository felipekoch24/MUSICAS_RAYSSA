self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // 🔥 ignora tudo que não é do teu site
  if (url.origin !== location.origin) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
