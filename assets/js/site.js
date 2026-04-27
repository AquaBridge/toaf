const body=document.body,button=document.querySelector(".menu-button"),shade=document.querySelector(".shade"),search=document.querySelector("[data-search]"),links=[...document.querySelectorAll(".nav-link")];
const open=value=>{body.classList.toggle("nav-open",value);button?.setAttribute("aria-expanded",String(value))};
button?.addEventListener("click",()=>open(!body.classList.contains("nav-open")));
shade?.addEventListener("click",()=>open(false));
document.addEventListener("keydown",event=>{if(event.key==="Escape")open(false)});
search?.addEventListener("input",()=>{const query=search.value.trim().toLowerCase();links.forEach(link=>link.hidden=query&&!link.textContent.toLowerCase().includes(query))});
