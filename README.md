# FBF - Federação Brasileira de Futsal (Haxball)

Site oficial da FBF para classificação, ranking, notícias, campeonatos, inscrições e muito mais.

---

## Principais Funcionalidades

- **Cadastro e Login de Usuário**
  - Cadastro de novos usuários com validação de senha.
  - Login seguro utilizando JWT.
  - Login automático após cadastro, redirecionando para o perfil.
  - Armazenamento do token JWT no localStorage para rotas protegidas.
  - Logout e proteção de rotas sensíveis.

- **Perfil do Usuário**
  - Página de perfil protegida, acessível apenas para usuários autenticados.
  - Busca automática dos dados do usuário autenticado.

- **Inscrição de Times**
  - Formulário para inscrição de times em campeonatos, com seleção de jogadores e capitão.
  - Validação de campos obrigatórios.

- **Visual e Experiência**
  - Tema escuro consistente em todas as páginas (login, cadastro, home, etc).
  - Mensagens de erro e sucesso amigáveis.
  - Footer atualizado: link "Regulamento" faz download direto do PDF.

- **Integração Backend/API**
  - Endpoints utilizados:
    - `/usuarios` – cadastro de usuário
    - `/login` – autenticação e geração de token JWT
    - `/perfil` – dados do usuário autenticado
  - Variável de ambiente `NEXT_PUBLIC_API_URL` para configuração da API

- **Outros Recursos**
  - Seções de campeonatos, notícias, ranking, classificação e multimídia.
  - Componentes reutilizáveis para Header e Footer.

---

## Como rodar localmente
```bash
npm install
npm run dev
```
Acesse: http://localhost:3000

## Deploy (Vercel)
1. Faça push do projeto para o GitHub.
2. Crie um novo projeto no Vercel e conecte ao repositório.
3. Configure a variável de ambiente `NEXT_PUBLIC_API_URL` no painel do Vercel.
4. O deploy será feito automaticamente a cada novo push.

---

## Resumo do Fluxo do Usuário
1. O usuário acessa a tela de cadastro, preenche os dados e cria a conta.
2. Após cadastro, o sistema faz login automaticamente e redireciona para o perfil.
3. Usuários autenticados podem acessar funcionalidades exclusivas, como inscrição de times.
4. O usuário pode sair a qualquer momento usando o botão de logout.

---

## Segurança
- Senhas nunca são armazenadas em texto puro.
- JWT utilizado para autenticação e proteção de rotas.
- Dados sensíveis protegidos por autenticação no backend.

---

Desenvolvido para a comunidade FBF Haxball.
