// Acessando o botão pelo seu ID e adicionando um ouvinte de evento de clique
var botao = document.getElementById("meuBotao");

// Definindo a função que será executada quando o botão for clicado
function cliqueNoBotao() {
    alert("Você clicou no botão!");
}

// Adicionando o ouvinte de evento ao botão
botao.addEventListener("click", cliqueNoBotao);
