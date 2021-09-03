var menuBtn = document.getElementById("menu__btn");

menuBtn.addEventListener("click", function(){
    document.getElementById("shape").classList.toggle("toggleClassShape");
    document.getElementById("mobile__navbar__container").classList.toggle("toggleClass");
    
})