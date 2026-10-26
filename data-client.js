/* YEH v1.3.0 — cache sesi terenkripsi, berlaku 60 detik. */
(function () {
'use strict';
var pending = new Map(), slot = 'yeh.data.v1.3', ttl = 60000;
function b64(bytes) { var s=''; for(var i=0;i<bytes.length;i++) s+=String.fromCharCode(bytes[i]); return btoa(s); }
function bytes(s) { return Uint8Array.from(atob(s), function (c) { return c.charCodeAt(0); }); }
async function load(url, auth, fresh) {
 var digest = await crypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify([url,auth])));
 var id=b64(new Uint8Array(digest));
 if(pending.has(id)) return pending.get(id);
 var task=(async function(){
  var key=await crypto.subtle.importKey('raw',digest,'AES-GCM',false,['encrypt','decrypt']);
  if(!fresh) {try{
   var saved=JSON.parse(sessionStorage.getItem(slot));
   if(saved && saved.id===id && Date.now()-saved.time>=0 && Date.now()-saved.time<ttl){
    var decoded=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes(saved.iv)},key,bytes(saved.data));
    return JSON.parse(new TextDecoder().decode(decoded));
   }
  }catch(_){} }
  var control=new AbortController(), timer=setTimeout(function(){control.abort();},20000);
  try{
   var response=await fetch(url,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({nama:auth[0],sandi:auth[1]}),signal:control.signal});
   if(!response.ok) throw new Error('HTTP '+response.status);
   var result=await response.json();
   if(result&&result.ok&&result.data){try{
    var iv=crypto.getRandomValues(new Uint8Array(12));
    var encoded=await crypto.subtle.encrypt({name:'AES-GCM',iv:iv},key,new TextEncoder().encode(JSON.stringify(result)));
    sessionStorage.setItem(slot,JSON.stringify({id:id,time:Date.now(),iv:b64(iv),data:b64(new Uint8Array(encoded))}));
   }catch(_){} }else{try{sessionStorage.removeItem(slot);}catch(_){} }
   return result;
  }finally{clearTimeout(timer);}
 })();
 pending.set(id,task);
 try{return await task;}finally{pending.delete(id);}
}
window.YEHData={load:load};
})();
