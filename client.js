const net = require("net");
const {IP, PORT} = require('./constants') ;
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,           // IP address here,
    port: PORT                // PORT number here,
  });

  conn.setEncoding("utf8"); // interpret incoming data as text
  conn.on('data', (data) => {      // recieves text sent from server
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = {
  net,
  connect,
};