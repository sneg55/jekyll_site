let bigWheel = $('#big-wheel');

var targetHistory = document.getElementById('visible-wheel');
var options = {
    threshold: 0
};

function startRotateWheel() {
    let timeline = new TimelineMax();
    TweenLite.set(bigWheel, {transformOrigin: 'center center'});
    let allAnimation = new TimelineMax({ repeat: -1 })
        .to(bigWheel, 10, {ease: Power0.easeNone, rotation: 360});

    timeline
        .add(allAnimation)
}

var observer = new IntersectionObserver(entries => {    
    entries.forEach(entry => {        
        if (entry.intersectionRatio > 0) {
            startRotateWheel();
        }
    });
}, options);

observer.observe(targetHistory);