


export class funcionarios {
    constructor(nome, salario, cpf, apelido){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        this._apelido = apelido;

      
        this._senha;
        

    }

    get senha(){
        return this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
        
    }
}