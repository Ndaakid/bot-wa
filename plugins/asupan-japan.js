const fetch = require("node-fetch")
let handler = async (m, {conn, text, command, usedPrefix}) => {
    try {
        let res = await fetch(`${global.APIs.wdp}japan`)
        let ress = await res.buffer()
        await m.reply(wait)
        await conn.sendFile(m.chat, ress, "null.jpg", "done", m);
    } catch (err) {
        throw (err)
    }
}
handler.command = handler.help = ['japan'];
handler.tags = ['asupan'];
handler.premium = false
module.exports = handler;