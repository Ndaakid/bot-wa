const fetch = require("node-fetch")
let handler = async (m, {conn, text, command, usedPrefix, args}) => {
    if (!(args[0].includes('http://') || text.includes('https://'))) throw `url invalid, please input a valid url. Try with add http:// or https://`
    if (!args[0]) throw `Masukkan pertanyaan!\n\nContoh ${usedPrefix + command}https://soundcloud.com/jbrytemusic/night-changes-one-direction-cover-by-justin-bryte`
    try {
        let res = await (await fetch(`${global.APIs.wdp}soundcloud?url=${args[0]}`)).json()
        await m.reply(wait)
        await conn.sendFile(m.chat, res.result.url, null, res.result.title, m);
    } catch (err) {
        throw (err)
    }
}
handler.command = handler.help = ['soundcloud'];
handler.tags = ['download'];
handler.premium = false
module.exports = handler;