let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  await conn.fakeReply(m.chat, '*[❗] Bntar ngab..*', '0@s.whatsapp.net', '*AriaBotz*', 'status@broadcast')
  let res = await fetch(`https://dhnjing.xyz/downloader/tiktok/nowatermark?url=${response}&apikey=e36c5ec713ee53`)
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  let video = json.result.media_resources.video.videoUrl
  conn.sendFile(m.chat, video, `tiktok.mp4`, `Username: ${json.result.author_metadata.username}\nNickname: ${json.result.author_metadata.nickname}\nCaption: ${json.result.media_metadata.title}\nTotalViews: ${json.result.media_metadata.stats.playCount}\nTotalLike: ${json.result.media_metadata.stats.diggCount}\nTotalKomen: ${json.result.media_metadata.stats.commentCount}\nTotalShare: ${json.result.media_metadata.stats.shareCount}`, m)
}

handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['ngen']
handler.command = /^(tiktoknowm)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
