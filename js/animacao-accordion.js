export default class Accordion{
    constructor(list){
        this.accordionList = document.querySelectorAll(list)
        this.activeClass = 'ativo';
    }

    toggleAccordion(item){
        item.classList.toggle(this.activeClass)
        item.nextElementSibling.classList.toggle(this.activeClass)
    }

    addAccordionEvent(){
        this.accordionList.forEach((item) =>{
            item.addEventListener('click', () => this.toggleAccordion(item))
        })
    }

    init(){
        if(this.accordionList.length){
            this.toggleAccordion(this.accordionList[0])
            this.addAccordionEvent()
        }
        return this
    }
}

// export default function initAccordion(){
//     const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
//     const ativo = 'ativo'
//     if(accordionList.length){
//         accordionList[0].classList.add(ativo)
//         accordionList[0].nextElementSibling.classList.add(ativo)

//         function activeAccordion(){
//             this.classList.toggle(ativo)
//             this.nextElementSibling.classList.toggle(ativo)
//         }

//         accordionList.forEach((item) =>{
//             item.addEventListener('click', activeAccordion)
//         })
//     }
// }