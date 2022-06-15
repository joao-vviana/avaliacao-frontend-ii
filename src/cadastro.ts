const formCadastro = document.getElementById("form_cadastro") as HTMLFormElement;
formCadastro.addEventListener("submit", function (e) {
    e.preventDefault();
    const UsuarioInput = document.getElementById("usuario") as HTMLInputElement;
    const usuario = UsuarioInput.value;

    const senhaInput = document.getElementById("email") as HTMLInputElement;
    const senha = senhaInput.value;

    const confirmarSenhaInput = document.getElementById("senha") as HTMLInputElement;
    const confirmarSenha = confirmarSenhaInput.value;

    if(usuario.length < 5) {
        alert("Seu usuário deve ter no mínimo 5 digitos.");
        return;
    }

    if(senha.length < 4) {
        alert("Preencha a senha com no mínimo 4 digitos.");
        return;
    }

    // if(confirmarSenha != senha) {
    //     alert("As senhas devem ser iguais.");
    //     return;
    // }
    
    salvarConta({
        login: usuario,
        email: senha,
        senha: confirmarSenha,
        //  transactions: []
    });
    
    alert("Conta criada com sucesso!");
});

type Conta = {
    login: string;
    email: string;
    senha: string;
   // transactions: Array<> 
};

function salvarConta(data:Conta) {
    localStorage.setItem(data.email, JSON.stringify(data));
    location.href = "/index.html"
}
//function pegarConta(key:string) {
  //  const conta = localStorage.getItem(key);

    //if(conta) {
      //  return JSON.parse(conta)
    //}

    //return "";
//}