import {cliente} from "./Clientes/cliente.js"
import { conta } from "./Conta/conta.js"
import {contaCorrente} from "./Conta/contaCorrente.js"
import {contaPoupança} from "./Conta/contaPoupança.js"
import { funcionarios } from "./Funcionários/funcionarios.js"
import {gerente} from "./Funcionários/Gerente.js"
import { diretor } from "./Funcionários/Diretor.js"
import { sistemaDeAutenticção } from "./Autenticação.js"





const cliente1 = new cliente("Eduardo",28839839839, 2903);   

// duas formas de botarmos o código, tem do jeito que eu botei o cliente1 e tem do jeito que eu botei o cliente2. cliente1 foi feito com constructores e o dois não.
const cliente2 = new cliente();

cliente2.nome = "Beatriz";
cliente2._cpf = 676838268;
cliente2._senha = 2787



let numeroDeContas = 0;


// null = nulo, não tem valor a variável, porém foi posto de propósito, ou seja, ninguém esqueceu de por. 
// undefined = alguém esqueceu de atribuir um valor a determinada variável.

// console.log(cliente1);
// console.log(cliente2);

const contaCorrenteCliente1 = new contaCorrente();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.saldo = 500;
contaCorrenteCliente1.cliente = cliente1



const contaCorrenteCliente2 = new contaCorrente(5000, cliente2, 1001);
contaCorrenteCliente2.sacar(1000)
console.log(contaCorrenteCliente2)
     



const contaPoupança1 = new contaPoupança(500, cliente1, 1002)
contaPoupança1.depositar(30);
const valorSaque = contaPoupança1.sacar(70)




contaCorrenteCliente1.depositar(30);
contaCorrenteCliente1.depositar(100);
const valorSacado = contaCorrenteCliente1.sacar(100);
// console.log(valorSacado)
contaCorrenteCliente1.transferir(200,contaCorrenteCliente2)
contaCorrenteCliente2.transferir(30,contaCorrenteCliente1)

console.log(contaCorrente.numeroDeContas)


// console.log(contaPoupança1)

// console.log(contaPoupança1);
// console.log(valorSaque)

// deixei os consoles.logs como comentários para não atrapalhar quando eu rodar o console.log dos funcionários.

// porcentagem: 1.1 = 10% , 1.2 = 20%, 1.3 = 30%, 1.4 = 40%... e assim por diante

const diretor1 = new diretor("Ruggiero", 20000, 17175523542, "dudu");
diretor1.cadastrarSenha(1234)

const diretor2 = new diretor("Marcelo", 3000, 2348920, "marcelão")
diretor2.cadastrarSenha(3639)

const gerente1 = new gerente("Jose", 10000, 23345678);


 const entrar =  sistemaDeAutenticção.login(diretor2, 3639)
 console.log(entrar)

 const loginCliente = sistemaDeAutenticção.login(cliente1, 2903)
 console.log(loginCliente)

 
 