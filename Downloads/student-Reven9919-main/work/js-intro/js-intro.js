"use strict";
(function(){
   
    const navlinks = document.querySelector("#home");
    const submenu = document.querySelector("#ul1");


    navlinks.addEventListener("click", function(){
        console.log("click")
        submenu.classList.toggle("active");
    });
})();