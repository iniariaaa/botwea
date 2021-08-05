let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let str = `
Welcome To AriaBotz V1.1
Hi Pengguna AriaBotz,

Apakah Itu AriaBotz?
AriaBotz Adalah Sebuah Robot WhatsApp Yang Dibuat Oleh Aria Putra Pratama
Dengan Menggunakan Source Code NodeJs
`.trim()
    let mentionedJid = [who]
    await conn.sendButtonImg(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }},  '© ariabotz', 'AUTO LEVEL UP', ',on autolevelup')
  }
}
handler.help = ['tes1']
handler.tags = ['jj']
handler.command = /^(tes1)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler
