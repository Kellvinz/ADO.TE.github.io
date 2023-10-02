let novoUsuario = []

// Função para verificar a senha ao cadastrar um novo usuário
function verificarSenha() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;

  // Verifique se as senhas correspondem
  if (senha === confirmarSenha) {
    // Verifique se o usuário já está cadastrado
    var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];
    var usuarioExistente = usuariosCadastrados.find(function (usuario) {
      return usuario.email === email;
    });

    if (usuarioExistente) {
      alert("Usuário já cadastrado. Faça login em vez de cadastrar novamente.");
    } else {
      // Crie um objeto com os dados do novo usuário
      var novoUsuario = {
        name: name,
        email: email,
        senha: senha
      };

      // Adicione o novo usuário ao array de usuários cadastrados
      usuariosCadastrados.push(novoUsuario);

      localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

      alert("Usuário cadastrado com sucesso!");

      window.location.href = "login.html";
    }
  } else {
    alert("As senhas não correspondem.");
  }

  return false;
}

// Função para fazer login de um usuário existente
function loginUser(event) {
  event.preventDefault();
  var email = document.getElementById("username").value;
  var senha = document.getElementById("password").value;

  // Busque os usuários cadastrados no Local Storage
  var usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifique se o usuário existe e se a senha está correta
  var usuarioEncontrado = usuariosCadastrados.find(function (usuario) {
    return usuario.email === email && usuario.senha === senha;
  });

  if (usuarioEncontrado) {
    var username = usuarioEncontrado.name;

    // Exiba uma mensagem de boas-vindas
    printLoggedInMessage(username);

    // Armazene a informação de que o usuário está logado no Local Storage
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("username", username);
  } else {
    showLoginAlert(false); // Exibe alerta de erro ao fazer login
  }
}

function printLoggedInMessage(username) {
  var welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.textContent = "Bem-vindo, " + username + "!";
  welcomeMessage.style.display = "block";
}

function showLoginAlert(success) {
  if (success == true) {
    alert("Login efetuado com sucesso!");
  } else {
    alert("Erro ao fazer login. Verifique suas credenciais.");
  }
}
