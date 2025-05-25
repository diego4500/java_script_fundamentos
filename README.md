# 📚 Fundamentos Parte 1 do Javascript

Em Fundamentos parte 1 vou registrar o meu aprendizado dos fundamentos do Javascript. 
Aqui vou registrar aprendizados de:
* Array
---
## 🟩 Quais as diferenças de arrays e objetos

### Arrays
> Todo array é um objeto, mas com estrutura e comportamento próprios.
> Possuem a propriedade .length e vários métodos nativos para inserção, exclusão e manipulação de dados (push, pop, map, filter, etc);
> Estrutura sequencial e otimizada para acessos e manipulações rápidas;
> Os índices (números inteiros a partir de zero) são fundamentais na estrutura dos arrays;

### Objetos
> Nem todo objeto é um array;
> Com objetos podemos simular um array, mas não obter todos os comportamentos e otimizações de um array verdadeiro;
> Mesmo sendo o array sendo um objeto ele possui uma estrutura diferente de um objeto literal;
> Arrays são objetos especiais, com estrutura diferente de um objeto literal;
> Objetos não possuem métodos nativos de array, nem a propriedade .length por padrão;
> Objetos não são otimizados para operar como listas sequenciais — não têm a mesma performance de arrays em operações de list;

### Exemplos de código

```js
const arr = [1, 2, 3];
arr.push(4);
console.log(arr.length); // 4
