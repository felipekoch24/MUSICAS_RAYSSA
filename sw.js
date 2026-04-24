self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // NÃO INTERCEPTA músicas externas
  if (url.hostname.includes("dropboxusercontent.com")) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
