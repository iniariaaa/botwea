let handler = async (m, { conn }) =>
let fetch = require('node-fetch')
let img = 'https://telegra.ph/file/0ee3b8764de7285d66724.jpg'
conn.send2ButtonLoc(m.chat, await (await fetch(${pickRandom(ramdomnya)})).buffer(), `
Tes sekali lagi :v
`.trim(), 'SH鑫', 'LIST MENU', '.menu', 'VERIFY', '.registered')


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
