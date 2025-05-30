function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(user => {
      alert("Login realizado com sucesso!");
      window.location.href = "dashboard.html";
    })
    .catch(error => alert("Erro no login: " + error.message));
}

function cadastrar() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(user => {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "dashboard.html";
    })
    .catch(error => alert("Erro no cadastro: " + error.message));
}
