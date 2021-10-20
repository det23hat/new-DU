const toModify = require('../models/modify_model');

module.exports = class ModifySwitches {
    modifySwitch(req, res, next) {
        
        const switchState = {
            state: req.body.state
        }
        // 將資料寫入資料庫
        toModify(switchState).then(result => {
            // 若寫入成功則回傳
            res.json({
                status: "狀態更改成功",
                result: result 
            })
        }, (err) => {
            // 若寫入失敗則回傳
            res.json({
                result: err
            })
        })
    }
}