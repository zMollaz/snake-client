const net = require("net");
const {IP, PORT} = require('./constants') ;
// establishes a connection with the game server
const connect = function () {   // main function that handles the connection
  const conn = net.createConnection({
    host: IP,           // IP address here,
    port: PORT                // PORT number here,
  });

  conn.on('connect', () => {  // establishes a connection
    console.log('Successfully connected to the game server'); //prints connection successful
    conn.write("Name: AE"); //pritns initials upon connection
    //conn.write("Move: up"); // registers a move up movement on connection
    //conn.write("Move: right");
    //conn.write("Move: down");
    //conn.write("Move: left");
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