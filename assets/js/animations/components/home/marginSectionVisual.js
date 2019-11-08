//import { TweenMax, TweenLite, TimelineMax, Power1, Power4 }    from '../../tweenMax.js';

/**
 * @typedef {Object} target
 * @property {string} id 
 * @property {Object} animation 
 */

/**
 * @param {DOMNode} el 
 * @param {target[]} targets 
 */
export default class MarginVisual {
    constructor(el, targets) {
        this.element = el;
        this.targets = targets;
        this.isAtcive = false;

        this.tweens = [];

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onComplete = this.onComplete.bind(this);
        this.killTweens = this.killTweens.bind(this);

        this._setup();
    }

    _setup() {
        if (this.element) {
            this.element.addEventListener('mouseover', e => { this.onMouseOver(e) });
            this.element.addEventListener('mouseleave', e => { this.onMouseLeave(e) });
        }
    }

    onMouseOver() {
        this.isAtcive = true;
        
        this.targets.forEach(target => {
            const { contentDocument } = this.element;
            this.startAnim(contentDocument.getElementById(target.id), target.animation);
        });
    }

    startAnim(el, animation) {
        if (el && this.tweens.length !== this.targets.length)
            this.tweens.push(TweenMax.to(el, animation.duration, {...animation.settings, onComplete: () => { this.onComplete(animation.settings.delay) }}));
    }

    onComplete(delay) {
        if (this.isAtcive)
            this.tweens.forEach(t => { 
                setTimeout(() => { t.restart(); }, (delay || 0) * 1000)
            });
        else 
            this.killTweens();
    }

    onMouseLeave() {
        this.isAtcive = false;
    }

    killTweens() {
        this.tweens.forEach(t => { 
            t.kill(); 
        });
        this.tweens.length = 0;
    }
}