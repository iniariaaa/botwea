let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://api.zeks.xyz/api/quote?apikey=AriaGanzTzy`).then ((res) => {
	 	let hasil = `${res.data.quotes}`

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

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
