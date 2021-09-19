let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Bentar Kak...')
  let res = `https://ariarestapii.herokuapp.com/api/oxy/poly?text=${response}&apikey=aria`
  conn.sendFile(m.chat, res, 'poly.mp4', `Ini Kak`, m, false)
}
handler.help = ['poly'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(poly)$/i
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
