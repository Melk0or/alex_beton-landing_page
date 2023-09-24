// const nodemailer = require('nodemailer');
//
// const transport = nodemailer.createTransport(
//     {
//         host: 'smtp.mail.ru',
//         port: 465,
//         secure: true, //true only for 465 port
//         auth: {
//             user: 'mailer2024@mail.ru',
//             pass: '****'
//         }
//     },
//     {
//         from: 'Mailer Test <mailer2024@mail.ru>'
//     }
// );
//
// const mailer = message => {
//     transport.sendMail(message, (err, info) => {
//         if (err) return (console.log(err))
//         console.log('Email sent: ', info)
//     })
// }
//
// module.exports = mailer;
