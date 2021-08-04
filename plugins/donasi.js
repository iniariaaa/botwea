let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ THREE [0895622729068]
└────

┌〔 Donasi • Emoney 〕
├ GOPAY [089525340368]
└────

Dukung AriaBOTZ hanya dengan membuka link dibawah ini, dan ikuti tujuannya
https://github.com/iniariaaa
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
