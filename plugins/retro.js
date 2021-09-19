let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter Teks'
  m.reply('Sedang Diproses...')
  let res = `https://ariarestapii.herokuapp.com/api/oxy/retro?text=${response}&apikey=aria`
  conn.sendFile(m.chat, res, 'retro.mp4', `Ini Kak`, m, false)
}
handler.help = ['retro'].map(v => v + ' <teks>')
handler.tags = ['photooxy']

handler.command = /^(retro)$/i
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
