// core
import Section      from '../../core/section.js';
// import $ from 'jquery';

export default class FaqSection extends Section
{
    // SETUP -------------------------------------------------------------------

    _setupSection() {
        this._expands = $('.faq-expand');
        this._expandsNodes = this._el.querySelectorAll('.faq-expand');
        this.initExpands();
        this.initTabs();
        this.lastWindowWidth = window.innerWidth;
    }

    initExpands() {
        const self = this;
        this._expands.each(function() { if ($(this).hasClass('active')) self.openExpand($(this)) });

        this._expands.children('.button').on('click', e => {
            e.preventDefault();
            this.onExpandButtonClick(e.target);
        });
    }

    initTabs() {
        const selectors = {
            nav: '[data-faq-nav]',
            tabs: '[data-faq-tabs]',
            active: '.active'
        };

        const classes = {
            active: 'active'
        };

        $('a', selectors.nav).on('click', function(e) {
            const $this = $(this)[0];
            $(selectors.active, selectors.nav).removeClass(classes.active);
            $($this).addClass(classes.active);
            $('li', selectors.tabs).removeClass(classes.active);
            $($this.hash, selectors.tabs).addClass(classes.active);
            return false;
        });

        $('.faq-expand.active .button')
            .removeClass('button--blue')
            .addClass('button--green');
        $('.faq-expand.active .button .button-text').text('Hide');
    }

    onExpandButtonClick(button) {
        const expand = $(button).closest('.faq-expand');

        if (expand.hasClass('active')) {
            this.closeExpand(expand);
            if (window.innerWidth < 736)
                this.scrollToExpand(expand);
        }
        else
            this.openExpand(expand);
    }

    // STATE -------------------------------------------------------------------

    openExpand(el) {
        if (window.innerWidth > 736) {
            this.closeExpands();
        }

        const text = el.find('.faq-expand__answer').get(0);
        const textHeight = text.scrollHeight;
        text.style.height = `${textHeight}px`;

        el.addClass('active');
        el.find('.button-text').text('Hide');
        el.children('.button').removeClass('button--blue').addClass('button--green');
    }

    resize() {
        if (window.innerWidth !== this.lastWindowWidth) {
            this.lastWindowWidth = window.innerWidth;
            this.recalcHeight();
        }
    }

    recalcHeight() {
        this._expandsNodes.forEach(el => {
            if (el.classList.contains('active')) {
                this.closeExpand($(el));
                setTimeout(() => { this.openExpand($(el)); }, 500);
            }
        });
    }

    closeExpand(el) {
        const text = el.find('.faq-expand__answer').get(0);
        text.style.height = 0;

        el.removeClass('active');
        el.find('.button-text').text('Show');
        el.children('.button').removeClass('button--green').addClass('button--blue');
    }

    scrollToExpand(el) {
        const offset = el.offset().top;
        $('html,body').animate({scrollTop: offset - 100}, 500);
    }

    closeExpands() {
        [...this._expands].forEach(el => { this.closeExpand($(el)); });
    }
}