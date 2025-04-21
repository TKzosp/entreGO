function resetPassword() {

  document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const mock = {
      user: "rafaeltoth2408@gmail.com"
    }
    const user = document.getElementById("user").value;
    const mensagem = document.getElementById("mensagemLogin");
    if (user.toLowerCase() === mock.user.toLowerCase()) {
      mensagem.textContent = "Email enviado de recuperação enviado.";
      mensagem.style.color = "green";

    } else {
      mensagem.textContent = "Usuario não encontrado";
      mensagem.style.color = "red";
    }
  });

}