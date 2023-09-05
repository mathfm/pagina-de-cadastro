export class Funcionario {
    constructor(nome, sobrenome, email, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeCompleto = `${this.nome} ${this.sobrenome}`
        this.email = email;
        this.contato = contato;
        this.data = new Date();
        this.tiposDeInformacoes = ["Email: ", "Contato: "];
        this.registrar();
    }
    registrar() {
        this.containerDoTexto = this.conterTexto();

        this.card = document.createElement('section')

        this.card.classList.add("card-funcionario");
        
        this.card.appendChild(this.containerDoTexto);

        this.card.appendChild(this.grupoDeBotoes);

        this.listaDeFuncionarios = document.querySelector(".lista-funcionarios");

        this.listaDeFuncionarios.appendChild(this.card);
    }


    conterTexto() {
        this.nomeFuncionario = this.criarTituloDoCard();

        this.cardEmail = this.criarParagrafo(this.tiposDeInformacoes[0], this.email);
        
        this.cardContato = this.criarParagrafo(this.tiposDeInformacoes[1], this.contato);

        this.grupoDeBotoes = this.criarBotoes();
        
        this.dataDeCriacao = this.formatarData();

        this.caixaDeTexto = document.createElement('div');

        this.caixaDeTexto.classList.add("texto-card");
        
        this.caixaDeTexto.appendChild(this.nomeFuncionario);

        this.caixaDeTexto.appendChild(this.cardEmail);

        this.caixaDeTexto.appendChild(this.cardContato);

        this.caixaDeTexto.appendChild(this.dataDeCriacao);
        
        return this.caixaDeTexto;
    }

    criarBotoes() {
        this.btnEditar = document.createElement('button');

        this.btnEditar.classList.add("btn-card");
        
        this.btnEditar.classList.add("btn-editar");

        this.btnEditar.innerText = "Editar";

        this.btnApagar = document.createElement('button');

        this.btnApagar.classList.add("btn-card");

        this.btnApagar.classList.add("btn-apagar")

        this.btnApagar.innerText = "Apagar";

        this.cardBtn = document.createElement('div');

        this.cardBtn.classList.add("container-btn");

        this.cardBtn.appendChild(this.btnEditar);

        this.cardBtn.appendChild(this.btnApagar);

        return this.cardBtn;
    }

    criarEditavel(texto) {
        this.camposEditaveis = document.createElement("span");

        this.camposEditaveis.classList.add("texto-editavel");

        this.nomeConvertido = document.createTextNode(texto);

        this.camposEditaveis.appendChild(this.nomeConvertido);

        return this.camposEditaveis;
    }

    criarTituloDoCard() {
        this.textoTitulo = this.criarEditavel(this.nomeCompleto);

        this.tituloDoCard = document.createElement("h3");

        this.tituloDoCard.appendChild(this.textoTitulo);

        return this.tituloDoCard;
    }
    criarParagrafo(infoDoParagrafo, paragrafo) {
        this.textoParagrafo = this.criarEditavel(paragrafo);

        this.paragrafoCard = document.createElement("p");

        this.paragrafoCard.innerText = infoDoParagrafo;

        this.paragrafoCard.appendChild(this.textoParagrafo);
        
        return this.paragrafoCard;
    }

    formatarData() {

        this.dataFormatada = document.createElement("time");
        
        this.dataFormatada.dateTime = `${this.data.getFullYear()}-${this.data.getMonth() + 1}-${this.data.getDate()}`;
        
        this.dataFormatada.innerText = `${this.data.getDate()}/${this.data.getMonth() + 1}/${this.data.getFullYear()}`;
        
        this.dataDeCriacao = document.createElement('p');

        this.dataDeCriacao.innerText = "Data de Registro: ";

        this.dataDeCriacao.appendChild(this.dataFormatada);

        return this.dataDeCriacao;
    }

}
