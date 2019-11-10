//import //logger from 'js///logger';

//import { TweenMax, TweenLite, Power0 }    from '../../tweenMax.js';

const morpPlugin = MorphSVGPlugin;


const defaultSettings = {
    ease: Power0.easeInOut,
    defOptions: {
        xPercent: -50,
        yPercent: -50,
        autoAlpha: 0
    },
    repeatDelay: 0,
    startDelay: 0
};

/**
 * @param {DOMNode} el
 * @param {string} path
 */
export default function moveByPAth(el, path, settings = defaultSettings, reverse) {
    if (!el || !path) {
        //logger.warn(`Method moveByPAth: element - ${!!el}, path - ${!!path}`);
        return null;
    }

    const { ease, duration, startDelay, onComplete, onStart, paused } = settings;
    const defOptions = settings.defOptions || defaultSettings.defOptions;

    let elPath = morpPlugin.pathDataToBezier(path, { align: el });

    if (reverse)
        elPath = elPath.reverse();

    const tween = TweenMax.to(el, duration, { bezier: {values: elPath, type:'cubic' }, ease, paused, delay: startDelay, onComplete, onStart });

    TweenLite.set(el, defOptions);

    return tween;
}

