let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Query', m)

  await m.reply('Sedang Dicek...')
    let res = await fetch(`http://ariarestapii.herokuapp.com/api/checkkey?apikey=${text}`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.image)).buffer()
    let hasil = `*── 「 AriaRestApi 」 ──*\n\n➸ *Name Apikey*: ${json.apikey}\n\n➸*Limit*: ${json.limit}`

    conn.sendFile(m.chat, thumb, 'api.jpg', hasil, m)
}
handler.help = ['cekkey'].map(v => v + ' <query>')
handler.tags = ['check']
handler.command = /^(cekkey)$/i
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
