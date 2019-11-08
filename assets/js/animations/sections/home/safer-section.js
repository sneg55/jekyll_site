// core
import Section     from '../../core/section.js';
//import { TweenMax, TweenLite, TimelineMax, Power0, Power1, Sine, Back }    from '../../tweenMax.js';
// import CustomEase from '../../modules/CustomEase';
import CreateSmoke from '../../modules/smoke.js';

const morphSVGPlugin = MorphSVGPlugin;

export default class SaferSection extends Section {

    resize() {
        this.isTouchDevice();
        this.initSmoke();
    }

    // SETUP -------------------------------------------------------------------

    _setupSection() {
        this.isAnimationFinished = true;
        this.isMobile = false;

        // this._saferRpCoin = document.getElementById('safer-right-pipe-coin');

        // this._saferLpCoin = document.getElementById('safer-left-pipe-coin');
        // this._saferLpCoin2 = document.getElementById('safer-left-pipe-coin2');

        // this._saferPipe1Coin = document.getElementById('safer-col1-pipe-coin');
        // this._saferPipe1Coin2 = document.getElementById('safer-col1-pipe-coin2');
        // this._saferPipe2Coin = document.getElementById('safer-col2-pipe-coin');
        // this._saferPipe3Coin = document.getElementById('safer-col3-pipe-coin');
        // this._saferPipe4Coin = document.getElementById('safer-col4-pipe-coin');

        // this._saferCarts = document.querySelectorAll('.safer-cart');

        // this._saferCart1Coin = document.getElementById('safer-cart1-coin');
        // this._saferCart3Coin = document.getElementById('safer-cart3-coin');
        // this._saferCart4Coin = document.getElementById('safer-cart4-coin');
        // this._saferCart5Coin = document.getElementById('safer-cart5-coin');
        // this._saferCart6Coin = document.getElementById('safer-cart6-coin');

        // this._saferCol1Coin1 = document.getElementById('safer-col1-coin1');
        // this._saferCol1Coin2 = document.getElementById('safer-col1-coin2');
        // this._saferCol1Coin3 = document.getElementById('safer-col1-coin3');
        // this._saferCol1Coin4 = document.getElementById('safer-col1-coin4');
        // this._saferCol1Coin5 = document.getElementById('safer-col1-coin5');

        // this._saferCol2Coin1 = document.getElementById('safer-col2-coin1');
        // this._saferCol2Coin2 = document.getElementById('safer-col2-coin2');
        // this._saferCol2Coin3 = document.getElementById('safer-col2-coin3');
        // this._saferCol2Coin4 = document.getElementById('safer-col2-coin4');

        // this._saferCol3Coin1 = document.getElementById('safer-col3-coin1');
        // this._saferCol3Coin2 = document.getElementById('safer-col3-coin2');
        // this._saferCol3Coin3 = document.getElementById('safer-col3-coin3');
        // this._saferCol3Coin4 = document.getElementById('safer-col3-coin4');

        // this._saferCol4Coin1 = document.getElementById('safer-col4-coin1');
        // this._saferCol4Coin2 = document.getElementById('safer-col4-coin2');
        // this._saferCol4Coin3 = document.getElementById('safer-col4-coin3');
        // this._saferCol4Coin4 = document.getElementById('safer-col4-coin4');

        // this.saferRpCoinPath = morphSVGPlugin.pathDataToBezier('#safer-rp-path', {align: this._saferRpCoin});

        // this.saferLpCoinPath = morphSVGPlugin.pathDataToBezier('#safer-lp-path', {align: this._saferLpCoin});

        // this.saferPipe1CoinPAth = morphSVGPlugin.pathDataToBezier('#safer-col1-path', {align: this._saferPipe1Coin});
        // this.saferPipe1CoinPAth2 = morphSVGPlugin.pathDataToBezier('#safer-col1-path2', {align: this._saferPipe1Coin2});
        // this.saferPipe2CoinPAth = morphSVGPlugin.pathDataToBezier('#safer-col2-path', {align: this._saferPipe2Coin});
        // this.saferPipe3CoinPAth = morphSVGPlugin.pathDataToBezier('#safer-col3-path', {align: this._saferPipe3Coin});
        // this.saferPipe4CoinPAth = morphSVGPlugin.pathDataToBezier('#safer-col4-path', {align: this._saferPipe4Coin});

        // this.saferCart1Path = morphSVGPlugin.pathDataToBezier('#safer-cart1-path');
        // this.saferCart2Path = morphSVGPlugin.pathDataToBezier('#safer-cart2-path');
        // this.saferCart3Path = morphSVGPlugin.pathDataToBezier('#safer-cart3-path');
        // this.saferCart4Path = morphSVGPlugin.pathDataToBezier('#safer-cart4-path');
        // this.saferCart5Path = morphSVGPlugin.pathDataToBezier('#safer-cart5-path');
        // this.saferCart6Path = morphSVGPlugin.pathDataToBezier('#safer-cart6-path');


        // CustomEase.create('saferCart1Enter', 'M0,0 C0.17,0.17 0.16,1 1,1');
        // CustomEase.create('saferCart2Enter', 'M0,0 C0.17,0.17 0.25,1 1,1');
        // CustomEase.create('cartOut', 'M0,0 C0.56,0 0.83,0.83 1,1');

        // TweenLite.set(
        //     [
        //         this._saferCart1Coin,
        //         this._saferCart3Coin,
        //         this._saferCart4Coin,
        //         this._saferCart5Coin,
        //     ],
        //     {transformOrigin: '50% 50%'}
        // );

        this.mobileSmoke = document.getElementById('mobile-smoke');

        this.isTouchDevice();
        this.initSmoke();
    }


    // STATE -------------------------------------------------------------------

    isTouchDevice() {
        if (window.innerWidth < 1023 ) {
            this.isMobile = true;
            this.mobileSmoke.style.opacity = 0.5;
            this.mobileSmoke.style.transform = 'translate(510px, 40px) scale(0.8)';
            if(this.smoke)
                this.smoke.pause();
        } else {
            this.isMobile = false;
            this.mobileSmoke.style.opacity = 0;
        }
    }

    initSmoke() {
        if (!this.isMobile) {
            this.smokingTube = document.querySelector('.smoking-tube');
            this.smokePosition = document.getElementById('smoke-position');
            this.smokePositionX = this.getCoords(this.smokePosition).left + 10;

            const canvasSettings = {
                canvasWidth: this.smokingTube.offsetWidth,
                canvasHeight: this.smokingTube.offsetHeight,
                emitterX: this.smokePositionX,
                emitterY: this.smokingTube.offsetHeight / 2,
            };

            const smokeSettings = {
                size: 1,
                startSize: 12,
                maxSize: 30,
                speed: 0.25,
                alpha: 1,
                angle: Math.random() * 359,
                startLife: new Date().getTime(),
                velYkoef: 20,
                velX: 1,
                maxLifeTime: 5200,
                minSpawnTime: 90,
            };

            if (this.smoke) {
                this.smoke.pause();
            }

            this.smoke = new CreateSmoke(document.getElementById('safer-smoke'), canvasSettings, smokeSettings);
            this.smoke.pause();
        }
    }

    _cartsOut() {
        this._saferCartsOutTl.play(0);
    }

    _restartTls() {
        this._saferGeneralTL.restart();
        this._saferCol1CoinsTl.restart();
        this._saferCol2CoinsTl.restart();
        this._saferCol3CoinsTl.restart();
        this._saferCol4CoinsTl.restart();
        this._saferRpCoinTl.restart();
        this._saferLpCoinTl.restart();
    }

    cartsMobile() {
        TweenLite.set(
            [
                this._saferCart1Coin,
                this._saferCart3Coin,
                this._saferCart4Coin,
                this._saferCart5Coin,
                this._saferCart6Coin
            ],
            {autoAlpha: 1}
        );
        TweenLite.set(this._saferCarts[0], {x: 1350, y: 144});
        TweenLite.set(this._saferCarts[1], {x: 1142, y: 122});
        TweenLite.set(this._saferCarts[2], {x: 942, y: 102});
        TweenLite.set(this._saferCarts[3], {x: 647, y: 71});
        TweenLite.set(this._saferCarts[4], {x: 347, y: 39});
        TweenLite.set(this._saferCarts[5], {x: 147, y: 19});
    }

    _activate() {
        if (this.isMobile) {
            this.cartsMobile();
            return;
        }

        this.smoke.play();

        if (this.isAnimationFinished)
            this.startAnim();
    }

    _deactivate() {
        if (this.isMobile) {
            return;
        }
        this.smoke.pause();
    }

    

    startAnim() {
        this.isAnimationFinished = false;

        this._saferRpCoinTl = new TimelineMax({repeat: 1, repeatDelay: 1.2666});

        this._saferLpCoinTl = new TimelineMax();

        this._saferGeneralTL = new TimelineMax({repeat: 0, repeatDelay: 0});
        this._saferCartsEnterTL = new TimelineMax({repeat: 0, repeatDelay: 0});
        this._saferCartsOutTl = new TimelineMax({repeat: 0, repeatDelay: 0,
            onComplete: () => {
                if(this._active) {
                    this._clearTweens();
                    this._restartTls();
                } else {
                    this._clearTls();
                    this.isAnimationFinished = true;
                }
            }
        });
        this._saferCartsOutTl.paused(true);

        this._saferCol1CoinsTl = new TimelineMax();

        this._saferCol2CoinsTl = new TimelineMax();

        this._saferCol3CoinsTl = new TimelineMax();

        this._saferCol4CoinsTl = new TimelineMax();

        TweenLite.set(
            [this._saferRpCoin, this._saferLpCoin, this._saferLpCoin2],
            {xPercent:-40, yPercent:-40, scale: '0.8'}
        );
        TweenLite.set(
            [this._saferPipe1Coin, this._saferPipe1Coin2, this._saferPipe2Coin, this._saferPipe3Coin, this._saferPipe4Coin],
            {clearProps: 'all'}
        );
        TweenLite.set(
            [this._saferPipe1Coin, this._saferPipe1Coin2, this._saferPipe4Coin, this._saferPipe3Coin],
            {xPercent:-40, yPercent:-50}
        );
        TweenLite.set(this._saferPipe2Coin, {xPercent:-45, yPercent:-50});
        TweenLite.set(this._saferCarts, {x: -600, y: -60});

        this.saferRpCoinPathTween = TweenMax.to(this._saferRpCoin, 0.8333, {bezier:{values: this.saferRpCoinPath, type:'cubic'}, ease: Power0.easeIn}).reversed(true);

        this.saferLpCoinPathTween = TweenMax.to(this._saferLpCoin, 0.8333, {bezier:{values: this.saferLpCoinPath, type:'cubic'}, ease: Power0.easeNone}).reversed(true);
        this.saferLpCoinPathTween2 = TweenMax.to(this._saferLpCoin2, 0.8333, {bezier:{values: this.saferLpCoinPath, type:'cubic'}, ease: Power0.easeNone}).reversed(true);
        this.saferLpCoinPathTween3 = TweenMax.to(this._saferLpCoin, 0.8333, {bezier:{values: this.saferLpCoinPath, type:'cubic'}, ease: Power0.easeNone}).reversed(true);

        this.saferPipe1CoinTween = TweenMax.to(this._saferPipe1Coin, 0.4, {bezier:{values: this.saferPipe1CoinPAth, type:'cubic'}, ease: Power0.ease}).reversed(true);
        this.saferPipe1CoinTween2 = TweenMax.to(this._saferPipe1Coin2, 0.6, {bezier:{values: this.saferPipe1CoinPAth2, type:'cubic'}, ease: Sine.easeIn});
        this.saferPipe2CoinTween = TweenMax.to(this._saferPipe2Coin, 0.6, {bezier:{values: this.saferPipe2CoinPAth, type:'cubic'}, ease: Sine.easeIn});
        this.saferPipe3CoinTween = TweenMax.to(this._saferPipe3Coin, 0.45, {bezier:{values: this.saferPipe3CoinPAth, type:'cubic'}, ease: Power0.ease}).reversed(true);
        this.saferPipe4CoinTween = TweenMax.to(this._saferPipe4Coin, 0.5, {bezier:{values: this.saferPipe4CoinPAth, type:'cubic'}, ease: Power0.ease});

        this._saferRpCoinTl.add(this.saferRpCoinPathTween);

        this._saferLpCoinTl.add(this.saferLpCoinPathTween.delay(0.466));
        this._saferLpCoinTl.add(this.saferLpCoinPathTween2.delay(0.166));
        this._saferLpCoinTl.add(this.saferLpCoinPathTween3.delay(0.166));

        this._saferCartsEnterTL
            .add(this.saferPipe4CoinTween.reversed(true))
            .to(this._saferPipe4Coin, 0, {autoAlpha: 0})
            .to(this._saferCart1Coin, 0, {autoAlpha: 1})
            .add(this.saferPipe3CoinTween)
            .to(this._saferPipe3Coin, 0, {autoAlpha: 0})
            .to(this._saferCart3Coin, 0, {autoAlpha: 1}, '-=0.030')
            .add(this.saferPipe1CoinTween.delay(-0.13))
            .to(this._saferPipe1Coin, 0, {autoAlpha: 0})
            .to(this._saferCart4Coin, 0, {autoAlpha: 1})
            .add(this.saferPipe2CoinTween.delay(0.015))
            .to(this._saferCart5Coin, 0, {autoAlpha: 1}, '-=0.040')
            .to(this._saferPipe2Coin, 0, {autoAlpha: 0}, '-=0.041')
            .add(this.saferPipe1CoinTween2.delay(-0.333))
            .to(this._saferCart6Coin, 0, {autoAlpha: 1}, '-=0.05')
            .to(this._saferPipe1Coin2, 0, {autoAlpha: 0})
            .to(this._saferCarts[0], 1.1, {bezier:{values: this.saferCart1Path, type:'cubic'}, ease: 'saferCart1Enter'}, 0.1)
            .to(this._saferCart1Coin, 0.3, {x: '+=6', rotation: '+=5'}, 1.08)
            .to(this._saferCart1Coin, 0.2, {x: '-=6', rotation: '-=5'}, 1.65)
            .to(this._saferCarts[1], 1.1, {bezier:{values: this.saferCart2Path, type:'cubic'}, ease: 'saferCart2Enter'}, 0.1333)
            .to(this._saferCarts[2], 0.9666, {bezier:{values: this.saferCart3Path, type:'cubic'}, ease: 'saferCart1Enter'}, 0.4333)
            .to(this._saferCart3Coin, 0.3, {x: '+=6', rotation: '+=5'}, 1.33)
            .to(this._saferCart3Coin, 0.2, {x: '-=6', rotation: '-=5'}, 1.78)
            .to(this._saferCarts[3], 0.6666, {bezier:{values: this.saferCart4Path, type:'cubic'}, ease: 'saferCart1Enter'}, 1)
            .to(this._saferCart4Coin, 0.3, {x: '+=6', rotation: '+=5'}, 1.5)
            .to(this._saferCart4Coin, 0.2, {x: '-=6', rotation: '-=5'}, 1.9)
            .to(this._saferCarts[4], 0.55, {bezier:{values: this.saferCart5Path, type:'cubic'}, ease: 'saferCart2Enter'}, 1.3666)
            .to(this._saferCart5Coin, 0.3, {x: '+=4', rotation: '+=3'}, 1.8)
            .to(this._saferCart5Coin, 0.2, {x: '-=4', rotation: '-=3'}, 2.1)
            .to(this._saferCarts[5], 0.5666, {bezier:{values: this.saferCart6Path, type:'cubic'}, ease: 'saferCart2Enter'}, 1.5666)
            .to(this._saferCart6Coin, 0.3, {y: '+=8', ease: Back.easeInOut.config(10),
                onComplete: () => {
                    this._cartsOut();
                }
            }, 1.9);

        this._saferCartsOutTl.to(this._saferCarts[0], 0.4, {x: 1247, y: 132, ease: Power1.easeInOut})
            .to(this._saferCarts[0], 0.5666, {x: 2220, y: 234, ease: 'cartOut'})
            .to(this._saferCarts[1], 0.4, {x: 1042, y: 109, ease: Power1.easeInOut}, 0.1333)
            .to(this._saferCarts[1], 0.5666, {x: 2220, y: 234, ease: 'cartOut'}, 0.5333)
            .to(this._saferCarts[2], 0.6666, {x: 2220, y: 234, ease: 'cartOut'}, 0.5333)
            .to(this._saferCarts[3], 0.8, {x: 2220, y: 234, ease: 'cartOut'}, 0.5333)
            .to(this._saferCarts[4], 0.8333, {x: 2220, y: 234, ease: 'cartOut'}, 0.6333)
            .to(this._saferCarts[5], 0.8666, {x: 2220, y: 234, ease: 'cartOut'}, 0.7333);

        this._saferCol1CoinsTl.to(this._saferCol1Coin1, 0.3666, {y: '+=50', ease: 'cartOut'}, 0.3666)
            .to(this._saferCol1Coin2, 0.2, {x: '-=18', y: '+=44', ease: Power1.easeIn}, 0.4666)
            .to(this._saferCol1Coin3, 0.1666, {x: '+=19', y: '+=45',  ease: Power1.easeIn}, 0.5)
            .to(this._saferCol1Coin2, 0.3666, {y: '+=52', ease: Power1.easeIn}, 1.1333)
            .to(this._saferCol1Coin3, 0.2, {x: '-=17.8', y: '+=48', ease: Power1.easeIn}, 1.2333)

            .to(this._saferCol1Coin4, 0.05, {x: '+=27', y: '+=3', ease: Power0.easeNone}, 1.3)
            .to(this._saferCol1Coin4, 0.1, {x: '+=27', y: '+=9', ease: Power0.easeNone}, 1.35)
            .to(this._saferCol1Coin4, 0.15, {x: '+=27', y: '+=117', ease: Power0.easeNone}, 1.45)

            .to(this._saferCol1Coin5, 0.05, {x: '+=50', y: '+=8', ease: Power0.easeNone}, 2.2666)
            .to(this._saferCol1Coin5, 0.15, {x: '+=11', y: '+=74', ease: Power0.easeNone}, 2.3166);

        this._saferCol2CoinsTl.to(this._saferCol2Coin1, 0.1, {y: '+=50', ease: 'cartOut'}, 1.0666)
            .to(this._saferCol2Coin2, 0.2, {x: '+=19.4', y: '+=49', ease: Power1.easeIn}, 1.1)
            .to(this._saferCol2Coin3, 0.2, {x: '-=19', y: '+=49',  ease: Power1.easeIn}, 1.1333)

            .to(this._saferCol2Coin4, 0.05, {x: '+=27', y: '+=3', ease: Power0.easeNone}, 3.30)
            .to(this._saferCol2Coin4, 0.05, {x: '+=27', y: '+=9', ease: Power0.easeNone}, 3.35)
            .to(this._saferCol2Coin4, 0.1, {x: '+=22', y: '+=63', ease: Power0.easeNone}, 3.40);

        this._saferCol3CoinsTl.to(this._saferCol3Coin1, 0.1333, {y: '+=51', ease: 'cartOut'}, 0.3)
            .to(this._saferCol3Coin2, 0.1666, {x: '+=19', y: '+=50', ease: Power1.easeIn}, 0.3333)
            .to(this._saferCol3Coin3, 0.1666, {x: '-=18', y: '+=50',  ease: Power1.easeIn}, 0.3666)

            .to(this._saferCol3Coin4, 0.1, {x: '-=48', y: '+=8', ease: Power0.easeNone}, 3.2666)
            .to(this._saferCol3Coin4, 0.1, {x: '-=12', y: '+=72', ease: Power0.easeNone}, 3.3666);

        this._saferCol4CoinsTl.to(this._saferCol4Coin3, 0.05, {x: '-=50', y: '+=8', ease: Power0.easeNone}, 1)
            .to(this._saferCol4Coin3, 0.1, {x: '-=10', y: '+=66', ease: Power0.easeNone}, 1.05)

            .to(this._saferCol4Coin1, 0.1333, {y: '+=51', ease: 'cartOut'}, 3.8)
            .to(this._saferCol4Coin2, 0.1666, {x: '+=19', y: '+=50', ease: Power1.easeIn}, 3.8333)
            .to(this._saferCol4Coin3, 0.1666, {x: '-=18', y: '+=50',  ease: Power1.easeIn}, 3.8666);

        this._saferGeneralTL
            .add(this._saferCartsEnterTL)
            .add(this._saferCartsOutTl.delay(0.2));
    }

    _clearTweens() {
        TweenLite.set(
            [this._saferPipe1Coin, this._saferPipe1Coin2, this._saferPipe2Coin, this._saferPipe3Coin, this._saferPipe4Coin],
            {autoAlpha: 0}
        );

        TweenLite.set(
            [this._saferCart1Coin, this._saferCart3Coin, this._saferCart4Coin, this._saferCart5Coin],
            {autoAlpha: 0, x: 84, y: -16, rotateX: 180}
        );
        TweenLite.set(this._saferCart6Coin, {autoAlpha: 0, x: 84, y: -24, rotateX: 180});

        TweenLite.set(this._saferCol1Coin1, {x: 0.505104, y: 93.262872});
        TweenLite.set(this._saferCol1Coin2, {x: 20.731386, y: 46.990942});
        TweenLite.set(this._saferCol1Coin3, {x: 0, y: 0});
        TweenLite.set(this._saferCol1Coin4, {x: -60, y: -81.990942});
        TweenLite.set(this._saferCol1Coin5, {x: -60, y: -81.990942});

        TweenLite.set(this._saferCol2Coin1, {x: 19.854397, y: 102.937478});
        TweenLite.set(this._saferCol2Coin2, {x: 0, y: 54});
        TweenLite.set(this._saferCol2Coin3, {x: 18.472304, y: 5});
        TweenLite.set(this._saferCol2Coin4, {x: -57, y: -70});

        TweenLite.set(this._saferCol3Coin1, {x: 18.797658, y: 99.791218});
        TweenLite.set(this._saferCol3Coin2, {x: 0, y: 49.630781});
        TweenLite.set(this._saferCol3Coin3, {x: 17.090212, y: 0});
        TweenLite.set(this._saferCol3Coin4, {x: 77.090212, y: -80});

        TweenLite.set(this._saferCol4Coin1, {x: 17, y: 102});
        TweenLite.set(this._saferCol4Coin2, {x: -1, y: 53});
        TweenLite.set(this._saferCol4Coin3, {x: 76, y: -70});
    }

    _clearTls() {
        this._clearTweens();

        this._saferGeneralTL.stop();
        this._saferGeneralTL.kill();
        this._saferGeneralTL.clear();

        this._saferCartsEnterTL.stop();
        this._saferCartsEnterTL.kill();
        this._saferCartsEnterTL.clear();

        this._saferCartsOutTl.stop();
        this._saferCartsOutTl.kill();
        this._saferCartsOutTl.clear();

        this._saferRpCoinTl.stop();
        this._saferRpCoinTl.kill();
        this._saferRpCoinTl.clear();

        this._saferLpCoinTl.stop();
        this._saferLpCoinTl.kill();
        this._saferLpCoinTl.clear();

        this._saferCol1CoinsTl.stop();
        this._saferCol1CoinsTl.kill();
        this._saferCol1CoinsTl.clear();

        this._saferCol2CoinsTl.stop();
        this._saferCol2CoinsTl.kill();
        this._saferCol2CoinsTl.clear();

        this._saferCol3CoinsTl.stop();
        this._saferCol3CoinsTl.kill();
        this._saferCol3CoinsTl.clear();

        this._saferCol4CoinsTl.stop();
        this._saferCol4CoinsTl.kill();
        this._saferCol4CoinsTl.clear();
    }

    getCoords(elem) {
        const smokeCoords = elem.getBoundingClientRect();
        return {
            top: smokeCoords.top,
            left: smokeCoords.left
        };
    }
}



