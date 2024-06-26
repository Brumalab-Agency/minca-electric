const mysql = require('mysql2/promise');
const { Client } = require('ssh2');
const sshClient = new Client();

export async function query({ query, values = [] }) {
  const DBConfig = {
    host: '127.0.0.1',
    port: 8888,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };

  const tunnelConfig = {
    host: process.env.DB_SSH_HOST,
    port: 22,
    username: process.env.DB_SSH_USER,
    privateKey: JSON.parse(process.env.KEY_PATH_PEM_FILE)
  };
  
  const forwardConfig = {
    srcHost: '127.0.0.1',
    srcPort: 8888,
    dstHost: '127.0.0.1',
    dstPort: 3306
  };

  const SSHConnection = new Promise((resolve, reject) => {
    sshClient.on('ready', () => {
      sshClient.forwardOut(
        forwardConfig.srcHost,
        forwardConfig.srcPort,
        forwardConfig.dstHost,
        forwardConfig.dstPort,
        (err, stream) => {
          if (err) {
            console.log(err)
            reject(err);
          } else {
            const updatedDbServer = {
              ...DBConfig,
              stream
            };
            resolve(mysql.createConnection(updatedDbServer));
          }
        }
      );
    }).connect(tunnelConfig);
  });

  try {
    const connection = await SSHConnection;
    const results = await connection.execute(query, values);
    connection.end();
    return results;
  } catch (error) {
    console.log(error)

    throw new Error(error);
  }
}
