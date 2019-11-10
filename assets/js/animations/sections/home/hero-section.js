// core
import Section      from '../../core/section.js';
//import { TweenMax, TweenLite, TimelineMax, Power0, Power1 }    from '../../tweenMax.js';
import CustomEase from '../../modules/CustomEase';
import initHeroBgAsync from '../../modules/heroBgAnimation';

const morphSVGPlugin = MorphSVGPlugin;

const eye = document.getElementById('hero-iris');
if (eye) TweenLite.set(document.getElementById('hero-iris'), {xPercent:-50, yPercent:-50});
const isTablet = () => window.innerWidth <= 1080;

export default class HeroSection extends Section {
    // SETUP -------------------------------------------------------------------

    _setupSection() {
        this.initAnimation();
        this.tablet = isTablet();
    }

    initAnimation() {
        this._lbpGreenCoin = document.getElementById('hero-coin-green-lbp');
        this._lbpGreenCoin2 = document.getElementById('hero-coin-green-lbp2');
        this._lbpGreenCoin3 = document.getElementById('hero-coin-green-lbp3');
        this._lbpStrokes = document.querySelectorAll('.hero-coin-green-lbp-stroke');

        this._circleTop = document.getElementById('hero-circe-top');
        this._circleBottom = document.getElementById('hero-circe-bottom');

        this._trpCoin = document.getElementById('hero-trp-coin');

        this._tlpCoin = document.getElementById('hero-tlp-coin');
        this._tlpCoin2 = document.getElementById('hero-tlp-coin2');
        this._tlpCoin3 = document.getElementById('hero-tlp-coin3');

        this.bigBoxStrokes = document.querySelectorAll('.big-box-stroke');

        this.smallBoxStrokes = document.querySelectorAll('.small-box-stroke');

        this.heroEye = document.getElementById('hero-iris');

        this.leftRowCoins = document.querySelectorAll('.left-row-coin');

        this.middleRowCoins = document.querySelectorAll('.middle-row-coin');

        this.rightRowCoins = document.querySelectorAll('.right-row-coin');

        this.heroLbpGreenCoinPath = morphSVGPlugin.pathDataToBezier('#hero-lbp-path', {align: this._lbpGreenCoin});
        this.heroLbpGreenCoinPath.splice(19, 49);
        this.heroLbpGreenCoinPath2step = morphSVGPlugin.pathDataToBezier('#hero-lbp-path-step2', {align: this._lbpGreenCoin});
        this.heroLbpGreenCoinPath3step = morphSVGPlugin.pathDataToBezier('#hero-lbp-path', {align: this._lbpGreenCoin});
        this.heroLbpGreenCoinPath3step.splice(0, 29);
        this.heroLbpGreenCoinPath4step = morphSVGPlugin.pathDataToBezier('#hero-lbp-path-step3', {align: this._lbpGreenCoin3});

        this.heroTrpPath = morphSVGPlugin.pathDataToBezier('#hero-trp-path', {align: this._trpCoin});
        this.heroTrpPath2 = morphSVGPlugin.pathDataToBezier('#hero-trp-path2', {align: this._trpCoin});

        this.heroTlpPath = morphSVGPlugin.pathDataToBezier('#hero-tlp-path', {align: this._tlpCoin});

        this.heroEyePath1 = morphSVGPlugin.pathDataToBezier('#hero-eye-path1', {align: this.heroEye});
        this.heroEyePath2 = morphSVGPlugin.pathDataToBezier('#hero-eye-path2', {align: this.heroEye});

        this.lbpGreenCoinTl = new TimelineMax({repeat: -1, repeatDelay: 0});

        this.circlesTl = new TimelineMax({repeatDelay: 0, ease: Power1.easeInOut});

        this.trpCoinTl = new TimelineMax();

        this.tlpCoinTl = new TimelineMax({ease: Power0.easeNone});

        this.smallBoxStrokesTl = new TimelineMax({repeat: -1, repeatDelay: 1.1666, ease: Power0.easeNone});

        this.bigBoxStrokesTl = new TimelineMax({repeat: -1, repeatDelay: 0.9666, ease: Power0.easeNone});

        this.heroEyeTl = new TimelineMax();

        this.leftRowCoinsTl = new TimelineMax({repeat: -1, repeatDelay: 2.1666, ease: Power0.easeNone});

        this.middleRowCoinsTl = new TimelineMax({repeat: -1, repeatDelay: 0, ease: Power0.easeNone});

        this.rightRowCoinsTl = new TimelineMax({repeat: -1, repeatDelay: 0.333, ease: Power0.easeNone});

        TweenLite.set(
            [this._circleTop, this._circleBottom],
            {transformOrigin: 'center center', scale: '0.85'}
        );

        this._restartSecondaryTls();
        this._restartHeroTrp();
        this._rightRowCoinsResume();
        this._middleRowCoinsResume();

        CustomEase.create('MediumElastic', 'M0,0,C0,0,0.049,0.675,0.085,1.115,0.108,1.296,0.434,1.004,0.725,1.004,0.83,1.004,1,1,1,1');
        CustomEase.create('HardElastic', 'M0,0,C0,0,0.049,0.675,0.085,1.115,0.126,1.522,0.248,1.34,0.252,1.322,0.281,1.193,0.32,1.006,0.38,1.006,0.742,1.006,0.666,1.003,0.725,1.004,0.83,1.004,1,1,1,1');
        CustomEase.create('BrokenEaseIn', 'M0,0 C0.097,0.075 0.157,0.157 0.226,0.218 0.764,0.692 0.668,0.47 1,1');

        TweenLite.set(
            [this._circleTop, this._circleBottom],
            {transformOrigin: 'center center', scale: '0.85'}
        );

        this.animInitialized = true;
        if (this._active) this._activate();
    }

    resize() {
        // this._deactivate();

        if (this.activated && this.tablet !== isTablet()) {
            // this.activated = false;
            this.tablet = isTablet();

            initHeroBgAsync()
                .then(() => { 
                    this.activated = true;
                    this.initAnimation();
                });
        }
    }
    // STATE -------------------------------------------------------------------

    _restartSecondaryTls() {
        this.circlesTl.restart();
        this.tlpCoinTl.restart();
        this.heroEyeTl.restart();
    }
    _restartHeroTrp() {
        this.trpCoinTl.restart();
    }
    _middleRowCoinsResume() {
        this.middleRowCoinsTl.play();
    }
    _rightRowCoinsResume() {
        this.rightRowCoinsTl.play();
    }

    _activate() {
        this.activated = true;

        if (!this.animInitialized)
            return;

        TweenLite.set(this._lbpGreenCoin, {fill: '#4FE2DF'});
        TweenLite.set(
            [this._lbpGreenCoin3, this._tlpCoin3],
            {xPercent:-70, yPercent:-50}
        );
        TweenLite.set(this._trpCoin, {xPercent:50, yPercent:-50});
        TweenLite.set(
            [this._tlpCoin, this._lbpGreenCoin],
            {xPercent:-50, yPercent:-50}
        );
        TweenLite.set(
            [this.smallBoxStrokes, this.bigBoxStrokes],
            {'stroke-dasharray': 40, 'stroke-dashoffset': -40}
        );

        this.heroLbpGreenCoinTween = TweenMax.to(this._lbpGreenCoin, 0.7333, {bezier:{values: this.heroLbpGreenCoinPath, type:'cubic'}, ease: Power0.easeNone});

        this.heroLbpGreenCoinTween2step = TweenMax.to(this._lbpGreenCoin, 0.5333, {bezier: {values: this.heroLbpGreenCoinPath2step, type:'cubic'}, fill: '#407BF7', ease: 'BrokenEaseIn'});

        this.heroLbpGreenCoinTween3step = TweenMax.to(this._lbpGreenCoin, 0.7333, {bezier:{values: this.heroLbpGreenCoinPath3step, type:'cubic'}, ease: Power0.easeNone});

        this.heroLbpGreenCoinTween2 = TweenMax.to(this._lbpGreenCoin2, 0.333, {x:'200',
            onComplete: () => {
                this._middleRowCoinsResume();
            }
        });

        this.heroLbpGreenCoinTween3 = TweenMax.to(this._lbpGreenCoin3, 0.566, {bezier: {values: this.heroLbpGreenCoinPath4step, type:'cubic'},
            onComplete: () => {
                this._restartSecondaryTls();
            }
        });

        TweenMax.to(this._lbpGreenCoin3, 0.566, {bezier: {values: this.heroLbpGreenCoinPath4step, type:'cubic'},
            onComplete: () => {
                TweenLite.set(this._lbpGreenCoin3, {clearProps: 'all'});
                TweenLite.set(this._lbpGreenCoin3, {xPercent:-70, yPercent:-50});
            }
        }, '+=0.5333');

        this.heroTrpCoinTween = TweenMax.to(this._trpCoin, 0.9, {bezier: {values: this.heroTrpPath, type:'cubic'}, ease: Power0.easeNone});
        this.heroTrpCoinTweenReversed = TweenMax.to(this._trpCoin, 1, {bezier: {values: this.heroTrpPath2, type:'cubic'}, ease: Power0.easeNone}).reversed(true);

        this.heroTlpCoinTween = TweenMax.to(this._tlpCoin, 2.1, {bezier: {values: this.heroTlpPath, type:'cubic'}, ease: Power0.easeNone});
        this.heroTlpCoinTween2step = TweenMax.to(this._tlpCoin2, 0.333, {x:'200',
            onComplete: () => {
                this._rightRowCoinsResume();
            }
        });
        this.heroTlpCoinTween3step = TweenMax.to(this._tlpCoin3, 0.5333, {bezier: {values: this.heroLbpGreenCoinPath4step, type:'cubic'}});

        // green coin time timeline
        this.lbpGreenCoinTl.add(this.heroLbpGreenCoinTween)
            .add(this.heroLbpGreenCoinTween2step)
            .fromTo(this._lbpStrokes, 0.333, {'stroke-dashoffset': -100}, {'stroke-dashoffset': 100}, '-=0.5333')
            .add(this.heroLbpGreenCoinTween3step)
            .add(this.heroLbpGreenCoinTween2.delay(0.1))
            .to(this._lbpGreenCoin2, 0, {'opacity': 1}, '-=0.36')
            .add(this.heroLbpGreenCoinTween3.delay(2.3));

        // circles timeline
        this.circlesTl.to(this._circleTop, 0.36, {y: 7.5, ease: Power0.easeNone})
            .to(this._circleBottom, 0.36, {y: 7.5, ease: Power0.easeNone}, 0.066)

            .to(this._circleTop, 0.566, {y: -15.7, scale: '1', yoyo: true, repeat: 1, ease: Power1.easeInOut})
            .to(this._circleBottom, 0.566, {y: -15.7, scale: '1', yoyo: true, repeat: 1, ease: Power1.easeInOut}, 0.48)

            .to(this._circleTop, 0.65, {y: -7.85, yoyo: true, repeat: 6})
            .to(this._circleBottom, 0.65, {y: -7.85, yoyo: true, repeat: 6}, '-=4.5');

        // top right pipe coin
        this.trpCoinTl.add(this.heroTrpCoinTween.delay(0.1333))
            .to(this._trpCoin, 0, {autoAlpha: 0})
            .to(this._trpCoin, 0, {autoAlpha: 1}, '+=0.1333')
            .add(this.heroTrpCoinTweenReversed.delay(0.2333));

        // top left pipe coin
        this.tlpCoinTl.add(this.heroTlpCoinTween.delay(0.1666))
            .add(this.heroTlpCoinTween2step.delay(0.122))
            .to(this._tlpCoin2, 0, {'opacity': 1}, '-=0.377');

        // small box strokes
        this.smallBoxStrokesTl.staggerTo(this.smallBoxStrokes, 0.333, {'stroke-dashoffset': 0}, 0.016,'+=0.3666')
            .staggerTo(this.smallBoxStrokes, 0.333, {'stroke-dashoffset': 40}, 0.016, '+=0.6333');

        // big box strokes
        this.bigBoxStrokesTl.staggerTo(this.bigBoxStrokes, 0.5333, {'stroke-dashoffset': 0}, 0.02, 0)
            .staggerTo(this.bigBoxStrokes, 0.5333, {'stroke-dashoffset': 40}, 0.02, '+=0.4333');

        // eye
        this.heroEyeTl.to(this.heroEye, 0.7666, {bezier: {values: this.heroEyePath1, type:'cubic'}, ease: Power1.easeInOut}, '+=0.16')
            .to(this.heroEye, 0.8666, {bezier: {values: this.heroEyePath2, type:'cubic'}, ease: Power1.easeInOut}, '+=0.1666')
            .to(this.heroEye, 0.5333, {x: '-=19', y: '+=2', ease: Power0.easeNone}, '+=0.4');

        // coin rows

        // left
        this.leftRowCoinsTl.to(this.leftRowCoins[0], 0.1, {'y': '+=24',
            onStart: () => {
                this._restartHeroTrp();
            }
        }, '+=0.1333')
            .to(this.leftRowCoins[1], 0.1, {'y': '+=24', ease: Power1.easeIn}, '-=0.06')
            .to(this.leftRowCoins[2], 0.1, {'y': '+=24', ease: Power1.easeIn}, '-=0.06')
            .to(this.leftRowCoins[0], 0.1, {'y': '-=24'}, '+=2.3')
            .to(this.leftRowCoins[1], 0.2, {'y': '-=24', ease: 'MediumElastic'}, '-=0.1')
            .to(this.leftRowCoins[2], 0.666, {'y': '-=24', ease: 'HardElastic'}, '-=0.2');

        // middle
        this.middleRowCoinsTl.to(this.middleRowCoins[0], 0.1, {'y': '+=24'}, '+=0.1666')
            .to(this.middleRowCoins[1], 0.1, {'y': '+=24', ease: Power1.easeIn}, '-=0.06')
            .to(this.middleRowCoins[2], 0.1, {'y': '+=24', ease: Power1.easeIn}, '-=0.06')
            .addPause()
            .to(this.middleRowCoins[0], 0.1, {'y': '-=24'})
            .to(this.middleRowCoins[1], 0.2, {'y': '-=24', ease: 'MediumElastic'}, '-=0.1')
            .to(this.middleRowCoins[2], 0.666, {'y': '-=24', ease: 'HardElastic'}, '-=0.2')
            // fake tween for 1 second
            .to(this.middleRowCoins[2], 1, {'y': '-=0'});

        // right
        this.rightRowCoinsTl.to(this.rightRowCoins[0], 0.1, {'y': '+=24'}, '+=0.1333')
            .to(this.rightRowCoins[1], 0.1, {'y': '+=24', ease: Power1.easeIn}, '-=0.06')
            .to(this.rightRowCoins[2], 0.1, {'y': '+=24', ease: Power1.easeIn}, '-=0.06')
            .add(this.heroTlpCoinTween3step.delay(0.1))
            .to(this._tlpCoin3, 0, {'opacity': 0})
            .addPause()
            .to(this.rightRowCoins[0], 0.1, {'y': '-=24'}, '+=0.2333')
            .to(this.rightRowCoins[1], 0.2, {'y': '-=24', ease: 'MediumElastic'}, '-=0.1')
            .to(this.rightRowCoins[2], 0.666, {'y': '-=24', ease: 'HardElastic'}, '-=0.2')
            // fake tween for 1 second
            .to(this.rightRowCoins[2], 1, {'y': '-=0'});

        // start all timeline after return to hero
        this.lbpGreenCoinTl.play(0);
        this.circlesTl.play(0);
        this.trpCoinTl.play(0);
        this.tlpCoinTl.play(0);
        this.smallBoxStrokesTl.play(0);
        this.bigBoxStrokesTl.play(0);
        this.heroEyeTl.play(0);
        this.leftRowCoinsTl.play(0);
        this.middleRowCoinsTl.play(0);
        this.rightRowCoinsTl.play(0);
    }

    _deactivate() {
        if (this.activated)
            this._removeAnimation();
    }

    _removeAnimation() {
        TweenLite.set(
            [this._circleTop, this._circleBottom],
            {transformOrigin: 'center center', scale: '0.85'}
        );
        TweenLite.set(this._tlpCoin2, {'opacity': 0, x: 3, y: 55});
        TweenLite.set(this._lbpGreenCoin2, {'opacity': 0, x: 0, y: 4});
        TweenLite.set(this._tlpCoin3, {'clearProps': 'all'});
        TweenLite.set(
            [this.leftRowCoins, this.rightRowCoins, this.middleRowCoins],
            {'clearProps': 'transform'}
        );
        this.lbpGreenCoinTl.clear(true).pause(0);
        this.circlesTl.clear(true).pause(0);
        this.trpCoinTl.clear(true).pause(0);
        this.tlpCoinTl.clear(true).pause(0);
        this.smallBoxStrokesTl.clear(true).pause(0);
        this.bigBoxStrokesTl.clear(true).pause(0);
        this.heroEyeTl.clear(true).pause(0);
        this.leftRowCoinsTl.clear(true).pause(0);
        this.middleRowCoinsTl.clear(true).pause(0);
        this.rightRowCoinsTl.clear(true).pause(0);

        this.animated = false;
    }

}