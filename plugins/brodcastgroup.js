let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  for (let id of groups) conn.sendMessage(id, text + (/broadcast/im.test(text) ? '' : ('\n\n*「 ARIABOTZ 」*')), m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `*_Mengirim pesan broadcast ke ${groups.length} grup_*`, m)
}

handler.command = /^(broadcast|bcgc)$/i
handler.owner = true
handler.fail = null

module.exports = handler
/*
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
*/
