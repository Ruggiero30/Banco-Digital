
export class sistemaDeAutenticção {
    static login(autenticar, senha){
        return autenticar._senha == senha;
    }
}
// autenticar significa que qualquer classe que tenha a propriedade senha a função login irá funcionar