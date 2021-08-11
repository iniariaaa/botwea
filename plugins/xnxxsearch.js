let fetch = require("node-fetch")
let axios = require("axios")
let handler = async (m, { conn, text }) => {
  let chat = global.db.data.chats[m.chat]
   if (chat.nsfw) { 
      if (!text) return m.reply("_Masukkan Kata Kunci!_")
      await m.reply(global.wait)
     try {
      let res = await axios.get(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=e1a815979e6adfc071b7eafc&query=${text}`)
      let json = res.data
      //let ress = json.result
      let hsl = `*XNXX SEARCH*\n\n`
      for (let i = 0; i < json.result.length; i++) {
           hsl += `*Title:* ${json.result[i].title}\n`
           hsl += `*Views:* ${json.result[i].views}\n`
           hsl += `*Duration:* ${json.result[i].duration}\n`
           hsl += `*Uploader:* ${json.result[i].uploader}\n`
           hsl += `*Link:*\n${json.result[i].link}\n\n`
         }
           hsl += '*ARIABOTZ*'
        conn.reply(m.chat, hsl, m)
    }catch(e){
        m.reply("ERROR")
        console.log(e)
     }
    } else {
       m.reply('```Perlu Mengaktifkan Mode NSFW```')
    }
   }
handler.command = /^(xnxxsearch|searchxnxx|xnxx)$/
handler.premium = true
module.exports = handler
