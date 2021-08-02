function validarFormSuporte(){
        let usuario = formuser.usuario.value
        let email = formuser.email.value
        let  assunto = formuser.assunto.value
        let  mensagem = formuser.mensagem.value

        if(usuario ==""){
            alert("preencha o campo Usuario")
            formuser.usuario.focus()
            return false
        }
        if(email =="" || email.indexOf('@')== -1){
            alert("preencha o campo email")
            formuser.email.focus()
            return false
        }
        if(assunto ==""){
            alert("preencha o campo assunto")
            formuser.assunto.focus()
            return false
        }
        if(mensagem ==""){
            alert("nada informado na mensagem")
            formuser.mensagem.focus()
            return false
        }

}
