// Função de Cadastro
function cadastrar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (!email || !senha) {
    alert('Preencha todos os campos!');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(() => {
      alert('Cadastro realizado! Redirecionando...');
      window.location.href = 'index.html';
    })
    .catch((error) => {
      let mensagemErro;
      switch (error.code) {
        case 'auth/email-already-in-use':
          mensagemErro = 'Este email já está cadastrado.';
          break;
        case 'auth/invalid-email':
          mensagemErro = 'Email inválido.';
          break;
        case 'auth/weak-password':
          mensagemErro = 'Senha muito fraca (mínimo 6 caracteres).';
          break;
        default:
          mensagemErro = 'Erro desconhecido: ' + error.message;
      }
      alert(mensagemErro);
    });
}

// Função de Login (opcional, se não existir)
function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      alert('Erro ao fazer login: ' + error.message);
    });
}