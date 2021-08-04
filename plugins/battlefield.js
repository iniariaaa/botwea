let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://ariarestapi.herokuapp.com/api/textmaker/game?text=${response[0]}&text2=${response[1]}&theme=battlefield&apikey=AriaApi`)
  let json = await res.json()
  conn.sendFile(m.chat, json.result.url, 'bfid.jpg', `Nih kak`, m, false)
}
handler.help = ['bfid'].map(v => v + ' teks|teks')
handler.tags = ['sticker']

handler.command = /^(bfid)$/i

module.exports = handler