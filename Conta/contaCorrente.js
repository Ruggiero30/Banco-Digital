import { conta } from "./conta.js";

export class contaCorrente extends conta {
    static numeroDeContas = 0;

    constructor(saldo, cliente, agencia){
        super(saldo, cliente, agencia )
        contaCorrente.numeroDeContas += 1;
        this.bonus = 2;
    }
}