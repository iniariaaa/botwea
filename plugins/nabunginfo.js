let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`💰Money: *${user.nabungexp}*\n⏳Limit: *${user.nabunglimit}*`)
}
handler.tags = ['tabungan']
handler.command = /^(nabungifo)$/i
module.exports = handler
