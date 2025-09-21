# ReelsDown - Instagram Reels Downloader

Uma ferramenta moderna e segura para baixar Instagram Reels gratuitamente.

## 🚀 Características

- ✅ **100% Gratuito** - Sem taxas ou assinaturas
- ✅ **Alta Qualidade** - Downloads na qualidade original
- ✅ **Seguro** - Sem vírus ou malware
- ✅ **Rápido** - Processamento em segundos
- ✅ **Responsivo** - Funciona em todos os dispositivos
- ✅ **Sem Cadastro** - Use imediatamente

## 🛠️ Tecnologias

- **Frontend**: React 18, Tailwind CSS, Vite
- **Backend**: Node.js, Express
- **Segurança**: Rate limiting, CORS, Helmet
- **Performance**: Compressão GZIP, Cache otimizado

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/yourusername/reelsdown.git

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Em outro terminal, inicie o backend
npm run server
```

## 🚀 Deploy

### Frontend (Vercel/Netlify)
```bash
npm run build
```

### Backend (Railway/Heroku)
```bash
# Configure as variáveis de ambiente
PORT=3001
NODE_ENV=production

# Deploy do servidor
npm run server
```

## 📋 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3001
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

## 🔒 Segurança

- Rate limiting (10 requests/minuto por IP)
- Validação de URLs do Instagram
- Headers de segurança (CORS, Helmet)
- Sanitização de entrada
- Tokens temporários para downloads

## 📈 Performance

- Compressão GZIP ativada
- Cache de browser otimizado
- Lazy loading de imagens
- Code splitting automático
- CDN ready

## ⚖️ Uso Responsável

- Respeite os direitos autorais
- Use apenas para conteúdo próprio ou com permissão
- Siga os termos de uso do Instagram
- Não redistribua conteúdo sem autorização

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

- Abra uma [issue](https://github.com/yourusername/reelsdown/issues)
- Entre em contato: contato@reelsdown.com

---

**Aviso Legal**: Esta ferramenta deve ser usada de forma responsável e em conformidade com os termos de serviço do Instagram e leis de direitos autorais aplicáveis.