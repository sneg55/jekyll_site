// core
import Section      from '../../core/section.js';
//import { TweenLite, TimelineMax, Power0, Power2, TweenMax } from '../../tweenMax.js';
import moveByPAth from '../../modules/pathMove';
import CustomEase from '../../modules/CustomEase';

export default class BoxSolvesSection extends Section
{
    constructor() {
        super({ element: document.querySelector('section.box-solves-section') });

        this.isAnimationFinished = true;
    }

    // SETUP -------------------------------------------------------------------

    _setupSection() {
        this.leftCoin = document.getElementById('solves-lt-coin');
        this.rightCoin = document.getElementById('solves-rt-coin');

        this.topCenterCoin1 = document.getElementById('solves-tcc1');
        this.topCenterCoin2 = document.getElementById('solves-tcc2');
        this.topCenterCoin3 = document.getElementById('solves-tcc3');
        this.topCenterCoin4 = document.getElementById('solves-tcc4');
        this.topRightCoin1 = document.getElementById('solves-trc1');
        this.topRightCoin2 = document.getElementById('solves-trc2');
        this.topRightCoin3 = document.getElementById('solves-trc3');
        
        this.leftPath = document.getElementById('solves-left-path');
        this.rightPath = document.getElementById('solves-right-path');
        this.preRightPath = document.getElementById('solves-pre-right-path');
        this.topPath = document.getElementById('solves-top-coins-path');
        this.leftTopCoinPath = document.getElementById('solves-top-left-coin-path');
    }


    // STATE -------------------------------------------------------------------

    _activate() {
        if (this.isAnimationFinished)
            this.startAnimation();
    }


    startAnimation() {
        this.isAnimationFinished = false;
        const repeatDelay = 1000;
        
        this.timeline = new TimelineMax();
        this.topCenterImpulseTimeline = new TimelineMax();
        this.topRightImpulseTimeline = new TimelineMax({paused: true});

        // #0 animation
        this.preRightCoinTween = moveByPAth(
            this.rightCoin, 
            this.preRightPath, 
            {ease: Power0.easeNone, duration: 0.4, autoAlpha: 1, onStart: () => { 
                this.topRightImpulseTimeline.restart(); 
                setTimeout(() => { TweenLite.set(this.rightCoin, {autoAlpha: 1}); }, 0.15);
            }}
        );

        this.leftCoinTween = moveByPAth(
            this.leftCoin, 
            this.leftPath, 
            {
                ease: CustomEase.create('custom', 'M0,0 C0.454,0.386 0.437,0.378 0.572,0.484 0.68,0.569 0.838,0.67 1,1'),
                duration: 1.386, 
                autoAlpha: 1,
                onStart: () => { TweenLite.set(this.leftCoin, {autoAlpha: 1}); },
            },
            true
        );

        // #1 animation
        this.rightCoinTween = moveByPAth(
            this.rightCoin, 
            this.rightPath, 
            {ease: Power0.easeNone, duration: 0.8, autoAlpha: 1, onComplete: () => {
                if (this._active) {
                    setTimeout(() => { this.timeline.restart(); }, repeatDelay);
                    this.clearParams();
                    this.isAnimationFinished = false;
                } else {
                    this.clearTweens();
                    this.isAnimationFinished = true;
                }
            }},
            true
        );


        this.topCenterCoin1Tween = TweenMax.to(this.topCenterCoin1, 0.1, {ease: Power2.easeOut, y: -5, repeat: 1, yoyo: true});
        this.topCenterCoin2Tween = TweenMax.to(this.topCenterCoin2, 0.166, {ease: Power2.easeOut, y: -40, repeat: 1, yoyo: true});
        this.topCenterCoin3Tween = TweenMax.to(this.topCenterCoin3, 0.166, {ease: Power2.easeOut, y: -20, repeat: 1, yoyo: true});
        this.topCenterCoin4Tween = TweenMax.to(this.topCenterCoin4, 0.1, {ease: Power2.easeOut, y: -5, repeat: 1, yoyo: true});
        
        this.topRightCoin1Tween = TweenMax.to(this.topRightCoin1, 0.2, {ease: Power2.easeOut, y: -16, x: 30, repeat: 1, yoyo: true});
        this.topRightCoin2Tween = TweenMax.to(this.topRightCoin2, 0.2, {ease: Power2.easeOut, y: -18, x: 35, repeat: 1, yoyo: true});
        this.topRightCoin3Tween = TweenMax.to(this.topRightCoin3, 0.2, {ease: Power2.easeOut, y: -20, x: 40, repeat: 1, yoyo: true});

        this.topCenterImpulseTimeline
            .add(this.topCenterCoin3Tween)
            .add(this.topCenterCoin2Tween, 0.1)
            .add(this.topCenterCoin1Tween, 0.2)
            .add(this.topCenterCoin4Tween, 0.2);

        this.topRightImpulseTimeline
            .add(this.topRightCoin1Tween)
            .add(this.topRightCoin2Tween, 0.1)
            .add(this.topRightCoin3Tween, 0.2);
        
        this.timeline
            .add(this.leftCoinTween, 0) 
            .set(this.leftCoin, {autoAlpha: 0}, '-=0.03')
            .add(this.topCenterImpulseTimeline, '-=0.07')
            .add(this.preRightCoinTween)
            .add(this.rightCoinTween); 
    }

    clearTweens() {
        this.timeline.kill();
        this.timeline.clear();
        
        this.clearParams();
    }

    clearParams() {
        TweenLite.set(
            [ 
                this.rightCoin, 
                this.leftCoin,
                this.topCenterCoin1,
                this.topCenterCoin2,
                this.topCenterCoin3,
                this.topCenterCoin4,
                this.topRightCoin1,
                this.topRightCoin2,
                this.topRightCoin3,
            ], 
            {clearProps: 'all'}
        );
    }
}