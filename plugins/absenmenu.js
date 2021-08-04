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
┏━━°❀❬ *USER PROFILE* ❭❀°━━┓
┃
┃•  *Nama :* ${name}
┃•  *Umur:* ${age}
┃•  *Xp Mu:* ${exp}
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃•  *Money:* ${money}
┃    
┣━━°❀❬ *ABSEN MENU* ❭❀°━━┓
┃
┣➥ ${usedPrefix}mulaiabsen
┣➥ ${usedPrefix}deleteabsen <opsi>
┣➥ ${usedPrefix}cekabsen <opsi>
┃
┣━━°❀❬ *Thanks To* ❭❀°━━┓
┃
┣➥ *Nurotomo (author)*
┣➥ *Ariffb25 (pengembang)*
┣➥ *Aria Putra (pengembang)*
┣➥ *All Penyedia Api*
┃
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['absenmenu']
handler.tags = ['jj']
handler.command = /^(absenmenu)$/i
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
