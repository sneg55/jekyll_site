// core
import Section      from '../../core/section.js';
//import { TweenLite, TimelineMax, TweenMax, Power4 } from '../../tweenMax.js';
import moveByPAth from '../../modules/pathMove';
import CustomEase from '../../modules/CustomEase';

export default class HodlSection extends Section
{

    // SETUP -------------------------------------------------------------------

    _setupSection( config )
    {
        const { _el } = this;

        this.greenCoin = _el.querySelector('#second-green-coin');
        this.blueCoin = _el.querySelector('#second-blue-coin');
        this.greenPath = _el.querySelector('#second-green-coin-path');
        this.bluePath = _el.querySelector('#second-blue-coin-path');
        this.eye = _el.querySelector('#hodl-iris');
    }


    // STATE -------------------------------------------------------------------

    _activate( delay, direction )
    {
        this.timeline = new TimelineMax({ repeat: -1, repeatDelay: 0 });
        this.eyeTween = TweenMax.to(
            this.eye, 
            1.5, 
            {
                bezier: {
                    values: [{y: -5, x: 8}, {y: 0, x: 0}], 
                },
                ease: CustomEase.create('custom', 'M0,0 C0.096,0.302 -0.002,0.5 0.3,0.5 0.6,0.5 0.498,1 1,1'),
                delay: 0.8
            }
        );
        this.greenTween = moveByPAth(
            this.greenCoin, 
            this.greenPath, 
            {ease: Power4.easeIn, duration: 2, autoAlpha: 0, onStart: () => { 
                setTimeout(() => {
                    this.eyeTween.restart(); 
                }, 800); // wee need these timeoutes because of coin's easing 
            }}
        );
        this.blueTween = moveByPAth(
            this.blueCoin, 
            this.bluePath, 
            {ease: Power4.easeIn, duration: 2, autoAlpha: 0, onStart: () => { 
                setTimeout(() => {
                    this.eyeTween.restart(); 
                }, 800); // and this one
            }}
        );
        

        this.timeline.add(this.greenTween)
            .to(this.greenCoin, 0.1, {autoAlpha: 1}, 0.8)
            .add(this.blueTween)
            .to(this.blueCoin, 0.1, {autoAlpha: 1}, 2.8);
    }

    _deactivate( delay, direction )
    {
        this.removeAnimation();
    }

    removeAnimation() {
        this.timeline.kill();

        TweenLite.set(this.greenCoin, {autoAlpha: 0});
        TweenLite.set(this.blueCoin, {autoAlpha: 0});
    }
}