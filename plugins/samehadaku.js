let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply('Searching...')
    let res = await fetch(`https://ariarestapii.herokuapp.com/api/samehadaku?q=${text}&apikey=aria`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.result.thumb)).buffer()
    let hasil = `*── 「 SAMEHADAKU SEARCHING 」 ──*\n\n➸ *DESKRIPSI*: ${json.result.desc}\n➸ *LINK*: ${json.result.link}`

    conn.sendFile(m.chat, thumb, 'samehadaku.jpg', hasil, m)
}
handler.help = ['samehadaku'].map(v => v + ' <query>')
handler.tags = ['search']
handler.command = /^(samehadaku)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
