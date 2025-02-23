module.exports = {
  apps: [{
    name: 'taverna-da-impressao',
    script: 'serve',
    env: {
      PM2_SERVE_PATH: '.',
      PM2_SERVE_PORT: 3000,
      PM2_SERVE_SPA: 'true',
      PM2_SERVE_HOMEPAGE: '/index.html'
    },
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};