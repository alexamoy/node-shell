// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var date = new Date();
    if (cmd==='pwd'){
        process.stdout.write(process.cwd());
    }
    if (cmd==='date'){
        process.stdout.write(date.toUTCString());
    }
  process.stdout.write('\nprompt > ');

});
//console.log(Object.keys(process))