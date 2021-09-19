let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  await conn.fakeReply(m.chat, '*[❗] Bntar ngab..*', '0@s.whatsapp.net', '*BOT By ZyxMapLe*', 'status@broadcast')
  let res = await fetch(`https://ariarestapii.herokuapp.com/api/mediafire2?url=${response}&apikey=aria`)
  if (res.Status !== 200) throw await res.text()
  let json = await res.json()
  let video = json.result.WithWM
  conn.sendVideo(m.chat, video, `tiktok.mp4`, `Ini Kak`, m)
}

handler.help = ['tiktokaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktokwm)$/i
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
