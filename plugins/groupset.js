let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "List Menu Group Setting",
                        "description": "Silahkan Pilih Menu Dibawah",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `BUKA GROUP`,
                                        "rowId": ".group buka"
                                    },{
                                        "title": "TUTUP GROUP",
                                        "rowId": ".group tutup"                 
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['groupset']
module.exports = handler