/* global document */
/* eslint-disable no-new */

import parallax from './parts/parallax';
import initTinySlider from './parts/tiny-slider';
import initPageScroll from './parts/fullPgaeScroll';
import initScrollReval from './parts/scrollReval';
import ToggleMenu from './parts/toggleMenu';

const HOJSIN_SCRIPTS = {
    init() {
        parallax();
        initTinySlider('endPaddingSlider');
        initPageScroll();
        initScrollReval('js_scroll-reval');
        new ToggleMenu('js_menu-toggler', 'js_toggle-menu');
    },
};

document.addEventListener('DOMContentLoaded', () => {
    HOJSIN_SCRIPTS.init();
});
