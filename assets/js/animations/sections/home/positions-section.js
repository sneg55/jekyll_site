// core
import Section      from '../../core/section.js';

export default class PositionsSection extends Section
{

    // SETUP -------------------------------------------------------------------

    _setupSection( config )
    {
        // const items = this._el.querySelectorAll('.explore-item');

        // this._itemLeft  = new ExploreItem({ el: items[0] });
        // this._itemRight = new ExploreItem({ el: items[1] });
    }


    // STATE -------------------------------------------------------------------

    _activate( delay, direction )
    {
        // this._itemLeft.activate(delay, direction);
        // this._itemRight.activate(delay + 0.12, direction);
    }

    _deactivate( delay, direction )
    {
        // this._itemLeft.deactivate(delay, direction);
        // this._itemRight.deactivate(delay + 0.12, direction);
    }
}