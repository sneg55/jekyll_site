let leftCoin = $('#left_x5F_coin');
let rightCoin = $('#right_x5F_coin');
let leftEye = $('#long-left-eye');
let rightEye = $('#long-right-eye');
let longWheel = $('#long-wheel');

function animateLongPositions() {   
    let timeline = new TimelineMax();

    const coinDuration = 1;
    const eyeDuration = 1;    

    TweenLite
        .set(longWheel, {
            transformOrigin: 'center center'
        });

    let leftEyeTween = TweenLite
        .to(leftEye, eyeDuration, {
            x: 9
        });
    let rightEyeTween = TweenLite
        .to(rightEye, eyeDuration, {
            x: -9
        });

    let leftTweenForward = TweenLite
        .to(leftCoin, coinDuration, {
            ease: Power0.easeNone,
            x: 170,
            onStart: () => { leftEyeTween.restart(); }
        });
    let leftTweenBackward = TweenLite
        .to(leftCoin, coinDuration, {
            ease: Power0.easeNone,
            x: -260,
            onStart: () => { leftEyeTween.reverse(); }
        });
    let rightTweenForward = TweenLite
        .to(rightCoin, coinDuration, {
            x: -620,
            onStart: () => { rightEyeTween.restart(); }
        });
    let rightTweenBackward = TweenLite
        .to(rightCoin, coinDuration, {
            x: -240,
            onStart: () => { rightEyeTween.reverse(); },
            onComplete: () => {
                setTimeout(() => {
                    timeline.restart();
                }, 500);
            }
        });
    let wheelTween = TweenLite
        .to(longWheel, 0.75, {
            rotation: 360
        });

    timeline
        .add(leftTweenForward)
        .add(rightTweenForward)
        .add(wheelTween, '+=0.2')
        .add(leftTweenBackward, 'go-back')
        .add(rightTweenBackward, 'go-back');
}

animateLongPositions();
