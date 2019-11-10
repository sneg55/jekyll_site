// core
import Section      from '../../core/section.js';
//import { TweenMax, TweenLite, TimelineLite, Power0, Power4, Power2 } from '../../tweenMax.js';
import moveByPAth from '../../modules/pathMove';

const defOptions = {
    xPercent: -50,
    yPercent: 0,
};

export default class TapSection extends Section
{

    constructor() {
        super({ element: document.querySelector('section.tap-section') });

        this.isAnimationFinished = true;
    }
    // SETUP -------------------------------------------------------------------

    _setupSection() {
        const { _el } = this;

        this.leftBlueCoin = _el.querySelector('#tap-lg-coin');
        this.rightGreenCoin = _el.querySelector('#tap-rg-coin');
        this.rightFakeGreenCoin = _el.querySelector('#tap-rfake-coin');
        this.leftFakeGreenCoin = _el.querySelector('#tap-lgreenfake-coin');
        this.carts = _el.querySelector('#tap-carts');
        this.cart1 = _el.querySelector('#cart-one');
        this.cart2 = _el.querySelector('#cart-two');
        this.cart3 = _el.querySelector('#cart-three');
        this.cart1coin = _el.querySelector('#cart-1-coin');
        this.cart2coin = _el.querySelector('#cart-2-coin');
        this.cart3coin = _el.querySelector('#cart-3-coin');
        
        this.leftTubePath = _el.querySelector('#tap-left-path');
        this.rightTubePath = _el.querySelector('#tap-right-path');
        this.rightTubeFakePath = _el.querySelector('#tap-right-fake-path');
        this.cartsPath = _el.querySelector('#tap-carts-path');
        this.cart1Path = _el.querySelector('#cart-1-path');
        this.cart2Path = _el.querySelector('#cart-2-path');
        this.cart3Path = _el.querySelector('#cart-3-path');
        this.cart1LeavePath = _el.querySelector('#cart-1-leave-path');
        this.cart2LeavePath = _el.querySelector('#cart-2-leave-path');
        this.cart3LeavePath = _el.querySelector('#cart-3-leave-path');

        this.tap = _el.querySelector('#tap');

        this.tapTween = TweenMax.to(this.tap, 6, {paused:true, rotation:'360',onComplete: () => {
            if (this._active)
                this.tapTween.restart();
        }});
    }


    // STATE -------------------------------------------------------------------

    _activate() {   
        if (this.isAnimationFinished)
            this.startAnim();
    }

    // Animation ---------------------------------------------------------------

    startAnim() {
        this.isAnimationFinished = false;

        TweenMax.set(this.tap,{transformOrigin: 'center center'});
        this.tapTween.play();
        
        const cartsSpeed = 1;
        const rightGreenDelay = 0.3;
        const fadeOutDuration = 0.1;
        
        TweenLite.set([this.cart1coin, this.cart2coin], {transformOrigin: '50% 50%'});

        this.timeline = new TimelineLite();
        this.cartsTimeline = new TimelineLite({
            onComplete: () => {
                if (this._active) {
                    this.clearParams();
                    this.timeline.restart();
                } else {
                    this.clearTweens();
                    this.isAnimationFinished = true;
                }
            }
        });

        // #1 animation
        this.cart1Tween = moveByPAth(
            this.cart1, 
            this.cart1Path, 
            {
                ease: Power4.easeOut, 
                duration: cartsSpeed, 
                autoAlpha: 1,
                onStart: () => {
                    TweenLite.to(this.cart1, 0, {autoAlpha: 1});
                    TweenLite.to(this.cart1coin, 0, {autoAlpha: 1});
                },
                defOptions
            },
            false
        );

        this.cart1LeaveTween = moveByPAth(
            this.cart1, 
            this.cart1LeavePath, 
            {
                ease: Power4.easeIn, 
                duration: cartsSpeed - 0, 
                autoAlpha: 1,
                defOptions
            },
            false
        );

        this.cart2Tween = moveByPAth(
            this.cart2, 
            this.cart2Path, 
            {
                ease: Power4.easeOut, 
                duration: cartsSpeed, 
                autoAlpha: 1,
                onStart: () => {
                    TweenLite.set(this.cart2coin, {autoAlpha: 1, y: 0});
                    TweenLite.set(this.cart2, {autoAlpha: 1});
                },
                defOptions
            },
            false
        );
        this.cart2LeaveTween = moveByPAth(
            this.cart2, 
            this.cart2LeavePath, 
            {
                ease: Power4.easeIn, 
                duration: cartsSpeed + 0.2, 
                autoAlpha: 1,
                defOptions,
                // paused: true
            },
            false
        );

        this.cart3Tween = moveByPAth(
            this.cart3, 
            this.cart3Path, 
            {
                ease: Power4.easeOut, 
                duration: cartsSpeed, 
                autoAlpha: 1,
                onStart: () => {
                    TweenLite.to(this.cart3, 0, {autoAlpha: 1});
                    TweenLite.set(this.cart3coin, {clearProps: 'all'});
                },
                defOptions
            },
            false
        );

        this.cart3LeaveTween = moveByPAth(
            this.cart3, 
            this.cart3LeavePath, 
            {
                ease: Power4.easeIn, 
                duration: cartsSpeed + 0.2, 
                autoAlpha: 1,
                defOptions,
                // paused: true
            },
            false
        );

        this.cart1coinBounce = TweenLite.to(
            this.cart1coin, 
            0.7, 
            {
                bezier: [{x: -2, rotation: -2},{x: -7, rotation: -5},{x: -2, rotation: -2},{x: 0, rotation: 0}],
                ease: Power2.easeOut, 
            }
        );

        this.cart2coinBounce = TweenLite.to(
            this.cart2coin, 
            0.7, 
            {
                bezier: [{x: -2, rotation: -2},{x: -7, rotation: -5},{x: -2, rotation: -2},{x: 0, rotation: 0}],
                ease: Power2.easeOut, 
            }
        );

        this.cart2coinLeaveTween = TweenLite.to(
            this.cart2coin, 
            0.4, 
            {
                y: -50, 
                ease: Power2.easeIn,
                onComplete: () => { TweenLite.set(this.cart2coin, {autoAlpha: 0}); }
            }
        );

        this.cartsTimeline
            .add(this.cart1Tween, 0)
            .add('1st-finished', '+=1')
            .add(this.cart1coinBounce, '-=0.4')
            .add(this.cart2coinBounce, rightGreenDelay + 0.6) // 0.7
            .add(this.cart2coinLeaveTween)
            .add(this.cart2Tween, 0.25)
            .add('2nd-finished', '+=0')
            .add(this.cart3Tween, 0.5)
            .add('3d-finished', '+=0.35') // 0.6
            .add(this.cart1LeaveTween, '1st-finished')
            .add(this.cart2LeaveTween, '2nd-finished')
            .add(this.cart3LeaveTween, '3d-finished');

        // #2 animation
        this.rightGreenCoinTween = moveByPAth(
            this.rightGreenCoin, 
            this.rightTubePath, 
            {ease: Power0.easeNone, duration: 1.2, autoAlpha: 1},
            true
        );

        // #2.1
        this.rightFakeGreenCoinTween = moveByPAth(
            this.rightFakeGreenCoin, 
            this.rightTubeFakePath, 
            {ease: Power0.easeNone, duration: 0.05, autoAlpha: 1, onComplete: () => {
                TweenLite.to(this.rightFakeGreenCoin, 0, {autoAlpha: 0});
                TweenLite.to(this.cart3coin, 0, {autoAlpha: 1});
                TweenLite.to(this.cart3coin, 0.2, {
                    bezier: {
                        type:'cubic',
                        values: [{y: 0}, {y: -5},{y: -40},{y: -5},{y: 0}],
                    },
                });
            }},
            false
        );

        // #3 animation
        this.leftBlueCoinTween = moveByPAth(
            this.leftBlueCoin, 
            this.leftTubePath, 
            {
                ease: Power0.easeNone,
                duration: 0.9, autoAlpha: 1, onStart: () => {
                    TweenLite.to(this.leftBlueCoin, 0, {autoAlpha: 1});
                },
                // paused: true
            },
            true
        );

        this.timeline
            .add(this.rightGreenCoinTween, rightGreenDelay)
            .add('right-coin-finish')
            .add(this.cartsTimeline, 0)
            .add(this.rightFakeGreenCoinTween, 'right-coin-finish')
            .add(this.leftBlueCoinTween, rightGreenDelay + 1.7) // 0.7
            
            .to(this.rightGreenCoin, fadeOutDuration, {autoAlpha: 1}, rightGreenDelay)
            .to(this.rightGreenCoin, 0, {autoAlpha: 0}, 'right-coin-finish')
            .to(this.rightFakeGreenCoin, 0, {autoAlpha: 1}, 'right-coin-finish');
    }

    clearTweens() {
        this.timeline.stop();
        this.timeline.kill();
        this.timeline.clear();
        
        this.cartsTimeline.stop();
        this.cartsTimeline.kill();
        this.cartsTimeline.clear();

        // this.coinsTween.kill();
        // this.rightCoinTween.kill();
        // this.leftCoinTween.kill();
        
        this.clearParams();
    }

    clearParams() {
        TweenLite.set([
            this.leftBlueCoin, 
            this.rightFakeGreenCoin,
            this.rightGreenCoin,
            this.cart1, 
            this.cart2, 
            this.cart3, 
            this.cart1coin, 
            this.cart2coin, 
            this.cart3coin, 
            this.leftFakeGreenCoin,
        ], {clearProps: 'all'});
    }
}