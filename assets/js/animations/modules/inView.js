export default function inView(el, koef) {
    if (!el)
        return undefined;

    const elHeight = el.clientHeight;

    const w = window; // window
    const deviation = elHeight * (koef || 0.25);

    const wt = w.pageYOffset; // window top
    const wb = wt + w.innerHeight; // window bottom
    const et = wt + el.getBoundingClientRect().top; // element top
    const eb = et + elHeight; // element bottom

    return  wb > et + deviation && wt < eb - deviation || eb <= 0;
}


/**
 *
 *---------------------- wt
 * 
 * 
 * 
 * 
 * |=======| et
 *-|-------|------------ wb
 * |       |
 * |=======| eb
 * 
 */