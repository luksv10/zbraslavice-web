/* eslint-disable no-undef */

import {tns} from '../../../../node_modules/tiny-slider/src/tiny-slider';

export default function initTinySlider(elId) {
    const el = document.querySelector(`#${elId}`);

    if (!el) {
        return;
    }

    tns({
        container: el,
        items: 3,
        nav: false,
        controlsPosition: 'bottom',
        speed: 400,
        slideBy: 1,
        swipeAngle: false,
        mouseDrag: true,
        responsive: {
            310: {
                items: 1,
                edgePadding: 10,
            },
            370: {
                items: 1,
                edgePadding: 30,
            },
            500: {
                items: 1,
                edgePadding: 50,
            },
            620: {
                items: 2,
                edgePadding: 40,
            },
            700: {
                items: 2,
                edgePadding: 40,
            },
            820: {
                items: 2,
                edgePadding: 90,
            },
            1100: {
                items: 3,
                edgePadding: 100,
            },
            1340: {
                items: 3,
                edgePadding: 210,
            },
        },
    });
}
