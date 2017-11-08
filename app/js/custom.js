
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
            })
            $('#resizear').click(function () {
                $('.resize-block').toggleClass('open');
            })
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
            $('#getting-started').countdown('2018/01/01', function(event) {
                // var format = '%w недель %d дней %H:%M:%S';
                var format = '%H:%M:%S';
                $(this).html(event.strftime(format));

            });
        }
    }
    init.click();
    init.custom();
    init.resize();
    $(window).resize(function(){
        init.resize();
    })
});
