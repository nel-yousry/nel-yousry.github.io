const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
function setTheme(t){document.documentElement.dataset.theme=t;try{localStorage.setItem("nel-theme",t)}catch(e){}
$$("[data-set]").forEach(b=>b.setAttribute("aria-pressed",b.dataset.set===t));$('meta[name=theme-color]').content=t==="dark"?"#0b0b0c":"#f7f5f0"}
$$("[data-set]").forEach(b=>b.onclick=()=>setTheme(b.dataset.set));setTheme(document.documentElement.dataset.theme);
const C=CONFIG,el=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x)e.textContent=x;return e};
const grid=$("#grid"),dlg=$("#lb"),big=$("#lbimg");
C.projects.forEach(p=>{const f=el("figure","card"),b=el("button","shot");b.type="button";b.setAttribute("aria-label","تكبير صورة "+p.name);
const ph=el("span","ph",p.name),im=new Image();im.alt=p.name+" — "+p.type;im.width=800;im.height=500;im.loading="lazy";im.src="images/"+p.id+".webp";
im.onerror=()=>{im.remove();b.disabled=true};b.append(ph,im);
b.onclick=()=>{big.src=im.src;big.alt=im.alt;dlg.showModal()};
const c=el("figcaption");c.append(el("strong","en",p.name),el("span","",p.type));f.append(b,c);
if(p.url){const a=el("a","lnk","شوف الموقع ↗");a.href=p.url;a.target="_blank";a.rel="noopener noreferrer";f.append(a)}grid.append(f)});
dlg.onclick=()=>dlg.close();
const wa="https://wa.me/"+C.wa+"?text="+encodeURIComponent(C.waText),em=C.emailUser+"@"+C.emailHost;
$$("[data-wa]").forEach(a=>a.href=wa);$$("[data-mail]").forEach(a=>{a.href="mailto:"+em;if(a.dataset.mail)a.textContent=em});
$$("[data-m]").forEach(a=>a.href=C.mostaql);$$("[data-k]").forEach(a=>a.href=C.khamsat);$("#reply").textContent=C.reply;$("#yr").textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.35});
$$(".win,.rv").forEach(e=>io.observe(e));
const st=$("#steps"),fill=$("#fill");function prog(){const r=st.getBoundingClientRect(),h=innerHeight;
fill.style.transform="scaleY("+Math.max(0,Math.min(1,(h*.6-r.top)/r.height))+")"}addEventListener("scroll",prog,{passive:true});prog();
