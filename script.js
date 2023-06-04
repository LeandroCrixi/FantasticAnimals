import initScrollSuave from './js/scroll-suave.js'
import initAnimacaoScroll from './js/animacao-scroll.js'
import initTabNav from './js/navegacao-tab.js'
import initAccordion from './js/animacao-accordion.js'

// shortcut print
function print(x){
    console.log(x);
}

initScrollSuave();
initTabNav();
initAccordion();
initAnimacaoScroll();

const h1 = document.querySelector('h1')
const h1Object = Object.prototype.toString.call(h1);