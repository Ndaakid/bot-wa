const fetch = require('node-fetch')
let handler = async (m, {conn, text, command, usedPrefix}) => {
        if(!text) throw `Masukkan Url!`
    try {
    let res = await (await fetch(`${global.APIs.wdp}short/vurl?link=${text}`)).json()
    let json = res.result
    m.reply(json)
    } catch (err) {
        throw(err)
    }
}
handler.command = handler.help = ['vurl'];
handler.tags = ['shortlink'];
handler.premium = false
module.exports = handler;
