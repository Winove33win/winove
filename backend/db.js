import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'lweb03.appuni.com.br',
  port: 3306,
  user: 'winove',
  password: '9*19avmU0',
  database: 'fernando_winove_com_br_',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
