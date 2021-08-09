let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let zero = fs.readFileSync('./audio/sirine.mp3')
let bgst = fs.readFileSync('./audio/fbii.mp3')
conn.sendMessage(m.chat, zero, bgst, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(door)?$/i
handler.command = new RegExp

module.exports = handler
