import { Funcionario } from "./Funcionario.js";

const linkDeRegistro = document.getElementById("registro");
const linkDeExibirUsuario = document.getElementById("mostrar-usuario");
const telaDeRegistro = document.querySelector(".card-registro");
const telaListaFuncionario = document.querySelector(".lista-funcionarios");

const formsDeRegistro = {
    inputNome: document.getElementById("input-nome"),
    inputSobrenome: document.getElementById("input-sobrenome"),
    inputEmail: document.getElementById("input-email"),
    inputContato: document.getElementById("input-tel"),
}

const btnEnviar = document.querySelector("#forms")


linkDeRegistro.addEventListener("click", () => {
    telaListaFuncionario.style.display = "none";
    telaDeRegistro.style.display = "flex";
})

linkDeExibirUsuario.addEventListener("click", () => { 
    telaDeRegistro.style.display = "none";
    telaListaFuncionario.style.display = "flex";
    
})

btnEnviar.addEventListener("submit", (e) => {    
    e.preventDefault();

    if (!verificarEspacoDosInputs(formsDeRegistro)) {
        return;
    }

    const usuarioNovo = {
        nome: formsDeRegistro.inputNome.value,
        sobrenome: formsDeRegistro.inputSobrenome.value,
        email: formsDeRegistro.inputEmail.value,
        contato: formsDeRegistro.inputContato.value
    }

    new Funcionario(usuarioNovo.nome, usuarioNovo.sobrenome, usuarioNovo.email, usuarioNovo.contato)
    
    formsDeRegistro.inputNome.value = "";
    formsDeRegistro.inputSobrenome.value = "";    
    formsDeRegistro.inputEmail.value = "";
    formsDeRegistro.inputContato.value = "";

})

telaListaFuncionario.addEventListener("click", (e) => {
    const card = e.target.parentElement.parentElement;
    if (e.target.classList.contains("btn-editar")) {
        const campoDeTexto = card.querySelectorAll(".texto-editavel");
        const informacoesEditaveis = [];
        campoDeTexto.forEach(e => {
            if (e.textContent.includes(" ")) {
                let nomeCompleto = e.textContent.split(" ");
                let nome = nomeCompleto[0];
                let sobrenome = nomeCompleto[1];
                informacoesEditaveis.push(nome, sobrenome);
            } else {
                informacoesEditaveis.push(e.textContent)
            }
        })

        
        formsDeRegistro.inputNome.value = informacoesEditaveis[0];
        formsDeRegistro.inputSobrenome.value = informacoesEditaveis[1];
        formsDeRegistro.inputEmail.value = informacoesEditaveis[2];
        formsDeRegistro.inputContato.value = informacoesEditaveis[3];

        telaListaFuncionario.style.display = "none";
        telaDeRegistro.style.display = "flex";
        card.remove();

    }
    if (e.target.classList.contains("btn-apagar")) {
        card.remove();
    }
})

function verificarEspacoDosInputs(form) {
    for (let iterator in form) {
        const inputs = form[iterator].value;
        if (inputs.includes(" ")) {
            return false;
        }
    }
    return true;
}