const pagCadastro = document.getElementById("btn_cadastro") as HTMLButtonElement;
pagCadastro.addEventListener("click", function (entrarCadastro) {
    entrarCadastro.preventDefault()
    
        // location.href = "cadastro.html"
    })
    
    const formLogin = document.getElementById("form_login") as HTMLFormElement;
    formLogin.addEventListener("submit", function (e) {
        e.preventDefault()
        const usuarioInput = document.getElementById("emailLogin") as HTMLInputElement;
        const usuario = usuarioInput.value;

        const senhaInput = document.getElementById("senhaLogin") as HTMLInputElement;
        const senha = senhaInput.value;

        // LOGIN
        // const emailLogin = document.getElementById("emailLogin") as HTMLInputElement;
        // const email = emailLogin.value;

        // const senhaLogin = document.getElementById("senhaLogin") as HTMLInputElement;
        // const loginSenha = senhaLogin.value;
    
        const conta = pegarConta(usuario);
        
        if(!conta) {
            alert("Usuário não encontrado.");
            return;
        }
    
         if(conta) {
             location.href = "/lista-recados.html";
         }
    });
    
    function pegarConta(key:string) {
        const conta = localStorage.getItem(key);
    
        if(conta) {
            return JSON.parse(conta)
        }
    
        return "";
    }