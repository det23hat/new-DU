const toDelete = require('../models/delete_model');

module.exports = class DeleteSwitches {
    deleteSwitch(req, res, next) {
        
        // 將資料寫入資料庫
        toDelete().then(() => {
            // 若寫入成功則回傳
            res.json({
                status: "刪除成功"
            })
        }, (err) => {
            // 若寫入失敗則回傳
            res.json({
                result: err
            })
        })
    }
}