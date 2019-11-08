// import $ from 'jquery';

const menuItems = [].slice.call(document.querySelectorAll('.menu__item'));
let activeBorder = document.createElement('span');
activeBorder.id = 'active-border';
document.getElementsByClassName('menu-wrap')[0].appendChild(activeBorder);
activeBorder = document.getElementById('active-border');
const setActiveBorder = function() {
    const { left } = $('.menu__item.mouseover').position();
    const width = $('.menu__item.mouseover').width();
    const cssString = `transform:translateX(${left}px); width: ${width}px;`;
    if ([].slice.call(document.querySelectorAll('.mouseover')).length > 0) {
        activeBorder.style = cssString;
    } else {
        activeBorder.style.width = 0;
    }
};

menuItems.forEach(element => {
    $(element).mouseenter(function(){
        $(menuItems).removeClass('mouseover');
        $(this).addClass('mouseover');
        setActiveBorder();
    });
    $(element).mouseleave(function(){
        $(menuItems).removeClass('mouseover');
        $('#active-border').css('width', 0);
    });
});