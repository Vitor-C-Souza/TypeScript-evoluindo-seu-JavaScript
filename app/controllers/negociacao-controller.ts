import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()

    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }

    adiciona(): void{
        const negociacao = this.CriaNegociacao()
        this.negociacoes.adiciona(negociacao)
        this.negociacoes.lista()
        negociacao.data.setDate(12)
        console.log(this.negociacoes.lista())
        this.limparFormulario()
    }

    CriaNegociacao(): Negociacao {
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp,','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(date, quantidade, valor)
    }

    limparFormulario(): void {
        this.inputValor.value = ''
        this.inputQuantidade.value = ''
        this.inputData.value = ''
        this.inputData.focus()

    }
}