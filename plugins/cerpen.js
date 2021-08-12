let axios = require("axios");
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
	axios.get(`http://zekais-api.herokuapp.com/cerpen`).then ((res) => {
	 	let hasil = `Judul: ${res.data.title}\n\nCerita: ${res.data.post}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cerpen'].map(v => v + ' ')
handler.tags = ['premium']
handler.command = /^(cerpen)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
