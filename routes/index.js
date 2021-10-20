var express = require('express');
var router = express.Router();

const SwitchCreateMethod = require('../controllers/create_controller.js');
const SwitchGetMethod = require('../controllers/get_controller');
const SwitchModifyMethod = require('../controllers/modify_controller');
const SwitchDeleteMethod = require('../controllers/delete_controller');

let switchCreateMethod = new SwitchCreateMethod();
let switchGetMethod = new SwitchGetMethod();
let switchModifyMethod = new SwitchModifyMethod();
let switchDeleteMethod = new SwitchDeleteMethod();

const toCreate = require('../models/create_model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/switches',switchGetMethod.getSwitchState);

router.post('/switches',function(req, res, next) {
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
});

router.put('/switches', switchModifyMethod.modifySwitch);

router.delete('/switches',switchDeleteMethod.deleteSwitch);

module.exports = router;
