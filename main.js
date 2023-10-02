// FUNCÃO ORIGINAL CARRINHO
//JS sobre Tela de Detalhes
let carrinho = [] // Array para armazenar itens do carrinho
let total = 0 // Total da compra

function adicionarAoCarrinho(event) {
  const produtoDiv = event.target.closest(".produto")
  const nomeProduto = produtoDiv.querySelector("h3").textContent
  const precoProduto = produtoDiv.querySelector(".preco").textContent
  const totalCompra = precoProduto.replace(/[^\d.]*/g, '')
  var totalN = parseFloat(totalCompra)
  total += totalN

  carrinho.push({
    nome: nomeProduto,
    preco: precoProduto,
    total: total.toFixed(2)
  })

  atualizarCarrinho()
}

function comprarAgora(event) {
  carrinho = JSON.parse(localStorage.getItem('carrinho'))
  adicionarAoCarrinho(event)
  atualizarCarrinho()
}

function atualizarCarrinho() {
  localStorage.setItem("contagemCarrinho", carrinho.length)
  const contagem = localStorage.getItem("contagemCarrinho")
  var circle = document.querySelector('.circle')
  if (carrinho.length > 0) {
    circle.classList.add('before')
    circle.textContent = contagem
  } else {
    circle.classList.remove('before')
    circle.textContent = ''
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho))
  carrinho = JSON.parse(localStorage.getItem('carrinho'))
}
carrinho = JSON.parse(localStorage.getItem('carrinho'))


// Função para verificar se um CEP é válido
function validarCEP(cep) {
  // Expressão regular para validar o formato do CEP
  var regexCEP = /^[0-9]{8}$/

  // Verificar se o CEP possui o formato correto
  if (regexCEP.test(cep)) {
    return true
  } else {
    return false
  }
}

// Função para simular o cálculo do preço do frete
function calcularFrete() {
  // Obter o valor do CEP digitado pelo usuário e remover caracteres não numéricos
  var cepInput = document.getElementById("frete")
  var cep = cepInput.value.replace(/\D/g, '') // Remove todos os caracteres não numéricos

  // Atualiza o campo de entrada com o CEP filtrado
  cepInput.value = cep;

  // Verificar se o CEP é válido
  if (validarCEP(cep)) {
    // Simulação de cálculo de frete (substitua esta lógica pela sua)
    var frete = Math.random() * 20 + 10 // Simulação de preço do frete entre R$ 10 e R$ 30

    // Exibir o resultado do frete na página
    var resultadoFrete = "Preço do Frete: R$ " + frete.toFixed(2) + " / Entrega estimada entre 3-7 dias úteis"
    document.getElementById("resultado-frete").textContent = resultadoFrete
  } else {
    // Se o CEP não for válido, exibir uma mensagem de erro
    document.getElementById("resultado-frete").textContent = "CEP inválido. Por favor, digite um CEP válido."
  }
}

function addSpecialCharacter() {
  var expirationYearInput = document.getElementById('expirationYear')
  var specialCharacter = '/';  // Caractere especial a ser inserido

  // Adiciona o caractere especial após o terceiro dígito
  if (expirationYearInput.value.length === 2) {
    expirationYearInput.value += specialCharacter
  }
}

function validateForm() {
  var cpf = document.getElementById('cpf').value
  var cardNumber = document.getElementById('cardNumber').value
  var securityCode = document.getElementById('securityCode').value
  var expirationYear = document.getElementById('expirationYear').value

  if (cpf.length !== 11) {
    alert('O CPF deve conter 11 números.')
    return false
  }

  if (cardNumber.length !== 16) {
    alert('O número do cartão deve conter 16 números.')
    return false
  }

  if (securityCode.length !== 3) {
    alert('O código de segurança deve conter 3 números.')
    return false
  }

  if (expirationYear.length !== 5) {
    alert('O ano do cartão deve conter 4 números.')
    return false
  }

  return exibirMensagemPagamentoRealizado()
}

function exibirMensagemPagamentoRealizado() {
  alert('Pagamento realizado com sucesso!')
}

