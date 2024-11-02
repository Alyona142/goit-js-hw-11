import{S as u}from"./assets/vendor-D4XaRDRG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const y="46806668-35f52dba5a140225900df36e0";document.querySelector(".list");const i=new URLSearchParams({key:y,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"}),h=n=>(i.set("q",n),fetch(`https://pixabay.com/api/?${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return e.hits.map(r=>({webformatURL:r.webformatURL,largeImageURL:r.largeImageURL,tags:r.tags,likes:r.likes,views:r.views,comments:r.comments,downloads:r.downloads}))}).catch(e=>{throw e})),p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(n,e){e.innerHTML=w(n),p.refresh()}function w(n){return!n.hits||!Array.isArray(n.hits)?(console.error("Invalid data format:",n),""):n.hits.map(({webformatURL:e,largeImageURL:r,tags:s,likes:t,views:o,comments:a,downloads:m})=>`
      <li class="gallery-item hvr-grow">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${e}" alt="${s}" loading="lazy">
          <figure class="gallery-figure">
            <ul class="img-content-wrapper">
              <li>Likes<span>${t}</span></li>
              <li>Views<span>${o}</span></li>
              <li>Comments<span>${a}</span></li>
              <li>Downloads<span>${m}</span></li>
            </ul>
          </figure>
        </a>
      </li>
    `).join("")}const f=document.querySelector(".search-form"),L=f.querySelector('input[name="search"]'),l=document.querySelector(".gallery"),d=document.querySelector(".loader-container"),b=new u(".gallery a");function q(){d.style.display="flex"}function c(){d.style.display="none"}f.addEventListener("submit",n=>{n.preventDefault();const e=L.value.trim();e.length!==0&&(q(),h(e).then(r=>{Array.isArray(r)&&r.length>0?(g(r,l),b.refresh()):(console.warn("Немає зображень для цього запиту"),iziToast.info({title:"Info",message:"No images found for your search query."}),l.innerHTML=""),c()}).catch(r=>{console.error("Помилка при завантаженні зображень:",r),c(),l.innerHTML=""}))});
//# sourceMappingURL=index.js.map
