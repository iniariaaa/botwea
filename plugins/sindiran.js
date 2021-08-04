let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.sindiran)}”`, m)
}
handler.help = ['sindiran']
handler.tags = ['quotes']
handler.command = /^(sindiran)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.sindiran = [
  "Banyak Sih Fiturnya, Tapi Pada Mati Mwhehe",
  "Makanya Punya Muka Tu Ganteng Kontol",
  "Bercerminlah dahulu sebelum kamu membuat cermin orang lain.",
  "Pertahankan yang terbaik. Karena yang menarik belum tentu yang terbaik.",
  "Itu orang yang bermuka dua, coba disumbangin satu dengan orang yang suka cari muka.",
  "Yang menerimamu apa adanya akan kalah denga dia yang ingin merubahmu menjadi lebih baik.",
  "Mereka tertawa melihat saya beda, dan saya tertawa melihat mereka semua sama.",
  "Omonganmu kayak Balon warna-warni, tapi sayang, isi-nya angin doang.",
  "Ini hidupku, kenapa kamu yang jadi sutradara?",
  "Muka itu dirawat, bukan diedit.",
  "Otakmu tidak sebesar mulutmu.",
  "Jenius adalah 1 % inspirasi dan 99 % keringat.",
  "Mengalah bukan berarti kalah, tapi cara mengalahkan ego yang terlampau parah.",
  "Merendahkan orang lain berarti menunjukkan kelemahan diri sendiri.",
  "Dih najis masih make duit ortu aja so²an bayarin anak orang, dasar beban.",
]
