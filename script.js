import ScrollSuave from './js/scroll-suave.js'
import Accordion from './js/animacao-accordion.js'
import TabNav from './js/navegacao-tab.js'
import Modal from './js/modal.js'
import initTooltip from './js/tooltip.js'
import initDropdownMenu from './js/dropdown-menu.js'
import initMenuMobile from './js/menu-mobile.js'
import initFuncionamento from './js/funcionamento.js'
import initFetchAnimais from './js/fetch-animais.js'
import initFecthBitcoin from './js/fetch-bitcoin.js'
import initAnimacaoScroll from './js/animacao-scroll.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

initAnimacaoScroll();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFecthBitcoin();

const h1 = document.querySelector('h1')
const h1Object = Object.prototype.toString.call(h1);