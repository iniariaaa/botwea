let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://ariarestapii.herokuapp.com/api/poke?apikey=aria')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.gif) throw 'Error!'
  conn.sendFile(m.chat, json.gif, '', 'Dih Sange Sama Anime', m)
}
handler.help = ['poke']
handler.command = /^poke$/i

module.exports = handler
