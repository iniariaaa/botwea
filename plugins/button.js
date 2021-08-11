let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "*List Menu AriaBotzz*",
                        "description":"Silahkan Pilih List Menu Dibawah\n\nBot Aktif Di Jam\n06.00-08.00\n12.00-14.00\n21.00-23.00\n\nBagi Yang Mau Join Ke Group Silahkan Klik Link Dibawah\nhttps://chat.whatsapp.com/IdK7gOMQQpC7WdfIgtuQtn\n\n Script Botz: https://github.com/iniariaaa/botwea\n\n*THANKS TO*\n• Nurutomo\n• Ariffb25\n• Aria Putra Pratama\n• Zero Bot Ofc",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\n*I Want To Use Download Menu*",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\n*I Want To Use Database Menu*",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\n*I Want To Use Jadibot Menu*",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\n*I Want To Use Owner Menu*",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Editor Menu",
                                        "description": "\n*I Want To Use Hentai Menu*",
                                        "rowId": ".editormenu"
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\n*I Want To Use Absen Menu*",
                                        "rowId": ".absenmenu"                 
                                    },{
                                        "title": "Random Menu",
                                        "description": "\n*I Want To User Random Menu*",
                                        "rowId": ".randommenu"
                                    },{
                                        "title": "Tools Menu",
                                        "description": "\n*I Want To Use Tools Menu*",
                                        "rowId": ".toolmenu"
                                    },{
                                        "title": "Rpg Menu",
                                        "description": "\n*I Want To Use Rpg Menu*",
                                        "rowId": ".rpgmenu"
                                    },{
                                        "title": "Game Menu",
                                        "description": "\n*I Want To Use Game Menu*",
                                        "rowId": ".gamemenu"
                                    },{
                                        "title": "Sticker Menu",
                                        "description": "\n*I Want To Use Sticker Menu*",
                                        "rowId": ".stickermenu"
                                    },{
                                        "title": "Info Bot Menu",
                                        "description": "\n*I Want To Use Info Bot Menu*",
                                        "rowId": ".infomenu"
                                    },{
                                        "title": "Group Menu",
                                        "description": "\n*I Want To Use Group Menu*",
                                        "rowId": ".groupmenu"
                                    }

                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler
