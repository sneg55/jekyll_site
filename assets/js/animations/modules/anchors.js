// import $ from 'jquery';
import menu from './../mobile-menu.js';

let isScrollFinished = true;

function scrollToAnchor(aTag){
    const offset = Math.ceil(aTag.offset().top);
    const scroll = Math.ceil($(window).scrollTop());

    if (aTag && isScrollFinished && offset !== scroll) {
        isScrollFinished = false;

        $({myScrollTop: window.pageYOffset}).animate({myScrollTop: offset}, {
            duration: 1000,
            easing: 'swing',
            step: function(val) {
                window.scrollTo(0, val);
            },
            complete: () => {
                isScrollFinished = true;
            }
        });
    } 
}

const scrollTo = localStorage.getItem('scrollTo');
if (scrollTo) {
    scrollToAnchor($(`*[name='${scrollTo}']`));
    localStorage.removeItem('scrollTo');
}

function goToPage(href) {
    document.location.href = href;
}

$('.mobile-menu-link.link').click(function(e) {
    e.preventDefault();
    const href = $(this).attr('data-href');
    menu.close();

    setTimeout(() => {
        goToPage(href);
    }, 1000);
});

$('.anchor-link').click(function(e) {
    e.preventDefault();

    const anchor = $(this).attr('data-href');
    const page = $(this).attr('data-page');
    const aTag = $(`*[name='${anchor}']`);
    const timeout = $('#mobile-menu').hasClass('opend')? 1100 : 0;

    if (!aTag.length && page) {
        menu.close();
        setTimeout(() => {
            localStorage.setItem('scrollTo', anchor);
            goToPage(page);
        }, timeout);
        return;
    }

    if ($('#mobile-menu').hasClass('opend')) {
        menu.close();

        setTimeout(() => {
            scrollToAnchor(aTag);
        }, timeout);
    } else {
        scrollToAnchor(aTag);
    }
});