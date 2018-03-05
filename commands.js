const fs = require('fs');
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
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    },
    echo: function(data){
        console.log(data);
        process.stdout.write("prompt > ");
    },
    cat: function(file){
        fs.readFile(file,'utf8',function(err,data){
            if(err) throw err;
            console.log(data);
            process.stdout.write("prompt > ");
        });
        
    },
    head: function(file){
       fs.readFile(file, 'utf8',function(err,data){
           if(err) throw err;
           data = data.split('\n');
           data.length = 5; 
           console.log(data.join('\n'));
           process.stdout.write("prompt > ");
       })
    },
    tail: function(file){
        fs.readFile(file, 'utf8',function(err,data){
            if(err) throw err;
            data = data.split('\n');
            data = data.slice(-5);
            console.log(data.join('\n'));
            process.stdout.write("prompt > ");
        })
    }
}