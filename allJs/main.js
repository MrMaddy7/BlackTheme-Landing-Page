(function($){
    "use strict";
    
    // Menu JS
    /*==============================================================*/
    $('.navbar .navbar-nav li a, .main-banner .btn, .ctr-area .btn, .welcome-area .link-btn').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 50);
        e.preventDefault();
    });

    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });
    
    $('.navbar .navbar-nav li a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    /* Header Sticky
    ========================================================*/
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 50){  
            $('.header-sticky').addClass("is-sticky");
        }
        else {
            $('.header-sticky').removeClass("is-sticky");
        }
    });
    
    /* Home Slides
    ========================================================*/
    $('.home-slides').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        nav:true,
        margin: 30,
        responsiveClass:true,
        dots:false,
        autoplayHoverPause:true,
        mouseDrag:true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
    });
    $(".home-slides").on("translate.owl.carousel", function(){
        $(".main-banner h4").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
        $(".main-banner h1").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
        $(".main-banner p").removeClass("animate__animated animate__zoomIn").css("opacity", "0");
        $(".main-banner .btn").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
    });
    $(".home-slides").on("translated.owl.carousel", function(){
        $(".main-banner h4").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
        $(".main-banner h1").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
        $(".main-banner p").addClass("animate__animated animate__zoomIn").css("opacity", "1");
        $(".main-banner .btn").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
    });
    
    // Team Slider
    /*==============================================================*/
    $('.team-slider').owlCarousel({
        loop: true,
        autoplay:false,
        nav: false,
        margin: 30,
        mouseDrag: true,
        autoplayHoverPause: false,
        responsiveClass: true,
        dots: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });
    
    // Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
    
    // Shorting
    /*==============================================================*/
    try {
        var mixer = mixitup('.shorting', {
            controls: {
                toggleDefault: 'none'
            }
        });
    } catch (err) {}
    
    /* Zoom Gallery
    ========================================================*/
    $('.popup-btn').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });
    
    /* Popup Video
    ========================================================*/
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    
    /* Ripple Effect
    ========================================================*/
    $('.ripple-effect, .ripple-playing').ripples({
        resolution: 512,
        dropRadius: 25,
        perturbance: 0.04,
    });
    
    
    /* Text Animation
    ========================================================*/
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
    
    /* WOW JS
    ========================================================*/
    new WOW().init();
    
    // Blog Slider
    /*==============================================================*/
    $('.blog-slider').owlCarousel({
        loop: true,
        autoplay:true,
        nav: false,
        margin: 30,
        mouseDrag: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        dots: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1200:{
                items:3,
            }
        }
    });
    
    // Partner Slider
    /*==============================================================*/
    $('.partner-slider').owlCarousel({
        loop: true,
        autoplay:true,
        nav: false,
        margin: 30,
        mouseDrag: true,
        autoplayHoverPause: true,
        responsiveClass: true,
        dots: true,
        navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:4,
            },
            1200:{
                items:6,
            }
        }
    });
    
    /* Practicle JS One
    ========================================================*/
    if(document.getElementById("particles-js")) particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 50, "density": {
                    "enable": true, "value_area": 800
                }
            }
            , "color": {
                "value": "#ffffff"
            }
            , "shape": {
                "type": "circle", "stroke": {
                    "width": 0, "color": "#000000"
                }
                , "polygon": {
                    "nb_sides": 5
                }
                , "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            }
            , "opacity": {
                "value": 0.5, "random": false, "anim": {
                    "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
                }
            }
            , "size": {
                "value": 5, "random": true, "anim": {
                    "enable": false, "speed": 40, "size_min": 0.1, "sync": false
                }
            }
            , "line_linked": {
                "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
            }
            , "move": {
                "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 1200
                }
            }
        }
        , "interactivity": {
            "detect_on": "canvas", "events": {
                "onhover": {
                    "enable": true, "mode": "repulse"
                }
                , "onclick": {
                    "enable": true, "mode": "push"
                }
                , "resize": true
            }
            , "modes": {
                "grab": {
                    "distance": 400, "line_linked": {
                        "opacity": 1
                    }
                }
                , "bubble": {
                    "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
                }
                , "repulse": {
                    "distance": 200
                }
                , "push": {
                    "particles_nb": 4
                }
                , "remove": {
                    "particles_nb": 2
                }
            }
        }
        , "retina_detect": true, "config_demo": {
            "hide_card": false, "background_color": "#b61924", "background_image": "", "background_position": "50% 50%", "background_repeat": "no-repeat", "background_size": "cover"
        }
    });

    /* Particles Js two
    ========================================================*/
    if(document.getElementById("particles-js-two")) particlesJS("particles-js-two", {
        "particles": {
            "number": {
                "value":200, "density": {
                    "enable": true, "value_area": 800
                }
            }
            , "color": {
                "value": "#fff"
            }
            , "shape": {
                "type":"circle", "stroke": {
                    "width": 0, "color": "#000000"
                }
                , "polygon": {
                    "nb_sides": 5
                }
                , "image": {
                    "src": "img/github.svg", "width": 100, "height": 100
                }
            }
            , "opacity": {
                "value":0.5, "random":true, "anim": {
                    "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
                }
            }
            , "size": {
                "value":10, "random":true, "anim": {
                    "enable": false, "speed": 40, "size_min": 0.1, "sync": false
                }
            }
            , "line_linked": {
                "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2
            }
            , "move": {
                "enable":true, "speed":6, "direction":"bottom", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
                    "enable": false, "rotateX": 600, "rotateY": 1200
                }
            }
        }
        , "interactivity": {
            "detect_on":"canvas", "events": {
                "onhover": {
                    "enable": true, "mode": "bubble"
                }
                , "onclick": {
                    "enable": true, "mode": "repulse"
                }
                , "resize":true
            }
            , "modes": {
                "grab": {
                    "distance":400, "line_linked": {
                        "opacity": 0.5
                    }
                }
                , "bubble": {
                    "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3
                }
                , "repulse": {
                    "distance": 200, "duration": 0.4
                }
                , "push": {
                    "particles_nb": 4
                }
                , "remove": {
                    "particles_nb": 2
                }
            }
        }
        , "retina_detect":true
    });
    
    /* Go To Top
    ========================================================*/
    $(function(){
        //Scroll event
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 300) $('.go-top').fadeIn('slow');
            if (scrolled < 300) $('.go-top').fadeOut('slow');
        });  
        //Click event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
        // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });

    function callbackFunction (resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub(){
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub(){
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg){
        if(valid){
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // Page Loader
    /*==============================================================*/
    jQuery(window).on('load', function() {
        $('.preloader').fadeOut();
    });
    
}(jQuery));
