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
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Obtém os dados do formulário
            const formData = {
                nome: form.querySelector('input[name="nome"]').value,
                email: form.querySelector('input[name="email"]').value,
                mensagem: form.querySelector('textarea[name="mensagem"]').value,
                data: new Date().toISOString()
            };

            try {
                // Validações básicas
                if (!formData.nome || !formData.email || !formData.mensagem) {
                    throw new Error('Por favor, preencha todos os campos.');
                }

                if (!isValidEmail(formData.email)) {
                    throw new Error('Por favor, insira um email válido.');
                }

                // Obtém mensagens existentes ou inicia array vazio
                const mensagensAnteriores = JSON.parse(localStorage.getItem('mensagens') || '[]');
                
                // Adiciona nova mensagem
                mensagensAnteriores.push(formData);
                
                // Salva no localStorage
                localStorage.setItem('mensagens', JSON.stringify(mensagensAnteriores));

                // Mostra mensagem de sucesso
                mostrarMensagem('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'sucesso');
                
                // Limpa o formulário
                form.reset();

                // Envia para um webhook do Discord como backup (substitua a URL pelo seu webhook)
                const webhookUrl = 'SEU_WEBHOOK_DISCORD_AQUI';
                if (webhookUrl) {
                    await enviarParaDiscord(webhookUrl, formData);
                }

            } catch (error) {
                console.error('Erro ao enviar mensagem:', error);
                mostrarMensagem(error.message || 'Erro ao enviar mensagem. Tente novamente.', 'erro');
            }
        });
    }

    // Funções auxiliares
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function mostrarMensagem(texto, tipo) {
        // Remove mensagem anterior se existir
        const mensagemAnterior = document.querySelector('.mensagem-form');
        if (mensagemAnterior) {
            mensagemAnterior.remove();
        }

        // Cria elemento de mensagem
        const mensagem = document.createElement('div');
        mensagem.className = `mensagem-form mensagem-${tipo}`;
        mensagem.textContent = texto;

        // Insere após o formulário
        form.parentNode.insertBefore(mensagem, form.nextSibling);

        // Remove após 5 segundos
        setTimeout(() => {
            mensagem.remove();
        }, 5000);
    }

    async function enviarParaDiscord(webhookUrl, dados) {
        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `Nova mensagem do site:\nNome: ${dados.nome}\nEmail: ${dados.email}\nMensagem: ${dados.mensagem}`
                })
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar para Discord');
            }
        } catch (error) {
            console.error('Erro ao enviar para Discord:', error);
            // Não mostramos erro ao usuário pois é apenas backup
        }
    }

    // Carrega e exibe estatísticas de mensagens para admin
    if (window.location.hash === '#admin') {
        mostrarEstatisticas();
    }

    function mostrarEstatisticas() {
        const mensagens = JSON.parse(localStorage.getItem('mensagens') || '[]');
        const stats = document.createElement('div');
        stats.className = 'admin-stats';
        stats.innerHTML = `
            <h3>Estatísticas de Mensagens</h3>
            <p>Total de mensagens: ${mensagens.length}</p>
            <button onclick="localStorage.clear(); this.parentElement.remove();">Limpar Dados</button>
            <ul>
                ${mensagens.map(m => `
                    <li>
                        <strong>${m.nome}</strong> (${m.email})<br>
                        ${m.mensagem}<br>
                        <small>${new Date(m.data).toLocaleString()}</small>
                    </li>
                `).join('')}
            </ul>
        `;
        document.body.appendChild(stats);
    }
});