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

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(() => {
      // Redireciona para a página principal após o login
      window.location.href = 'index.html';
    })
    .catch((error) => {
      alert('Erro ao fazer login: ' + error.message);
    });
}
