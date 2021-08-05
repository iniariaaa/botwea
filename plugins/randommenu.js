let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "List Random Menu",
                        "description": "*Silahkan Pilih Salah Satu Dibawah*",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Random Quotes`,                                 
                                        "rowId": ".quotes"
                                    },{
                                        "title": "Random Asupan",
                                        "rowId": ".asupan"                 
                                    },{
                                        "title": "Random Sindiran",
                                        "rowId": ".sindiran"                 
                                    },{
                                        "title": "Random Pantun",
                                        "rowId": ".pantun"                 
                                    },{
                                        "title": "Random Galau",
                                        "rowId": ".galau"
                                    },{
                                        "title": "Random Fakta Unik",
                                        "rowId": ".faktaunik"                 
                                    },{
                                        "title": "Random Bucin",
                                        "rowId": ".bucin"                 
                                    }, {
                                        "title": "Random Citacita",
                                        "rowId": "citacita"
                                    }, {
                                        "title": "Random Kata Ilham",
                                        "rowId": ".katailham"
                                    }, {
                                        "title": "Random Kata Bijak",
                                        "rowId": ".katabijak"
                                    }, {
                                        "title": "Random Lolice",
                                        "rowId": ".lolice"
                                    }, {
                                        "title": "Random Wallpaper Tekno",
                                        "rowId": ".rwptkno"
                                    }, {
                                        "title": "Random Asupan Bocil",
                                        "rowId": ".asubocil"
                                    }, {
                                        "title": "Random Quotes Islami",
                                        "rowId": ".quotesislami"
                                    },{
                                        "title": "Random Darkjokes",
                                        "rowId": ".darkjoke"
                                    },{
                                        "title": "Random Meme",
                                        "rowId": ".meme"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['randommenu']
handler.register = true
module.exports = handler
