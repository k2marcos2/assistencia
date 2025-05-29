document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso! Em breve retornaremos.');
  this.reset();
});
