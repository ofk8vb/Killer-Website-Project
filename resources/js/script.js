// select the h1 element, and when it is clicked css style of h1 element is changed to red;

// $(document).ready(function() {
//     $('h1').click(function(){
//         $(this).css('background-color', '#ff0000')
//     })
// })

$(document).ready(function(){
    // sticky navigation//
    // direction means whether user is scrolling the page up or down
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            // if user scrolls down, sticky class will be added to 'nav' class element
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    },{
        // when should the above function run
            offset: '60px'
    })

    // Scroll on buttons //
    $('.js--scroll-to-plans').click(function (){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    })

    $('.js--scroll-to-start').click(function (){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    })

    /* Navigation scroll */
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated animate__fadeIn');
    },{
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated animate__fadeInUp');
    },{
        offset: '50%'
    })

    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated animate__fadeIn');
    },{
        offset: '50%'
    })

    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated animate__pulse');
    },{
        offset: '50%'
    })

    // mobile navigation
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);
         
        if(icon.hasClass('hide')){
           icon.toggleClass('hide')
        } 
         
         
     });

    $(window).resize(function(){

        var nav = $('.js--main-nav');
        
        var icon = $('.js--nav-icon i');
        
        if ($(window).width() > 767){
        
        nav.css("display", "block");
        
        icon.addClass('ion-close-round');
        
        icon.removeClass('ion-navicon-round');
        
        } else {
        
        nav.css("display", "none");
        
        icon.addClass('ion-navicon-round');
        
        icon.removeClass('ion-close-round');
        
        }
        
        });
})

