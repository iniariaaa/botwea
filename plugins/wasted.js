//kok cewe gw jadi cuek yahh? daritadi pagi gw chat ga dibales cuman di read doang

const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.chat
  let marah = global.API('https://some-random-api.ml', '/canvas/wasted', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })
  let stiker = await sticker(null, marah, global.packname, global.author)
 if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  throw stiker.toString()
}


handler.help = ['swasted']
handler.tags = ['tools']

handler.command = /^(wasted)$/i

module.exports = handler
