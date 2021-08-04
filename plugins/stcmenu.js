let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {    
    let { name, money, limit, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    
    let math = max - xp
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
┃•  *Umur:*  ${age}
┃•  *XP MU:* ${exp}
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃•  *Money:* ${money}
┃    
┣━━°❀❬ *STC MENU* ❭❀°━━┓
┃
┣➥ ${usedPrefix}attp1 <teks>
┣➥ ${usedPrefix}attp2 <teks>
┣➥ ${usedPrefix}sticker
┣➥ ${usedPrefix}toimg2
┣➥ ${usedPrefix}tovideo
┣➥ ${usedPrefix}semoji
┣➥ ${usedPrefix}getxif
┣➥ ${usedPrefix}stikerline <url>
┣➥ ${usedPrefix}stikerly <url>
┣➥ ${usedPrefix}ttp1 <teks>
┣➥ ${usedPrefix}ttp2 <teks>
┣➥ ${usedPrefix}ttp3 <teks>
┣➥ ${usedPrefix}stikerfilter
┣➥ ${usedPrefix}stikermaker
┣➥ ${usedPrefix}stikermeme <atas>|<bawah>
┣➥ ${usedPrefix}togif
┣➥ ${usedPrefix}wm <nama>|<author>
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
handler.help = ['stick']
handler.command = /^(stickermenu)$/i
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

