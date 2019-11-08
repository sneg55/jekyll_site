// core
import Section      from '../../core/section.js';
//import { TweenMax, TimelineMax, TweenLite, Power1, Power0 } from '../../tweenMax.js';
import moveByPAth from '../../modules/pathMove';
// import CustomEase from '../../modules/CustomEase';

export default class ShortPositionsSection extends Section
{
    // SETUP -------------------------------------------------------------------

    _setupSection() {
        const self = this;

        /** @type {HTMLObjectElement} */
        const visual = document.getElementById('short-positions-visual');

        // this event fires too early in Chrome
        visual.addEventListener('load', function() {
            self.initElements(visual.contentDocument);
        });

        if (visual.contentDocument) {
            this.initElements(visual.contentDocument);
        }
    }

    initElements(object) {
        this.goldCoin1      = object.getElementById('sp-gc1');
        this.goldCoin2      = object.getElementById('sp-gc2');
        this.blackCoin1     = object.getElementById('sp-bc1');
        this.blackCoin2     = object.getElementById('sp-bc2');
        this.wheel          = object.getElementById('sp-wheel');
        this.leftArrow      = object.getElementById('sp-left-button');
        this.rightArrow     = object.getElementById('sp-right-button');
        this.leftEye        = object.getElementById('sp-left-eye');
        this.rightEye       = object.getElementById('sp-right-eye');
        this.circleRight    = object.getElementById('arrow-circle-right');
        this.circleLeft     = object.getElementById('arrow-circle-left');
        this.strokes        = object.querySelectorAll('.box-stroke');

        this.lenderPath     = object.getElementById('sp-lender-path');
        this.leftWheelPath  = object.getElementById('sp-left-wheel-path');
        this.rightWheelPath = object.getElementById('sp-right-wheel-path');
        this.rightPath      = object.getElementById('sp-right-path');
        this.leftEyePath    = object.getElementById('sp-left-eye-path');

        TweenLite.set(
            this.strokes,
            {'stroke-dasharray': 40, 'stroke-dashoffset': -40}
        );

        if (!this.goldCoin1)
            return;

        this.isAnimationFinished = true;

        this.loaded = true;
        // this._activate();
    }

    // STATE -------------------------------------------------------------------

    _activate() {
        if (this.isAnimationFinished)
            this.startAnimation();
    }

    startAnimation() {
        this.isAnimationFinished = false;

        this.timeline = new TimelineMax();
        this.strokesTl = new TimelineMax({repeat: -1, repeatDelay: 0.9666, ease: Power0.easeNone});
        TweenLite.set(this.wheel, {transformOrigin: '50% 50%'});

        const coinSpeed = 0.8;
        const eyeSpeed = 0.3;
        const restartDelay = 2000;

        // ======== COINS TWEENS

        this.blackCoin2LenderTween = moveByPAth(
            this.blackCoin2,
            this.lenderPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => {
                    TweenLite.set(this.blackCoin2, {autoAlpha: 1});
                    TweenLite.set(this.rightEye, {clearProps: 'all'});
                    TweenLite.to(this.rightEye, eyeSpeed, {y: 10});
                }
            },
            true
        );

        this.goldCoin1LeftWheelTween = moveByPAth(
            this.goldCoin1,
            this.leftWheelPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => {
                    this.leftEyeTween.restart();
                    TweenLite.set(this.goldCoin1, {autoAlpha: 1});
                    setTimeout(() => { this.wheelTween.restart(); }, coinSpeed * 1000 - 200);
                },
                onComplete: () => { this.leftEyeTween.pause(); }
            }
        );

        this.wheelTween = TweenLite.to(this.wheel, 1, {rotation: -360, paused: true});

        this.goldCoin1rightWheelTween = moveByPAth(
            this.goldCoin1,
            this.rightWheelPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => { this.leftEyeTween.resume(); }
            }
        );

        this.goldCoin2rightTween = moveByPAth(
            this.goldCoin2,
            this.rightPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => {
                    TweenLite.set(this.goldCoin2, {autoAlpha: 1});
                    TweenLite.to(this.rightEye, eyeSpeed, {y: '+=5', x: '+=5'});

                    setTimeout(() => {
                        TweenLite.to(this.rightEye, eyeSpeed, {y: '-=8', x: '-=9'});
                    }, 200);
                }
            },
            true
        );

        this.blackCoin2rightTween = moveByPAth(
            this.blackCoin2,
            this.rightPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => {
                    TweenLite.to(this.rightEye, eyeSpeed + 0.5, {y: '+=5', x: '+=6'});
                }
            }
        );

        this.blackCoin2rightTweenReversed = moveByPAth(
            this.blackCoin2,
            this.rightPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => {
                    TweenLite.to(this.rightEye, 0.2, {y: '+=15'});
                    setTimeout(() => {
                        TweenLite.to(this.rightEye, eyeSpeed, {y: '-=5', x: '-=6'});
                    }, 200);
                }
            },
            true
        );

        this.goldCoin1RightWheelTweenReversed = moveByPAth(
            this.goldCoin1,
            this.rightWheelPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => {
                    TweenLite.set(this.goldCoin1, {autoAlpha: 1});
                    this.leftEyeBackTween.restart();
                    this.wheelTween.restart();
                },
                onComplete: () => { this.leftEyeBackTween.pause(); }
            },
            true
        );

        this.goldCoin1LeftWheelTweenReversed = moveByPAth(
            this.goldCoin1,
            this.leftWheelPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => { this.leftEyeBackTween.resume(); }
            },
            true
        );

        this.blackCoin2RightWheelTween = moveByPAth(
            this.blackCoin2,
            this.rightWheelPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut
            },
            true
        );

        this.blackCoin2LeftWheelTween = moveByPAth(
            this.blackCoin2,
            this.leftWheelPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut
            },
            true
        );

        this.goldCoin1LenderTween = moveByPAth(
            this.goldCoin1,
            this.lenderPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut
            }
        );

        this.blackCoin1LenderTweenReversed = moveByPAth(
            this.blackCoin1,
            this.lenderPath,
            {
                duration: coinSpeed,
                ease: Power1.easeOut,
                onStart: () => {
                    TweenLite.set(this.blackCoin1, {autoAlpha: 1});
                    TweenLite.to(this.rightEye, eyeSpeed, {y: '-=7', x: '+=4'});
                },
                onComplete: () => {
                    if (this._active) {
                        setTimeout(() => {
                            this.timeline.restart();
                            this.isAnimationFinished = false;
                        }, restartDelay);
                    } else {
                        this.clearTweens();
                        this.isAnimationFinished = true;
                    }
                }
            }
        );


        // ======== EYES TWEENS

        this.leftEyeTween = moveByPAth(
            this.leftEye,
            this.leftEyePath,
            {
                duration: coinSpeed * 2,
                ease: Power1.easeOut,
                paused: true,
                defOptions: {
                    xPercent: 0,
                    yPercent: 0,
                    autoAlpha: 1
                }
            }
        );

        this.leftEyeBackTween = moveByPAth(
            this.leftEye,
            this.leftEyePath,
            {
                duration: coinSpeed * 2,
                ease: Power1.easeIn,
                paused: true,
                startDelay: 0.2,
                defOptions: {
                    xPercent: 0,
                    yPercent: 0,
                    autoAlpha: 1
                }
            },
            true
        );

        // ======== STROKES TIMELINE

        this.strokesTl
            .staggerTo(this.strokes, 0.5333, {'stroke-dashoffset': 0}, 0.02, 0)
            .staggerTo(this.strokes, 0.5333, {'stroke-dashoffset': 40}, 0.02, '+=0.4333');

        // ======== MAIN TIMELINE

        this.timeline
            .add(this.blackCoin2LenderTween)
            .add(this.goldCoin1LeftWheelTween)
            .add(this.goldCoin1rightWheelTween, '+=1')
            .add(this.goldCoin2rightTween, '-=0.4')
            .add(this.blackCoin2rightTween)
            .add(this.getArrowsAnimation())
            .add(this.blackCoin2rightTweenReversed)
            .add(this.goldCoin1RightWheelTweenReversed)
            .add(this.blackCoin2RightWheelTween, '-=0.55')
            .add(this.goldCoin1LeftWheelTweenReversed)
            .add(this.blackCoin2LeftWheelTween)
            .add(this.blackCoin1LenderTweenReversed)
            .add(this.goldCoin1LenderTween);
    }

    getArrowsAnimation() {
        this.arrowsTimeline = new TimelineMax({
            onStart: () => { TweenLite.to(this.rightEye, 0.3, {y: '-=15'}); }
        });

        this.leftArrowBlinkTween = TweenMax.to(this.leftArrow, 0.2, {autoAlpha: 0, yoyo: true, repeat: 5});
        this.rightArrowBlinkTween = TweenMax.to(this.rightArrow, 0.2, {autoAlpha: 0, yoyo: true, repeat: 5});

        this.circlesAppear = TweenLite.to([this.circleLeft, this.circleRight], 0.1, {fill: '#407BF7'});
        this.circlesDisappear = TweenLite.to([this.circleLeft, this.circleRight], 0.1, {fill: '#BED1F4'});

        return this.arrowsTimeline
            .add(this.circlesAppear)
            .add('appeared')
            .add(this.leftArrowBlinkTween, 'appeared')
            .add(this.rightArrowBlinkTween, 'appeared')
            .add(this.circlesDisappear);
    }

    clearTweens() {
        this.timeline.kill();
        this.timeline.clear();

        this.strokesTl.kill();
        this.strokesTl.clear();

        this.clearParams();
    }

    clearParams() {
        TweenLite.set(
            [
                this.goldCoin1,
                this.goldCoin2,
                this.blackCoin1,
                this.blackCoin2,
                this.wheel,
                this.leftArrow,
                this.rightArrow,
                this.leftEye,
                this.rightEye,
                this.strokes
            ],
            {clearProps: 'all'}
        );
    }
}