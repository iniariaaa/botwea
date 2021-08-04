let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Nama Kota'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://kuhong-api.herokuapp.com/api/maps?query=${response}&apikey=4qk0g7Dgs2Hr-5xBdsTgQmdS4JN`)
  let image = await res.buffer()
  conn.sendFile(m.chat, image, 'image.jpg', 'Maps Nya Kak', m)
}
handler.help = ['maps'].map(v => v + ' <kota>')
handler.tags = ['maps']
handler.command = /^(maps)$/i
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