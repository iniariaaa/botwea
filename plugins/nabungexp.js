let handler = async (m, { conn, text, args }) => {
    if (!text) throw 'Masukkan Jumlah exp yang akan di tabung ...'
    const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
    global.db.data.users[m.sender].nabungexp += count
    global.db.data.users[m.sender].exp -= count
    conn.reply(m.chat, 'Berhasil menabung ${count} exp\n\nKetik #nabunginfo untuk melihat info tabungan anda ... ', m)
    }
    handler.help = ['nabungexp']
    handler.tags = ['xp']
    handler.command = /^nabungexp$/i
    
    module.exports = handler

    function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
