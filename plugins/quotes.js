let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://ariarestapii.herokuapp.com/api/quotes?apikey=aria`).then ((res) => {
	 	let hasil = `${res.data.result.quotes}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^(quotes)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true
handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
