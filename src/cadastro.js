"use strict";
const formCadastro = document.getElementById("form_cadastro");
formCadastro.addEventListener("submit", function (e) {
    e.preventDefault();
    const UsuarioInput = document.getElementById("usuario");
    const usuario = UsuarioInput.value;
    const senhaInput = document.getElementById("email");
    const senha = senhaInput.value;
    const confirmarSenhaInput = document.getElementById("senha");
    const confirmarSenha = confirmarSenhaInput.value;
    if (usuario.length < 5) {
        alert("Seu usuário deve ter no mínimo 5 digitos.");
        return;
    }
    if (senha.length < 4) {
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
function salvarConta(data) {
    localStorage.setItem(data.email, JSON.stringify(data));
    location.href = "/index.html";
}
//function pegarConta(key:string) {
//  const conta = localStorage.getItem(key);
//if(conta) {
//  return JSON.parse(conta)
//}
//return "";
//}
