
$(document).ready(function() {
    var isActiveRew;
    var isActiveAdv;
    var isActivePhoto;
    var mySwiper;
    var isSwiperNotActiveAdv=true;
    var isSwiperNotActiveRew=true;
    var isSwiperActiveAdv=false;
    var isSwiperActiveRew=false;
    var init = {
        click:function(){
             $('#header-button').click(function(){
                $('.modal-pop').addClass('active form');
             })
            
            $('.modal-close').click(function(event) {
                $('.modal-pop').removeClass('active success form');
            });
            $('.modal-pop__form').click(function(event) {
               event.stopPropagation();
            });
            $('.modal-pop').click(function(){ $('.modal-pop').removeClass('active success form');});
            $('#hamburger').click(function(){
                $(this).toggleClass('open');
                $('#headmenu').toggleClass('open');
            });
            $('.input-default').focusout(function(){

                if($(this).val()!=''){
                    $(this).addClass('input-default_not_empty')
                }else{
                    $(this).removeClass('input-default_not_empty')
                }
            });
            $('.swiper-button-next__custom').click(function(){$('.photo-slider .swiper-button-next').click();});
            $('.swiper-button-prev__custom').click(function(){$('.photo-slider .swiper-button-prev').click();});
            $('#resizear').click(function () {
                $('.resize-block').toggleClass('open');
            });
            $('.pos a[href^="#"]').click(function(event){
                if($('#hamburger').hasClass('open')){
                  $('#hamburger').click();
                }
                test = true;
                console.log(test);
                event.preventDefault();
                var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
                console.log(target_offset);
                var customoffset = $('header').height()+20;
                function open(){
                    $("body").unbind("mousewheel", preventDefault);
                }
                function preventDefault(e) {
                    e.preventDefault();
                }
                if($('body').scrollTop()!=target_offset - customoffset)
                {

                    function close(){
                        $("body").bind("mousewheel",preventDefault);
                    }

                    close();
                    setTimeout(open,500);
                    $('html, body').animate({scrollTop: target_offset - customoffset}, 500);

                }
            });
        },
        resize:function(){
            var ww = $(window).width();
            var $grid=$('.grid');

           function photoSwiper() {
               var centered;
               var count;
               if(ww>800){
                   var centered=true;
                   var count=3;
               }else if(ww>600){
                   var centered=false;
                   var count=2;
               }else{
                   var centered=false;
                   var count=1;
               }
               if(isActivePhoto){
                   $('.photo-slider .swiper-container')[0].swiper.destroy();
               }
               mySwiper = new Swiper('.photo-slider .swiper-container', {
                   speed: 400,
                   spaceBetween: 30,
                   slidesPerView:count,
                   centeredSlides:centered,
                   loop:true,
                   autoplay: {
                       delay: 5000,
                   },
                   navigation: {
                       nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev',
                   },
               });
               isActivePhoto=true;
           }
            function reviewsSwiper(){
                if(ww>800){
                    if(isSwiperActiveRew){
                        $('.reviews-list')[0].swiper.destroy();
                        $('.reviews-list__child-block').unwrap().unwrap().removeClass('swiper-slide');
                        $('.reviews-list').removeClass('swiper-container');
                        $('.reviews-list .swiper-pagination').remove();
                        isSwiperActiveRew=false;
                    }
                    $grid.masonry({
                        itemSelector: '.grid-item',
                        gutter: '.gutter-sizer',
                    });

                    isActiveRew = true;
                    isSwiperNotActiveRew = true;
                }
                else{
                    if(isActiveRew){
                        console.log('test');
                        $grid.masonry('destroy');
                        isActiveRew = false;
                    }
                    if(isSwiperNotActiveRew){
                        $('.reviews-list__child-block').addClass('swiper-slide').wrapAll('<div class="swiper-wrapper"></div>').wrap('<div class="swiper-slide"></div>');
                        $('.reviews-list').addClass('swiper-container').append('<div class="swiper-pagination"></div>');
                        var mySwiper2 = new Swiper('.reviews .swiper-container', {
                            speed: 400,
                            slidesPerView:1,
                            loop:true,
                            autoplay: {
                                delay: 5000,
                            },
                            pagination: {
                                el: '.reviews .swiper-pagination',
                                type: 'bullets',
                                clickable:true
                            },

                        });
                        isSwiperNotActiveRew=false;
                        isSwiperActiveRew=true;
                    }
                }
            }
            function advSwiper(){
                if(ww>500){
                    if(isSwiperActiveAdv){
                        $('.advantage-list')[0].swiper.destroy();
                        $('.advantage-list__child-block').unwrap().removeClass('swiper-slide').removeAttr('style');;
                        $('.advantage-list').removeClass('swiper-container').removeAttr('style');;
                        $('.advantage-list .swiper-pagination').remove();
                        isSwiperActiveAdv=false;
                        isSwiperNotActiveAdv=true;
                    }
                }
                else{
                    if(isSwiperNotActiveAdv){
                        $('.advantage-list__child-block').addClass('swiper-slide').wrapAll('<div class="swiper-wrapper"></div>');
                        $('.advantage-list').addClass('swiper-container').append('<div class="swiper-pagination swiper-pagination__padding"></div>');
                        var mySwiper4 = new Swiper('.advantage-list.swiper-container', {

                            slidesPerView: 'auto',
                            centeredSlides: true,
                            pagination: {
                                el: '.advantage-list .swiper-pagination',
                                type: 'bullets',
                                clickable:true
                            },
                        });
                        isSwiperActiveAdv=true;
                        isSwiperNotActiveAdv=false;
                    }

                }
            }
            photoSwiper();
            advSwiper();
            reviewsSwiper();
        },
        custom:function(){
            new WOW().init();
            $('.input-default__phone').mask('+38(0ZZ) ZZZ-ZZZZ', {translation:  {'Z': {pattern: /[0-9]/, optional: true}}});
            $('#getting-started').countdown('2018/01/01', function(event) {
                time=[
                  {
                    'format':'%H',
                    'title':'час.'
                  },
                  {
                    'format':'%M',
                    'title':'мин.'
                  },
                  {
                    'format':'%S',
                    'title':'сек.'
                  },
                ];
                var format = '';
                time.forEach(function(value){
                  format = format+'<div class="countdown__item"><span class="countdown__count">'+value.format+'</span><span class="countdown__count-title">'+value.title+'</span></div>';
                });
                // var format = '<div class="countdown__item"><span class="countdown__count">%H</span><span class="countdown__count-title">ч.</span></div><div class="countdown__item"><span class="countdown__count">%M</span><span class="countdown__count-title">мин.</span></div><div class="countdown__item"><span class="countdown__count">%S</span><span class="countdown__count-title">сек.</span></div>';
                $(this).html(event.strftime(format));

            });
        },
        scroll:function(){
          var scroll = $(window).scrollTop();
          var headerHeight = $('header').height();
          function scrollMenu(headerHeight,scroll){
            var pos1=$('#pos1').offset().top - headerHeight - 50;
            var pos2=$('#pos2').offset().top - headerHeight - 50;
            var pos3=$('#pos3').offset().top - headerHeight - 50;
            var pos4=$('#pos4').offset().top - headerHeight - 50
            var pos5=$('#pos5').offset().top - headerHeight - 50;
            if(scroll<pos2){
                $('li.pos').removeClass('active');
                $('li.pos1').addClass('active');
            }else if(scroll>pos2 && scroll<pos3){
                $('li.pos').removeClass('active');
                $('li.pos2').addClass('active');
            }else if(scroll>pos3 && scroll<pos4){
                $('li.pos').removeClass('active');
                $('li.pos3').addClass('active');
            }else if(scroll>pos4 && scroll+20+$(window).height()<$('body').height() && scroll<pos5){
                $('li.pos').removeClass('active');
                $('li.pos4').addClass('active');
            }else{
                $('li.pos').removeClass('active');
                $('li.pos5').addClass('active');
            }
          }
          scrollMenu(headerHeight,scroll);
        }
    }
    init.click();
    init.custom();
    init.resize();
    $(window).resize(function(){
        init.resize();
    });
    $(window).scroll(function(){
      init.scroll();
    });
    $(".form-default").submit(function(e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        var id = $(this).data('count');
        if(!$('.input-default_secret_'+id).val()){
            // $.ajax({
            //     type: "POST",
            //     url: "../mail.php",
            //     data: form_data,
            //     success: function() {
                    
            //     }
            // });

            $('.modal-pop').addClass('active success').removeClass('form');
            $(".form-default").trigger("reset");
            $('input').removeClass('input-default_not_empty');
        }
        
        
    });
});
