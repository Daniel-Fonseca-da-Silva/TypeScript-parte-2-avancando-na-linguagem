export class View {
    protected elemento: HTMLElement

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    update(model: string): void {
        throw Error('Classe filha precisa implementar o método template')
    }
    

}