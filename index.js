const bars = document.querySelector(".bars");
const overlayParent = document.querySelector(".nav-mobile-parent");
const navMobileContainer = document.querySelector(".nav-mobile-container");

bars.addEventListener("click",(e)=>{
    bars.classList.toggle("active-bars");
    navMobileContainer.classList.toggle("translate-item");
    // overlayParent.classList.toggle("displayNone");
})