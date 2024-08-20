const { tiktokdl } = require('tiktokdl');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `Masukkan Judul Lagu!\n\nContoh:\n${usedPrefix}${command} gemuruh riuh`;
  }
  try {
    conn.reply(m.chat, wait, m);
    let res = await (await fetch(`${global.APIs.wdp}lirik?text=${text}`)).json()
    let json = res.result
    //let txt = `*Username:* ${json.username}\n*Full Name:* ${json.fullName}\n*Bio:* ${json.bio}\n*Followers:* ${json.followers}\n*Following:* ${json.following}\n*Jumlah Postingan:* ${json.postsCount}`
    let txt = `*Titile:* ${json.title}\n*Artis:* ${json.artist}\n\n\nLirik: ${json.lyrics}`
    conn.sendFile(m.chat, json.image, null, txt, m)
  } catch (e) {
    throw `Error: ${eror}`;
  }
};

handler.command = handler.help = ['lirik']
handler.tags = ['download'];
handler.limit = true;
handler.group = false;
handler.premium = false;

module.exports = handler;