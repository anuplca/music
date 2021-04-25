// BannerSlder
$(document).ready(function(){
    $(".bannerSlder").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        autoHeight: false,
    });
});

// musicSlider
$(document).ready(function(){
    $(".musicSlider").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        autoHeight: false,
    });
});

/* Bottom to top button */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 2000) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});

// sticky
window.onscroll = function() {
    myFunction()
    };
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    console.log(sticky);
    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

// Toggle
function toggle(){
  var mobileMenu = document.getElementById("navbar")
  mobileMenu.classList.toggle('active')
}