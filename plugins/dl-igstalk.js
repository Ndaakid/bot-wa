const { tiktokdl } = require('tiktokdl');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `Masukkan USERNAME!\n\nContoh:\n${usedPrefix}${command} cristiano`;
  }
  try {
    if (!text) {
      throw `Berikan Username dari IG!`;
    }
    conn.reply(m.chat, wait, m);
    let res = await (await fetch(`${global.APIs.wdp}download/igstalk?username=${text}`)).json()
    let json = res.result
    let txt = `*Username:* ${json.username}\n*Full Name:* ${json.fullName}\n*Bio:* ${json.bio}\n*Followers:* ${json.followers}\n*Following:* ${json.following}\n*Jumlah Postingan:* ${json.postsCount}`
    conn.sendFile(m.chat, json.photoUrl, null, txt, m)
  } catch (e) {
    throw `Error: ${eror}`;
  }
};

handler.command = handler.help = ['igstalk']
handler.tags = ['download'];
handler.limit = true;
handler.group = false;
handler.premium = false;

module.exports = handler;