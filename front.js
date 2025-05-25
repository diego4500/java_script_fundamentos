import { arraySimuladoNome } from "./array.js"; // Importa o objeto no array.js

const formulario = document.getElementById('formCadastro');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); //Evita recarregar a página após dar submit

    // Capturando os dados do formulário
    // Está como let e não const porque quero inserir mais de um cadastro sem recarregar a página para não apagar os dados do array.
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;

    //Cria um objeto pegando os dados do formuário no DOM.
    let cadastroPessoa = {
        nome: nome,
        telefone: telefone,
        email: email
    };

    // Insere esse objeto no arraySimuladoNome, ou seja, cada array é o cadastro de uma 
    arraySimuladoNome.push(cadastroPessoa);    

    // Exibe resultado na div resultado na tela
    exibirTabelaCadastros();
});

function exibirTabelaCadastros() {
    let resultado = document.getElementById('resultado');
    let tabela = `
        <table>
            <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Ação</th>
            </tr>
    `;

    for (let i = 0; i < arraySimuladoNome.length; i++) {
        let pessoa = arraySimuladoNome[i];
        tabela += `
            <tr>
                <td>${pessoa.nome}</td>
                <td>${pessoa.telefone}</td>
                <td>${pessoa.email}</td>
                <td><button class="btn-excluir" data-indice="${i}">Excluir</button></td>
            </tr>
        `;
    }

    tabela += `</table>`;

    if (arraySimuladoNome.length == 0) {
        resultado.style.display = "none";
    } else {
        resultado.style.display = "flex"; // Se usa flexbox, senão "block"
    }
    resultado.innerHTML = tabela;
    let botaoExcluir = document.querySelectorAll('.btn-excluir') // Cria um NodeList que agrupa todos os botões com essa classe no DOM, formando uma espécie de array com esses botões.

    // Pecorre o array com os botões excluir
    botaoExcluir.forEach(btn => {
        // Cada botão possui um evento e seu data-índice, onde esse índice é o que será inserido no array "SimulandoNome" para exclusão.
        btn.addEventListener('click', function () {
            let indice = parseInt(this.getAttribute('data-indice'));
            arraySimuladoNome.delete(indice);
            exibirTabelaCadastros(); // Atualiza a tabela após excluir
        });
    });
}



