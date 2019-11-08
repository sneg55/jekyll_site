import {TimelineMax, Expo, Power1, TweenLite} from '../../tweenMax.js';

const getBg = () => window.innerWidth > 1080
    ? document.getElementById('green-bg')
    : document.getElementById('green-bg-mobile');

export default function initHeroBgAsync() {
    return new Promise((resolve, reject) => {
        const bg = getBg();
        if (!bg) {
            reject();
            return;
        }

        const loadTimeline = new TimelineMax();
        const lazyShow = document.querySelectorAll('.lazy-show');

        loadTimeline
            .fromTo(bg, 0.9333, {y: -1200, ease: Power1.easeIn}, { y: 0, x: 0})
            .to(lazyShow, 0.375, {autoAlpha: 1, ease: Expo.easeIn,
                onComplete: () => {
                    resolve();
                }
            });
    });
};