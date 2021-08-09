const fetch = require('node-fetch')



async function fetchJson(url) {
ffs = await fetch(url)
js = await ffs.json()
return js
}

 let handler  = async (m, { conn }) => {

      ss = await fetchJson('https://ariaputrapratama.herokuapp.com/api/cersex')
      conn.sendFile(m.chat, ss.img, '', `Cerita : ${ss.result.cersex}`.trim(), m)

}

handler.help = ['cersex']
handler.tags = ['dewasa']
handler.command = /^(cersex)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true

module.exports = handler
