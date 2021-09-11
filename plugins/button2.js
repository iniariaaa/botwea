let { MessageType } = require('@adiwajshing/baileys')
let fs = require ('fs')
let handler = async (m, { conn }) => {
let { name, limit, level, role, age, money, healt, premium, registered } = global.db.data.users[m.sender] 
conn.send3ButtonImg(m.chat, '[ ARIA BOTZ ]', 'https://telegra.ph/file/67c0e8b8c34dc1c13ff13.jpg', `Pilih Menu Di Bawah Ya Kak\nDan Jangan Lupa Baca Rules Dibawah Ini\n\nSpam = Banned\nTelp = Blok\n\nFollow My Instagram\nhttps://instagram.com/iniariaaa\n\n\nMy Rest Api\n1. https://zyxmapleapirest.herokuapp.com\n2. https://ariarestapii.herokuapp.com\n\n❏ Registered : ${registered ? 'Yes': 'No'}\n❏ Name : ${name}\n❏ Age : ${age}\n❏ Ticket : ${limit}\n❏ Role : ${role}\n❏ Money : ${money}\n❏ Level : ${level}\n❏ Health : ${healt}\n❏ Premium : ${premium ? 'Yes': 'No'}\n\n Thanks To\nNurutomo\nAriffb25\nFernazer\nRudiAchil\nZeroBot\nBochillGaming\nAnd All Creator Bot`.trim(), 'LIST MENU', '.ngen', 'DONASI', '.donasi', 'OWNER', '.owner', m)
  }
handler.help = ['menu']
handler.tags = ['jj'] 
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
