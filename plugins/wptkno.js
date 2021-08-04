let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/iniariaaa/randomaapi/main/wptekno.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'p.jpg', 'Nih kak Wp nya!!', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }}) 
}

handler.tags = ['Wp']
handler.help = ['wp']
handler.command = /^(rwptkno)$/i
handler.limit = true
handler.premium = false





module.exports = handler