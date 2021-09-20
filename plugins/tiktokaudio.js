let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  await conn.fakeReply(m.chat, '*[❗] Bntar ngab..*', '0@s.whatsapp.net', '*AriaBotz*', 'status@broadcast')
  let res = await fetch(`https://dhnjing.xyz/downloader/tiktok/music?url=${response}&apikey=e36c5ec713ee53`)
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  conn.sendFile(m.chat, json.result.playUrl, `tiktok.mp3`, '', m)
}

handler.help = ['tiktokaudio'].map(v => v + ' <url>')
handler.tags = ['ngen']
handler.command = /^(tiktokaudio)$/i
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
