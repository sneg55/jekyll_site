//import //logger from 'js///logger';

// core
import Pages from './pages.js';
import inView from '../modules/inView.js';

export default class App
{

    // SETUP -------------------------------------------------------------------

    constructor()
    {
        // //logger.log('App.constructor()');

        // DOM

        this._root;

        // page

        this._pageID;
        this._sections;
        this._numSections;

        this._activeSection;
        this._activeSectionIndex = -1;

        // window

        this._width           = 0.0;
        this._height          = 0.0;
        this._centerY         = 0.0;

        this._scrollPosition  = 0.0;
        this._scrollDirection = -1.0;

        this._setupSections = this._setupSections.bind(this);
        this.resize = this.resize.bind(this);
    }

    setup()
    {
        // //logger.log('App.setup()');

        // store main div
        // this._root = document.getElementById('main');

        this._root = document.body;


        if (!this._root)
            throw new Error('app.js -- No div with ID "main" found.');


        // store page ID
        // this._pageID = (this._root.dataset.pageId || '').toUpperCase();
        this._pageID = "HOME"
        this._page   = Pages[this._pageID];

        const sections = this._root.querySelectorAll('section.safer-section');
        // set up page sections
        this._setupSections(sections);

        this.resize();
        this._start();
    }

    _setupSections(sections)
    {
        if (!sections) {
            //logger.error('_setupSections: NO SECTIONS');
            return;
        }

        this._sections    = [];
        this._numSections = sections.length;

        // sections.forEach(( section, i ) => {
        //     if (this._page[i])
        //         this._sections.push(new this._page[i]({ element: section }));
        // });
        this._sections.push(new this._page[0]({ element: this._root.querySelectorAll('section.safer-section') })); //safer-section


        //logger.log(`Sections (${this._numSections}):`, this._sections);
    }


    // WINDOW ------------------------------------------------------------------

    resize()
    {
        // //logger.log('App.resize()');

        this._width   = document.body.clientWidth;
        this._height  = window.innerHeight;
        this._centerY = this._height * 0.5;

        // sections

        let yPos = 0.0;

        this._sections.forEach(( section ) =>
        {
            section.resize(this._width, this._height, yPos);
            yPos += section.height;
        });

        this.scroll();
    }

    scroll()
    {
        // //logger.log('App.scroll()');

        const scrollPosition  = window.pageYOffset;

        this._scrollDirection = (scrollPosition > this._scrollPosition) ? -1.0 : 1.0;
        this._scrollPosition  =  scrollPosition;

        this._updateSections();
    }


    // STATE -------------------------------------------------------------------

    _start()
    {
        // //logger.log('App._start()');
    }

    _updateSections()
    {
        for (let i = 0; i < this._numSections; i++)
        {
            const section = this._sections[i];
            if (!section)
                continue;
            
            // const inViewKoef = section._el.dataset.inview;

            // if (inView(section._el, inViewKoef))
            //     section.activate(0.0, this._scrollDirection);
            // else
            //     section.deactivate(0.0, this._scrollDirection);

            // I'm not sure I understand the code below, and it seems it works buggy for me
            // const top     = section.y - this._scrollPosition;
            // const bottom  = top + section.height;

            // if (top < this._height - 200.0 && bottom > 200.0)
            //     section.activate(0.0, this._scrollDirection);
            // else
            //     section.deactivate(0.0, this._scrollDirection);
        }
    }


    // UPDATE ------------------------------------------------------------------

    update()
    {
        // //logger.log('App.update()');
    }
}