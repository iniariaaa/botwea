let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/ass?APIKEY=MIMINETBOT`
  conn.sendFile(m.chat, res, 'ass.jpg', `Dih Sange Sama Gambar`, m, false)
}
handler.help = ['ass'].map(v => v + ' ')
handler.tags = ['dewasa']

handler.command = /^(ass)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

