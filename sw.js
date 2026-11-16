/* Cache hors ligne : on prend toujours la dernière version en ligne si possible,
   sinon la copie gardée (l'app s'ouvre même sans internet).
   Tes sons ne passent jamais ici : ils sont lus directement dans ton dossier. */
const C='sonerezh';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{
    if(res.ok&&res.type==='basic'){const copie=res.clone();caches.open(C).then(c=>c.put(r,copie)).catch(()=>{})}
    return res;
  }).catch(()=>caches.match(r,{ignoreSearch:true})));
});
