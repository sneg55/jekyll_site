import 'jquery-popup-overlay';
import './modules/polyfills';
import './modules/anchors';
import './modules/mobileMenu';
import './modules/lazyLoad';
import './modules/common';

//import //logger from './//logger';

import App from './core/app.js';
import isIe from './modules/isIE.js';
import initHeroBgAsync from './modules/heroBgAnimation.js';
import toggleHeader, { initHeader } from './modules/header.js';
import { roundNails } from './modules/roundSize.js';
import '../sass/ie.sass';
import '../sass/main.sass';

const body = document.querySelector('body');
const html = document.querySelector('html');

/** @type {HTMLElement} */
const main = document.querySelector('main');
/** @type {HTMLElement} */
const header = document.querySelector('header');

// if the browser isn't IE, go animations

if (!isIe()) {
    // re-enable scroll
    html.style.overflowY = 'auto';

    const app = new App();
    // WINDOW ----------------------------------------------------------------------

    const resize = () => {
        app.resize();
        roundNails();
    };

    const scroll = () => {
        app.scroll();
        toggleHeader();
    };

    // UPDATE ----------------------------------------------------------------------
    const update = () => {
        app.update();
        window.requestAnimationFrame(update);
    };

    initHeroBgAsync()
        .catch(() => {
            //logger.log('no bg animation');
            makeVisible(main);
            makeVisible(header);
        })
        .then(() => {
            //logger.log('initHeroBgAsync then ');

            // the power on appReady – can be subscribed anytime
            window.appReady(() => {
                //logger.log('appReady');

                app.setup();

                roundNails();
                initHeader();

                window.onresize = resize;
                window.onscroll = scroll;
            });
        })
        .catch(err => console.error('Failed to setup app', err));

// if the browser is IE, run
} else {
    body.removeChild(main);
    body.removeChild(header);

    const ieMain = document.createElement('main');
    const ieScreen = require('./modules/iePlaceholder').default;

    ieMain.innerHTML = ieScreen;
    makeVisible(ieMain);

    body.appendChild(ieMain);
}

/** @param {HTMLElement} el */
function makeVisible(el) {
    el.style.visibility = 'visibble';
    el.style.opacity = 1;
}
