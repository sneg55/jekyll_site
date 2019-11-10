// core
import Section      from '../../core/section.js';
import { TimelineMax, TweenLite, Power0 } from '../../tweenMax.js';
import CreateSmoke from '../../modules/smoke';

export default class LeveragePositionsSection extends Section {

    // SETUP -------------------------------------------------------------------

    resize() {
        this.isTouchDevice();
    }

    _setupSection() {
        this.disabledIconColor = '#8698B9';
        this.disabledBgColor = '#B9CAE8';
        this.disabledShadowColor = '#9DAFCE';

        this.greenIconColor = '#129D9A';
        this.greenBgColor = '#4FE2DF';
        this.greenShadowColor = '#19C5C2';

        this.yellowIconColor = '#E09D2F';
        this.yellowBgColor = '#FFCB76';
        this.yellowShadowColor = '#FFB439';

        this.light1Icon = document.getElementById('light1-icon');
        this.light1Bg = document.getElementById('light1-bg');
        this.light1Shadow = document.getElementById('light1-shadow');

        this.light2Icon = document.getElementById('light2-icon');
        this.light2Bg = document.getElementById('light2-bg');
        this.light2Shadow = document.getElementById('light2-shadow');

        this.light3Icon = document.getElementById('light3-icon');
        this.light3Bg = document.getElementById('light3-bg');
        this.light3Shadow = document.getElementById('light3-shadow');

        TweenLite.defaultEase = Power0.easeNone;

        TweenLite.set(
            this.light1Icon,
            {fill: this.disabledIconColor}
        );
        TweenLite.set(
            [this.light1Icon, this.light2Icon],
            {stroke: this.disabledIconColor}
        );
        TweenLite.set(
            [this.light1Bg, this.light2Bg],
            {fill: this.disabledBgColor}
        );
        TweenLite.set(
            [this.light1Shadow, this.light2Shadow],
            {fill: this.disabledShadowColor}
        );

        this.isTouchDevice();
    }

    // STATE -------------------------------------------------------------------

    isTouchDevice() {
        if (window.innerWidth <= 1080) {
            this.isMobile = true;
            if(this.smoke) {
                this.smoke.pause();
            }
        } else {
            this.isMobile = false;
            this.initSmoke();
        }
    }

    initSmoke() {
        if(!this.isMobile) {
            this.smokingTube = document.getElementById('leverage-smokepipe');
            this.smokePosition = document.querySelector('#lv-pipe-circle');
            
            this.smokePositionX = this.getCoords(this.smokePosition).left + 15;
            const canvas = document.querySelector('#leverage-smoke');

            const canvasSettings = {
                canvasWidth: this.getCoords(this.smokingTube).width,
                canvasHeight: this.getCoords(this.smokingTube).height,
                emitterX: this.smokePositionX,
                emitterY: this.getCoords(this.smokingTube).height / 2,
            };

            const smokeSettings = {
                size: 1,
                startSize: 12,
                maxSize: 25,
                speed: 0.2,
                alpha: 1,
                angle: Math.random() * 359,
                startLife: new Date().getTime(),
                lifeTime: 0,
                velYkoef: 60,
                velX: 1,
                maxLifeTime: 3500,
                minSpawnTime: 90,
            };

            if (this.smoke) {
                this.smoke.pause();
            }
            
            this.smoke = new CreateSmoke(canvas, canvasSettings, smokeSettings);
            this.smoke.pause();
        }

    }

    _activate() {
        if (this.smoke)
            this.smoke.pause();

        if (this.isMobile) {
            return;
        }
        this.startAnim();
        if (this.isMobile) {
            this.smoke.pause();
        } else {
            this.smoke.play();
        }
    }

    _deactivate() {
        if(this.smoke)
            this.smoke.pause();

        if (this.isMobile) {
            return;
        }
        this.trafficLights.pause(0);
        this.trafficLights.kill();
        this.trafficLights.clear(true);
        
        this.clearTrafficLights();
    }

    startAnim() {
        this.trafficLights = new TimelineMax({repeat: -1, repeatDelay: 2}).paused(true);

        this.trafficLights.to(this.light3Icon, 0.1, {stroke: this.disabledIconColor, fill: this.disabledIconColor}, 2.7)
            .to(this.light3Bg, 0.1, {fill: this.disabledBgColor}, 2.7)
            .to(this.light3Shadow, 0.1, {fill: this.disabledShadowColor}, 2.7)
            .to(this.light1Icon, 0.1, {fill: this.greenIconColor, stroke: this.greenIconColor}, 2)
            .to(this.light1Bg, 0.1, {fill: this.greenBgColor}, 2)
            .to(this.light1Shadow, 0.1, {fill: this.greenShadowColor}, 2)
            .to(this.light2Icon, 0.1, {stroke: this.greenIconColor}, 3)
            .to(this.light2Bg, 0.1, {fill: this.greenBgColor}, 3)
            .to(this.light2Shadow, 0.1, {fill: this.greenShadowColor}, 3)
            .to(this.light2Icon, 0.2, {autoAlpha: 0.1, yoyo: true, repeat: 5, ease: Power0.easeInOut}, 3.1)
            .to(this.light2Icon, 0.2, {autoAlpha: 0.1, yoyo: true, repeat: 5, ease: Power0.easeInOut}, 5.0333)
            .to(this.light2Icon, 0.2, {autoAlpha: 0.1, yoyo: true, repeat: 5, ease: Power0.easeInOut}, 7.0333)

            .to([this.light1Icon, this.light2Icon], 0.1, {stroke: this.disabledIconColor}, 8.5666)
            .to(this.light1Icon, 0.1, {fill: this.disabledIconColor}, 8.5666)
            .to([this.light1Bg, this.light2Bg], 0.1, {fill: this.disabledBgColor}, 8.5666)
            .to([this.light1Shadow, this.light2Shadow], 0.1, {fill: this.disabledShadowColor}, 8.5666)

            .to(this.light3Icon, 0.1, {stroke: this.yellowIconColor, fill: this.yellowIconColor}, 8.666)
            .to(this.light3Bg, 0.1, {fill: this.yellowBgColor}, 8.666)
            .to(this.light3Shadow, 0.1, {fill: this.yellowShadowColor}, 8.666);
       
        this.trafficLights.play(0);
    }

    clearTrafficLights() {
        TweenLite.set(this.light2Icon, {clearProps: 'opacity'});
    }

    getCoords(elem) {
        const smokeCoords = elem.getBoundingClientRect();
        return {
            top: smokeCoords.top,
            left: smokeCoords.left,
            width: smokeCoords.width,
            height: smokeCoords.height,
        };
    }
}