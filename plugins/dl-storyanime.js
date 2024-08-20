const fetch = require("node-fetch")
let handler = async (m, {conn, text, command, usedPrefix}) => {
    //if (!text) throw `Masukkan pertanyaan!\n\nContoh ${usedPrefix + command}dalle laptop`
    try {
        let res = await fetch(`${global.APIs.wdp}download/storyanime`)
        let json = await res.json()
        let rez = json.result.url
        await m.reply(wait)
        await conn.sendFile(m.chat, rez, null, json.result.title, m);
    } catch (err) {
        throw (err)
    }
}
handler.command = handler.help = ['storyanime'];
handler.tags = ['download'];
handler.premium = false
module.exports = handler;