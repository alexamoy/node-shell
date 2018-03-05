// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
var commands = require('./commands');


process.stdin.on('data', function (data) {
    //data = echo hello world
    var arr = data.toString().trim().split(' '); // remove the newline
    //arr = [echo,hello,world];
    var cmd = arr[0];
    //cmd = echo
    var str = arr.slice(1).join(' ');
    //str = hello world
    commands[cmd](str);
        
        
        
    // process.stdout.write('\nprompt > ');
})
//console.log(Object.keys(process))