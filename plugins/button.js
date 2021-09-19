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
                "title": "◉ Menu ke - 2",
                "rows": [
                    {
                        "title": '► GAME MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝙂𝘼𝙈𝙀 𝙈𝙀𝙉𝙐",
                        "rowId": `.gamemenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 3",
                "rows": [
                    {
                        "title": '► TEXTPRO MENU',
                        "description": "\n𝗜 𝗪𝗮𝗻𝘁 𝗧𝗼 𝗨𝘀𝗲 𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝗠𝗘𝗡𝗨",
                        "rowId": `.textpromenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 4",
                "rows": [
                    {
                        "title": '► PHOTOOXY MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝙋𝙃𝙊𝙏𝙊𝙊𝙓𝙔 𝙈𝙀𝙉𝙐",
                        "rowId": `.photoxymenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 5",
                "rows": [
                    {
                        "title": '► RANDOM MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝙍𝘼𝙉𝘿𝙊𝙈 𝙈𝙀𝙉𝙐",
                        "rowId": `.randommenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 6",
                "rows": [
                    {
                        "title": '► GROUP MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝙂𝙍𝙊𝙐𝙋 𝙈𝙀𝙉𝙐",
                        "rowId": `.groupmenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 7",
                "rows": [
                    {
                        "title": '► STICKER MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙈𝙀𝙉𝙐",
                        "rowId": `.stickermenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 8",
                "rows": [
                    {
                        "title": '► DATABASE MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝙈𝙀𝙉𝙐",
                        "rowId": `.dbmenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 9",
                "rows": [
                    {
                        "title": '► OWNER MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝙊𝙒𝙉𝙀𝙍 𝙈𝙀𝙉𝙐",
                        "rowId": `.ownermenu`
                    }
                ]
            },
            {
                "title": "◉ Menu ke - 10",
                "rows": [
                    {
                        "title": '► ABSEN MENU',
                        "description": "\n𝙄 𝙒𝙖𝙣𝙩 𝙏𝙤 𝙐𝙨𝙚 𝘼𝘽𝙎𝙀𝙉 𝙈𝙀𝙉𝙐",
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
