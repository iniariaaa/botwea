let cuk = require('node-fetch')
let handler = async (m, { conn }) => {

function kintil(list) {
  return list[Math.floor(list.length * Math.random())]
}
let img = kintil(['https://telegra.ph/file/0ee3b8764de7285d66724.jpg', 'https://telegra.ph/file/e36861de63ca790b899be.jpg'])

conn.sendButtonLoc(m.chat, await (await cuk(img)).buffer(), '*Welcome To AriaBotz*\nSilahkan Klik Tombol Dibawah', 'ariabotz', 'Menu', '.menu')

handler.command = /^(menu11)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
