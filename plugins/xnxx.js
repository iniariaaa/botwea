let axios = require("axios");
let MessageType = require("@adiwajshing/baileys");
let { image } = MessageType
let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, isPrems }) => {   
    let chat = global.db.data.chats[m.chat]
    if (chat.nsfw) { 
    
    if (!text) return m.reply("_Masukkan Link XNXX_")
        await m.reply(global.wait)
  try {
let res = await axios.get(`https://api.lolhuman.xyz/api/xnxx?apikey=e1a815979e6adfc071b7eafc&url=${text}`)
let json = res.data
let data = json.result
let url = data.link

let txt = `
*Title:* ${data.title}
*Duration:* ${data.duration}
*Views:* ${data.view}
*Rating:* ${data.rating}
*Like:* ${data.like}
*Dislike:* ${data.dislike}
*Comment:* ${data.comment}
*Tags:* ${data.tag.join(", ")}
*Description:* ${data.description}

*DOWNLOAD*
`.trim()

for (let i = 0; i < data.link.length; i++) {
    txt += `\nType: ${data.link[i].type}\n`
    txt += `Link: ${data.link[i].link}\n`
   }
    txt += '\n*SGDC-BOT*'
      conn.sendFile(m.chat, data.thumbnail, "STOP-COLY.jpg", txt, m)
      }catch(e){
          m.reply ("ERROR")
          console.log (e)
       }
   } else {
       m.reply('```Perlu Mengaktifkan Mode NSFW```')
    }
 }
handler.command = /^(xnxxdl)$/
handler.premium = true
module.exports = handler

//M AFDHAN
