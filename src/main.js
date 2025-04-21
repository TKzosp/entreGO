function fazerLogin() {
  document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const mock = {
      user: "Rafael",
      senha: "Rafael123"
    };

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const mensagem = document.getElementById("mensagemLogin");

    if (user === mock.user && password === mock.senha) {
      mensagem.textContent = "Login realizado com sucesso!";
      mensagem.style.color = "green";

    } else {
      mensagem.textContent = "E-mail ou senha incorretos.";
      mensagem.style.color = "red";
    }
  });
}

