// core
import Section      from '../../core/section.js';

export default class TeamSection extends Section {
    _setupSection(){
        this.initiateWindows();
    }

    initiateWindows() {
        const team = this._el.querySelectorAll('.team__photo');

        team.forEach(card => {
            card.addEventListener('click', () => {
                if (!card.classList.contains('active')) {
                    card.classList.add('active');
                    setTimeout(() => {
                        card.classList.remove('active');
                    }, 2000);
                }
            });
        });
    }
}