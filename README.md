# FBF - Federação Brasileira de Futsal (Haxball)

Bem-vindo ao projeto oficial da FBF! Aqui você encontra tudo sobre a nossa comunidade de futsal virtual: campeonatos, rankings, notícias, inscrições e muito mais, tudo em um só lugar.

---

## Sobre o Projeto
Este sistema foi criado para facilitar a organização e a participação nos campeonatos da FBF, trazendo praticidade tanto para jogadores quanto para a administração. O objetivo é oferecer uma experiência moderna, segura e intuitiva, fortalecendo a comunidade e incentivando a competitividade saudável.

---

## Banco de Dados
Este projeto utiliza **PostgreSQL** como banco de dados principal, com o ORM **Prisma** para facilitar o acesso e a modelagem dos dados.

- Todas as informações de usuários, times, campeonatos e inscrições são armazenadas de forma segura no banco.
- O Prisma permite migrações fáceis e integração direta com o backend.

---

## O que você encontra aqui
- **Cadastro e Login de Usuário:**
  - Crie sua conta, faça login e acesse recursos exclusivos.
  - Após o cadastro, você já entra automaticamente e pode montar seu perfil.
- **Perfil Protegido:**
  - Veja e edite seus dados de jogador. Só você acessa!
- **Inscrição de Times:**
  - Monte seu time, escolha o capitão e inscreva-se nos campeonatos ativos.
- **Visual Moderno:**
  - Interface escura, responsiva e agradável, com feedbacks claros para cada ação.
- **Footer com Regulamento:**
  - Baixe o regulamento oficial da FBF direto do rodapé.
- **Integração Total com Backend:**
  - Toda autenticação é feita via API segura (JWT), garantindo proteção dos seus dados.
- **Outros Recursos:**
  - Notícias, calendário, ranking, classificação, multimídia e mais!

---

## Como usar
1. **Clone o projeto:**
   ```bash
   git clone git@github.com:gustavobbrz/fbf.git
   cd fbf
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure a URL da API:**
   - Crie um arquivo `.env.local` com:
     ```env
     NEXT_PUBLIC_API_URL=https://sua-api.com
     ```
4. **Inicie o projeto:**
   ```bash
   npm run dev
   ```
5. **Acesse:**
   - [http://localhost:3000](http://localhost:3000)

---

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
