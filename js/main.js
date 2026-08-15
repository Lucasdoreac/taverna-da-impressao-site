// =========================================================================
// Taverna da Impressão — comportamento do site
//
// O formulário de contato que existia aqui foi removido de propósito:
// ele guardava nome, e-mail e mensagem no localStorage do próprio visitante
// e não enviava nada a ninguém. Quem preenchesse acreditaria ter falado com
// a loja sem que a loja jamais recebesse. Num site estático não há como
// receber mensagem sem serviço externo — por isso a seção de contato leva
// a canais reais (WhatsApp, e-mail, Instagram).
//
// Junto saíram o webhook do Discord (a URL ficaria exposta no código-fonte,
// aberta a qualquer um) e o painel #admin (que só listava o que estava no
// navegador de quem abrisse).
// =========================================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- sombra no cabeçalho ao rolar --------------------------------
    const header = document.querySelector('.header');
    if (header) {
        const aoRolar = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };
        aoRolar();
        window.addEventListener('scroll', aoRolar, { passive: true });
    }

    // ---- menu no celular ----------------------------------------------
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.header nav');

    if (toggle && nav) {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const aberto = nav.classList.toggle('aberto');
            toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
            toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
        });

        // fecha ao clicar em um link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('aberto');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Abrir menu');
            });
        });

        // fecha ao clicar fora
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('aberto') && !nav.contains(e.target) && e.target !== toggle) {
                nav.classList.remove('aberto');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Abrir menu');
            }
        });

        // fecha com Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('aberto')) {
                nav.classList.remove('aberto');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.focus();
            }
        });

        // volta ao normal ao alargar a tela
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                nav.classList.remove('aberto');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ---- rolagem suave nos links internos -------------------------------
    const reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const alvo = this.getAttribute('href');
            if (alvo === '#') return;               // canal ainda não configurado
            const destino = document.querySelector(alvo);
            if (!destino) return;

            e.preventDefault();
            destino.scrollIntoView({
                behavior: reduzirMovimento ? 'auto' : 'smooth',
                block: 'start'
            });
            // move o foco para o destino, senão o teclado continua no topo
            destino.setAttribute('tabindex', '-1');
            destino.focus({ preventScroll: true });
        });
    });

    // ---- links de canal ainda não configurados --------------------------
    // Enquanto o href for "#", o link não deve fingir que leva a algum lugar.
    document.querySelectorAll('.canal[href="#"]').forEach(canal => {
        canal.setAttribute('aria-disabled', 'true');
        canal.addEventListener('click', (e) => e.preventDefault());
    });

    // ---- ano no rodapé ---------------------------------------------------
    const ano = document.getElementById('ano');
    if (ano) ano.textContent = new Date().getFullYear();
});
