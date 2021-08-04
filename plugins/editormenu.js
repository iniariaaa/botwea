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
┌─── ⳹°❀❬ Editor Menu ❭❀°
│✎ ${usedPrefix}gay
│✎ ${usedPrefix}trigger
│✎ ${usedPrefix}ytcomment <teks>
│✎ ${usedPrefix}neon <teks>
│✎ ${usedPrefix}pubg <teks>|<teks>
│✎ ${usedPrefix}glitch <teks>|<teks>
│✎ ${usedPrefix}coffecup <teks>
│✎ ${usedPrefix}bfid <teks>|<teks>
│✎ ${usedPrefix}wooden <teks>
│✎ ${usedPrefix}glow <teks>
│✎ ${usedPrefix}textburn <teks>
│✎ ${usedPrefix}summer <teks>
│✎ ${usedPrefix}love <teks>
│✎ ${usedPrefix}joker <teks>
│✎ ${usedPrefix}epep <teks>
└────────────┈ ⳹ ❋ཻུ۪۪⸙
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['editormenu']
handler.tags = ['jj']
handler.command = /^(editormenu)$/i
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