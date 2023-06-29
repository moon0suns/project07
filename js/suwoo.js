$(function () {

    // 메뉴바 
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on')
    });


    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        // 💫스와이퍼
        parallax: true,
        speed: 800,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
        on: {
            slideChangeTransitionStart: function () {
                $('.main_visual .dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });


    $('.main_visual .dots li').on('click', function () {
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        mainSlide.slideTo(idx);
    })


    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });

    $('.main_content .itm').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
    })



    // up
    $(function () {
        $('.to_top').on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500)
        });
    });

    // fade
    $(window).on('scroll', function () {
        // 변수에 스크롤한 양을 저장
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 300) {
            // 스크롤 내린만큼 오면 나타나기
            $('.to_top').addClass('on');
        } else {
            $('.to_top').removeClass('on');
        }
    });


});