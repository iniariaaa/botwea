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
┣━━°❀❬ *TOOLS MENU* ❭❀°━━┓
┃
┣➥ .aksara <opsi> <teks> (Limit)
┣➥ .base64 <teks>
┣➥ .calc <expression>
┣➥ .carigrup <pencarian>
┣➥ .caripesan <pesan>|<jumlah>
┣➥ .save @mention <nama kontak>
┣➥ .hd
┣➥ .enhance
┣➥ .enphoto <efek> <teks>|[teks2]|[teks3]
┣➥ .fitnah <teks> @user <teks>
┣➥ .githubsearch <pencarian>
┣➥ .halah <teks>
┣➥ .hilih <teks>
┣➥ .huluh <teks>
┣➥ .heleh <teks>
┣➥ .holoh <teks>
┣➥ .igstalk <username> (Limit)
┣➥ .tobraille
┣➥ .inspect <chat.whatsapp.com>
┣➥ .kodepos <kota> (Limit)
┣➥ .mememaker <teks atas>|<teks bawah>
┣➥ .mention <teks>
┣➥ .nulis <teks>
┣➥ .ocr (Limit)
┣➥ .profile [@user]
┣➥ .qr <teks>
┣➥ .qrcode <teks>
┣➥ .readmore <teks>|<teks>
┣➥ .spoiler <teks>|<teks>
┣➥ .run (Limit)
┣➥ .scan [nomor]
┣➥ .style <text>
┣➥ .harta2 <teks> (Limit)
┣➥ .textpro <efek> <teks>|[teks2]
┣➥ .translate <lang> <teks>
┣➥ .tts <lang> <teks>
┣➥ .upload
┣➥ .wait
┣➥ .zodiac 2002 02 25
┣➥ .pastebin <url>
┣➥ .playstore <pencarian>
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
handler.help = ['tools']
handler.command = /^(toolmenu)$/i
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

