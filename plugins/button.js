let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
    "listMessage": {
        "title": "MENU SELF-BOT",
        "description": "OFF PUKUL 21.00 WIB",
        "buttonText": "𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ⌕",
        "listType": "SINGLE_SELECT",
        "sections": [
            {
                "title": "◉ Menu Ke - 1",
                "rows": [
                    {
                        "title": '► RPG MENU',
                        "description": "\n*I Want To Use Rpg Menu*",
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
