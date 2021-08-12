let handler = async (m, { conn, text }) => {
if (!text) throw 'Masukkan Jumlah exp yang akan di tabung ...'
if (global.db.data.users[m.sender].exp <= text) throw 'EXP tidak cukup untuk ditabung !!'
global.db.data.users[m.sender].nabungexp += text
global.db.data.users[m.sender].exp -= text
conn.reply(m.chat, 'Berhasil menabung ${text} exp\n\nKetik #nabunginfo untuk melihat info tabungan anda ... ', m)

}
handler.help = ['nabungexp']
handler.tags = ['xp']
handler.command = /^nabungexp$/i

module.exports = handler
