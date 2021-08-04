let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.sendButton(m.chat, `Masih ada absen di chat ini!\n\nKlik tombol dibawah untuk menghapus absen`.trim(), '', 'HAPUS', '.hapusabsen')
        throw false
    }
    conn.absen[id] = [
        await conn.send2Button(m.chat, `Absen dimulai`.trim(), '', 'ABSEN', '.absen', 'CEK', '.cekabsen'),
        [],
        text
    ]
}
handler.help = ['mulaiabsen']
handler.tags = ['absen']
handler.command = /^(mulaiabsen)$/i
handler.group = true
handler.admin = true
module.exports = handler