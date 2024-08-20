const fetch = require("node-fetch")
let handler = async (m, {conn, text, command, usedPrefix}) => {
    try {
        let res = await (await fetch(`${global.APIs.wdp}shinobu`)).json()
        let json = res.result.url
        await m.reply(wait)
        await conn.sendFile(m.chat, json, "null.jpg", "done", m);
    } catch (err) {
        throw (err)
    }
}
handler.command = handler.help = ['shinobu'];
handler.tags = ['asupan'];
handler.premium = false
module.exports = handler;