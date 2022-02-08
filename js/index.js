const meuTitulo = document.getElementById('meu-titulo')
console.log(meuTitulo);

const descrição = document.getElementById('minha-desc')
console.log(descrição);

const modal = document.getElementById('modal')
console.log(modal);

meuTitulo.innerHTML = "Ativar modal"

descrição.innerHTML = "Clicar na imagem abaixo:"

modal.addEventListener("click", function () {
    alert("Ouça 'Doughnut', por TWICE");
})

