$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');
    var iframe = $('#vimeo-player')[0];
    var player = $f(iframe);
    $('select').niceSelect();


    $('.SearchToggle').on('click',function(){
        $('.galleryFilterSearch input').toggleClass('show');
    })
    $('.Likevissiable').on('click',function(){
        $(this).toggleClass('active');
    })

    // gallery slider 
    $('.galleryPopupSlider').owlCarousel({
        loop:true,
        margin:100,
        responsiveClass:true,
        nav: true,
        navText: ["<img src='asset/img/icon/prev.png'>","<img src='asset/img/icon/next.png'>"],
        smartSpeed: 700,
        autoplay:false,
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })  
    $('.galleryMainItemImage').on('click',function(){
        $('#galleryPopup').addClass('show');
    })
    $('.galleryPopUpClose').on('click',function(){
        $('#galleryPopup').removeClass('show');
    })

    // viemo video btn function and popup
    $('.open_viemo').on('click',function(){
        player.api('play');
        $('.project_video_popup').addClass('show');
        $(this).addClass('btn_hide');
        $('.pause_viemo').addClass('btn_show');
        $('.project_info_popup').removeClass('show');
    })
    $('.pause_viemo').on('click',function(){
        player.api('pause');
        $('.project_video_popup').removeClass('show');
        $('.open_viemo').removeClass('btn_hide');
        $(this).removeClass('btn_show');
        $('.project_info_popup').removeClass('show');
    })

    $('.info_show').on('click',function(){
        player.api('pause');
        $('.project_info_popup').addClass('show');
        $(this).addClass('info_btn_hide');
        $('.info_hide').addClass('info_btn_close_show')
    })
    $('.info_hide').on('click',function(){
        $('.project_info_popup').removeClass('show');
        $(this).removeClass('info_btn_close_show');
        $('.info_show').removeClass('info_btn_hide');
    })
    
    
    // gallery slider 
    $('.profileCertificateSlider').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        nav: true,
        navText: ["<img src='asset/img/icon/prev.png'>","<img src='asset/img/icon/next.png'>"],
        smartSpeed: 700,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    })  

    $('#chatBox img').on('click',function(){
        $('.chatBoxMain').toggleClass('show');
    })


    // task1PopupMainSliderActive 
    $('.task1PopupMainSliderActive').owlCarousel({
        loop:false,
        margin:20,
        responsiveClass:true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        smartSpeed: 700,
        autoplay:false,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })

















});