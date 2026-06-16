# 🚀 Bia Talks — Guia de Instalação

## Estrutura do projeto

```
bia-talks-backend/
├── server.js          ← Backend (proxy seguro para a API)
├── package.json       ← Dependências Node.js
├── .gitignore         ← Protege arquivos sensíveis
├── .env.example       ← Modelo de configuração
├── INSTALAR.md        ← Este guia
└── public/
    ├── index.html     ← App da Bia (front-end)
    └── 50_transcricoes.pdf  ← PDF para download
```

---

## PASSO 1 — Criar sua API Key da Anthropic (gratuito)

1. Acesse: https://console.anthropic.com
2. Crie uma conta (gratuita — vem com $5 de crédito)
3. Vá em **API Keys** → **Create Key**
4. Copie a chave (começa com `sk-ant-...`)
5. **Guarde bem — ela aparece só uma vez!**

---

## PASSO 2 — Subir no GitHub

1. Crie uma conta em https://github.com (se não tiver)
2. Crie um repositório novo chamado `bia-talks`
3. Faça upload de todos os arquivos desta pasta
   - Você pode arrastar e soltar direto no GitHub
   - ⚠️ **NÃO suba o arquivo `.env`** (a API key fica só no Railway)

---

## PASSO 3 — Deploy no Railway (gratuito)

1. Acesse: https://railway.app
2. Faça login com sua conta do GitHub
3. Clique em **New Project** → **Deploy from GitHub repo**
4. Selecione o repositório `bia-talks`
5. Railway vai detectar automaticamente que é Node.js

---

## PASSO 4 — Configurar a API Key no Railway

1. No painel do Railway, clique no seu projeto
2. Vá em **Variables** (menu lateral)
3. Clique em **+ New Variable**
4. Adicione:
   - **Nome:** `ANTHROPIC_API_KEY`
   - **Valor:** `sk-ant-SUA_CHAVE_AQUI`
5. Clique em **Add**
6. O Railway vai reiniciar automaticamente

---

## PASSO 5 — Pegar sua URL pública

1. No Railway, clique em **Settings** → **Networking**
2. Clique em **Generate Domain**
3. Você vai receber uma URL como:
   `https://bia-talks-production.up.railway.app`
4. Acesse essa URL no navegador — a Bia já estará funcionando! 🎉

---

## ✅ Testando

- Abra a URL do Railway no celular ou computador
- Clique em "Começar agora com a Bia"
- Se a Bia responder, está tudo certo!

---

## 💡 Dicas

- **Custo:** O Railway tem plano gratuito com 500 horas/mês
- **API Anthropic:** Os $5 de crédito grátis duram bastante para testes
- **Domínio próprio:** No Railway você pode conectar um domínio `.com` nas configurações

---

## ❓ Problemas comuns

| Problema | Solução |
|---|---|
| "Erro na conexão" | Verifique se a ANTHROPIC_API_KEY foi adicionada no Railway |
| Página não carrega | Aguarde 1-2 min após o deploy para o servidor iniciar |
| PDF não baixa | Confirme que o arquivo está na pasta `public/` |
| Voz não funciona | Use Chrome ou Edge (Firefox não suporta) |
