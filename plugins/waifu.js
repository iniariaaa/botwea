let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Bentar Kak...')
  let res = `https://ariarestapii.herokuapp.com/api/waifu?apikey=aria`
  conn.sendFile(m.chat, res, 'waifu.jpg', `Ini Tuan`, m, false)
}
handler.help = ['poke'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(poke)$/i
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
