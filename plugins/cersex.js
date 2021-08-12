const fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `contoh:\n${usedPrefix + command} tante`

  let res = await fetch(global.API('zekais', '/cersex', { query: args[0] }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (json.status != 200) throw json
  conn.sendFile(m.chat, json.data.thumb, 'eror.jpg', `*Judul:* ${json.data.title}\n*Category:* ${json.data.category}\n*Post:* ${json.data.post}\n*Cerita:* ${json.data.result}`, m, false, { thumbnail: await (await fetch(json.data.thumb)).buffer() })
}
handler.help = ['cersex <query>']
handler.command = /^(cersex)$/i
handler.limit = true
module.exports = handler
