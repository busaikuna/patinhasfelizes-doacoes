const dialogForm = document.getElementById('dialogForm');
const dialogConfirmacao = document.getElementById('dialogConfirmacao');
const formCadastro = document.getElementById('formCadastro');

dialogForm.addEventListener('click', (event) => {
  if (event.target === dialogForm) {
    dialogForm.close();
  }
});

dialogConfirmacao.addEventListener('click', (event) => {
  if (event.target === dialogConfirmacao) {
    dialogConfirmacao.close();
  }
});

formCadastro.addEventListener('submit', (event) => {
  event.preventDefault();
  dialogForm.close();
  dialogConfirmacao.showModal();

  setTimeout(() => {
    dialogConfirmacao.close();
  }, 5000);
});
