var fs = require('fs');

module.exports = function toCreate(switchData) {
    
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(switchData)
        console.log(switchData);
        fs.appendFile('switches.json',data, function (err) {
            if (err) throw err;
            let result = {
                createSwitch: switchData
            };
            resolve(result);
        });
    })
}