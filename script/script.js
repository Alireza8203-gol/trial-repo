const $ = document;
let heroSection = $.querySelector('.hero-section__img');

let clickHandler = (e) => {
    alert('You have Clicked on the Photo')
}

addEventListener('click', clickHandler)
