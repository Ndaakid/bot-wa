const { createHash } = require('crypto')
const nodemailer = require('nodemailer')
//let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command}) {
  let user = global.db.data.users[m.sender]
  if(!text) throw `${usedPrefix + command} ndaacy@gmail.com`
  if (user.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  user.age = 17
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  //BATAS
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ndaabotzmd@gmail.com",
      pass: "uccu gfmw whgp bvfm",
    },
  });

  const mailOptions = {
    from: "ndaabotzmd@gmail.com",
    to: text,
    subject: `Welcome To NdaaBotz ${m.name}!`,
    text: `Selamat Datang User!, SN kamu adalah : ${sn}\n\nSN di gunakan untuk unreg maka dari itu simpanlah dengan baik!\n\nJika ada fitur error atau ingin request fitur silahkan chat : https://wa.me/6285640575421`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  })
  //BATAS
  m.reply(`
Daftar berhasil!
Silahkan cek email mu: ${text}
*NOTE:* JIKA EMAIL TIDAK TERKIRIM ARTINYA ANDA SALAH MENGIRIM EMAIL.
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['main']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler