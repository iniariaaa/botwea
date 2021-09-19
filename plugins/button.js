let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
    "listMessage": {
        "title": "MENU ARIA BOTZ",
        "description":"Bot Aktif Di Jam\n06.00-08.00\n12.00-14.00\n21.00-23.00\n\nBagi Yang Mau Join Ke Group Silahkan Klik Link Dibawah\nhttps://chat.whatsapp.com/IdK7gOMQQpC7WdfIgtuQtn\n\n Script Botz: https://github.com/iniariaaa/botwea\n\n*THANKS TO*\n• Nurutomo\n• Ariffb25\n• Aria Putra Pratama\n• Zero Bot Ofc",
        "buttonText": "𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ⌕",
        "listType": "SINGLE_SELECT",
        "sections": [
            {
                "title": "◉ Menu Ke - 1",
                "rows": [
                    {
                        "title": '► RPG MENU',
                        "description": "\n𝗜 𝗪𝗮𝗻𝘁 𝗧𝗼 𝗨𝘀𝗲 𝗥𝗣𝗚 𝗠𝗘𝗡𝗨",
                        "rowId": `.rpgmenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 1",
                "rows": [
                    {
                        "title": '► Owner Menu',
                        "rowId": `${prefix}ownermenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 2",
                "rows": [
                    {
                        "title": '► Menu Maker',
                        "rowId": `${prefix}menumaker`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 3",
                "rows": [
                    {
                        "title": '► Menu Storage',
                        "rowId": `${prefix}menustorage`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 4",
                "rows": [
                    {
                        "title": '► Menu Convert',
                        "rowId": `${prefix}menuconvert`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 5",
                "rows": [
                    {
                        "title": '► Menu Cecan',
                        "rowId": `${prefix}menucecan`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 6",
                "rows": [
                    {
                        "title": '► Menu Cogan',
                        "rowId": `${prefix}menucogan`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 7",
                "rows": [
                    {
                        "title": '► Fun Menu',
                        "rowId": `${prefix}funmenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 8",
                "rows": [
                    {
                        "title": '► Download Menu',
                        "rowId": `${prefix}downloadmenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 9",
                "rows": [
                    {
                        "title": '► Other Menu',
                        "rowId": `${prefix}othermenu`
                    }
                ]
            },
        ]
    }
  }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler
