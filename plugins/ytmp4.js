let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command}`
  if (!args[0].match(/ytmp4/gi)) throw `*Link salah! Perintah ini untuk mengunduh video yt dengan link*\n\ncontoh:\n${usedPrefix + command}`

  let res = await fetch('http://ariarestapii.herokuapp.com/api/ytmp4?url=args[0]&apikey=aria')
  if (!res.ok) throw await `${res.status} ${res.message}`
  let json = await res.json()
  if (!json.status) throw json
  await m.reply(global.wait)
  await conn.sendVideo(m.chat, json.res, `${json.desc}\n\n\n\n\n©AriaBotz`, m, { thumb: Buffer.alloc(0) })

}
handler.help = ['ytmp4'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ytmp4)$/i

handler.limit = true

module.exports = handler
