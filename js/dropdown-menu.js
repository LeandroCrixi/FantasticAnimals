import outsideClick from "./outsideclick.js"

export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')

    dropdownMenus.forEach((menu) =>{
        // menu.addEventListener('touchstart', handleClick)
        // menu.addEventListener('click', handleClick)
        // or
        ['touchstart', 'click'].forEach(userEvent =>{
            menu.addEventListener(userEvent, handleClick)
        })
    })

    function handleClick(event){
        event.preventDefault();
        this.classList.toggle('ativo')
        outsideClick(this, ['touchstart', 'click'], function(){
            this.classList.remove('ativo')
        })
    }
}