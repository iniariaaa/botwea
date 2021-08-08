let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch('https://ariaapi.herokuapp.com/wptekno')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Err!'
  let thumbnail = await (await fetch(json.result)).buffer()
  conn.sendFile(m.chat, json.result, 'wp.jpg', json.caption, m, 0, { thumbnail })
}

handler.help = ['rwptekno']
handler.tags = ['internet']

handler.command = /^(rwptekno)$/i

module.exports = handler
