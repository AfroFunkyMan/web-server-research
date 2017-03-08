var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).end();
});

router.post('/', function (req, res, next) {
    if (req.body.login && req.body.password) {
            if (req.body.login === 'login') {
                if (req.body.password === 'login') {
                    res.cookie('name', 'tobi');
                    res.status(200).jsonp({
                        success: true,
                        token: 'ufaghvc7wteafg8di76qweygcb796weyfgd87366fd9639qdf76qgwxs'
                    });
                } else res.status(403).jsonp({
                    success: false,
                    message: 'Введен не правильный логин или пароль'
                });
            }
            if (req.body.login === 'newuser') {
                res.status(200).jsonp({
                    success: false,
                    message: 'Пройди регестрацию'
                });
            }
            if (req.body.login !== 'login' && req.body.login !== 'newuser'){
                res.status(404).jsonp({
                    success: false,
                    message: 'Такого пользователя нет'
                });
            }
        } else {
        res.status(500).jsonp({
            success: false,
            message: 'Не правильный запрос'
        });
    }
});


module.exports = router;
