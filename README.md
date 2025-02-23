# 🏰 Taverna da Impressão

Site oficial da Taverna da Impressão, sua fonte de miniaturas e acessórios 3D para RPG e Board Games.

## 📋 Índice

- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Desenvolvimento](#-desenvolvimento)
- [Produção](#-produção)
- [Tecnologias](#-tecnologias)
- [SEO & Performance](#-seo--performance)

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
├── robots.txt          # Configuração para crawlers
├── sitemap.xml         # Mapa do site
└── .htaccess           # Configurações do servidor
```

## 🔧 Pré-requisitos

- Servidor web (Apache/Nginx)
- Node.js & NPM (para desenvolvimento)
- PM2 (para produção)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Lucasdoreac/taverna-da-impressao-site.git
cd taverna-da-impressao-site
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Desenvolvimento

Para rodar o projeto localmente:

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🌐 Produção

1. Prepare os arquivos:
```bash
npm run build
```

2. Deploy com PM2:
```bash
pm2 start ecosystem.config.js --env production
```

## 🛠 Tecnologias

- HTML5
- CSS3 
- JavaScript (Vanilla)
- SVG para imagens
- PWA (Progressive Web App)

## 📈 SEO & Performance

O site foi otimizado para SEO com:

- Meta tags apropriadas
- Open Graph tags
- Schema.org markup
- Sitemap XML
- Robots.txt configurado
- Imagens otimizadas (SVG)
- Cache configurado
- GZIP habilitado

## 📱 PWA

O site funciona como um Progressive Web App, permitindo:

- Instalação no dispositivo
- Funcionamento offline
- Cache inteligente
- Notificações push
- Ícones adaptáveis

## 🔐 Segurança

- HTTPS forçado
- Headers de segurança configurados
- Proteção contra XSS
- CSP implementado
- Arquivos sensíveis protegidos

## 📖 Documentação

Para mais detalhes sobre:
- [PWA](docs/pwa.md)
- [SEO](docs/seo.md)
- [Segurança](docs/security.md)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- Email: contato@tavernadaimpressao.com.br
- WhatsApp: (61) 98765-4321