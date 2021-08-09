const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  let res = await fetch('https://ariaputrapratama.herokuapp.com/api/cersex')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.img, 'eror.jpg', `*Judul:* ${json.result.judul}\n*Cerita:* ${json.result.cersex}`, m, false, { thumbnail: await (await fetch(json.data.img)).buffer() })
}
handler.help = ['cersex']
handler.tags = ['tools']
handler.command = /^(cersex)$/i
handler.limit = true
module.exports = handler
