export let arraySimuladoNome = {    //Vou utilizar o export para ficar mais organizado. Aqui utilizei o let para criar o objeto;
    length: 0,                      //Simula o tamanho do array
    push: function(conteudo){          //Função push para inserção de dados
        this[this.length] = conteudo;  //No this[indice] = Conteúdo que será armazendado. Exe: objeto[1] = "Laura"
        this.length++;              //length dentro do objeto é somado mais 1
    },
    delete: function(indice){ // function delete
        
        for (let i = indice; i < this.length - 1; i++){ // Acessa o array até a penúltima posição, ou seja, não acessa a última
            this[i] = this[i+1]; // Pega o dado da posição acima e passa para essa posição que está
        }
        delete this[this.length - 1]; // A última posição fica duplicada com relação a penultima, portanto a última posição é acionado a operação delete, ou seja, essa propriedade é deletada
        this.length--; // Passa o length do valor que estava -1, isso porque uma propriedade foi deletada
        return true; // Retorna verdadeiro se tudo der certo
    }    
}