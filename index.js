import{S as m,i as p}from"./assets/vendor-BrddEoy-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const y="46806668-35f52dba5a140225900df36e0";document.querySelector(".list");const u=new URLSearchParams({key:y,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"}),h=n=>(u.set("q",n),fetch(`https://pixabay.com/api/?${u}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.hits.map(t=>({webformatURL:t.webformatURL,largeImageURL:t.largeImageURL,tags:t.tags,likes:t.likes,views:t.views,comments:t.comments,downloads:t.downloads}))}).catch(e=>{throw e})),w=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(n,e){e.innerHTML=b(n),w.refresh()}function b(n){return n.hits.map(({webformatURL:e,largeImageURL:t,tags:s,likes:r,views:o,comments:a,downloads:g})=>`
      <li class="gallery-item hvr-grow">
        <a class="gallery-link" href="${t}">
          <img class="gallery-image" src="${e}" alt="${s}" loading="lazy">
          <figure class="gallery-figure">
            <ul class="img-content-wrapper">
              <li>Likes<span>${r}</span></li>
              <li>Views<span>${o}</span></li>
              <li>Comments<span>${a}</span></li>
              <li>Downloads<span>${g}</span></li>
            </ul>
          </figure>
        </a>
      </li>
    `).join("")}const l=document.querySelector(".search-form"),d=l.querySelector('input[name="search"]'),i=document.querySelector(".gallery"),c=document.querySelector(".loader-container");(!l||!d||!i||!c)&&console.error("One or more elements are not found in the DOM.");const q=new m(".gallery a");function S(){c.style.display="flex"}function f(){c.style.display="none"}l.addEventListener("submit",n=>{n.preventDefault();const e=d.value.trim();e.length!==0&&(S(),h(e).then(t=>{L(i,t),q.refresh(),f()}).catch(t=>{p.error({title:"Error",message:t.message}),f(),i.innerHTML=""}))});
//# sourceMappingURL=index.js.map
