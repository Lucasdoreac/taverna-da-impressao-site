# 🏰 Taverna da Impressão

Site oficial da Taverna da Impressão, hospedado no GitHub Pages.

[![Deploy to GitHub Pages](https://github.com/Lucasdoreac/taverna-da-impressao-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/Lucasdoreac/taverna-da-impressao-site/actions/workflows/deploy.yml)

## 🌐 Site Ao Vivo

Visite [tavernadaimpressao.com.br](https://tavernadaimpressao.com.br)

## 📋 Índice

- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Desenvolvimento Local](#-desenvolvimento-local)
- [Deploy](#-deploy)
- [Tecnologias](#-tecnologias)

## 📁 Estrutura do Projeto

```
/
├── assets/
│   ├── images/
│   │   ├── products/    # Imagens de produtos
│   │   ├── social/      # Ícones de redes sociais
│   │   └── icons/       # Ícones para PWA
├── css/
│   ├── style.css        # Estilos principais
├── js/
│   └── main.js          # JavaScript principal
├── index.html           # Página principal
├── manifest.json        # Configuração PWA
├── service-worker.js    # Service Worker para PWA
└── CNAME               # Configuração de domínio personalizado
```

## 💻 Desenvolvimento Local

1. Clone o repositório:
```bash
git clone https://github.com/Lucasdoreac/taverna-da-impressao-site.git
cd taverna-da-impressao-site
```

2. Instale um servidor local (por exemplo, usando Python):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

3. Acesse `http://localhost:8000` no seu navegador

## 🚀 Deploy

O site é automaticamente implantado no GitHub Pages quando há um push para o branch `main`. O workflow de deploy está configurado em `.github/workflows/deploy.yml`.

### Deploy Manual

1. Configure o GitHub Pages nas configurações do repositório:
   - Vá para Settings > Pages
   - Selecione branch `gh-pages` como source
   - Salve as configurações

2. Push para o branch main:
```bash
git add .
git commit -m "Atualização do site"
git push origin main
```

### Domínio Personalizado

1. O domínio `tavernadaimpressao.com.br` está configurado no arquivo `CNAME`
2. Configure seu DNS:
   - Tipo: CNAME
   - Nome: @
   - Valor: lucasdoreac.github.io

## 🛠 Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- SVG para imagens
- PWA (Progressive Web App)

## 📱 PWA

O site funciona como um Progressive Web App, permitindo:
- Instalação no dispositivo
- Funcionamento offline
- Cache inteligente

## 🔒 Segurança

- HTTPS forçado via GitHub Pages
- Headers de segurança
- CSP implementado

## 📖 Documentação

Para mais detalhes sobre:
- [PWA](docs/pwa.md)
- [SEO](docs/seo.md)
- [Estrutura](docs/estrutura.md)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- Email: contato@tavernadaimpressao.com.br