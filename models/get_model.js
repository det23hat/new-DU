var fs = require('fs');

module.exports = function toGet() {
    
    return new Promise((resolve, reject) => {
        fs.readFile('switches.json', 'utf8', function (err, data) {
            if (err) throw err;
            console.log(`data = ${data}`)
            let switches
            if (data != "")
                switches= JSON.parse(data);
            else
                switches="null"
            let result = {
                switchState: switches,
            };
            resolve(result);
        });
    })
}