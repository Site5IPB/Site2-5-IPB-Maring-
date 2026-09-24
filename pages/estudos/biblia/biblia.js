/* =========================================================
   BÍBLIA — SIPB MARINGÁ
   ========================================================= */


/* =========================================================
   ESTADO DA BÍBLIA
   ========================================================= */

const estadoBiblia = {

    versao: "NAA",

    livro: "",

    capitulo: 1,

    versiculo: null

};


/* =========================================================
   VERSÕES DISPONÍVEIS
   ========================================================= */

const versoesBiblia = [
    "NAA",
    "ARA"
];


/* =========================================================
   LIVROS DA BÍBLIA
   ========================================================= */

const livrosBiblia = [

    "Gênesis",
    "Êxodo",
    "Levítico",
    "Números",
    "Deuteronômio",

    "Josué",
    "Juízes",
    "Rute",
    "1 Samuel",
    "2 Samuel",

    "1 Reis",
    "2 Reis",
    "1 Crônicas",
    "2 Crônicas",
    "Esdras",

    "Neemias",
    "Ester",
    "Jó",
    "Salmos",
    "Provérbios",

    "Eclesiastes",
    "Cantares",
    "Isaías",
    "Jeremias",
    "Lamentações",

    "Ezequiel",
    "Daniel",
    "Oséias",
    "Joel",
    "Amós",

    "Obadias",
    "Jonas",
    "Miquéias",
    "Naum",
    "Habacuque",

    "Sofonias",
    "Ageu",
    "Zacarias",
    "Malaquias",

    "Mateus",
    "Marcos",
    "Lucas",
    "João",
    "Atos",

    "Romanos",
    "1 Coríntios",
    "2 Coríntios",
    "Gálatas",
    "Efésios",

    "Filipenses",
    "Colossenses",
    "1 Tessalonicenses",
    "2 Tessalonicenses",
    "1 Timóteo",

    "2 Timóteo",
    "Tito",
    "Filemom",
    "Hebreus",
    "Tiago",

    "1 Pedro",
    "2 Pedro",
    "1 João",
    "2 João",
    "3 João",

    "Judas",
    "Apocalipse"

];


/* =========================================================
   ELEMENTOS DA PÁGINA
   ========================================================= */

let elementoVersao;
let elementoLivro;
let elementoCapitulo;
let elementoLeitor;


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    prepararPaginaBiblia();

});


/* =========================================================
   PREPARAR PÁGINA
   ========================================================= */

function prepararPaginaBiblia() {

    elementoVersao =
        document.getElementById("biblia-versao");

    elementoLivro =
        document.getElementById("biblia-livro");

    elementoCapitulo =
        document.getElementById("biblia-capitulo");

    elementoLeitor =
        document.getElementById("biblia-leitor");


    configurarEventos();

}


/* =========================================================
   EVENTOS
   ========================================================= */

function configurarEventos() {

    if (elementoVersao) {

        elementoVersao.addEventListener(
            "change",
            alterarVersao
        );

    }


    if (elementoLivro) {

        elementoLivro.addEventListener(
            "change",
            alterarLivro
        );

    }


    if (elementoCapitulo) {

        elementoCapitulo.addEventListener(
            "change",
            alterarCapitulo
        );

    }

}


/* =========================================================
   ALTERAR VERSÃO
   ========================================================= */

function alterarVersao(evento) {

    estadoBiblia.versao =
        evento.target.value;

    console.log(
        "Versão selecionada:",
        estadoBiblia.versao
    );

}


/* =========================================================
   ALTERAR LIVRO
   ========================================================= */

function alterarLivro(evento) {

    estadoBiblia.livro =
        evento.target.value;

    estadoBiblia.capitulo = 1;

    console.log(
        "Livro selecionado:",
        estadoBiblia.livro
    );

}


/* =========================================================
   ALTERAR CAPÍTULO
   ========================================================= */

function alterarCapitulo(evento) {

    estadoBiblia.capitulo =
        Number(evento.target.value);

    console.log(
        "Capítulo selecionado:",
        estadoBiblia.capitulo
    );

}


/* =========================================================
   CARREGAR CAPÍTULO
   ========================================================= */

function carregarCapitulo() {

    if (!elementoLeitor) {
        return;
    }


    elementoLeitor.innerHTML = `

        <div class="biblia-placeholder">

            <h3>
                ${estadoBiblia.livro || "Bíblia"}
                ${estadoBiblia.livro ? estadoBiblia.capitulo : ""}
            </h3>

            <p>
                O texto bíblico será carregado aqui.
            </p>

        </div>

    `;

}


/* =========================================================
   SALVAR POSIÇÃO
   ========================================================= */

function salvarPosicaoLeitura() {

    const posicao = {

        versao: estadoBiblia.versao,

        livro: estadoBiblia.livro,

        capitulo: estadoBiblia.capitulo,

        versiculo: estadoBiblia.versiculo

    };


    localStorage.setItem(
        "sipb_biblia_posicao",
        JSON.stringify(posicao)
    );

}


/* =========================================================
   RECUPERAR POSIÇÃO
   ========================================================= */

function recuperarPosicaoLeitura() {

    const dados =
        localStorage.getItem(
            "sipb_biblia_posicao"
        );


    if (!dados) {
        return;
    }


    try {

        const posicao =
            JSON.parse(dados);


        estadoBiblia.versao =
            posicao.versao || "NAA";


        estadoBiblia.livro =
            posicao.livro || "";


        estadoBiblia.capitulo =
            posicao.capitulo || 1;


        estadoBiblia.versiculo =
            posicao.versiculo || null;


    } catch (erro) {

        console.error(
            "Não foi possível recuperar a posição da Bíblia.",
            erro
        );

    }

}


/* =========================================================
   EXPORTAÇÃO INTERNA
   ========================================================= */

window.biblia = {

    estado: estadoBiblia,

    versoes: versoesBiblia,

    livros: livrosBiblia,

    carregarCapitulo,

    salvarPosicaoLeitura,

    recuperarPosicaoLeitura

};