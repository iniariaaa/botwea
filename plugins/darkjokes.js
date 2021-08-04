let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://raw.githubusercontent.com/iniariaaa/randomaapi/main/darkjoke.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'darkjoke.jpg', 'Tolong GELAP!', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }}) 
}

handler.help = ['wp']
handler.command = /^(darkjoke)$/i
handler.limit = true
handler.premium = false
handler.register = true




module.exports = handler