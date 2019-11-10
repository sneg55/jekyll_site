//import { TweenMax } from '../../tweenMax.js';

export default class InViewElement {
    constructor(el, settings) {
        this.el = el;
        this.presentSettings = settings && settings.presentSettings;
        this.hideSettings = settings && settings.hideSettings;
    }

    present() {
        if (!this.presentSettings)
            return;

        const { duration, fromX, fromY, toX, toY, fromOpacity, toOpacity, delay, ease } = this.presentSettings;
        this.presentTween = TweenMax.fromTo(this.el, duration || 1, {x: fromX, y: fromY, autoAlpha: fromOpacity}, {x: toX, y: toY, autoAlpha: toOpacity, delay, ease});
    }

    hide() {
        if (!this.hideSettings)
            return;

        const { duration, fromX, fromY, toX, toY, fromOpacity, toOpacity, delay, ease } = this.hideSettings;
        this.hideTween = TweenMax.fromTo(
            this.el,
            duration || 1,
            {x: fromX, y: fromY, autoAlpha: fromOpacity},
            {x: toX, y: toY, autoAlpha: toOpacity, delay, ease, onComplete: () => {
                // this.clearTweens();
            }}
        );
    }

    clearTweens() {
        this.presentTween.kill();
        this.hideTween.kill();

        TweenMax.set(this.el, {clearProps: 'all'});
    }
}