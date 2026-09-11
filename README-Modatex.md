# README Modatex - Funcionamento das Paginas

## Visao geral

O site **Behind the Thread** esta dividido em duas partes principais:

- `frontend`: aplicacao React com Vite, responsavel pelas paginas, navegacao e interacao com o utilizador.
- `backend`: API Laravel, responsavel pela autenticacao, validacao, base de dados e envio/rececao de informacao.

O frontend funciona como uma SPA, ou seja, a navegacao entre paginas acontece no React atraves do `react-router-dom`. O backend nao renderiza as paginas principais; fornece dados em JSON atraves de endpoints da API.

## O que é necessário adicionar no deployment:

1. No Head do index.html, adicionar os urls do site aos OG e twitter cards.
2. Na pasta Backend adicionar no ficheiro .env informação sobre o servidor (DB_CONNECTION=mysql) bem como preencher os campos de MAIL_MAILER=log para a recuperação de password funcionar.

## Estrutura de navegacao

As rotas principais do site estao definidas em `frontend/src/App.jsx`.

Todas as paginas usam o `RootLayout`, que inclui:

- `Header`: barra superior com menu, titulo do site e link para contactos.
- `Menu`: menu dropdown com links para as principais seccoes.
- `Footer`: rodape com subscricao da newsletter.
- `Outlet`: zona onde cada pagina e apresentada.

Existem paginas publicas, acessiveis por qualquer visitante, e paginas privadas, acessiveis apenas a utilizadores autenticados.

## Pagina Home

Rota:

```text
/
```

A Home e a pagina inicial do site. Apresenta o titulo **Behind the Thread** e resume as principais areas do projeto:

- Dirty Talks
- Artigos
- Designers
- Base de Dados
- Misturas

Para mostrar os conteudos mais recentes, a pagina usa o hook `useHomeLatest`, que chama o endpoint:

```text
GET /api/home/latest
```

O backend devolve os 3 registos mais recentes de Dirty Talks, Artigos, Designers e Misturas aprovadas.

## Pagina Dirty Talks

Rota:

```text
/dirtytalks
```

Esta pagina lista todos os conteudos do tipo **Dirty Talk**. Os dados sao carregados atraves de:

```text
GET /api/dirty-talks
```

Cada item aparece como um bloco de conteudo com imagem, titulo e link para a pagina de detalhe.

Se o utilizador estiver autenticado, aparecem tambem opcoes para:

- editar o Dirty Talk;
- apagar o Dirty Talk.

Pagina de detalhe:

```text
/dirtytalks/:id
```

Nesta pagina e mostrado o conteudo completo de um Dirty Talk especifico.

## Pagina Artigos

Rota:

```text
/artigos
```

A pagina Artigos lista todos os artigos existentes na base de dados. Os dados sao carregados atraves de:

```text
GET /api/artigos
```

Tal como nos Dirty Talks, cada artigo aparece com imagem, titulo e acesso ao detalhe.

Se existir sessao iniciada, o utilizador pode editar ou apagar artigos.

Pagina de detalhe:

```text
/artigos/:id
```

Mostra o artigo completo, incluindo texto e keywords associadas.

## Pagina Designers

Rota:

```text
/designers
```

Esta pagina apresenta perfis ou conteudos relacionados com designers. Os dados sao pedidos ao backend atraves de:

```text
GET /api/designers
```

Cada designer tem uma pagina individual:

```text
/designers/:id
```

Na pagina de detalhe e apresentado o conteudo completo. Quando o utilizador esta autenticado, tambem pode editar ou apagar este tipo de conteudo.

## Pagina Base de Dados

Rota:

```text
/basededados
```

A Base de Dados e uma area de consulta organizada em tres grandes grupos:

- Espacos
- Ferramentas
- Conteudos

Os dados sao carregados pelo `BaseDadosContext`, que faz pedidos ao backend para:

```text
GET /api/espacos
GET /api/ferramentas
GET /api/conteudos
```

Depois de receber os dados, o frontend agrupa os registos por categoria.

Exemplos de categorias:

- Espacos: Confecao, Tecidos, Malhas, Acessorios, Armazens, Feiras, Museus.
- Ferramentas: Tipografia, Cor, Ilustracao, Imagens, Mockups, 3D, Videos, Softwares.
- Conteudos: Livros, Filmes, Series, Blogs, Revistas, Podcasts, Youtube.

Pagina de detalhe:

```text
/basededados/:resource/:type
```

Esta rota mostra os itens de uma categoria especifica. Por exemplo:

```text
/basededados/espacos/Tecidos
/basededados/ferramentas/Tipografia
/basededados/conteudos/Livros
```

Nesta pagina, um visitante pode consultar os dados. Um utilizador autenticado pode tambem:

- adicionar um novo item;
- editar um item existente;
- apagar um item.

## Pagina Misturas

Rota:

```text
/misturas
```

A pagina Misturas serve para apresentar propostas de colaboracao entre criativos.

Nesta pagina existem duas funcoes principais:

- consultar Misturas ja aprovadas;
- submeter uma nova proposta atraves de formulario.

As Misturas publicadas sao carregadas atraves de:

```text
GET /api/misturas
```

O backend devolve apenas Misturas com o campo `aprovado` igual a `true`.

Quando um visitante submete uma nova Mistura, o frontend envia os dados para:

```text
POST /api/misturas
```

Por defeito, uma nova Mistura fica:

- `aprovado = false`
- `lida = false`

Isto significa que a proposta nao aparece logo no site publico. Primeiro tem de ser revista no backoffice.

Pagina de detalhe:

```text
/misturas/:id
```

Mostra a informacao completa de uma Mistura.

## Pagina Contactos

Rota:

```text
/contactos
```

A pagina Contactos apresenta:

- numero de telefone;
- email do projeto;
- creditos da equipa;
- links para redes sociais;
- formulario de contacto.

Neste momento, o formulario de contacto apenas trata os dados no frontend e tem um comentario a indicar onde poderia ser feita a ligacao futura a uma API Laravel.

## Paginas de autenticacao

### Login

Rota:

```text
/login
```

Permite iniciar sessao. O processo usa Laravel Sanctum:

1. O frontend pede o cookie CSRF:

```text
GET /sanctum/csrf-cookie
```

2. Depois envia email e password:

```text
POST /login
```

3. Se os dados estiverem corretos, o Laravel cria a sessao.

4. O frontend confirma o utilizador autenticado atraves de:

```text
GET /api/user
```

### Recuperacao de password

Rotas:

```text
/esqueci-password
/recuperar-password
```

Estas paginas permitem pedir um email de recuperacao e definir uma nova password.

Endpoints usados:

```text
POST /api/forgot-password
GET /api/reset-password/validate
POST /api/reset-password
```

### Mudar password

Rota:

```text
/mudar-password
```

Pagina privada onde o utilizador autenticado pode alterar a sua password.

Endpoint usado:

```text
POST /api/utilizadores/:id/change-password
```

## Dashboard

Rota:

```text
/dashboard
```

O Dashboard e uma pagina privada. So pode ser acedida por utilizadores autenticados.

Funciona como centro de gestao do site e apresenta atalhos para:

- adicionar conteudos;
- editar Dirty Talks;
- editar Artigos;
- editar Designers;
- editar Base de Dados;
- gerir Misturas;
- ver Misturas pendentes;
- mudar password;
- gerir utilizadores;
- consultar emails da newsletter.

Tambem mostra o numero de Misturas ainda nao lidas, atraves de:

```text
GET /api/misturas/nao-lidas/count
```

## Criar novo conteudo

Rota:

```text
/conteudo/novo
```

Pagina privada para criar:

- Dirty Talk;
- Artigo;
- Designer.

O utilizador escolhe o tipo de conteudo, escreve o texto num editor, adiciona imagem e keywords.

Consoante o tipo selecionado, o frontend envia os dados para um destes endpoints:

```text
POST /api/dirty-talks
POST /api/artigos
POST /api/designers
```

## Editar conteudo

Rota:

```text
/conteudo/:tipo/:id/editar
```

Pagina privada para alterar um Dirty Talk, Artigo ou Designer ja existente.

O frontend carrega primeiro os dados existentes e depois envia a atualizacao para o endpoint correspondente:

```text
PUT /api/dirty-talks/:id
PUT /api/artigos/:id
PUT /api/designers/:id
```

## Misturas pendentes

Rota:

```text
/misturas/pendentes
```

Pagina privada onde sao apresentadas as propostas de Misturas ainda nao aprovadas.

Os dados sao carregados atraves de:

```text
GET /api/misturas/pendentes
```

Nesta pagina o utilizador autenticado pode:

- aceitar uma proposta;
- rejeitar uma proposta.

Ao aceitar:

```text
PATCH /api/misturas/:id/aprovar
```

A Mistura passa a ficar visivel na pagina publica.

Ao rejeitar:

```text
DELETE /api/misturas/:id
```

A Mistura e removida da base de dados.

## Gestao de utilizadores

Rota:

```text
/users
```

Pagina privada para gerir utilizadores comuns.

Permite:

- listar utilizadores;
- criar utilizadores;
- editar dados;
- apagar utilizadores.

Endpoints principais:

```text
GET /api/utilizadores
POST /api/utilizadores
PUT /api/utilizadores/:id
DELETE /api/utilizadores/:id
```

Algumas destas acoes estao protegidas pelo middleware `admin`, ou seja, apenas administradores podem executa-las.

## Newsletter

No rodape do site existe uma area de subscricao da newsletter.

Quando um visitante introduz o email, o frontend envia:

```text
POST /api/newsletter
```

O backend guarda o email e cria um token para permitir cancelar a subscricao no futuro.

Pagina privada:

```text
/newsletter/emails
```

Permite consultar e gerir os emails inscritos na newsletter.

Endpoints usados:

```text
GET /api/newsletter
DELETE /api/newsletter/:id
POST /api/newsletter/send
```

O envio da newsletter e uma acao de administrador.

## Pagina de erro

Quando o utilizador acede a uma rota inexistente ou ocorre um erro de routing, e apresentada a pagina `Error`.

Esta pagina e definida como `errorElement` no router principal.

## Resumo do funcionamento

O funcionamento geral das paginas segue este padrao:

1. O utilizador entra numa rota do frontend.
2. O React renderiza a pagina correspondente.
3. A pagina usa um hook ou contexto para pedir dados ao backend.
4. O Laravel recebe o pedido, valida se necessario e consulta a base de dados.
5. O backend devolve JSON.
6. O frontend apresenta os dados ao utilizador.

Nas paginas privadas, antes de mostrar o conteudo, o frontend verifica se existe utilizador autenticado. No backend, as rotas de gestao tambem estao protegidas por `auth:sanctum`, garantindo que nao basta esconder botoes no frontend: a API tambem exige autenticacao.
