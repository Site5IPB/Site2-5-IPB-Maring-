/* =========================================================
   COMPONENTS — SIPB MARINGÁ
   ========================================================= */


/* =========================================================
   CAMINHO DA RAIZ DO PROJETO
   ========================================================= */

const ROOT = document.body.dataset.root || "";


/* =========================================================
   CABEÇALHO
   ========================================================= */

function carregarHeader() {

    const header = document.getElementById("header");

    if (!header) {
        return;
    }

    header.className = "site-header";

    header.innerHTML = `
        <div class="header-container">

            <a href="${ROOT}index.html" class="site-logo" aria-label="Página inicial">

                <img
                    src="${ROOT}asssets/logo/ipb.ico"
                    alt="Logo da 5ª Igreja Presbiteriana de Maringá"
                >

                <span class="site-logo-text">
                    5ª Igreja Presbiteriana de Maringá
                </span>

            </a>


            <nav class="main-nav" id="main-nav" aria-label="Navegação principal">

                <a href="${ROOT}index.html" data-page="inicio">
                    Início
                </a>

                <a href="${ROOT}pages/igreja/igreja.html" data-page="igreja">
                    Igreja
                </a>

                <a href="${ROOT}pages/estudos/estudos.html" data-page="estudos">
                    Estudos
                </a>

                <a href="${ROOT}pages/eventos/eventos.html" data-page="eventos">
                    Eventos
                </a>

                <a href="${ROOT}pages/missoes/missoes.html" data-page="missoes">
                    Missões
                </a>

                <a href="${ROOT}pages/vida-espiritual/vida-espiritual.html" data-page="vida-espiritual">
                    Vida Espiritual
                </a>

                <a href="${ROOT}pages/ofertas/ofertas.html" data-page="ofertas">
                    Ofertas
                </a>

                <a href="${ROOT}pages/contato/contato.html" data-page="contato">
                    Contato
                </a>

            </nav>


            <div class="header-actions">

                <button
                    type="button"
                    class="theme-toggle"
                    id="theme-toggle"
                    aria-label="Alternar tema"
                    title="Alternar tema"
                >
                    🌙
                </button>


                <button
                    type="button"
                    class="mobile-menu-toggle"
                    id="mobile-menu-toggle"
                    aria-label="Abrir menu"
                    aria-expanded="false"
                    aria-controls="main-nav"
                >
                    ☰
                </button>

            </div>

        </div>
    `;
}


/* =========================================================
   RODAPÉ
   ========================================================= */

function carregarFooter() {

    const footer = document.getElementById("footer");

    if (!footer) {
        return;
    }

    footer.className = "site-footer";

    footer.innerHTML = `
        <div class="footer-container">

            <div class="footer-content">

                <div class="footer-column">

                    <h3>5ª Igreja Presbiteriana de Maringá</h3>

                    <p>
                        Uma igreja para viver, servir e
                        compartilhar a Palavra de Deus.
                    </p>

                </div>


                <div class="footer-column">

                    <h3>Contato</h3>

                    <p>
                        Av. dos Palmeiras, 813 - Jd América
                    </p>

                    <p>
                        quintipbmga@gmail.com
                    </p>

                </div>


                <div class="footer-column">

                    <h3>Redes sociais</h3>

                    <div class="footer-social">

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer">
                            YouTube
                        </a>

                    </div>


                    <a
                        href="${ROOT}admin/login.html"
                        class="admin-access"
                    >
                        ⚙ Área Administrativa
                    </a>

                </div>

            </div>


            <div class="footer-bottom">

                <p>
                    © ${new Date().getFullYear()}
                    5ª Igreja Presbiteriana de Maringá.
                </p>

                <p>
                    Todos os direitos reservados.
                </p>

            </div>

        </div>
    `;
}


/* =========================================================
   MENU MOBILE
   ========================================================= */

function configurarMenuMobile() {

    const menuButton = document.getElementById("mobile-menu-toggle");
    const nav = document.getElementById("main-nav");

    if (!menuButton || !nav) {
        return;
    }

    menuButton.addEventListener("click", () => {

        const aberto = nav.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            aberto
        );

        menuButton.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu"
                : "Abrir menu"
        );

        menuButton.textContent = aberto
            ? "✕"
            : "☰";
    });


    const links = nav.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Abrir menu"
            );

            menuButton.textContent = "☰";

        });

    });
}


/* =========================================================
   IDENTIFICAR PÁGINA ATUAL
   ========================================================= */

function configurarPaginaAtual() {

    const links = document.querySelectorAll(
        ".main-nav a[data-page]"
    );

    const caminho = window.location.pathname;

    let paginaAtual = "inicio";


    if (caminho.includes("/igreja/")) {
        paginaAtual = "igreja";

    } else if (caminho.includes("/estudos/")) {
        paginaAtual = "estudos";

    } else if (caminho.includes("/eventos/")) {
        paginaAtual = "eventos";

    } else if (caminho.includes("/missoes/")) {
        paginaAtual = "missoes";

    } else if (caminho.includes("/vida-espiritual/")) {
        paginaAtual = "vida-espiritual";

    } else if (caminho.includes("/ofertas/")) {
        paginaAtual = "ofertas";

    } else if (caminho.includes("/contato/")) {
        paginaAtual = "contato";
    }


    links.forEach(link => {

        if (link.dataset.page === paginaAtual) {
            link.classList.add("active");
        }

    });
}


/* =========================================================
   HEADER AO ROLAR
   ========================================================= */

function configurarHeaderScroll() {

    const header = document.querySelector(".site-header");

    if (!header) {
        return;
    }

    function verificarScroll() {

        if (window.scrollY > 10) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        verificarScroll,
        { passive: true }
    );

    verificarScroll();
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    carregarHeader();

    carregarFooter();

    configurarMenuMobile();

    configurarPaginaAtual();

    configurarHeaderScroll();

});