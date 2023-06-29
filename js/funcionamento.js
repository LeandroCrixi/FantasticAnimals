export default class Funcionamento{
    constructor(funcionamento, activeClass){
        this.funcionamento = document.querySelector(funcionamento)
        this.activeClass = activeClass
    }

    dadosFuncionamento(){
        this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number)
    }

    dadosAgora(){
        this.dataAgora = new Date()
        this.diaAgora = this.dataAgora.getDay()
        // this.horarioAgora = this.dataAgora.getUTCHours() - 3; // horario do Brasil
        this.horarioAgora = this.dataAgora.getUTCHours(); // horario UTC
    }

    estaAberto(){
        const isAberto = this.diasSemana.indexOf(this.diaAgora) !== -1
        const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1])

        return isAberto && horarioAberto
    }

    ativaAberto(){
        if(this.estaAberto()){
            this.funcionamento.classList.add(this.activeClass)
        }
    }

    init(){
        if(this.funcionamento){
            this.dadosFuncionamento()
            this.dadosAgora()
            this.ativaAberto()
        }
        return this
    }
}