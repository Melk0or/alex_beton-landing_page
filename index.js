// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const mailer = require('./nodemailer');
// let user = undefined;
//
// const PORT = process.env.PORT || 3001;
// app.use('/css', express.static(__dirname + '/assets/css'));
// app.use(bodyParser.urlencoded({ extended: false}));
//
// app.post ('/index', (req, res) => {
//     if (!req.body.name || !req.body.phone) return res.sendStatus(400);
//     const message = {
//         to: 'gadzhiev-2019@bk.ru',
//         subject: 'ЗАЯВКА С САЙТА',
//         text: `Новая заявка на сайте ->
//         Телефон: ${req.body.phone},
//         Имя: ${req.body.name}
//         Данное пиьсмо не требует ответа.
//         `
//     }
//     mailer(message);
//     user = req.body;
//     res.redirect('/index');
// })
//
// app.get('/index', (req, res) => {
//     if (typeof user !== 'object') return res.sendFile(__dirname + '/index.html');
//     res.send("Заявка отправлена, скоро с вами свяжутся. Обновите страницу для продолженния работы");
//     user = undefined
// })
//
// app.listen(PORT, ()=> console.log(`server listening http://localhost:${PORT}/index`))