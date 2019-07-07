/* global window , document */

function resizeHeaderOnScroll() {
    const shrinkOn = 115;
    const {body} = document;
    const shrinkOnPageWidth = 991;
    const smallHeaderClass = '-width-small-header';

    function toggleClass() {
        const distancy = window.pageYOffset;
        const pageWidth = window.innerWidth;

        if (pageWidth > shrinkOnPageWidth) {
            // eslint-disable-next-line no-unused-expressions
            (distancy > shrinkOn) ? body.classList.add(smallHeaderClass) : body.classList.remove(smallHeaderClass);
            console.log('ppp');
        }
    }

    window.addEventListener('scroll', toggleClass);
}

export default resizeHeaderOnScroll;
