# Welcome to your Winove project

## Project info

**URL**: https://lovable.dev/projects/47e97737-0d5b-4617-a6fc-0cc3a9fb4b6b

## How can I edit this code?

There are several ways of editing your application.

**Use Winove**

Simply visit the [Winove Project](https://lovable.dev/projects/47e97737-0d5b-4617-a6fc-0cc3a9fb4b6b) and start prompting.

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

# Step 4: Start the development server with auto-reloading and an instant preview.
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

