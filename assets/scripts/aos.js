(function() {
    var home = document.querySelector("#home");
    window.addEventListener('scroll', () => {   
        var scroll = window.scrollY;
    
        if (scroll >= 300) {
            home.classList.add("bluebg");
        } else { //only necessary if you want it to switch back on scroll-up
            home.classList.remove("bluebg");
        }
    });
})();