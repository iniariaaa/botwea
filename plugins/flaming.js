let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter Teks'
  m.reply('Sedang Diproses...')
  let res = `https://ariarestapii.herokuapp.com/api/oxy/flaming?text=${response}&apikey=aria`
  conn.sendFile(m.chat, res, 'banner.jpg', `Ini Kak`, m, false)
}
handler.help = ['flaming'].map(v => v + ' <teks>')
handler.tags = ['photooxy']

handler.command = /^(flaming)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
