// core
import Section      from '../../core/section.js';
//import { TweenMax, TimelineMax, Power4, TweenLite } from '../../tweenMax.js';

export default class HistorySection extends Section
{

    // SETUP -------------------------------------------------------------------

    _setupSection() {
        this.isMobile = window.innerWidth <= 1080;
        this.initButtonMore();
        this.initCoinText();
        
        if (this.isMobile) {
            this.killTweens();
            this.clearParams();
            this.showCoins();
            return;
        }

        if (this._el.classList && this._el.classList.contains('right'))
            this.coins.reverse();

        this.hideFinished = true;
        this.startFinished = true;
        this.startShowAnimation();
        this.startHideAnimation();
    }

    resize() {
        this.clearParams();
        this._setupSection();
    }

    initCoinText() {
        const coinClassName = this._el.classList && this._el.classList.contains('right') ? 'history__coin--left' : 'history__coin--right';
        this.coins = [...this._el.querySelectorAll(`.${coinClassName}`)];
        this.texts = this._el.querySelectorAll('.coin-text-wrap');

        this.coins.forEach(coin => {
            const heading = coin.parentNode.querySelector('.coin-text');
            const text = heading && heading.textContent;
            const year = text && text.substring(text.length - 4, text.length);

            coin.querySelector('#coin-text').innerHTML = year;
        });
    }

    initButtonMore() {
        // have to decide where it should be placed
        const historyBtn = document.querySelector('#history-show');
        const coinRows = document.querySelectorAll('.hidden-row');
        const circles = document.querySelectorAll('.ellips.hidden');

        historyBtn.addEventListener('click', e => {
            e.preventDefault();

            coinRows.forEach(row => {
                if (!row.classList.contains('show'))
                    row.classList.add('show');
            });

            circles.forEach(circle => {
                if (!circle.classList.contains('show'))
                    circle.classList.add('show');
            });

            historyBtn.style.display = 'none';
        });
    }


    // STATE -------------------------------------------------------------------

    _activate() {
        if (this.hideFinished && this.startFinished && !this.isMobile)
            this.showTimeLine.restart();
    }

    _deactivate() {
        if (this.startFinished && this.hideFinished && !this.isMobile)
            this.hideTimeLine.restart();
    }

    startShowAnimation() {
        this.showTimeLine = new TimelineMax({paused: true, 
            onComplete: () => {
                this.startFinished = true;

                if (!this._active)
                    this.hideTimeLine.restart();
            },
            onStart: () => { this.startFinished = false; }
        });

        for (let i = 0; i < this.coins.length; i += 1) {
            this.showTimeLine.add(this.createShowCoinTween(i), i / 3);
        }
    }

    startHideAnimation() {
        this.hideTimeLine = new TimelineMax({paused: true, 
            onComplete: () => {
                this.hideFinished = true;

                if (this._active)
                    this.showTimeLine.restart();
            },
            onStart: () => { this.hideFinished = false; }
        });

        for (let i = 0; i < this.coins.length; i += 1) {
            this.hideTimeLine.add(this.createHideCoinTween(i), i / 3);
        }
    }

    createShowCoinTween(index = 0) {
        const onStart = () => { 
            TweenLite.fromTo(this.texts[index], 0.5, {y: 30, autoAlpha: 0}, {y: 0, autoAlpha: 1}); 
            TweenLite.set(this.coins[index], {autoAlpha: 1});
        };
        
        return this._el.classList && this._el.classList.contains('right') ?
            TweenMax.fromTo(this.coins[index], 1.3, {x: -window.innerWidth, y: -window.innerHeight / 6}, {onStart, x: 0, y: 0, ease: Power4.easeOut}) :
            TweenMax.fromTo(this.coins[index], 1.3, {x: window.innerWidth, y: -window.innerHeight / 6}, {onStart, x: 0, y: 0, ease: Power4.easeOut});
    }

    createHideCoinTween(index = 0) {
        const onStart = () => { TweenLite.fromTo(this.texts[index], 0.5, {y: 0, autoAlpha: 1}, {y: -30, autoAlpha: 0}); };

        return this._el.classList && this._el.classList.contains('right') ?
            TweenMax.fromTo(this.coins[index], 1, {x: 0, y: 0}, {onStart, x: window.innerWidth, y: window.innerHeight / 6, ease: Power4.easeIn}) :
            TweenMax.fromTo(this.coins[index], 1, {x: 0, y: 0}, {onStart, x: -window.innerWidth, y: window.innerHeight / 6, ease: Power4.easeIn});
    }

    showCoins() {
        this.coins.forEach(c => {
            TweenLite.set(c, {clearProps: 'all'});
            TweenLite.set(c, {autoAlpha: 1});
        });

        this.texts.forEach(t => {
            TweenLite.set(t, {clearProps: 'all'});
            TweenLite.set(t, {autoAlpha: 1});
        });
    }

    killTweens() {
        if (this.hideTimeLine) this.hideTimeLine.kill();
        if (this.showTimeLine) this.showTimeLine.kill();
    }

    clearParams() {
        TweenLite.set([
            ...this.coins, 
            ...this.texts,
        ], {clearProps: 'all'});
    }
}