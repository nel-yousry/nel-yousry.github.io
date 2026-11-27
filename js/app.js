const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function setTheme(t){document.documentElement.dataset.theme=t;try{localStorage.setItem("nel-theme",t)}catch(e){}
$$("[data-set]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.set===t));$('meta[name=theme-color]').content=t==="dark"?"#0b0b0c":"#f7f5f0"}
$$("[data-set]").forEach(b=>b.onclick=()=>setTheme(b.dataset.set));setTheme(document.documentElement.dataset.theme);
const C=CONFIG,el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e};
const grid=$("#grid"),dlg=$("#lb"),big=$("#lbimg");
function paint(){
const en=LANG==="en";grid.textContent="";
C.projects.forEach(p=>{const ty=en?(p.typeEn||p.type):p.type,f=el("figure","card"),b=el("button","shot");b.type="button";b.setAttribute("aria-label",(en?"Enlarge ":"تكبير صورة ")+p.name);
const ph=el("span","ph",p.name),im=new Image();im.alt=p.name+" — "+ty;im.width=800;im.height=500;im.loading="lazy";im.src="images/"+p.id+".webp";
im.onerror=()=>{im.remove();b.disabled=true};b.append(ph,im);
b.onclick=()=>{big.src=im.src;big.alt=im.alt;dlg.showModal()};
const c=el("figcaption");c.append(el("strong","en",p.name),el("span","",ty));f.append(b,c);
if(p.url){const a=el("a","lnk",t("view_sample"));a.href=p.url;a.target="_blank";a.rel="noopener noreferrer";f.append(a)}grid.append(f)});
$("#reply").textContent=en?(C.replyEn||C.reply):C.reply}
paint();
document.addEventListener("nel:lang",paint);
dlg.onclick=()=>dlg.close();
const wa="https://wa.me/"+C.wa+"?text="+encodeURIComponent(C.waText),em=C.emailUser+"@"+C.emailHost;
$$("[data-wa]").forEach(a=>a.href=wa);$$("[data-mail]").forEach(a=>{a.href="mailto:"+em});
$$("[data-m]").forEach(a=>a.href=C.mostaql);$$("[data-k]").forEach(a=>a.href=C.khamsat);$("#yr").textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.35});
$$(".win,.rv").forEach(e=>io.observe(e));
const st=$("#steps"),fill=$("#fill");function prog(){const r=st.getBoundingClientRect(),h=innerHeight;
fill.style.transform="scaleY("+Math.max(0,Math.min(1,(h*.6-r.top)/r.height))+")"}addEventListener("scroll",prog,{passive:true});prog();

/* hero scene parallax: subtle depth on pointer + scroll, off for reduced motion */
(function(){
  var s=document.querySelector('.scene');
  if(!s||!window.matchMedia)return;
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(rm.matches)return;
  var tx=0,ty=0,raf=0;
  function apply(){raf=0;s.style.setProperty('--px',tx.toFixed(2));s.style.setProperty('--py',ty.toFixed(2));}
  function queue(){if(!raf)raf=requestAnimationFrame(apply);}
  window.addEventListener('pointermove',function(e){
    if(e.pointerType==='touch')return;
    var r=s.getBoundingClientRect();
    var cx=(e.clientX-(r.left+r.width/2))/Math.max(1,window.innerWidth/2);
    var cy=(e.clientY-(r.top+r.height/2))/Math.max(1,window.innerHeight/2);
    tx=-Math.max(-1,Math.min(1,cx))*1.4;
    ty=-Math.max(-1,Math.min(1,cy))*1.0;
    queue();
  },{passive:true});
  window.addEventListener('scroll',function(){
    var r=s.getBoundingClientRect();
    var p=(window.innerHeight/2-(r.top+r.height/2))/window.innerHeight;
    ty=Math.max(-1,Math.min(1,p))*-1.2;
    queue();
  },{passive:true});
})();
