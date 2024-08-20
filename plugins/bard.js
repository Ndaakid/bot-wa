
let fetch = require('node-fetch');
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
try {
  await m.reply(wait)
  let res = await (await fetch(`${global.APIs.wdp}bard?text=${text}`)).json()
  await m.reply(res.result)
} catch (err) {
  throw eror
}
}
handler.command = handler.help = ['bard'];
handler.tags = ['ai'];
handler.premium = false
module.exports = handler;
