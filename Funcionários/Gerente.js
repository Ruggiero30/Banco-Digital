import { funcionarios } from "./funcionarios.js";

export class gerente extends funcionarios{
    constructor(nome, salario, cpf){
    super(nome, salario, cpf);
    this._bonus = 2
    }
   
}