// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
var commands = require('./commands');


process.stdin.on('data', function (data) {
      var cmd = data.toString().trim(); // remove the newline
      commands[cmd]();
        
        
        
      // process.stdout.write('\nprompt > ');
})
//console.log(Object.keys(process))