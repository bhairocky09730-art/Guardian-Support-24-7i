
const SUPPORT_WHATSAPP = "91XXXXXXXXXX"; // Replace with country code + number, digits only.
const menu=document.querySelector(".menu"),nav=document.querySelector(".nav");
if(menu&&nav)menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(nav.classList.contains("open")))});
document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());
function sendSupport(message){if(SUPPORT_WHATSAPP.includes("X")){alert("Please configure SUPPORT_WHATSAPP in assets/script.js with your support WhatsApp number.");return}window.open("https://wa.me/"+SUPPORT_WHATSAPP+"?text="+encodeURIComponent(message),"_blank","noopener")}
document.querySelectorAll("[data-wa]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();sendSupport(a.dataset.message||"Hello Guardian Support, I need assistance.")}));
const form=document.querySelector("#support-form");
if(form)form.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(form);const msg=`Guardian Support enquiry\nName: ${d.get("name")}\nEmail: ${d.get("email")}\nSupport topic: ${d.get("topic")}\nMessage: ${d.get("message")}`;if(SUPPORT_WHATSAPP.includes("X")){const n=document.querySelector("#notice");n.textContent="Your enquiry is ready. Add your WhatsApp number in assets/script.js to send it to your support team.";n.classList.add("show")}else sendSupport(msg)});
