let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.zeks.xyz/api/memeindo?apikey=AriaGanzTzy')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
  conn.sendFile(m.chat, json.result, 'meme.png', json.caption, m, 0, { thumbnail })
}

handler.help = ['meme']
handler.tags = ['internet']

handler.command = /^(meme)$/i

module.exports = handler
