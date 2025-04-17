# FBF - Federação Brasileira de Futsal (Haxball)

Bem-vindo ao projeto oficial da FBF! Aqui você encontra tudo sobre a nossa comunidade de futsal virtual: campeonatos, rankings, notícias, inscrições e muito mais, tudo em um só lugar.

---

## Sobre o Projeto
Sistema completo para organização e participação em campeonatos da FBF, focado em experiência moderna, segura e intuitiva para jogadores e administração.

---

## Stack e Ferramentas Utilizadas
- **Frontend:** [Next.js](https://nextjs.org/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Axios](https://axios-http.com/)
- **Backend:** [Node.js](https://nodejs.org/), [Express](https://expressjs.com/), [pg (PostgreSQL client)](https://node-postgres.com/), [dotenv](https://www.npmjs.com/package/dotenv), [cors](https://www.npmjs.com/package/cors)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)
- **Deploy:** [Vercel](https://vercel.com/) (frontend), [EC2 AWS](https://aws.amazon.com/ec2/) (backend)
- **Testes/Integração HTTPS temporária:** [ngrok](https://ngrok.com/)

---

## Funcionalidades
- **Cadastro e Login de Usuário:**
  - Crie sua conta, faça login e acesse recursos exclusivos.
  - Após o cadastro, login automático e acesso ao perfil.
- **Perfil Protegido:**
  - Veja e edite seus dados de jogador.
- **Inscrição de Times:**
  - Monte seu time e inscreva-se nos campeonatos ativos.
- **Visual Moderno:**
  - Interface escura, responsiva e agradável, com feedback claro para cada ação.
- **Footer com Regulamento:**
  - Baixe o regulamento oficial da FBF direto do rodapé.
- **Integração Frontend ↔ Backend:**
  - Toda autenticação e cadastro via API RESTful segura (JWT).
- **Outros Recursos:**
  - Notícias, calendário, ranking, classificação, multimídia e mais!

---

## Estrutura do Projeto
- `/pages` (Next.js): páginas do frontend
- `/components` (Next.js): componentes reutilizáveis
- `/fbf-api` (Express): backend Node.js/Express

---

## Como rodar localmente
1. **Clone o projeto:**
   ```bash
   git clone git@github.com:gustavobbrz/fbf.git
   cd fbf
   ```
2. **Instale as dependências do frontend:**
   ```bash
   npm install
   ```
3. **Instale as dependências do backend:**
   ```bash
   cd fbf-api
   npm install
   ```
4. **Configure as variáveis de ambiente:**
   - No frontend (`.env.local` na raiz):
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:3000
     ```
   - No backend (`.env` em `/fbf-api`):
     ```env
     DB_USER=seu_usuario
     DB_PASSWORD=sua_senha
     DB_HOST=localhost
     DB_NAME=seu_banco
     DB_PORT=5432
     PORT=3000
     ```
5. **Inicie o backend:**
   ```bash
   cd fbf-api
   node server.js
   ```
6. **Inicie o frontend:**
   ```bash
   cd ..
   npm run dev
   ```
7. **Acesse:**
   - [http://localhost:3000](http://localhost:3000)

---

## Deploy e Integração Produção
- **Frontend:** Vercel (deploy automático a cada push)
- **Backend:** EC2 AWS
- **Variável de ambiente:**
  - No Vercel, defina `NEXT_PUBLIC_API_URL` apontando para o backend (ex: `https://seudominio.com` ou link do ngrok para testes)

---

## Testando integração HTTPS (ngrok)
Se não tiver domínio próprio, use ngrok para expor o backend com HTTPS:
```bash
ngrok http 3000
```
Use o link HTTPS gerado como valor de `NEXT_PUBLIC_API_URL` no Vercel.

---

## Observações
- O backend Express diferencia `/usuarios` de `/usuarios/`. Sempre use rotas SEM barra no final.
- Para produção, recomenda-se usar domínio próprio e HTTPS definitivo (Nginx + Let’s Encrypt).
- O link do ngrok muda a cada reinício.

---

## Contribuição
Pull requests são bem-vindos! Abra uma issue para discutir melhorias.

---

## Licença
MIT


## Deploy rápido no Vercel
1. Faça push do repositório para o GitHub.
2. No Vercel, crie um novo projeto e conecte ao seu repositório.
3. Adicione a variável de ambiente `NEXT_PUBLIC_API_URL`.
4. Pronto! Cada novo push já gera um deploy automático.

---

## Segurança & Boas Práticas
- Nenhuma senha é salva em texto puro.
- JWT protege todas as rotas sensíveis.
- Dados pessoais só podem ser acessados por quem estiver logado.

---

## Agradecimento
Esse sistema é feito de fã para fã, pensando em quem vive e respira FBF. Sinta-se à vontade para sugerir melhorias, reportar bugs ou contribuir. Juntos, vamos fazer a comunidade crescer ainda mais!

---

Feito com carinho para a comunidade FBF Haxball ⚽
