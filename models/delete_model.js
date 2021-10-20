var fs = require('fs');

module.exports = function delete_switch() {

    return new Promise((resolve, reject) => {
        fs.writeFile('switches.json',"", function (err) {
            if (err) throw err;
            resolve();
          });
    })
}