// shortcut print
function print(x){
    console.log(x);
}


function initTabNav(){
    const tabMenu = document.querySelectorAll('.js-tabMenu li')
    const tabContent = document.querySelectorAll('.js-tabContent section')

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo')

        function activeTab(index){
            tabContent.forEach((section) =>{
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', function(){
                activeTab(index)
            })
        })
    }
}

function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt')
    const ativo = 'ativo'
    if(accordionList.length){
        accordionList[0].classList.add(ativo)
        accordionList[0].nextElementSibling.classList.add(ativo)

        function activeAccordion(){
            this.classList.toggle(ativo)
            this.nextElementSibling.classList.toggle(ativo)
        }

        accordionList.forEach((item) =>{
            item.addEventListener('click', activeAccordion)
        })
    }
}

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        // Forma Alternativa
        // const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth',
        // })
    }

    linksInternos.forEach((link) =>{
        link.addEventListener('click', scrollToSection)
    })
}


function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll')
    if(sections.length){
        const windowMetade = window.innerHeight * 0.6;
        function animaScroll(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top - windowMetade;
                if(sectionTop < 0){
                    section.classList.add('ativo')
                }
            })
        }
        animaScroll()
        window.addEventListener('scroll', animaScroll)
    }
}


initTabNav();
initAccordion();
initScrollSuave();
initAnimacaoScroll()