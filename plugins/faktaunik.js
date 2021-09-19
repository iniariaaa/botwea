let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://ariarestapii.herokuapp.com/api/fakta?apikey=aria`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['faktaunik']
handler.tags = ['faktaunik']
handler.command = /^(faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
