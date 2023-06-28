export default class AnimaNumeros{
    constructor(numeros, observeTarget, observerClass){
        this.numeros = document.querySelectorAll(numeros)
        this.observeTarget = document.querySelector(observeTarget)
        this.observerClass = observerClass
        this.handleMutation = this.handleMutation.bind(this)
    }

    // Recebe um elemento do DOM, com numero em seu texto
    // incrementa a partir de 0 ate o numero final
    static incrementarNumero(numero){
        const total = +numero.innerText;
        const incremento = Math.floor(total/200)
        let start = 0
        const timer = setInterval(() => {
            start += incremento;
            numero.innerText = start;
            if(start > total){
                numero.innerText = new Intl.NumberFormat({ maximumSignificantDigits: 3 }).format(total)
                clearInterval(timer)
            }
        }, 25 * Math.random());
    }

    // Ativa incrementar numero para cada numero selecionado do DOM
    animaNumeros(){
        this.numeros.forEach(numero => this.constructor.incrementarNumero(numero)
        )
    }
    
    // Funcao que ocorre quando a mutacao ocorrer
    handleMutation(mutation){
        if(mutation[0].target.classList.contains(this.observerClass)){
            this.observador.disconnect();
            this.animaNumeros()
        }
    }

    // Adciona o MutationObserver para verificar quando a classe ativo
    // e adicionada ao element target
    addMutationObserver(){
        this.observador = new MutationObserver(this.handleMutation)
        this.observador.observe(this.observeTarget, {attributes: true})
    }

    init(){
        if(this.numeros.length && this.observeTarget){
            this.addMutationObserver()
        }
        return this
    }
}