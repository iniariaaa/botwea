let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://api.zeks.xyz/api/nulis?apikey=AriaGanzTzy&text=${response}`)
  let image = await res.buffer()
  conn.sendFile(m.chat, image, 'image.jpg', 'Nih kak', m)
}
handler.help = ['nulis'].map(v => v + ' <teks>')
handler.command = /^(nulis)$/i
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
