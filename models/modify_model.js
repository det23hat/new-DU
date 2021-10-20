var fs = require('fs');

module.exports = function modify(switchState) {
    
    return new Promise((resolve, reject) => {
        fs.readFile('switches.json', function (err, data) {
            if (err) throw err;
            let olddata = JSON.parse(data)
            console.log(olddata);
            var newSwitchData = {
                id: olddata.id,
                type: olddata.type,
                state: switchState,
            }
            let newSwitchString = JSON.stringify(newSwitchData)
            fs.writeFile('switches.json',newSwitchString,function(err){
            if (err) throw err;
            })
            let result = {updateSwitch : newSwitchData};
            resolve(result);
        });
        
    })
}