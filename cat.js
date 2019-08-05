
const fs = require('fs');

function cat(cmd){
    if (cmd.includes('cat', 0)) {
        let fileName = cmd.slice(4);
        console.log(fileName);

        fs.readFile(`./${fileName}`, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
          });
    }
}

module.exports = {cat: cat};



