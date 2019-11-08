let basket1 = $('#basket-1');
let basket2 = $('#basket-2');
let basket3 = $('#basket-3');
let basket4 = $('#basket-4');
let basket5 = $('#basket-5');
let basket6 = $('#basket-6');
let basket7 = $('#basket-7');
let basket8 = $('#basket-8');
let basket9 = $('#basket-9');
let basket10 = $('#basket-10');
let basket11 = $('#basket-11');
let basket12 = $('#basket-12');

let basket1Tween;
let basket2Tween;
let basket3Tween;
let basket4Tween;
let basket5Tween;
let basket6Tween;
let basket7Tween;
let basket8Tween;
let basket9Tween;
let basket10Tween
let basket11Tween;
let basket12Tween;

let currentlyButton;
let count = true;

function clearFirstParams() {
    TweenLite.set(
        [
            basket1,
            basket2,
            basket3,
            basket4,
            basket5
        ],
        { clearProps: 'all' }
    );
}
function clearSecondParams() {
    TweenLite.set(
        [
            basket6,
            basket7,
            basket8,
            basket9,
            basket10
        ],
        { clearProps: 'all' }
    );
}
function clearThirdParams() {
    TweenLite.set(
        [
            basket11,
            basket12
        ],
        { clearProps: 'all' }
    );
}
function forwardFirst() {
    let timeline = new TimelineMax();

    basket1Tween = TweenLite
        .to(basket1, 1, {
            x: -57,
            delay: 0,
            ease: Power0.easeNone
        });
    basket2Tween = TweenLite
        .to(basket2, 0.8, {
            x: 90,
            delay: -0.8,
            ease: Power0.easeNone
        });
    basket3Tween = TweenLite
        .to(basket3, 0.6, {
            x: 207,
            delay: -0.6,
            ease: Power0.easeNone
        });
    basket4Tween = TweenLite
        .to(basket4, 0.4, {
            x: 323,
            delay: -0.4,
            ease: Power0.easeNone
        });
    basket5Tween = TweenLite
        .to(basket5, 0.2, {
            x: 468,
            delay: -0.2,
            ease: Power0.easeNone
        }
        );
    timeline
        .add(basket1Tween)
        .add(basket2Tween)
        .add(basket3Tween)
        .add(basket4Tween)
        .add(basket5Tween);
}
function backFirst() {
    let timeline = new TimelineLite();

    basket1Tween = TweenLite
        .to(basket1, 0.2, {
            x: -1200,
            delay: 0,
            ease: Power0.easeNone
        });
    basket2Tween = TweenLite
        .to(basket2, 0.4, {
            x: -1200,
            delay: -0.2,
            ease: Power0.easeNone
        });
    basket3Tween = TweenLite
        .to(basket3, 0.6, {
            x: -1200,
            delay: -0.4,
            ease: Power0.easeNone
        });
    basket4Tween = TweenLite
        .to(basket4, 0.8, {
            x: -1200,
            delay: -0.6,
            ease: Power0.easeNone
        });
    basket5Tween = TweenLite
        .to(basket5, 1, {
            x: -1200,
            delay: -0.8,
            ease: Power0.easeNone,
            onComplete: () => {
                clearFirstParams();
            }
        });
    timeline
        .add(basket1Tween)
        .add(basket2Tween)
        .add(basket3Tween)
        .add(basket4Tween)
        .add(basket5Tween)
}
function forwardSecond() {
    let timeline = new TimelineMax();

    basket6Tween = TweenLite
        .to(basket6, 1, {
            x: -350,
            delay: 0,
            ease: Power0.easeNone
        });
    basket7Tween = TweenLite
        .to(basket7, 0.8, {
            x: -203,
            delay: -0.8,
            ease: Power0.easeNone
        });
    basket8Tween = TweenLite
        .to(basket8, 0.6, {
            x: -87,
            delay: -0.6,
            ease: Power0.easeNone
        });
    basket9Tween = TweenLite
        .to(basket9, 0.4, {
            x: 30,
            delay: -0.4,
            ease: Power0.easeNone
        });
    basket10Tween = TweenLite
        .to(basket10, 0.2, {
            x: 174,
            delay: -0.2,
            ease: Power0.easeNone
        });
    timeline
        .add(basket6Tween)
        .add(basket7Tween)
        .add(basket8Tween)
        .add(basket9Tween)
        .add(basket10Tween)
}
function backSecond() {
    let timeline = new TimelineMax();

    basket6Tween = TweenLite
        .to(basket6, 0.2, {
            x: -1200,
            delay: 0,
            ease: Power0.easeNone
        });
    basket7Tween = TweenLite
        .to(basket7, 0.4, {
            x: -1200,
            delay: -0.2,
            ease: Power0.easeNone
        });
    basket8Tween = TweenLite
        .to(basket8, 0.6, {
            x: -1200,
            delay: -0.4,
            ease: Power0.easeNone
        });
    basket9Tween = TweenLite
        .to(basket9, 0.8, {
            x: -1200,
            delay: -0.6,
            ease: Power0.easeNone
        });
    basket10Tween = TweenLite
        .to(basket10, 1, {
            x: -1200,
            delay: -0.8,
            ease: Power0.easeNone,
            onComplete: () => {
                clearSecondParams();
            }
        });
    timeline
        .add(basket6Tween)
        .add(basket7Tween)
        .add(basket8Tween)
        .add(basket9Tween)
        .add(basket10Tween)
}
function forwardThird() {
    let timeline = new TimelineMax();

    basket11Tween = TweenLite
        .to(basket11, 1, {
            x: -435,
            delay: 0,
            ease: Power0.easeNone
        });
    basket12Tween = TweenLite
        .to(basket12, 0.8, {
            x: -145,
            delay: -0.8,
            ease: Power0.easeNone
        });
    timeline
        .add(basket11Tween)
        .add(basket12Tween)
}
function backThird() {
    let timeline = new TimelineMax();

    basket11Tween = TweenLite
        .to(basket11, 0.2, {
            x: -1400,
            delay: 0,
            ease: Power0.easeNone
        });
    basket12Tween = TweenLite
        .to(basket12, 0.4, {
            x: -1400,
            delay: -0.2,
            ease: Power0.easeNone,
            onComplete: () => {
                clearThirdParams();
            }
        });
    timeline
        .add(basket11Tween)
        .add(basket12Tween)
}

$('#button2017').click(function () {
    console.log(this.id);

    switch (currentlyButton) {
        case 1:
            backFirst();
            forwardThird();
            break;
        case 2:
            backSecond();
            forwardThird();
            break;

        default:
    }
    currentlyButton = 3;
});
$('#button2018').click(function () {
    console.log(this.id);
    switch (currentlyButton) {
        case 3:
            backThird();
            forwardSecond();
            break;
        case 1:
            backFirst();
            forwardSecond();
            break;
        default:
    }
    currentlyButton = 2;
});
$('#button2019').click(function () {
    console.log(this.id);
    switch (currentlyButton) {
        case 2:
            backSecond();
            forwardFirst();
            break;
        case 3:
            backThird();
            forwardFirst();
            break;
        default:

    }
    currentlyButton = 1;
})

var targetHistory = $('#history-section')[0];
var options = {
    threshold: 0.75
};

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && count) {
            count = false;
            currentlyButton = 1;
            forwardFirst();
        }
    });
}, options);

observer.observe(targetHistory);
