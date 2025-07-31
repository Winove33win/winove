# Welcome to your Winove project

## Project info

**URL**: www.winove.com.br
## How can I edit this code?

There are several ways of editing your application.

**Use Winove**

Simply visit the www.winove.com.br

Changes made via Winove will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Winove.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Create a `.env` file based on `.env.example` (required for builds).
cp .env.example .env
# Ensure the `VITE_API_URL` variable is present. For production it should be
# `https://winove.com.br/api`.

# Step 5: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Backend dependencies

The local server relies on the following packages:

- **express** – API server framework
- **mysql2** – MySQL client with promise support
- **stripe** – Stripe API client
- **dotenv** – load environment variables from `.env`

## How can I deploy this project?

Simply open [Winove](https://lovable.dev/projects/47e97737-0d5b-4617-a6fc-0cc3a9fb4b6b) and click on Share -> Publish.

When building locally or running `deploy.sh`, make sure a `.env` file exists
with `VITE_API_URL` defined. The provided `deploy.sh` script will create a
minimal `.env` automatically.

## Can I connect a custom domain to my Winove project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Offline database setup

An SQL dump file named `winove_offline.sql` is included in the repository. It creates the `Winove-new` database with sample tables and data used by the project. To import the dump on your server, execute:

```sh
mysql -u fernandowinove -p Winove-new < winove_offline.sql
```

You can also use phpMyAdmin or another GUI to import the file manually.

## Testing database connectivity

Use the `testFullConnection.js` script to diagnose network issues and test the
database connection. Run it with Node:

```sh
node testFullConnection.js
```

If your database requires whitelisting a fixed IP, you can discover the public
IP address of this Codex environment with:

```sh
curl ifconfig.me
```

---

## 📦 Scripts de Banco de Dados (Winove)

Este projeto inclui scripts utilitários para interagir com o banco de dados MySQL.

### ▶️ Scripts incluídos

| Arquivo                      | Função                                               |
|-----------------------------|-------------------------------------------------------|
| `testConnection.js`         | Testa a conexão com o banco                          |
| `createTable.js`            | Cria a tabela `pagamentos`                           |
| `insertData.js`             | Insere dados fictícios                               |
| `selectData.js`             | Busca dados da tabela                                |
| `grant-access.sql`          | Libera acesso externo ao banco para um IP remoto     |
| `conectar-banco-winove.bat` | Executa o teste de conexão com um clique (Windows)   |

### 🛠️ Instruções

1. Execute os scripts com Node.js:

```bash
node createTable.js
node insertData.js
node selectData.js

GRANT ALL PRIVILEGES ON fernando_winove_com_br.* TO 'Winove'@'%' IDENTIFIED BY '9*19avmU0';
FLUSH PRIVILEGES;
