let handler = async (m, { conn, text, args }) => {
    if (!text) throw 'Masukkan Jumlah exp yang akan di tabung ...'
    if (global.db.data.users[m.sender].exp <= 100) throw 'EXP tidak cukup untuk ditabung !!'
    let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((100 - global.db.data.users[m.sender].healt) / usepotion)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((100 - global.db.data.users[m.sender].nabungexp))), 1)
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
