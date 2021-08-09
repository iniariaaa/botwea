let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch('https://ariaputrapratama.herokuapp.com/api/cersex')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result.img)).buffer()
  conn.sendFile(m.chat, json.result.img, json.result.cersex 'p.png', json.caption, m, 0, { thumbnail })
}

handler.help = ['meme']
handler.tags = ['internet']

handler.command = /^(cersex)$/i

module.exports = handler
