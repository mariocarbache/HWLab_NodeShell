const pwd = require("./pwd");
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newLine
  if (cmd == "pwd"){
    pwd();
  }
  if (cmd == "ls"){
    const ls = require("./ls");
  }
  process.stdout.write('\nprompt > ');
});