let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
let res = await fetch('https://ariarestapii.herokuapp.com/api/asupan?apikey=aria')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
conn.sendFile(m.chat, cita, 'asupan.mp4', 'Nih kak asupan nya!!', m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }}) 
}

handler.tags = ['video']
handler.help = ['asupan','premium']
handler.command = /^(asupan)$/i
handler.limit = true
handler.premium = false





module.exports = handler
