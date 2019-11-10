// core
import Component from '../core/component.js';

// libs
// import $ from 'jquery';
// import {TweenLite} from '../tweenMax.js';


export default class Section extends Component
{

    // SETUP -------------------------------------------------------------------

    _setup( config )
    {
        // DOM

        this._el     = config.element;
        // this._$el    = $(this._el);

        this._y      = 0.0;
        this._height = 0.0;

        // setup

        this._setupSection(config);
        this.resize();
        TweenLite.to(this._el, 1.15, { autoAlpha: 1.0, ease: 'Sine.easeInOut', delay: 0.54 });
    }

    /* abstract -- override in sub class to set up section */
    _setupSection( config ) {
    }


    // WINDOW ------------------------------------------------------------------

    resize( width, height, yPos )
    {

        this._y      = yPos;
        // this._height = this._$el.outerHeight();
        this._height = this._el.outerHeight;
    }


    // STATE -------------------------------------------------------------------

    /* abstract -- override in sub class to activate / deactivate section */
    _activate( delay, direction )
    {
        // TweenLite.killTweensOf(this._el);
        // TweenLite.to(this._el, 0.82, { alpha: 1.0, y: 0, force3D: true, ease: 'Cubic.easeOut', delay: delay });
    }

    _deactivate( delay, direction )
    {
        // TweenLite.killTweensOf(this._el);
        // TweenLite.to(this._el, 0.45, { alpha: 0.0, y: direction * 100.0, force3D: true, ease: 'Cubic.easeIn', delay: delay });
    }


    // ACCESSORS ---------------------------------------------------------------

    get y()
    {
        return this._y;
    }

    get height()
    {
        return this._height;
    }
}