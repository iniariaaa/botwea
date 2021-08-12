// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('http://zekais-api.herokuapp.com/quotepic')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result) throw 'Error!'
  conn.sendFile(m.chat, json.result, '', 'Nih Quotesnya', m)
}
handler.help = ['quotespict']
handler.tags = ['quotes']
handler.command = /^picts$/i

module.exports = handler
