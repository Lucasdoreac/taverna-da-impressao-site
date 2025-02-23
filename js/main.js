// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona classe 'scrolled' ao header quando rolar a página
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Formulário de contato
    const form = document.querySelector('.contato-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Aqui você pode adicionar a lógica de envio do formulário
            alert('Mensagem enviada com sucesso!');
            form.reset();
        });
    }
});