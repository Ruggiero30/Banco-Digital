import { funcionarios } from "./funcionarios.js";

export class diretor  extends funcionarios {
    constructor(nome, salario, cpf, apelido){
    super(nome, salario, cpf, apelido);
    this._bonus = 4;

    }
    
}