function initLazyObjects() {
    const els = document.querySelectorAll('.lazy');

    els.forEach(el => {
        el.setAttribute('data', el.getAttribute('data-data'));
    });
}

initLazyObjects();