export interface IContainer {
    infoModal: boolean,
    infoModalActived: number,
    createModal: boolean,
    editForm: boolean,
    user: string,
    isLogged: boolean,
}

export interface IPenal {
    id: number
    nome: string
    descricao: string
    dataCriacao: string
    multa: number
    tempoPrisao: number
    status: number
}