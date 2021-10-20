
const toGet = require('../models/get_model');

module.exports = class GetSwitches {
    getSwitchState(req, res, next) {        
        toGet().then(result => {
            // 若寫入成功則回傳
            res.json({
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