const mysql = require('mysql2/promise');
const { Client } = require('ssh2');
const fs = require('fs');
const sshClient = new Client();

export async function query({ query, values = [] }) {
  const DBConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  };

  console.log(fs.readFileSync(process.env.KEY_PATH_PEM_FILE))
  
  const tunnelConfig = {
    host: process.env.DB_SSH_HOST,
    port: 22,
    username: process.env.DB_SSH_USER,
    privateKey: fs.readFileSync(process.env.KEY_PATH_PEM_FILE)
  };
  
  const forwardConfig = {
    srcHost: process.env.DB_SSH_HOST,
    srcPort: 8888,
    dstHost: '127.0.0.1',
    dstPort: 80
  };

  const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
      sshClient.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
          if (err) reject(err);
          const updatedDbServer = {
            ...DBConfig,
            stream
          };
          resolve(mysql.createConnection(updatedDbServer));
        }
      );
    }).connect(tunnelConfig);
  });

  try {
    console.log(SSHConnection)
    const connection = await SSHConnection;
    console.log('Connected to DB');
    const [results] = await connection.execute(query, values);
    connection.end();
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}
