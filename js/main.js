/* =========================================================
   Mirko Rocci — interactions (v3: 4 langs, consent, GA, SEO)
   ========================================================= */
(function(){
"use strict";

const $  = (s,c=document)=>c.querySelector(s);
const $$ = (s,c=document)=>[...c.querySelectorAll(s)];
const LANGS = ["it","en","es","fr"];

/* ====== CONFIG ====== */
/* Paste your GA4 Measurement ID here (e.g. "G-XXXXXXXXXX") to enable analytics.
   Leave empty to keep analytics disabled. Analytics loads ONLY after consent. */
const GA_ID = "";

/* small HTML/attr escaper */
const esc = s => String(s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
  .replace(/"/g,"&quot;").replace(/'/g,"&#39;");

/* attributi multilingua con fallback automatico all'italiano
   (così in contenuti.js basta scrivere il solo campo it:"...") */
function L(o){ const i=o.it||""; return `data-en="${esc(o.en||i)}" data-es="${esc(o.es||i)}" data-fr="${esc(o.fr||i)}"`; }
function Lhtml(o){ const i=o.it||""; return `data-en-html="${esc(o.en||i)}" data-es-html="${esc(o.es||i)}" data-fr-html="${esc(o.fr||i)}"`; }

/* =========================================================
   1. SVG COVER GENERATOR (original conceptual artwork)
   ========================================================= */
function cover(theme){
  const A="#5b8cff", B="#a06bff", G="#ffce6b";
  const wrap = (body) => `
    <svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img">
      <defs>
        <linearGradient id="bg-${theme}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a1024"/><stop offset="1" stop-color="#10081f"/></linearGradient>
        <radialGradient id="gl-${theme}" cx="0.7" cy="0.2" r="0.9"><stop offset="0" stop-color="${A}" stop-opacity=".35"/><stop offset="1" stop-color="${A}" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="400" height="250" fill="url(#bg-${theme})"/><rect width="400" height="250" fill="url(#gl-${theme})"/>
      ${body}</svg>`;
  const dots=(c,n)=>{let s="";for(let i=0;i<n;i++){const x=(i*73+40)%390+5,y=(i*131+25)%230+5,r=(((i*37)%16)/10+0.6);s+=`<circle cx="${x}" cy="${y}" r="${r.toFixed(1)}" fill="${c}" opacity="0.4"/>`;}return s;};
  const hexPts=(cx,cy,r)=>{let p=[];for(let i=0;i<6;i++){const a=Math.PI/180*(60*i-30);p.push(`${(cx+r*Math.cos(a)).toFixed(1)},${(cy+r*Math.sin(a)).toFixed(1)}`);}return p.join(" ");};
  const hexLattice=(stroke)=>{let s="";const w=34,h=30;for(let row=0;row<6;row++)for(let col=0;col<8;col++){const x=40+col*w+(row%2?w/2:0),y=50+row*h*.75;s+=`<polygon points="${hexPts(x,y,18)}" stroke="${col%2?stroke:'#5b8cff'}"/>`;}return s;};

  const T={
    super:wrap(`<g stroke="${A}" fill="none" stroke-width="1.2" opacity=".5">${[...Array(7)].map((_,i)=>`<path d="M0 ${40+i*28} C120 ${10+i*28},280 ${70+i*28},400 ${40+i*28}"/>`).join("")}</g><circle cx="90" cy="125" r="34" fill="none" stroke="${A}" stroke-width="2"/><circle cx="310" cy="125" r="34" fill="none" stroke="${B}" stroke-width="2"/><line x1="124" y1="125" x2="276" y2="125" stroke="${G}" stroke-width="2" stroke-dasharray="5 6"/><circle cx="90" cy="125" r="6" fill="${A}"/><circle cx="310" cy="125" r="6" fill="${B}"/>`),
    battery:wrap(`<rect x="150" y="95" width="90" height="60" rx="9" fill="none" stroke="${A}" stroke-width="2"/><rect x="240" y="112" width="10" height="26" rx="3" fill="${A}"/><path d="M196 105 L182 130 H198 L186 150" fill="none" stroke="${G}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><g stroke="${B}" fill="none" stroke-width="1.1" opacity=".45"><path d="M0 60 Q100 30 200 60 T400 60"/><path d="M0 195 Q100 165 200 195 T400 195"/></g>${dots(A,18)}`),
    transistor:wrap(`<rect x="60" y="150" width="80" height="44" rx="4" fill="none" stroke="${A}" stroke-width="2"/><rect x="260" y="150" width="80" height="44" rx="4" fill="none" stroke="${A}" stroke-width="2"/><path d="M140 150 C190 110 210 110 260 150" fill="none" stroke="${G}" stroke-width="3"/><rect x="178" y="60" width="44" height="34" rx="5" fill="none" stroke="${B}" stroke-width="2"/><line x1="200" y1="94" x2="200" y2="128" stroke="${B}" stroke-width="1.5" stroke-dasharray="3 4"/>${dots(A,14)}`),
    current:wrap(`<polyline points="40,200 110,200 150,70 190,200 250,200 290,120 330,200 380,200" fill="none" stroke="${A}" stroke-width="2.4" stroke-linejoin="round"/><polyline points="40,210 380,210" stroke="${B}" stroke-width="1" opacity=".4"/><path d="M150 70 V40 M290 120 V40" stroke="${G}" stroke-width="1.4" stroke-dasharray="3 4"/>${dots(B,16)}`),
    spin:wrap(`<line x1="200" y1="40" x2="200" y2="210" stroke="${A}" stroke-width="1.4" opacity=".5"/>${[0,1,2].map(i=>`<ellipse cx="200" cy="125" rx="${130-i*30}" ry="34" fill="none" stroke="${i%2?B:A}" stroke-width="1.6" opacity=".7" transform="rotate(${i*30} 200 125)"/>`).join("")}<circle cx="200" cy="125" r="9" fill="${G}"/><path d="M200 70 l8 14 h-16 z" fill="${A}"/>`),
    esaki:wrap(`<rect x="70" y="70" width="70" height="110" fill="${A}" opacity=".18"/><rect x="260" y="70" width="70" height="110" fill="${B}" opacity=".18"/><rect x="180" y="70" width="40" height="110" fill="none" stroke="${G}" stroke-width="1.5" stroke-dasharray="4 4"/><path d="M120 150 H180" stroke="${A}" stroke-width="2"/><path d="M220 100 H280" stroke="${B}" stroke-width="2"/><path d="M180 150 Q200 125 220 100" fill="none" stroke="${G}" stroke-width="2.4" stroke-dasharray="3 5"/>${dots(A,12)}`),
    oxide:wrap(`${[...Array(4)].map((_,r)=>[...Array(7)].map((_,c)=>`<circle cx="${55+c*48}" cy="${70+r*40}" r="6" fill="none" stroke="${r%2?B:A}" stroke-width="1.6"/>`).join("")).join("")}${[...Array(2)].map((_,r)=>[...Array(3)].map((_,c)=>`<circle cx="${103+c*96}" cy="${90+r*80}" r="9" fill="${G}" opacity=".85"/>`).join("")).join("")}`),
    twod:wrap(`<g stroke="${A}" stroke-width="1.5" fill="none" opacity=".85">${hexLattice(B)}</g>${dots(G,10)}`)
  };
  return T[theme]||T.super;
}

/* =========================================================
   2. RENDER
   ========================================================= */
const cur = () => LANGS.includes(document.documentElement.lang) ? document.documentElement.lang : "it";
const ext = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg>`;

/* link esterni e file (foto, PDF) in una nuova scheda; pagine e ancore del sito nella stessa */
function linkAttrs(url){
  const nuova = /^https?:\/\//i.test(url) || /^assets\//i.test(url) || /\.(pdf|jpe?g|png|webp)$/i.test(url);
  return nuova ? ` href="${url}" target="_blank" rel="noopener noreferrer"` : ` href="${url}"`;
}

/* segnaposto grafico per le news senza foto: la griglia resta regolare */
const NEWS_ICON = {
  award:`<svg viewBox="0 0 24 24" fill="none" stroke="#ffce6b" stroke-width="1.5"><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7"/></svg>`,
  conf:`<svg viewBox="0 0 24 24" fill="none" stroke="#8fb0ff" stroke-width="1.5"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>`,
  pub:`<svg viewBox="0 0 24 24" fill="none" stroke="#c4a3ff" stroke-width="1.5"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>`,
  patent:`<svg viewBox="0 0 24 24" fill="none" stroke="#6fe0cf" stroke-width="1.5"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>`,
  social:`<svg viewBox="0 0 24 24" fill="none" stroke="#ff9cc2" stroke-width="1.5"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.3"/><path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5M15 15c2.8-.3 5.2 1.3 6 4.5"/></svg>`
};
function newsKey(tag){ if(typeof NTAG==="undefined") return "conf"; return Object.keys(NTAG).find(k=>NTAG[k]===tag)||"conf"; }

/* pagina corrente (da <body data-page="...">) e link verso le sezioni della home */
const PAGE = () => (document.body && document.body.getAttribute("data-page")) || "home";
const onHome = () => PAGE()==="home";
const siteHref = h => (h.charAt(0)==="#" && !onHome()) ? "./"+h : h;
/* data-limit="3" su un contenitore: in home si mostrano solo i primi elementi */
const lim = (arr,g) => { const n=parseInt(g.getAttribute("data-limit"),10); return n>0 ? arr.slice(0,n) : arr; };

function renderNav(){
  const nav=$("#nav-links"); if(!nav||typeof NAV==="undefined") return;
  const p=PAGE();
  nav.innerHTML = NAV.map(n=>{
    const here = n.page && n.page===p;
    const cls = [n.cta?"nav-cta":"", here?"active-link":""].filter(Boolean).join(" ");
    return `<a href="${siteHref(n.href)}"${cls?` class="${cls}"`:""}${here?' aria-current="page"':""} ${L(n.t)}>${esc(n.t.it)}</a>`;
  }).join("") + `<div class="social-row social-menu">${socialHTML()}</div>`;
  const brand=$(".brand"); if(brand) brand.setAttribute("href", onHome() ? "#hero" : "./");
}
/* icone dei profili social (glifi ufficiali, 24x24, colore ereditato) */
const SOCIAL_ICON = {
  linkedin:`<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.6h.05c.53-.95 1.83-1.95 3.76-1.95C21.4 8.65 22 10.9 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2.02-3.3-2.02 0-2.33 1.57-2.33 3.2V21h-4V9z"/>`,
  facebook:`<path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/>`,
  instagram:`<path d="M12 2.2c3.2 0 3.6.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.25.07 1.65.07 4.85s-.01 3.6-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.25.06-1.65.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.17-.42-.37-1.06-.42-2.23-.06-1.25-.07-1.65-.07-4.85s.01-3.6.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.21 8.8 2.2 12 2.2zm0 5.13a4.67 4.67 0 1 0 0 9.34 4.67 4.67 0 0 0 0-9.34zm0 7.7a3.03 3.03 0 1 1 0-6.06 3.03 3.03 0 0 1 0 6.06zm5.95-7.89a1.09 1.09 0 1 1-2.18 0 1.09 1.09 0 0 1 2.18 0z"/>`,
  x:`<path d="M18.9 2H22l-7.1 8.1L23 22h-6.5l-5.1-6.7L5.5 22H2.4l7.6-8.7L1.7 2h6.7l4.6 6.1L18.9 2zm-1.1 18h1.8L7.3 3.9H5.4L17.8 20z"/>`,
  youtube:`<path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.1V8.9l5.2 3.1-5.2 3.1z"/>`
};
function socialHTML(cls){
  if(typeof SOCIAL==="undefined") return "";
  const items = SOCIAL.filter(s=>s.url && SOCIAL_ICON[s.icon]);
  if(!items.length) return "";
  return items.map(s=>
    `<a class="social-link" href="${s.url}" target="_blank" rel="noopener noreferrer me" title="${esc(s.name)}" aria-label="${esc(s.name)}">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${SOCIAL_ICON[s.icon]}</svg>
    </a>`).join("");
}
function renderSocial(){
  const html = socialHTML();
  ["#social-top","#social-foot"].forEach(sel=>{ const el=$(sel); if(el) el.innerHTML = html; });
}

function renderFooterNav(){
  const f=$("#foot-nav"); if(!f||typeof SITE_PAGES==="undefined") return;
  f.innerHTML = SITE_PAGES.map(s=>`<a href="${s.href}" ${L(s.t)}>${esc(s.t.it)}</a>`).join("");
}

function renderPublications(){
  const g=$("#pub-grid"); if(!g) return;
  g.innerHTML = lim(PUBLICATIONS,g).map(p=>`
    <article class="pub reveal tilt">
      <div class="pub-cover">${cover(p.theme)}
        <span class="pub-badge" ${L(p.role)}>${esc(p.role.it)}</span>
        <span class="pub-year">${p.year}</span>
      </div>
      <div class="pub-body">
        <div class="pub-journal">${esc(p.journal)}</div>
        <h3 class="pub-title">${esc(p.title)}</h3>
        <p class="pub-desc" ${L(p.desc)}>${esc(p.desc.it)}</p>
        <a class="pub-link" href="https://doi.org/${p.doi}" target="_blank" rel="noopener noreferrer">
          <span ${L({en:"Read on "+p.journal,es:"Leer en "+p.journal,fr:"Lire sur "+p.journal})}>Leggi su ${esc(p.journal)}</span>${ext}
        </a>
      </div>
    </article>`).join("");
}

function renderVentures(){
  const g=$("#ventures-grid"); if(!g) return;
  g.innerHTML = VENTURES.map(v=>{
    const media = v.logo
      ? `<div class="venture-logo${v.logoPlate?" plate":""}"><img src="${v.logo}" alt="${esc(v.name)}" loading="lazy"></div>`
      : `<div class="venture-badge">${esc(v.badge)}</div>`;
    return `<article class="venture reveal tilt">
      ${media}
      <div class="venture-role" ${L(v.role)}>${esc(v.role.it)}</div>
      <h3 class="venture-name">${esc(v.name)}</h3>
      <p class="venture-desc" ${Lhtml(v.desc)}>${v.desc.it}</p>
      <a class="venture-link" href="${v.url}" target="_blank" rel="noopener noreferrer">
        <span ${L({en:"Learn more",es:"Saber más",fr:"En savoir plus"})}>Scopri di più</span>${ext}
      </a>
    </article>`;
  }).join("");
}

function renderAssoc333(){
  if(typeof ASSOC333==="undefined") return;
  const logo=$("#assoc-logo"); if(logo) logo.src=ASSOC333.logo;
  const gal=$("#assoc-gallery");
  if(gal) gal.innerHTML = ASSOC333.photos.map((ph,i)=>`
    <figure class="assoc-photo reveal" style="--d:${i*0.08}s">
      <img src="${ph.src}" alt="" loading="lazy">
      <figcaption ${L(ph.cap)}>${esc(ph.cap.it)}</figcaption>
    </figure>`).join("");
  const grid=$("#assoc-grid");
  if(grid) grid.innerHTML = ASSOC333.highlights.map(h=>`
    <article class="assoc-card reveal">
      <div class="assoc-ic" data-ic="${h.icon}"></div>
      <h4 ${L(h.t)}>${esc(h.t.it)}</h4>
      <p ${L(h.d)}>${esc(h.d.it)}</p>
    </article>`).join("");
  const pg=$("#assoc-press-grid");
  if(pg && typeof ASSOC_PRESS!=="undefined") pg.innerHTML = lim(ASSOC_PRESS,pg).map(p=>pressCard(p)).join("");
}

function renderFeatured(){
  const g=$("#featured-grid"); if(!g||typeof FEATURED==="undefined") return;
  g.innerHTML = FEATURED.map(f=>{
    return `<a class="feat reveal"${linkAttrs(f.url)}>
      <div class="feat-photo"><img src="${f.img}" alt="" loading="lazy"></div>
      <div class="feat-body">
        <div class="feat-top"><span class="news-tag" ${L(f.tag)}>${esc(f.tag.it)}</span>
          <span class="feat-date" ${L(f.date)}>${esc(f.date.it)}</span></div>
        <h3 class="feat-title" ${L(f.t)}>${esc(f.t.it)}</h3>
        <p class="feat-desc" ${L(f.d)}>${esc(f.d.it)}</p>
        <span class="feat-link"><span ${L({en:"Find out more",es:"Descubre más",fr:"En savoir plus"})}>Scopri di più</span>${ext}</span>
      </div>
    </a>`;
  }).join("");
}

function renderTimeline(){
  const tl=$("#timeline"); if(!tl) return;
  tl.innerHTML = lim(TIMELINE,tl).map(t=>`
    <div class="tl reveal">
      <div class="tl-top">
        <span class="tl-range" ${L(t.range)}>${esc(t.range.it)}</span>
        <span class="tl-tag" ${L(t.tag)}>${esc(t.tag.it)}</span>
      </div>
      <div class="tl-role" ${L(t.role)}>${esc(t.role.it)}</div>
      <div class="tl-org">${esc(t.org)}</div>
      <div class="tl-place">${esc(t.place)}</div>
      <p class="tl-desc" ${L(t.desc)}>${esc(t.desc.it)}</p>
    </div>`).join("");
}

function renderAwards(){
  const ul=$("#awards-list"); if(!ul) return;
  ul.innerHTML = lim(AWARDS,ul).map(a=>{
    const txt = a.url
      ? `<a class="aw-text aw-link" href="${a.url}" target="_blank" rel="noopener noreferrer" ${L(a.t)}>${esc(a.t.it)}</a>`
      : `<span class="aw-text" ${L(a.t)}>${esc(a.t.it)}</span>`;
    const fig = a.img
      ? `<figure class="aw-figure"><img src="${a.img}" alt="${esc(a.cap?a.cap.it:'')}" loading="lazy"><figcaption ${a.cap?L(a.cap):""}>${a.cap?esc(a.cap.it):""}</figcaption></figure>`
      : "";
    return `<li class="reveal${a.img?" aw-featured":""}">
      <div class="aw-row"><span class="aw-year">${a.year}</span>${txt}</div>
      ${fig}
    </li>`;
  }).join("");
}

function pressCard(p, extra){
  const clickable = p.url && p.url !== "";
  const tag = clickable ? "a" : "div";
  const attrs = clickable ? linkAttrs(p.url) : "";
  const photo = p.img ? `<div class="press-photo"><img src="${p.img}" alt="" loading="lazy"></div>` : "";
  const arrow = clickable
    ? `<div class="press-arrow"><span ${L({en:"Open",es:"Abrir",fr:"Ouvrir"})}>Apri</span> →</div>`
    : `<div class="press-arrow press-print"><span ${L({en:"Print edition",es:"Edición impresa",fr:"Édition papier"})}>Edizione cartacea</span></div>`;
  return `<${tag} class="press reveal${p.img?" has-photo":""}"${attrs}${extra||""}>
    ${photo}
    <div class="press-body">
      <div class="press-outlet">${esc(p.outlet)}</div>
      <div class="press-year">${p.year}</div>
      <p class="press-quote" ${L(p.q)}>${esc(p.q.it)}</p>
      ${arrow}
    </div>
  </${tag}>`;
}
function renderPress(){
  const g=$("#press-grid"); if(!g) return;
  g.innerHTML = lim(PRESS,g).map(p=>pressCard(p)).join("");
}
function renderInno99(){
  const g=$("#inno99-grid"); if(!g||typeof INNO99==="undefined") return;
  g.innerHTML = lim(INNO99,g).map(p=>pressCard(p)).join("");
}

/* archivio completo della stampa (pagina stampa.html) con filtri per categoria */
const PRESS_CATS = [
  ["all",    {it:"Tutte", en:"All", es:"Todas", fr:"Toutes"}],
  ["lavoro", {it:"Scienza e lavoro", en:"Science & work", es:"Ciencia y trabajo", fr:"Science et travail"}],
  ["inno99", {it:"Inno99", en:"Inno99", es:"Inno99", fr:"Inno99"}],
  ["333",    {it:"Associazione 3:33", en:"Association 3:33", es:"Asociación 3:33", fr:"Association 3:33"}]
];
function renderPressArchive(){
  const g=$("#press-archive"); if(!g) return;
  const src=[["lavoro",typeof PRESS!=="undefined"?PRESS:[]],["inno99",typeof INNO99!=="undefined"?INNO99:[]],["333",typeof ASSOC_PRESS!=="undefined"?ASSOC_PRESS:[]]];
  const all=[]; src.forEach(([cat,arr])=>arr.forEach(p=>all.push({p,cat})));
  all.sort((a,b)=>(parseInt(b.p.year,10)||0)-(parseInt(a.p.year,10)||0)); // stabile: dentro l'anno resta l'ordine dei file
  g.innerHTML = all.map(o=>pressCard(o.p,` data-cat="${o.cat}"`)).join("");
  const bar=$("#press-filters"); if(!bar) return;
  const count={all:all.length}; all.forEach(o=>count[o.cat]=(count[o.cat]||0)+1);
  bar.innerHTML = PRESS_CATS.map(([k,t])=>`<button type="button" class="chip" data-f="${k}" aria-pressed="${k==="all"}"><span ${L(t)}>${esc(t.it)}</span><b>${count[k]||0}</b></button>`).join("");
}
function initPressFilters(){
  const bar=$("#press-filters"), g=$("#press-archive"); if(!bar||!g) return;
  const apply=k=>{
    $$(".chip",bar).forEach(c=>c.setAttribute("aria-pressed",String(c.dataset.f===k)));
    $$(".press",g).forEach(c=>{ c.hidden = k!=="all" && c.dataset.cat!==k; if(!c.hidden) c.classList.add("in"); });
  };
  bar.addEventListener("click",e=>{
    const b=e.target.closest(".chip"); if(!b) return;
    apply(b.dataset.f);
    try{ history.replaceState(null,"",location.pathname+location.search+(b.dataset.f==="all"?"":"#"+b.dataset.f)); }catch(err){}
  });
  const h=decodeURIComponent(location.hash.slice(1));
  if(PRESS_CATS.some(c=>c[0]===h && h!=="all")) apply(h);
}

function renderMarquee(){
  const track=$("#marquee-track"); if(!track||typeof INSTITUTIONS_LOGOS==="undefined") return;
  const items = INSTITUTIONS_LOGOS.map(o=>
    `<a class="marq-logo" href="${o.u}" target="_blank" rel="noopener noreferrer" title="${esc(o.n)}" aria-label="${esc(o.n)}"><img src="${o.l}" alt="${esc(o.n)}" loading="lazy"></a>`).join("");
  track.innerHTML = items + items; // duplicate for seamless loop
}

function renderNews(){
  const g=$("#news-grid"); if(!g||typeof NEWS==="undefined") return;
  g.innerHTML = NEWS.map(n=>{
    const k=newsKey(n.tag);
    const media = n.img
      ? `<div class="news-photo"><img src="${n.img}" alt="" loading="lazy"></div>`
      : `<div class="news-photo news-ph" data-k="${k}" aria-hidden="true">${NEWS_ICON[k]||NEWS_ICON.conf}</div>`;
    return `
    <article class="news reveal tilt has-photo">
      ${media}
      <div class="news-top">
        <span class="news-date" ${L(n.date)}>${esc(n.date.it)}</span>
        <span class="news-tag" ${L(n.tag)}>${esc(n.tag.it)}</span>
      </div>
      <h3 class="news-title" ${L(n.t)}>${esc(n.t.it)}</h3>
      <p class="news-desc" ${L(n.d)}>${esc(n.d.it)}</p>
      ${n.url?`<a class="news-link"${linkAttrs(n.url)}><span ${L({en:"Read",es:"Leer",fr:"Lire"})}>Leggi</span>${ext}</a>`:""}
    </article>`;}).join("");
}

function renderFaq(){
  const g=$("#faq-list"); if(!g||typeof FAQ==="undefined") return;
  const ld={"@context":"https://schema.org","@type":"FAQPage",
    "mainEntity":FAQ.map(f=>({"@type":"Question","name":f.q.it,"acceptedAnswer":{"@type":"Answer","text":f.a.it}}))};
  g.innerHTML = FAQ.map((f,i)=>`
    <details class="faq reveal"${i===0?" open":""}>
      <summary><h3 ${L(f.q)}>${esc(f.q.it)}</h3></summary>
      <p ${L(f.a)}>${esc(f.a.it)}</p>
    </details>`).join("")
    + `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g,"\\u003c")}</script>`;
}

function renderVenturesContact(){
  const el=$("#ventures-contact"); if(!el||typeof VENTURES_CONTACT==="undefined") return;
  const mails = VENTURES_CONTACT.emails.map(m=>`<a href="mailto:${m}">${m}</a>`).join("");
  el.innerHTML = `<span class="vc-label" ${L(VENTURES_CONTACT.label)}>${esc(VENTURES_CONTACT.label.it)}</span><div class="vc-mails">${mails}</div>`;
}

/* =========================================================
   INTERACTIVE MAP
   ========================================================= */
function renderMap(){
  const host=$("#map-canvas"); if(!host||typeof LOCATIONS==="undefined") return;
  const C=MAP_CROP, RL=C.lonMax-C.lonMin, RT=C.latMax-C.latMin, loc=id=>LOCATIONS.find(l=>l.id===id);
  const px=lon=>(lon-C.lonMin)/RL*100, py=lat=>(C.latMax-lat)/RT*100;
  const clAnchor=l=>[ l.cl[0]>60 ? l.cl[0] : l.cl[0]+5, l.cl[1]+6 ];

  // world background placement (full equirectangular -180..180 / -90..90)
  const wW=360/RL*100, wH=180/RT*100, wL=-(C.lonMin+180)/RL*100, wT=-(90-C.latMax)/RT*100;

  // journey arcs + connector lines (svg 0..100, non-uniform)
  let arcs="";
  MAP_ARCS.forEach((pair,i)=>{ const a=loc(pair[0]),b=loc(pair[1]); if(!a||!b) return;
    const ax=px(a.ll[0]),ay=py(a.ll[1]),bx=px(b.ll[0]),by=py(b.ll[1]);
    const mx=(ax+bx)/2, my=(ay+by)/2-Math.abs(bx-ax)*0.18;
    arcs+=`<path class="map-arc" style="--i:${i}" d="M${ax.toFixed(2)},${ay.toFixed(2)} Q${mx.toFixed(2)},${my.toFixed(2)} ${bx.toFixed(2)},${by.toFixed(2)}"/>`;
  });
  let conns="";
  LOCATIONS.forEach(l=>{ const cx=px(l.ll[0]),cy=py(l.ll[1]),a=clAnchor(l);
    conns+=`<line class="map-conn" data-id="${l.id}" x1="${cx.toFixed(2)}" y1="${cy.toFixed(2)}" x2="${a[0].toFixed(2)}" y2="${a[1].toFixed(2)}"/>`; });

  // city dots
  const dots=LOCATIONS.map(l=>`
    <button class="map-city${l.id==="laquila"?" lbl-below":""}" data-id="${l.id}" style="left:${px(l.ll[0]).toFixed(2)}%;top:${py(l.ll[1]).toFixed(2)}%" aria-label="${esc(l.city)}">
      <span class="city-pulse"></span><span class="city-dot"></span><span class="city-name">${esc(l.city)}</span>
    </button>`).join("");

  // clickable logo-chip clusters
  const clusters=LOCATIONS.map(l=>{
    const right=l.cl[0]>60;
    const pos=right?`right:${(100-l.cl[0]).toFixed(2)}%;top:${l.cl[1]}%`:`left:${l.cl[0]}%;top:${l.cl[1]}%`;
    const chips=l.insts.map(it=>{
      const inner=it.logo?`<span class="chip-logo"><img src="${it.logo}" alt="${esc(it.n)}" loading="lazy"></span>`:`<span class="chip-abbr">${esc(it.abbr||it.n)}</span>`;
      return `<a class="map-chip${it.logo?"":" is-text"}" href="${it.u}" target="_blank" rel="noopener noreferrer" title="${esc(it.n)}">${inner}<span class="chip-name">${esc(it.n)}</span></a>`;
    }).join("");
    return `<div class="map-cluster${right?" cl-right":""}" data-id="${l.id}" style="${pos}">${chips}</div>`;
  }).join("");

  host.innerHTML=`
    <div class="map-world"><img src="assets/maps/earth.jpg" alt="" style="width:${wW.toFixed(2)}%;height:${wH.toFixed(2)}%;left:${wL.toFixed(2)}%;top:${wT.toFixed(2)}%"></div>
    <div class="map-tint"></div>
    <div class="map-grid"></div>
    <svg class="map-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <g class="map-conns">${conns}</g>
      <g class="map-arcs">${arcs}</g>
    </svg>
    <div class="map-dots">${dots}</div>
    <div class="map-clusters">${clusters}</div>`;

  const setActive=id=>{
    $$(".map-city",host).forEach(c=>c.classList.toggle("active",c.dataset.id===id));
    $$(".map-cluster",host).forEach(c=>c.classList.toggle("active",c.dataset.id===id));
    $$(".map-conn",host).forEach(c=>c.classList.toggle("active",c.dataset.id===id));
  };
  $$(".map-city",host).forEach(c=>{ ["mouseenter","focus","click"].forEach(ev=>c.addEventListener(ev,()=>setActive(c.dataset.id))); });
  $$(".map-cluster",host).forEach(c=>c.addEventListener("mouseenter",()=>setActive(c.dataset.id)));
  setActive("madrid");
}

/* =========================================================
   3. LANGUAGE
   ========================================================= */
function applyLang(l){
  if(!LANGS.includes(l)) l="it";
  document.documentElement.lang=l;
  $$("[data-en]").forEach(el=>{ if(el.dataset.it===undefined) el.dataset.it=el.textContent; el.textContent = l==="it"?el.dataset.it:(el.dataset[l]||el.dataset.en||el.dataset.it); });
  $$("[data-en-html]").forEach(el=>{ if(el.dataset.itHtml===undefined) el.dataset.itHtml=el.innerHTML; el.innerHTML = l==="it"?el.dataset.itHtml:(el.dataset[l+"Html"]||el.dataset.enHtml||el.dataset.itHtml); });
  const lc=$("#lang-current"); if(lc) lc.innerHTML = l.toUpperCase()+' <span class="caret">▾</span>';
  updateMoreLabels();
  syncLangUrl(l);
  try{localStorage.setItem("mr-lang",l);}catch(e){}
}

/* URL, canonical e og:url coerenti con la lingua mostrata (hreflang: /?lang=xx) */
function syncLangUrl(l){
  const file=(location.pathname.split("/").pop()||"").replace(/^index\.html$/,"");
  const base="https://mirkorocci.it/"+file, href = l==="it" ? base : base+"?lang="+l;
  const can=document.querySelector('link[rel="canonical"]'); if(can) can.href=href;
  const og=document.querySelector('meta[property="og:url"]'); if(og) og.content=href;
  try{
    const q=new URLSearchParams(location.search);
    if(l==="it") q.delete("lang"); else q.set("lang",l);
    const qs=q.toString();
    history.replaceState(null,"",location.pathname+(qs?"?"+qs:"")+location.hash);
  }catch(e){}
}

/* show-more toggles for publications & press */
function updateMoreLabels(){
  const l=cur(), C=l.charAt(0).toUpperCase()+l.slice(1);
  $$(".more-btn").forEach(b=>{
    if(b.dataset.expanded==="1"){
      b.textContent = b.dataset["less"+C] || b.dataset.lessIt || "—";
    }else{
      b.textContent = l==="it" ? (b.dataset.it||b.textContent) : (b.dataset[l]||b.dataset.en||b.dataset.it);
    }
  });
}
function initShowMore(){
  $$(".more-btn").forEach(b=>{
    const grid = b.dataset.target ? $(b.dataset.target)
      : (b.id==="pub-more" ? $("#pub-grid") : $("#press-grid"));
    if(!grid) return;
    b.dataset.expanded="0";
    b.addEventListener("click",()=>{
      const collapsedNow = grid.classList.toggle("collapsed"); // true if still collapsed
      const expanded = !collapsedNow;
      b.dataset.expanded = expanded?"1":"0";
      if(expanded){ grid.querySelectorAll(".reveal").forEach(el=>el.classList.add("in")); }
      updateMoreLabels();
    });
  });
}
function initLang(){
  let saved="it";
  try{ const u=new URLSearchParams(location.search).get("lang"); saved=u||localStorage.getItem("mr-lang")||"it"; }catch(e){}
  applyLang(saved);
  const sw=$("#lang-switch"), btn=$("#lang-current"), menu=$("#lang-menu");
  btn.addEventListener("click",e=>{e.stopPropagation();const open=sw.classList.toggle("open");btn.setAttribute("aria-expanded",open);});
  $$("#lang-menu [data-lang]").forEach(b=>b.addEventListener("click",()=>{applyLang(b.dataset.lang);sw.classList.remove("open");btn.setAttribute("aria-expanded","false");revealNow();}));
  document.addEventListener("click",()=>{sw.classList.remove("open");btn.setAttribute("aria-expanded","false");});
}

/* =========================================================
   4. REVEAL
   ========================================================= */
let io;
function initReveal(){
  io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){const el=e.target;const sibs=[...el.parentElement.children].filter(c=>c.classList.contains("reveal"));el.style.transitionDelay=(Math.max(0,sibs.indexOf(el))*0.07)+"s";el.classList.add("in");io.unobserve(el);}});},{threshold:.1,rootMargin:"0px 0px -6% 0px"});
  $$(".reveal:not(.in)").forEach(el=>io.observe(el));
}
function revealNow(){ $$(".reveal").forEach(el=>el.classList.add("in")); }

/* =========================================================
   5. COUNTERS
   ========================================================= */
function initCounters(){
  const obs=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){count(e.target);obs.unobserve(e.target);}});},{threshold:.5});
  $$(".stat-num").forEach(el=>obs.observe(el));
}
function count(el){const target=+el.dataset.count,pre=el.dataset.prefix||"",suf=el.dataset.suffix||"",dur=1500,t0=performance.now();(function s(t){const p=Math.min((t-t0)/dur,1),e=1-Math.pow(1-p,3);el.textContent=pre+Math.round(target*e)+suf;if(p<1)requestAnimationFrame(s);})(t0);}

/* =========================================================
   6. CHROME (nav, progress, menu, spy)
   ========================================================= */
function initChrome(){
  const nav=$("#navbar"),prog=$("#scroll-progress"),toTop=$("#to-top");
  const onScroll=()=>{const y=window.scrollY;nav.classList.toggle("scrolled",y>30);const h=document.documentElement.scrollHeight-window.innerHeight;prog.style.width=(h>0?(y/h*100):0)+"%";toTop.style.opacity=y>600?"1":"0";};
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  /* --- menu mobile: drawer + backdrop + scroll lock --- */
  const menu=$("#menu-toggle"),links=$(".nav-links");
  const backdrop=document.createElement("div");
  backdrop.className="nav-backdrop";
  document.body.appendChild(backdrop);
  menu.setAttribute("aria-expanded","false");
  const setMenu=(open)=>{
    menu.classList.toggle("open",open);
    links.classList.toggle("open",open);
    backdrop.classList.toggle("show",open);
    document.body.classList.toggle("menu-open",open);
    menu.setAttribute("aria-expanded",open?"true":"false");
  };
  menu.addEventListener("click",()=>setMenu(!links.classList.contains("open")));
  backdrop.addEventListener("click",()=>setMenu(false));
  document.addEventListener("keydown",e=>{ if(e.key==="Escape") setMenu(false); });
  $$(".nav-links a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
  toTop.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  $("#year").textContent=new Date().getFullYear();
  const navMap={};$$(".nav-links a").forEach(a=>navMap[a.getAttribute("href")]=a);
  const spy=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){$$(".nav-links a").forEach(a=>a.classList.remove("active-link"));const a=navMap["#"+e.target.id];if(a)a.classList.add("active-link");}});},{rootMargin:"-45% 0px -50% 0px"});
  $$("section[id]").forEach(s=>spy.observe(s));
}

/* =========================================================
   7. PARTICLE BACKGROUND
   ========================================================= */
function initCanvas(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cv=$("#bg-canvas"),ctx=cv.getContext("2d");let w,h,dpr,parts,mouse={x:-999,y:-999};
  function resize(){dpr=Math.min(window.devicePixelRatio||1,2);w=cv.width=innerWidth*dpr;h=cv.height=innerHeight*dpr;cv.style.width=innerWidth+"px";cv.style.height=innerHeight+"px";const n=Math.min(95,Math.floor(innerWidth*innerHeight/15000));parts=[...Array(n)].map(()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.2*dpr,vy:(Math.random()-.5)*.2*dpr,r:(Math.random()*1.6+.6)*dpr}));}
  function tick(){ctx.clearRect(0,0,w,h);const link=130*dpr;for(let i=0;i<parts.length;i++){const p=parts[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;const mdx=p.x-mouse.x,mdy=p.y-mouse.y,md=Math.hypot(mdx,mdy);if(md<130*dpr){const f=(130*dpr-md)/(130*dpr)*.8;p.x+=mdx/md*f;p.y+=mdy/md*f;}ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,7);ctx.fillStyle="rgba(120,160,255,.55)";ctx.fill();for(let j=i+1;j<parts.length;j++){const q=parts[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);if(d<link){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle="rgba(91,140,255,"+(.16*(1-d/link)).toFixed(3)+")";ctx.lineWidth=dpr*.6;ctx.stroke();}}const m2=Math.hypot(p.x-mouse.x,p.y-mouse.y);if(m2<link){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(mouse.x,mouse.y);ctx.strokeStyle="rgba(160,107,255,"+(.22*(1-m2/link)).toFixed(3)+")";ctx.lineWidth=dpr*.7;ctx.stroke();}}requestAnimationFrame(tick);}
  window.addEventListener("resize",resize);window.addEventListener("mousemove",e=>{mouse.x=e.clientX*dpr;mouse.y=e.clientY*dpr;});window.addEventListener("mouseout",()=>{mouse.x=mouse.y=-999;});
  resize();tick();
}

/* =========================================================
   8. INTERACTIONS (tilt, photo, magnetic, parallax)
   ========================================================= */
function initInteractions(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  $$(".tilt").forEach(el=>{el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(800px) rotateY(${px*6}deg) rotateX(${-py*6}deg) translateY(-6px)`;});el.addEventListener("mouseleave",()=>{el.style.transform="";});});
  const photo=$(".hero-photo");
  if(photo){const frame=$(".photo-frame",photo);photo.style.perspective="900px";photo.addEventListener("mousemove",e=>{const r=photo.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;frame.style.transform=`rotateY(${px*9}deg) rotateX(${-py*9}deg)`;});photo.addEventListener("mouseleave",()=>{frame.style.transform="";});}
  $$(".btn").forEach(b=>{b.addEventListener("mousemove",e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.18}px,${(e.clientY-r.top-r.height/2)*.3-2}px)`;});b.addEventListener("mouseleave",()=>{b.style.transform="";});});
  const imgs=$$(".assoc-photo img");
  if(imgs.length){window.addEventListener("scroll",()=>{imgs.forEach(im=>{const r=im.getBoundingClientRect();const c=(r.top+r.height/2-innerHeight/2)/innerHeight;im.style.transform=`scale(1.15) translateY(${c*-18}px)`;});},{passive:true});}
}

/* =========================================================
   9. COOKIE CONSENT + GOOGLE ANALYTICS
   ========================================================= */
function loadGA(){
  if(!GA_ID || window.__gaLoaded) return; window.__gaLoaded=true;
  const s=document.createElement("script");
  s.async=true; s.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;
  document.head.appendChild(s);
  window.dataLayer=window.dataLayer||[];
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag("js",new Date());
  gtag("config",GA_ID,{anonymize_ip:true});
}
function initCookies(){
  const banner=$("#cookie-banner");
  let consent=null; try{consent=localStorage.getItem("mr-consent");}catch(e){}
  const set=v=>{try{localStorage.setItem("mr-consent",v);}catch(e){}};
  const show=()=>{banner.hidden=false;requestAnimationFrame(()=>banner.classList.add("show"));};
  const hide=()=>{banner.classList.remove("show");setTimeout(()=>banner.hidden=true,400);};
  if(consent==="granted"){ loadGA(); }
  else if(consent!=="denied"){ show(); }
  $("#cookie-accept").addEventListener("click",()=>{set("granted");hide();loadGA();});
  $("#cookie-reject").addEventListener("click",()=>{set("denied");hide();});
  const prefs=$("#cookie-prefs"); if(prefs) prefs.addEventListener("click",e=>{e.preventDefault();show();});
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded",()=>{
  renderNav();
  renderSocial();
  renderFooterNav();
  renderPressArchive();
  renderPublications();
  renderVentures();
  renderAssoc333();
  renderTimeline();
  renderAwards();
  renderPress();
  renderInno99();
  renderFeatured();
  renderMarquee();
  renderNews();
  renderFaq();
  renderVenturesContact();
  renderMap();
  initShowMore();
  initPressFilters();
  initReveal();
  initLang();
  initCounters();
  initChrome();
  initCanvas();
  initInteractions();
  initCookies();
});
})();
