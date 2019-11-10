// core
import Section      from '../../core/section.js';

import MarginComponent from '../../components/home/marginSectionVisual';
import CustomEase from '../../modules/CustomEase';

export default class MarginSection extends Section
{
    // SETUP -------------------------------------------------------------------

    _activate() {
        const mc1 = new MarginComponent(
            document.getElementById('benefits-safe'),
            [
                {
                    id: 'l-ball-safe', 
                    animation: {
                        duration: 1.5,
                        settings: { 
                            bezier: {values: [{y: -30}, {y: 0}]},
                            ease: CustomEase.create('custom', 'M0,0,C0.248,0,0.298,0.5,0.5,0.5,0.702,0.5,0.746,1,1,1')
                        }
                    }
                },
            ]
        );

        const mc2 = new MarginComponent(
            document.getElementById('benefits-passive'),
            [
                {
                    id: 'l-ball-passive', 
                    animation: {
                        duration: 1.12,
                        settings: { 
                            bezier: {values: [
                                {y: 10, x: 40}, 
                                {y: 100, x: 100}, 
                                {y: 200, x: 0}, 
                                {y: 100, x: -100}, 
                                {y: 15, x: -40}, 
                                {y: 0, x: 0},
                            ]},
                            // bezier: {values: bezier},
                            ease: CustomEase.create('custom', 'M0,0 C0.75,0.002 0.106,1.002 1,1'),
                            delay: 0.3
                        }
                    }
                },
            ]
        );

        const mc3 = new MarginComponent(
            document.getElementById('benefits-fees'),
            [
                {
                    id: 'l-ball-fees', 
                    animation: {
                        duration: 1.5,
                        settings: { 
                            bezier: {values: [{y: 25}, {y: 0}]}, 
                            ease: CustomEase.create('custom', 'M0,0,C0.248,0,0.298,0.5,0.5,0.5,0.702,0.5,0.746,1,1,1'),
                        }
                    }
                },
                {
                    id: 's-ball-fees', 
                    animation: {
                        duration: 1.5,
                        settings: { 
                            bezier: {values: [{y: -35}, {y: 0}]}, 
                            ease: CustomEase.create('custom', 'M0,0,C0.248,0,0.298,0.5,0.5,0.5,0.702,0.5,0.746,1,1,1'),
                        }
                    }
                },
            ]
        );
    }
}