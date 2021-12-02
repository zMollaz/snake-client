let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    console.log("Move: up")
    connection.write("Move: up");
  }
  if (key === "s") {
    console.log("Move: down")
    connection.write("Move: down");
  }
  if (key === "d") {
    console.log("Move: right")
    connection.write("Move: right");
  }
  if (key === "a") {
    console.log("Move: left")
    connection.write("Move: left");
  }
  if (key === "q") {
    console.log("Gotcha!!!")
    connection.write("Say: Gotcha!!!");
  }
  if (key === "e") {
    console.log("Snake is down!!!")
    connection.write("Say: Snake is down!!!");
  }
  if (key === "f") {
    console.log("Watch out!!")
    connection.write("Say: Watch out!!");
  }
};

const setupInput = function (conn) {  //function that handles user inputs
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};