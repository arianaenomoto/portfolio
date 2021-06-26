var t=document.querySelectorAll(".gallery");t.forEach(e=>{let r=e.querySelector(".gallery__current");e.querySelectorAll(".gallery__image").forEach(l=>{l.addEventListener("click",()=>{let c=l.querySelector("picture").cloneNode(!0);r.querySelector("picture").remove(),r.appendChild(c)})})});
//# sourceMappingURL=scripts.js.map
