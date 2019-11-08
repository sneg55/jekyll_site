// core
import Component from 'core/component';

// libs
// import TweenLite from 'gsap';


export default class Visual extends Component
{

    // SETUP -------------------------------------------------------------------

    _setup( config )
    {
        this._el = config.el;
        TweenLite.set(this._el, { alpha: 0.0 });
    }


    // STATE -------------------------------------------------------------------

    _activate( delay, direction )
    {
        TweenLite.killTweensOf(this._el);
        TweenLite.fromTo(this._el, 1.72, { y: direction * -52.0 }, { y: 0.0, force3D: true, alpha: 1.0, ease: 'Circ.easeOut', delay: delay });
    }

    _deactivate( delay, direction )
    {
        TweenLite.killTweensOf(this._el);
        TweenLite.to(this._el, 0.76, { y: direction * 22.0, force3D: true, alpha: 0.0, ease: 'Sine.easeInOut', delay: delay });
    }
}