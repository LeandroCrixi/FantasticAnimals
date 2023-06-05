import initScrollSuave from './js/scroll-suave.js'
import initAnimacaoScroll from './js/animacao-scroll.js'
import initTabNav from './js/navegacao-tab.js'
import initAccordion from './js/animacao-accordion.js'
import initModal from './js/modal.js'
import initTooltip from './js/tooltip.js'
import initDropdownMenu from './js/dropdown-menu.js'

// shortcut print
function printOut(x){
    console.log(x);
}

initScrollSuave();
initTabNav();
initAccordion();
initAnimacaoScroll();
initModal();
initTooltip();
initDropdownMenu();

const h1 = document.querySelector('h1')
const h1Object = Object.prototype.toString.call(h1);