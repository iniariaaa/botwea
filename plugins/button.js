let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
    "listMessage": {
        "title": "MENU ARIA BOTZ",
        "description":"Bot Aktif Di Jam\n06.00-08.00\n12.00-14.00\n21.00-23.00\n\nBagi Yang Mau Join Ke Group Silahkan Klik Link Dibawah\nhttps://chat.whatsapp.com/IdK7gOMQQpC7WdfIgtuQtn\n\n Script Botz: https://github.com/iniariaaa/botwea\n\n*THANKS TO*\nā¢ Nurutomo\nā¢ Ariffb25\nā¢ Aria Putra Pratama\nā¢ Zero Bot Ofc",
        "buttonText": "šš„š¢š¤ šš¢š¬š¢š§š¢ ā",
        "listType": "SINGLE_SELECT",
        "sections": [
            {
                "title": "ā Menu Ke - 1",
                "rows": [
                    {
                        "title": 'āŗ RPG MENU',
                        "description": "\nš šŖš®š»š š§š¼ šØšš² š„š£š š šš”šØ",
                        "rowId": `.rpgmenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 2",
                "rows": [
                    {
                        "title": 'āŗ GAME MENU',
                        "description": "\nš ššš£š© šš¤ ššØš šš¼šš šššš",
                        "rowId": `.gamemenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 3",
                "rows": [
                    {
                        "title": 'āŗ SEARCHING MENU',
                        "description": "\nš šŖš®š»š š§š¼ šØšš² š¦ššš„šššš”š š šš”šØ",
                        "rowId": `.searchmenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 4",
                "rows": [
                    {
                        "title": 'āŗ PHOTOOXT/TEXTPRO MENU',
                        "description": "\nš ššš£š© šš¤ ššØš š£šš¢š§š¢š¢š«š¬ / š§šš«š§š£š„š¢ šššš",
                        "rowId": `.photoxymenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 5",
                "rows": [
                    {
                        "title": 'āŗ RANDOM MENU',
                        "description": "\nš ššš£š© šš¤ ššØš šš¼ššæšš šššš",
                        "rowId": `.randommenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 6",
                "rows": [
                    {
                        "title": 'āŗ GROUP MENU',
                        "description": "\nš ššš£š© šš¤ ššØš ššššš šššš",
                        "rowId": `.groupmenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 7",
                "rows": [
                    {
                        "title": 'āŗ STICKER MENU',
                        "description": "\nš ššš£š© šš¤ ššØš šššš¾ššš šššš",
                        "rowId": `.stickermenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 8",
                "rows": [
                    {
                        "title": 'āŗ DATABASE MENU',
                        "description": "\nš ššš£š© šš¤ ššØš ššš§šššš¦š šššš",
                        "rowId": `.dbmenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 9",
                "rows": [
                    {
                        "title": 'āŗ OWNER MENU',
                        "description": "\nš ššš£š© šš¤ ššØš ššššš šššš",
                        "rowId": `.ownermenu`
                    }
                ]
            },
            {
                "title": "ā Menu ke - 10",
                "rows": [
                    {
                        "title": 'āŗ ABSEN MENU',
                        "description": "\nš ššš£š© šš¤ ššØš š¼š½ššš šššš",
                        "rowId": `.absenmenu`
                    }
                ]
            },
        ]
    }
  }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler
