const fetch = require('node-fetch')
let handler = async (m, {conn, text, command, usedPrefix}) => {
        if(!text) throw `Masukkan Url!`
    try {
    let res = await (await fetch(`${global.APIs.wdp}isgd?link=${text}`)).json()
    let json = res.hasil.shorturl
    m.reply(json)
    } catch (err) {
        throw(err)
    }
}
handler.command = handler.help = ['isgd'];
handler.tags = ['shortlink'];
handler.premium = false
module.exports = handler;
