
var typed = new Typed(".text",{
   strings: ["Web Developer","Frontend Developer"],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
});

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{
   sections.forEach(sec =>{
       let top=window.scrollY;
       console.log("top is"+top);
       let offset=sec.offsetTop-100;
       console.log("offset is"+offset);
       let height=sec.offsetHeight;
       console.log("height is"+height);
       let id=sec.getAttribute('id')
       console.log(id);
       if(top>=offset && top< offset+height)
       {
           navlinks.forEach(links=>{
               links.classList.remove('active');
               document.querySelector('header nav a[href*='+id+']').classList.add('active');
           })
       }
   });
}

document.addEventListener("DOMContentLoaded", () => {
   const menuIcon = document.getElementById("manu-icon");
   const menu = document.querySelector(".menu");
   const menuLinks = document.querySelectorAll(".menu a");

   // Toggle menu on clicking menu icon
   menuIcon.addEventListener("click", () => {
       menu.classList.toggle("active");
   });

   // Hide menu when a menu item is clicked
   menuLinks.forEach(link => {
       link.addEventListener("click", () => {
           menu.classList.remove("active");
       });
   });
});