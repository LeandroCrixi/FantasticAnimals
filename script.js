import ScrollSuave from './js/scroll-suave.js'
import Accordion from './js/animacao-accordion.js'
import TabNav from './js/navegacao-tab.js'
import Modal from './js/modal.js'
import Tooltip from './js/tooltip.js'
import ScrollAnima from './js/animacao-scroll.js'
import DropdownMenu from './js/dropdown-menu.js'
import MenuMobile from './js/menu-mobile.js'
import Funcionamento from './js/funcionamento.js'
import fetchAnimais from './js/fetch-animais.js'
import fecthBitcoin from './js/fetch-bitcoin.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init();

const toolTip = new Tooltip('[data-tooltip]')
toolTip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init()

fetchAnimais('./animais_api.json' ,'.numeros-grid');
fecthBitcoin('https://blockchain.info/ticker', '.btc-preco');

const h1 = document.querySelector('h1')
const h1Object = Object.prototype.toString.call(h1);