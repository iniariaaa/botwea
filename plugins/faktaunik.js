let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://kuhong-api.herokuapp.com/api/faktaunik?apikey=4qk0g7Dgs2Hr-5xBdsTgQmdS4JN`).then ((res) => {
	 	let hasil = `${res.data.fakta}`

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

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler