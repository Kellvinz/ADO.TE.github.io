window.onload = function carregarProdutosDoLocalStorage() {
  
  carrinho = JSON.parse(localStorage.getItem('carrinho'))
  var tabelaCorpo = document.getElementById("tbody")
  var tabelaFim = document.getElementById("tfoot")

  if (carrinho === null) {
    var tabela = document.querySelector(".carrinho-container")
    var div = document.createElement("div")
    div.innerHTML = "<h1>Seu carrinho está vazio!</h1>"
    tabela.insertAdjacentElement("beforeend", div)

  } else {
    for (var i = 0; i < carrinho.length; i++) {
      var item = carrinho[i]
      var row = tabelaCorpo.insertRow(i)
      var cellNome = row.insertCell(0)
      cellNome.innerHTML = item.nome

      var cellPreco = row.insertCell(1)
      cellPreco.innerHTML = item.preco

      var cellQtd = row.insertCell(2)
      cellQtd.innerHTML = `<button>+</button>  ${1}  <button>-</button>`

      var cellTotal = row.insertCell(3)
      cellTotal.innerHTML = item.preco
    }

    var cellTotalCompra = tabelaFim.rows[0].insertCell(1)
    cellTotalCompra.innerHTML = `<h3><strong>R$ ${item.total}</strong></h3>`
  }
}