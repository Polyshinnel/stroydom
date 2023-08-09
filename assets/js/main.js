let diffListObj = [
    {
        href: '/carcas-house',
        img: 'assets/img/frame-list/classic.png'
    },
    {
        href: '/a-frame',
        img: 'assets/img/frame-list/a-frame.png'
    },
    {
        href: '/barn-house',
        img: 'assets/img/frame-list/barn-house.png'
    },
]

$('.diff-list li').hover(function(){
    let dataCount = $(this).attr('data-count')
    console.log(diffListObj[dataCount].href)

    $('.diff-list li').each(function(){
        $(this).removeClass('active')
    })

    $(this).addClass('active')
    $('#diff-slider-img').attr('src', diffListObj[dataCount].img)
    $('#diff-btn-link').attr('href', diffListObj[dataCount].href)
    
})


$('.tab-item').click(function(){
    $('.tab-item').each(function(){
        $(this).removeClass('tab-item_active')
    })

    $(this).addClass('tab-item_active')
    let dataTab = $(this).attr('data-tab')
    $('.tab-block').each(function(){
        $(this).removeClass('tab-block_active')
        let dataNext = $(this).attr('data-tab')
        if(dataTab == dataNext) {
            $(this).addClass('tab-block_active')
            let className = '.tab-product-carousel-'+dataTab
            console.log(className)
            $(className).owlCarousel({
                loop: true,
                nav: false,
                dots: false,
                items: 3,
                margin: 30
            })
        }
    })
})

$(document).ready(function(){
    if($('.tab-product-carousel-1').length) {
        $('.tab-product-carousel-1').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            items: 3,
            margin: 30
        });
    }
});

$('.tab-block-nav-right').on('click', function() {
    $(this).parent().parent().find('.owl-next').trigger('click');
});
$('.tab-block-nav-item-left').on('click', function() {
    $(this).parent().parent().find('.owl-prev').trigger('click');
});

$('.top-scroll-btn').click(function(){
    $('html, body').animate({scrollTop: 0}, 1600);
    return false;
});

$('.menu-btn').click(function(){
    let menuBlock = $('.header-menu')
    let visibility = menuBlock.css('display');
    if(visibility == 'none') {
        $(this).attr('src','assets/img/icons/header-cross.svg')
        menuBlock.slideToggle()
    }
})

$(document).mouseup( function(e){
    let headerMenu = $('.header-menu')
    let recallForm = $('.recall-form')
    if ( !headerMenu.is(e.target) && headerMenu.has(e.target).length === 0 ) {
        let visibility = headerMenu.css('display');
        if(visibility != 'none') {
            $('.menu-btn').attr('src','assets/img/icons/menu-btn.svg')
            headerMenu.slideUp();
        }
    }

    if ( !recallForm.is(e.target) && recallForm.has(e.target).length === 0 ) {
        let visibility = recallForm.css('display');
        if(visibility != 'none') {
            $('.recall-block').fadeOut()
        }
    }
});

$('.close-form').click(function(){
    $('.recall-block').fadeOut()
})

$('.diff-btn__green, .product-banner__btn, .recall-btn').click(function(){
    $('.recall-block').fadeIn()
})

$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$('#user-phone').mask("+7 (h99) 999-99-99");

