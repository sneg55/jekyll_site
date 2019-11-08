// core
import Component from 'core/component';

// components
import Icon      from 'components/common/icon';
import TextBlock from 'components/common/text-block';
import Button    from 'components/common/button';

// modules
import blink    from 'modules/blink';
import scramble from 'modules/scramble';

// libs
import TweenLite from 'gsap';


export default class ExploreItem extends Component
{

    // SETUP -------------------------------------------------------------------

    _setup( config )
    {
        // icon

        this._icon = new Icon({ el: config.el.querySelector('.js-icon') });

        // text

        const content = config.el.querySelector('.js-content-block');
        const title   = content.querySelector('h3');
        const text    = content.querySelector('p');

        this._textBlock = new TextBlock({ title: title, text: text });

        // button

        const button = content.querySelector('a');
        this._button = new Button({ el: button, label: button.querySelector('span') });
    }


    // STATE -------------------------------------------------------------------

    _activate( delay, direction )
    {
        let iconDelay      = 0.0;
        let textBlockDelay = 0.23;

        if (direction === 1) {

            iconDelay = 0.23;
            textBlockDelay = 0.0;
        }

        this._icon.activate(delay + iconDelay, direction);
        this._textBlock.activate(delay + textBlockDelay, direction);

        this._button.activate(delay + 0.61, direction);
    }

    _deactivate( delay, direction )
    {
        this._icon.deactivate(delay, direction);
        this._textBlock.deactivate(delay, direction);
        this._button.deactivate(delay, direction);
    }
}