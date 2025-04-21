function createAccount() {
  const formUsuario = document.getElementById('create-account-form')

  // Adiciona evento de 'submit' ao formulário
  formUsuario.addEventListener('submit', (event) => {

    // Impede o envio tradicional do formulário
    event.preventDefault()

    // Obtém dados do formulário e converte para objeto Javascript
    const data = Object.fromEntries(new FormData(event.target).entries());
    console.log(data)

  });
} 
