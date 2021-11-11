import initMenuMobile from './modules/menuMobile.js';
import detalheInicial from './modules/detalheInicial.js';
import initScrollSuave from './modules/scrollSuave.js';
import { SlideNav } from './modules/slide.js';

initMenuMobile();
detalheInicial();
initScrollSuave();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-control');
