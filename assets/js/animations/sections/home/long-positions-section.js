// core
import Section      from '../../core/section.js';
import { TimelineMax, TweenLite, Power4 } from '../../tweenMax.js';
import moveByPAth from '../../modules/pathMove';
// import CustomEase from '../../modules/CustomEase';

export default class LongPositionsSection extends Section
{

    // SETUP -------------------------------------------------------------------

    _setupSection() {
        const self = this;

        /** @type {HTMLObjectElement} */
        const visual = this._el.querySelector('#long-positions__visual--mobile');

        // this event fires too early in Chrome
        visual.addEventListener('load', function() {
            self.initElements(visual.contentDocument);
        });

        if (visual.contentDocument) {
            self.initElements(visual.contentDocument);
        }
    }

    initElements(object) {
        this.goldCoin = object.getElementById('long-gold-coin');
        this.blackCoin = object.getElementById('long-black-coin');
        this.leftEye = object.getElementById('long-left-eye');
        this.rightEye = object.getElementById('long-right-eye');
        this.wheel = object.getElementById('long-wheel');

        this.longRightEyePath = object.getElementById('long-right-eye-path');
        this.longLeftEyePath = object.getElementById('long-left-eye-path');

        if (!this.goldCoin)
            return;

        this.isAnimationFinished = true;
        this.loaded = true;
        // this._activate();
    }


    // STATE -------------------------------------------------------------------

    _activate() {
        if (this.isAnimationFinished && this.loaded)
            this.startAnimation();
    }

    startAnimation() {
        this.timeline = new TimelineMax();

        TweenLite.set(this.wheel, {transformOrigin: '50% 50%'});

        const coinDuration = 1;
        const eyeDuration = 1;

        this.goldTweenForward = TweenLite.to(this.goldCoin, coinDuration, {x: -725, onStart: () => { this.rightEyeTween.restart(); }});
        this.goldTweenBackward = TweenLite.to(this.goldCoin, coinDuration, {x: -1450, onStart: () => { this.rightEyeTween.reverse(); }});
        this.blackTweenForward = TweenLite.to(this.blackCoin, coinDuration, {x: 725, onStart: () => { this.leftEyeTween.restart(); }});
        this.blackTweenBackward = TweenLite.to(this.blackCoin, coinDuration, {x: 1450, onStart: () => { this.leftEyeTween.reverse(); }, onComplete: () => {
            if (this._active) {
                setTimeout(() => {
                    this.timeline.restart();
                    this.isAnimationFinished = false;
                }, 1000);
            } else {
                this.clearTweens();
                this.isAnimationFinished = true;
            }
        }});

        this.leftEyeTween = moveByPAth(
            this.leftEye,
            this.longLeftEyePath,
            {
                duration: eyeDuration,
                // paused: true,
                ease: Power4.easeOut,
                defOptions: {autoAlpha: 1}
            }
        );

        this.rightEyeTween = moveByPAth(
            this.rightEye,
            this.longRightEyePath,
            {
                duration: eyeDuration,
                // paused: true,
                ease: Power4.easeOut,
                defOptions: {autoAlpha: 1}
            }
        );

        this.wheelTween = TweenLite.to(this.wheel, 0.75, {rotation: 360});

        this.timeline
            .add(this.goldTweenForward)
            .add(this.blackTweenForward, 0.3)
            .add(this.wheelTween, '+=0.2')
            .add('go-back', '+=0.5')
            .add(this.goldTweenBackward, 'go-back')
            .add(this.blackTweenBackward, 'go-back');
    }

    clearTweens() {
        this.timeline.kill();
        this.timeline.clear();

        this.clearParams();
    }

    clearParams() {
        TweenLite.set(
            [
                this.goldCoin,
                this.blackCoin,
                this.leftEye,
                this.rightEye,
                this.wheel,
            ],
            {clearProps: 'all'}
        );
    }
};