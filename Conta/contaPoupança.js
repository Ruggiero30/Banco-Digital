import { conta } from "./conta.js";

 export class contaPoupança extends conta {
    constructor(saldo, cliente, agencia){
       super(saldo, cliente, agencia)
       this.bonus = 459;
    }
    
    sacar(valor){
        let taxa = 1.20;
        const valorSaque = taxa * valor;
        if(this.saldo >= valorSaque){
            this.saldo -= valorSaque;
            return valorSaque;
        }else{
            console.log("Desculpe, você não tem saldo suficiente.")
        }
        
    }

   
}