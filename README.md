# Behind the Thread

Este repositório tem dois projetos:

- `frontend`: aplicação React + Vite
- `backend`: aplicação/API Laravel

## Requisitos

- PHP 8.3 ou superior
- Composer
- Node.js e npm

## Configuração Inicial

Instalar as dependências do frontend:

```bash
cd frontend
npm install
```

Instalar as dependências do backend:

```bash
cd backend
composer install
npm install
```

Criar o ficheiro de ambiente do Laravel e a chave da aplicação, caso ainda não existam:

```bash
cd backend
cp .env.example .env
php artisan key:generate
```

Executar as migrations do Laravel:

```bash
cd backend
php artisan migrate
```

Por predefinição, o projeto Laravel está configurado para usar SQLite.

## Executar os Dois Projetos

Abrir duas janelas de terminal.

Terminal 1: iniciar o backend em Laravel:

```bash
cd backend
php artisan serve
```

O backend fica disponível em:

```text
http://127.0.0.1:8000
```

Terminal 2: iniciar o frontend em React:

```bash
cd frontend
npm run dev
```

O frontend fica normalmente disponível em:

```text
http://localhost:5173
```

Se a porta `5173` já estiver a ser utilizada, o Vite mostra o URL correto no terminal.

## Comandos Úteis

Executar os testes do backend:

```bash
cd backend
php artisan test
```

Gerar a build do frontend:

```bash
cd frontend
npm run build
```

Gerar a build dos assets do Laravel, se necessário:

```bash
cd backend
npm run build
```
