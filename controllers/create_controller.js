const toCreate = require('../models/create_model');

module.exports = class CreateSwitches {
    createSwitch(req, res, next) {
        
        const switchData = {
            id: req.body.id,
            type: req.body.type,
            state: req.body.state,
        }
        // 將資料寫入資料庫
        toCreate(switchData).then(result => {
            // 若寫入成功則回傳
            res.json({
                status: "登記成功",
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