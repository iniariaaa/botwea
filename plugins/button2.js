let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.sendButtonImg(m.chat, 'Hai kak\nSaya AriaBOTZ\nSilahkan Klik Tombol Dibawah\nSilahkan Masuk Ke Group Official Kami\nhttps://chat.whatsapp.com/IdK7gOMQQpC7WdfIgtuQtn', 'https://i.ibb.co/QdZ5hgB/Screenshot-2021-0728-200112.jpg', `Powered By Aria`.trim(), 'Menu AriaBotz', '.listmenu', 'Iklan AriaBotz', '.iklan', m)
  }
handler.help = ['menu']
handler.tags = ['jdhsnaj'] 
handler.command = /^(menu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler