module.exports = {
   pwd: function(){ 
       process.stdout.write(process.cwd());
       process.stdout.write('\nprompt > ');  
    },
    date: function(){
        var date = new Date();
        process.stdout.write(date.toUTCString());
        process.stdout.write('\nprompt > ');
    },
    ls: function(){
        var fs = require('fs');
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    }
}

// 