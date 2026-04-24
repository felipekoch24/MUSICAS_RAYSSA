self.addEventListener("fetch", e => {
  if(e.request.url.includes(".mp3")){
    return; // NÃO CACHEIA AUDIO
  }

  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
