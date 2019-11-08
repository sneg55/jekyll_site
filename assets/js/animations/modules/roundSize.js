export default function roundSize(nodes, styles) {
    if (!styles || !styles.length || !nodes)
        return;

    nodes.forEach(node => {
        for (let i = 0; i < styles.length; i += 1) {
            node.style[styles[i]] = `${Math.round(parseFloat(window.getComputedStyle(node)[styles[i]]))}px`;
        }
    });
}

const nails = document.querySelectorAll('.button__nail');

export function roundNails() {
    roundSize(nails, ['height', 'width']);
}