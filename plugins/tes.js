let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "List Nsfw Menu",
                        "description": "Silahkan Pilih Menu Dibawah",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `Random NsfwNeko`, "description":  `Nsfw neko bang`,
                                        "rowId": ".nsfwneko"
                                    }, {
                                       "title": `Random Hentai Gif`, "description": `Hentai gif`,
                                       "rowId": ".hentaigif"
                                    }, {
                                       "title": `Random Hentai`,
"description": `Random hentai`, 
                                       "rowId": ".hentai"
                                    }, {
                                       "title": `Random Pussy`,
"description": `Random Pussy`, 
                                        "rowId": ".pussy"
                                    }, {
                                        "title": `Random Ass`,
"description": `Random Ass`, 
                                        "rowId": ".ass"                               
                                    }, { 
                                        "title": `Random Manga`,
"description": `Random manga`, 
                                        "rowId": ".manga"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['tes']
module.exports = handler
handler.tags = ['jdhsnaj'] 
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler