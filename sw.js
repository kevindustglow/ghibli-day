// 離線快取：第一次開啟後，頁面與地圖存在手機裡，園區沒網路也能看
const V = "gp-v4";
const FILES = ["./", "index.html", "trip/", "trip/index.html",
  "maps/park.webp","maps/north.webp","maps/catroute.webp","maps/south.webp","maps/catall.webp",
  "maps/forest.webp","maps/ebus.webp","maps/east.webp","maps/west.webp","maps/all.webp","maps/lini-go.webp","maps/lini-back.webp","maps/st-fuji.webp","maps/st-park.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(V).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  // 頁面：先上網拿最新，失敗再用快取；地圖：先用快取
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(res => { caches.open(V).then(c => c.put(r, res.clone())); return res; }).catch(() => caches.match(r).then(m => m || caches.match("index.html"))));
  } else {
    e.respondWith(caches.match(r).then(m => m || fetch(r)));
  }
});
