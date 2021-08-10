let handler = async (m, { conn }) => {

let hasil = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].money += hasil * 1 // Number(hasil)
   await m.reply(`Selamat! Anda mendapatkan ${hasil} money!`)
}

handler.help = ['mining', 'nguli']
handler.tags = ['xp']
handler.command = /^(mining|nguli)$/i
handler.limit = true

module.exports = handler
