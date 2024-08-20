const fetch = require("node-fetch")
let handler = async (m, {conn, text, command, usedPrefix}) => {
    if (!text) throw `Masukkan pertanyaan!\n\nContoh ${usedPrefix + command} laptop`
    try {
        let res = await fetch(`${global.APIs.wdp}dalle?text=${text}`)
        let ress = await res.buffer()
        await m.reply(wait)
        await conn.sendFile(m.chat, ress, "null.jpg", "done", m);
    } catch (err) {
        throw (err)
    }
}
handler.command = handler.help = ['dalle'];
handler.tags = ['ai'];
handler.premium = false
module.exports = handler;