 window.onscroll = function () {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("top-button").style.display = "block";
     } else {
         document.getElementById("top-button").style.display = "none";
     }
 }

 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }

 function changeMenu() {
     var x = document.getElementById("myTopnav");
     if (x.className === "topnav") {
         x.className += " responsive";
     } else {
         x.className = "topnav";
     }
 }

 function changeButton(x) {
     x.classList.toggle("change");
 }

 function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("menu-button").classList.toggle("change");
 }

 function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("menu-button").classList.toggle("change");
 }
