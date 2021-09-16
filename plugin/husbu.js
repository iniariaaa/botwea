let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://ariarestapii.herokuapp.com/api/husbu?apikey=aria')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.image) throw 'Error!'
  conn.sendFile(m.chat, json.image, '', 'Ganteng Kan Kek Gua', m)
}
handler.help = ['poke']
handler.command = /^poke$/i

module.exports = handler
