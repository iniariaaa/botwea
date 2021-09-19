let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `*Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${usedPrefix + command}`

  let res = await fetch('https://ariarestapii.herokuapp.com/api/mediafire2?url=${response}&apikey=aria')
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await m.reply(global.wait)
  await conn.sendVideo(m.chat, json.res, `©AriaBotz`, m, { thumb: Buffer.alloc(0) })

}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok)$/i

handler.limit = true

module.exports = handler
