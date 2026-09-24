/* =========================================================
   GLOBAL — SIPB MARINGÁ
   ========================================================= */


/* =========================================================
   CONFIGURAÇÃO
   ========================================================= */

const THEME_KEY = "sipb-theme";


/* =========================================================
   APLICAR TEMA
   ========================================================= */

function aplicarTema(tema) {

    if (tema === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

    } else {

        document.documentElement.removeAttribute(
            "data-theme"
        );
    }

    atualizarBotaoTema(tema);
}


/* =========================================================
   ATUALIZAR BOTÃO
   ========================================================= */

function atualizarBotaoTema(tema) {

    const botao = document.getElementById("theme-toggle");

    if (!botao) {
        return;
    }

    if (tema === "dark") {

        botao.textContent = "☀️";

        botao.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

        botao.setAttribute(
            "title",
            "Ativar modo claro"
        );

    } else {

        botao.textContent = "🌙";

        botao.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );

        botao.setAttribute(
            "title",
            "Ativar modo escuro"
        );
    }
}


/* =========================================================
   OBTER TEMA SALVO
   ========================================================= */

function obterTema() {

    const temaSalvo = localStorage.getItem(THEME_KEY);

    if (temaSalvo === "dark") {
        return "dark";
    }

    return "light";
}


/* =========================================================
   ALTERNAR TEMA
   ========================================================= */

function alternarTema() {

    const temaAtual =
        document.documentElement.getAttribute("data-theme");

    const novoTema =
        temaAtual === "dark"
            ? "light"
            : "dark";

    aplicarTema(novoTema);

    localStorage.setItem(
        THEME_KEY,
        novoTema
    );
}


/* =========================================================
   CLIQUE NO BOTÃO
   ========================================================= */

/*
   Usamos um listener no document em vez de adicionar
   diretamente no botão.

   Isso permite que o botão funcione mesmo se ele for
   criado posteriormente pelo components.js.
*/

document.addEventListener("click", (evento) => {

    const botao = evento.target.closest("#theme-toggle");

    if (!botao) {
        return;
    }

    alternarTema();
});


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const tema = obterTema();

    aplicarTema(tema);

});

