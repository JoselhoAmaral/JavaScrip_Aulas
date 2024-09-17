class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario'); // selecionando formulario
    this.eventos();
  }

  // metodos
  eventos() { // metodo para pegar o evento de enviar o formulario
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) { // metodo que evita que o formulario seja recarregado ao enviar
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas) { //se os campos validos e senhas validas forem true, o formulario devera ser enviado.
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() { // metodo para verificar se a senha sao iguais e tem entre 6 e 12 caracteres
    let valid = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisar ser iguais.');
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    for(let errorText of this.formulario.querySelectorAll('.error-text')) { //verifica se existe campos de erros no formulario e caso tenha, ele remove.
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      if(!campo.value) { // verifica os campos em branco no formulario e lança erro neles.
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if(campo.classList.contains('cpf')) { //executa a validacao de CPF
        if(!this.validaCPF(campo)) valid = false;
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false;
      }

    }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12) { // se usuario com menos de 3 letras e maior que 12
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { // verifica se o usuario tem letras e ou numeros
      this.criaErro(campo, 'Nome de usuário precisar conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) { // metodo para validar o cpf (o codigo para validar cpf esta em outro arquivo)
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  criaErro(campo, msg) { // metodo que cria uma div vazia para ser preenchida com a mensagem de erro
    const div = document.createElement('div'); // cria a div
    div.innerHTML = msg; // adiciona a mensagem de erro
    div.classList.add('error-text'); // adiciona classe a div
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();
