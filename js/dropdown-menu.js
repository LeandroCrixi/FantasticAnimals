import outsideClick from "./outsideclick.js"

export default class initDropdownMenu{
    constructor(dropdownMenus, events){
        this.dropdownMenus = document.querySelectorAll(dropdownMenus)
        this.activeClass = 'ativo'
        //define touchstart e click como argumento padrao de events
        // caso o usuario nao defina
        if(events === undefined){
            this.events = ['touchstart', 'click']
        }else{
            this.events = events
        }
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
    }

    // Ativa o dropdown Menu e adiciona
    // a funcao que observa o clique fora dele
    activeDropdownMenu(event){
        event.preventDefault();
        const element = event.currentTarget
        element.classList.toggle(this.activeClass)
        outsideClick(element, this.events, function(){
            element.classList.remove('ativo')
        })
    }

    // Adiciona os eventos ao dropdown menu
    addDropDownMenusEvent(){
        this.dropdownMenus.forEach((menu) =>{
            // menu.addEventListener('touchstart', activeDropdownMenu)
            // menu.addEventListener('click', activeDropdownMenu)
            // or
            this.events.forEach(userEvent =>{
                menu.addEventListener(userEvent, this.activeDropdownMenu)
            })
        })
    }
    init(){
        if(this.dropdownMenus.length){
            this.addDropDownMenusEvent()
        }
        return this
    }
}