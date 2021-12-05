
export class conta {
    constructor(saldo, cliente, agencia){
        this.saldo = saldo;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }else{
            console.log("Desculpe, você não tem saldo suficiente.")
        }
        
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }

    transferir(valor, contaCorrente){
        const valorSacado = this.sacar(valor);
        contaCorrente.depositar(valorSacado);
        
    }
}