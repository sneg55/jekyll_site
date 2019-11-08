
// import $ from 'jquery';
// //import { TweenMax, Power1 } from '../../tweenMax.js';
// import fullpage from "fullpage.js/dist/fullpage.extensions.min.js";

window.jQuery = $;
window.$ = $;
// window.fullpage_api = fullpage;

/* $(function() {
    new fullpage('#fullpage', {
        autoScrolling:true,
        scrollHorizontally: true,
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        verticalCentered: true
    });

    fullpage_api.setAllowScrolling(false);
}); */

window.onbeforeunload = function () {
    TweenMax.to('body', 0.5, { opacity: 0, ease: Power1.easeInOut });
    // TweenMax.to('#green-bg', 0.5, { opacity: 0 });
    // document.querySelector('main').style.opacity = 0;
    // document.querySelector('header').style.opacity = 0;

    // window.scrollTo(0,0);
};

$('.mailing-list').click(function(e) {
    if (window.showMailingPopUp) {
        e.preventDefault();
        window.showMailingPopUp();
    }
});

$('.info-container').popup({
    type: 'tooltip',
    vertical: 'center',
    horizontal: 'right',
    transition: '0.3s all 0.1s'
});