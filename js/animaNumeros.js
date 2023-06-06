export default function initAnimaNumeros(){

    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]')
        numeros.forEach((n) =>{
            const total = +n.innerText;
            const incremento = Math.floor(total/200)

            let start = 0
            const timer = setInterval(() => {
                start = start + incremento;
                n.innerText = start;
                if(start > total){
                    n.innerText = new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(total)
                    clearInterval(timer)
                }
            }, 25 * Math.random());
        })
    }
    
    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')){
            observador.disconnect();
            animaNumeros()
        }
    }
    const observeTarget = document.querySelector('.numeros')
    const observador = new MutationObserver(handleMutation)

    observador.observe(observeTarget, {attributes: true})
}