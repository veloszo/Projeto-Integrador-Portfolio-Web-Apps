

const button = document.getElementById('validar')

button.addEventListener('click', (event) => {
    event.preventDefault()

    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const data = document.getElementById('data')
    const senha = document.getElementById('senha')
    const confirmarSenha = document.getElementById('confirmarsenha')
    const checkbox2 = document.getElementById('checkbox2')

    if  (usuario.value == '') {
        usuario.classList.add("inputError")
    }else{
        usuario.classList.remove("inputError")
    }

    if  (email.value == ''){
        email.classList.add("inputError")
    }else{
        email.classList.remove("inputError")
    }

    if  (data.value == ''){
        data.classList.add("inputError")
    }else{
        data.classList.remove("inputError")
    }

    if  (senha.value == ''){
        senha.classList.add("inputError")
    }else{
        senha.classList.remove("inputError")
    }

    if  (confirmarSenha.value == ''){
        confirmarSenha.classList.add("inputError")
    } else{
        confirmarSenha.classList.remove("inputError")
    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)){
        email.classList.add("inputError")
    }else{
        email.classList.remove("inputError")
    }

    if(senha.value != confirmarSenha.value){
        confirmarSenha.classList.add("inputError")
        senha.classList.add("inputError")
    }

    
})
