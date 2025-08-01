import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Iniciando ambiente de desenvolvimento...\n');

// Iniciar o servidor Node.js
const serverProcess = spawn('node', ['index.js'], {
  cwd: join(__dirname, 'server'),
  stdio: 'inherit'
});

// Iniciar o Vite (frontend)
const viteProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit'
});

// Gerenciar encerramento
process.on('SIGINT', () => {
  console.log('\n🛑 Encerrando serviços...');
  serverProcess.kill();
  viteProcess.kill();
  process.exit(0);
});

console.log('✅ Servidor API: http://localhost:3333');
console.log('✅ Frontend: http://localhost:8080');