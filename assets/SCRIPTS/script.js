
    document.addEventListener("DOMContentLoaded", function () {

            const hamburgerBtn = document.getElementById("hamburger-btn");
            const menuNav = document.getElementById("menu-nav");

            hamburgerBtn.addEventListener("click", function () {

                menuNav.classList.toggle("show");
            
            }); 
    });
