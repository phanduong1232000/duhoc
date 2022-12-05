$(document).ready(function(){
    // Collap Main NAv.
    $('.show-nav, .close-nav').on('click', function(){
        $('.header-nav-wrap').toggleClass('header-nav-wrap-active');
    });
    // Toggle Icon.
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $('.header').addClass('header-fixed');
            $('body').addClass('body-padding');
            $('.icon-back-top').addClass('icon-back-top-active');
        }
        else{
            $('.header').removeClass('header-fixed');
            $('body').removeClass('body-padding');
            $('.icon-back-top').removeClass('icon-back-top-active');
        } 
    });   
    // Back Top.
    $('.icon-back-top').click(function(){
        $('body,html').animate({scrollTop:0},'fast');
    });

    // Collap menu category product.
    $('.collap-cat-pro').on('click', function(){
        $(this).toggleClass('collap-cat-pro-active');
        $('.sidebar-pro-cat-content>ul>li:nth-child(n+7)').stop().slideToggle('fast');
    });

    // Toggle menu category product sidebar.
    $('.sidebar-item-content-nav ul li a i').on('click', function(){
        $(this).parent().parent().next().stop().slideToggle();
        return false;
    });

    // Tab du an.
    $('.tax-tab-item:not(:first)').hide();
    $('.tax-nav-wrap a').click(function(){
        $('.tax-nav-wrap a').removeClass('tax-nav-item-active');
        $(this).addClass('tax-nav-item-active');
        $('.tax-tab-item').hide();
        var activeTab = $(this).attr('href');
        $(activeTab).fadeIn();
        return false;
    });

    // Owl hd.
    $(".owl-hd").owlCarousel({
        loop:true,
        nav:true,
        margin:3,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            620:{
                items:2
            },
            900:{
                items:3
            },
            1190:{
                items:3
            }
        }
    });
    $(".owl-new-simple").owlCarousel({
            autoplay: true,
            items : 1,
            nav:true,
            loop:true,
            singleItem : true,
        });
    // Owl customer.
    $(".owl-customer").owlCarousel({
        loop:true,
        nav:true,
        margin:25,
        responsiveClass:true,
        responsive:{
            0:{
                items:2
            },
            620:{
                items:3
            },
            900:{
                items:4
            },
            1190:{
                items:6
            }
        }
    });
});
