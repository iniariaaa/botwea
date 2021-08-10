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
┃•  *Umur:* ${age}
┃•  *Xp Mu:* ${exp}
┃•  *Limit :* ${limit}
┃•  *Level :* ${level}
┃•  *Money:* ${money}
┃    
┣━━°❀❬ *RPG MENU* ❭❀°━━┓
┃
┣➥ .adventure
┣➥ .berburu
┣➥ .mancing
┣➥ .nebang
┣➥ .open <crate>
┣➥ .gacha <create>
┣➥ .shop <sell|buy> <args>
┣➥ .judi 
┣➥ .slots
┣➥ .jackpot
┣➥ .transfer
┣➥ .heal
┣➥ .judi <jumlah>
┣➥ .use <item> <jumlah>
┣➥ .pasar <jual> <args> 
┣➥ .judi
┣➥ .mining
┣➥ .inv
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
handler.help = ['rpg']
handler.command = /^(rpgmenu)$/i
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

