import initMenuMobile from './modules/menuMobile.js';
import initScrollSuave from './modules/scrollSuave.js';
import { SlideNav } from './modules/slide.js';
import scrollPage from './modules/scrollPage.js';
import skills from './modules/skills.js';
import projects from './modules/projects.js';
import { planet } from './modules/planet.js';
import svgs from './modules/svg.js';

initMenuMobile();

initScrollSuave();
scrollPage();
svgs();
skills();
projects();
planet(document.querySelector('.planet'));

// const slide = new SlideNav('.slide', '.slide-wrapper');
// slide.init();
// slide.addArrow('.prev', '.next');
// slide.addControl('.custom-control');
