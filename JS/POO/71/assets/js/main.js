class ValidaFomulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
       e.preventDefault();
        const validfields = this.isValid();
        const senhasValidas = this.senhasSaoValidas();

        if(validfields && senhasValidas) {
            alert('Formulário foi enviado')
            this.formulario.submit();
        }
        
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.password')
        const repetirSenha = this.formulario.querySelector('.repeat-password')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaErr(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErr(repetirSenha, 'Campos senha e repetir senha precisam ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12 ) {
            valid = false;
            this.criaErr(senha, 'Senha precisa estar entre 6 e 12 caracteres')
        }

        return valid
    }

    isValid() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for(let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText

            if(!campo.value) {
                this.criaErr(campo, `Campo ${label} não pode estar em branco.`)
                valid = false                    
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('user')) {
                if(!this.validaUsuario(campo)) valid = false
            }

        };

            return valid
    }

        validaUsuario(campo) {
            const usuario = campo.value;
            let valid = true
            if(usuario.length < 3 || usuario.length > 12) {
                this.criaErr(campo, 'Usuário precisa ter entre 3 e 12 caracteres')
                valid = false
            }
            if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
                this.criaErr(campo, 'Nome de usuário precisa conter apenas letras e números')
                valid = false
            }
            return true
        }

        validaCPF(campo) {
            const cpf = new ValidaCPF(campo.value)

            if(!cpf.valida()) {
                this.criaErr(campo, 'CPF inválido')
            }
            return true;
        }

        criaErr(campo, msg) {
            const div = document.createElement('div');
            div.innerHTML = msg;
            div.classList.add('error-text')
            campo.insertAdjacentElement('afterend', div)
        }

}

const valida = new ValidaFomulario()