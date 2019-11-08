//import { TweenMax,Power1} from '../../tweenMax.js';
// import $ from 'jquery';


class MobileMenu {
    constructor(menu, btn) {
        this.menu = menu;
        this.btn = btn;

        this.leftSail = document.getElementById('mobile-menu-sail-l');
        this.rightSail = document.getElementById('mobile-menu-sail-r');
        this.list = document.getElementById('#mobile-menu-list');
        this.links = document.querySelectorAll('.mobile-menu-link');
        
        this.isOpen = false;
        this.toggleState = this.toggleState.bind(this);
        this.setupBurger();
    }

    open() {
        if(this.isOpen) 
            return;
        $('#mobile-menu').addClass('opend');
        $('.hamburger').addClass('active');
        TweenMax.to($('#mobile-menu'), 0.6, { y: 0 });
        TweenMax.to($('#mobile-menu-sail-l'), 0.6, { y: 0, delay: 0.1 });
        TweenMax.to($('#mobile-menu-sail-r'), 0.6, { y: 0, delay: 0.2 });
        TweenMax.to($('.mobile-menu-link'), 1, { y: 0, delay: 0.45, ease: Power1.easeInOut, 
            onComplete: () => {
                this.isOpen = true;
            }});
    }

    close() {
        if(!this.isOpen) 
            return;
        $('#mobile-menu').removeClass('opend');
        $('.hamburger').removeClass('active');
        TweenMax.to($('.mobile-menu-link'), 0.7, { y: '-100%', delay: 0.1, ease: Power1.easeInOut});
        TweenMax.to($('#mobile-menu-sail-l'), 0.15, { y: '-100%', delay: 0.7 });
        TweenMax.to($('#mobile-menu-sail-r'), 0.15, { y: '-100%', delay: 0.75, onComplete: () => {
            this.isOpen = false;
            this.clearProps();
        }});
    }

    clearProps() {
        TweenMax.set('#mobile-menu-list', { clearProps: 'all' });
        TweenMax.set('#mobile-menu', { clearProps: 'all' });
        TweenMax.set('#mobile-menu-sail-l', { clearProps: 'all' });
        TweenMax.set('#mobile-menu-sail-r', { clearProps: 'all' });
        TweenMax.set('#mobile-menu', { clearProps: 'all' });
        TweenMax.set('.mobile-menu-link', { clearProps: 'all' });
    }

    setupBurger() {
        this.btn.addEventListener('click', this.toggleState);
    }

    toggleState() {
        if ($('#mobile-menu').hasClass('opend')) {
            this.close();
        } else {
            this.open();
        }
    }
}

const btn = document.querySelector('.hamburger');
const menuEl = document.getElementById('#mobile-menu');

export default new MobileMenu(menuEl, btn);