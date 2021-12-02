const net = require("net");
const {IP, PORT} = require('./constants') ;
// establishes a connection with the game server
const connect = function () {   // main function that handles the connection
  const conn = net.createConnection({
    host: IP,           // IP address here,
    port: PORT                // PORT number here,
  });

  conn.on('connect', () => {  //prints connection successful when connected
    console.log('Successfully connected to the game server');
    conn.write("Name: AE");
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