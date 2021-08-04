let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.sindiran)}”`, m)
}
handler.help = ['sindiran']
handler.tags = ['quotes']
handler.command = /^(sindiran)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.sindiran = [
  "Banyak Sih Fiturnya, Tapi Pada Mati Mwhehe.",
]
