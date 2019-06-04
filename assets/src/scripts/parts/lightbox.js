import baguetteBox from 'baguettebox.js';

export default function initLightBox(elClass) {
    baguetteBox.run(`.${elClass}`);
}
