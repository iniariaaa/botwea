let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.bucin)}”`, m)
}
handler.help = ['bucin']
handler.tags = ['quotes']
handler.command = /^(bucin)$/i
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

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
  "Lebih baik mengerti sedikit daripada salah mengerti.",
"Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.",
"Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.",
"Penderitaan adalah pelajaran.",
"Ilmu pengetahuan tanpa agama adalah pincang.",
"Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.",
"Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.",
"Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?.",
"Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.",
"Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.",
"Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.",
"Manusia akan bahagia selama ia memilih untuk bahagia.",
"Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.",
"Apabila sempurna akal seseorang, maka sedikit perkataannya.",
"Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.",
"Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.",
"Yang palin melelahkan dalam hidup adalah menjadi orang yang tidak tulus.",
"Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.",
"Penundaan adalah kuburan dimana peluang dikuburkan.",
"Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.",
"Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.",
"Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.",
"Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.",
"Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.",
"Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.",
"Kesabaran adalah teman dari kebijaksanaan.",
"Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.",
"Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.",
"Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.",
"Anda tidak perlu harus berhasil pada kali pertama.",
"Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.",
"Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.",

"Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.",

"Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.",

"Konsumen yang paling tidak puas adalah sumber berharga untuk belajar.",

"Kita ada disini bukan untuk saling bersaing. Kita ada disini untuk saling melengkapi.",

"Semakin kita bersedia bertanggung jawab atas perbuatan-perbuatan kita, semakin banyak kredibilitas yang kita miliki.",

"Selalu baik untuk memaafkan, tapi yang paling baik adalah melupakan sebuah kesalahan.",

"Jangan menjadi pohon kaku yang mudah patah. Jadilah bambu yang mampu bertahan melengkung melawan terpaan angin.",

"Jangan menangis karena kegagalan cinta, sebab manusia akan meninggalkan semua yang dicintainya.",

"Jika Anda mengadili orang lain, Anda tak punya waktu untuk mencintai mereka.",

"Jika tidak ada perdamaian, hal itu disebabkan kita telah lupa bahwa kita saling membutuhkan.",

"Kurang cerdas dapat diperbaiki dengan belajar, kurang cekatan dapat diperbaiki dengan pengalaman, kurang jujur sulit memperbaikinya.",

"Banyak orang sukses berkat banyaknya kesulitan dan kesukaran yang mesti dihadapi.",

"Hanya aku yang bisa merubah hidupku, tak ada seorang pun yang dapat melakukannya untukku.",

"Yang bisa bertahan hidup bukan spesies yang paling kuat. Bukan juga spesies yang paling cerdas. Tapi spesies yang paling responsif terhadap perubahan.",

"Hidup adalah 10 persen yang terjadi kepada Anda, 90 persen bagaimana cara Anda menyikapinya.",

"Memperbaiki diri kita adalah memperbaiki dunia.",

"Jangan membeda-bedakan pekerjaan mana yang baik dan mana yang buruk. Masalah muncul jika kita membeda-bedakan dan memihak sesuatu.",

"Kita bekerja harus tanpa pamrih. Itu berlaku untuk segala pekerjaan. Pengabdian tanpa syarat adalah yang terbaik.",

"Kita harus menemukan kekuatan cinta dalam diri kita terlebih dahulu, barulah kita dapat benar-benar mencintai orang lain.",

"Carilah uang secukupnya saja untuk membiayai kehidupan, agar dapat menyisihkan waktu dan tenaga untuk melatih spiritual.",

"Harta benda tak membuat seseorang menjadi kaya raya, mereka hanya membuatnya lebih sibuk.",

"Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan induk dari segala kebajikan yang lain.",

"Hati yang penuh syukur, bukan saja merupakan kebajikan terbesar, melainkan juga induk dari segala kebajikan yang lain.",

"Kebebasan itu berasal dari manusia, tidak dari undang-undang atau institusi.",

"Hidup ini benar-benar sederhana, tapi kita malah bersikeras membuatnya menjadi rumit.",

"Kemana pun Anda pergi, pergilah dengan sepenuh hati.",

"Orang yang melakukan kesalahan dan tidak memperbaiki kesalahannya, melalakukan kesalahan yang lainnya.",

"Kebanggaan kita yang terbesar bukan karena tidak pernah gagal, tetapi bangkit kembali setiap kita jatuh.",

"Bunga yang tidak akan pernah layu dibumi adalah kebajikan.",

"Untuk membayangkan hal yang tak dapat dibayangkan, dibutuhkan imajinasi yang luar biasa.",

"Kesulitan apapun tidak tahan terhadap keuletan dan ketekunan. Tanpa keuletan, orang yang paling pintar dan paling berbakat sering gagal dalam hidupnya.",

"Satu-satunya cara agar kita memperoleh kasih sayang, adalah jangan menuntut agar kita dicintai, tetapi mulailah memberi kasih sayang kepada orang lain tanpa mengharapkan balasan.",

"Bila orang yang kuatir akan kekurangannya mau mensyukuri kekayaan yang mereka miliki, mereka akan berhenti kuatir.",

"Usahakan membentuk suatu hubungan \"kawat\" antara otak dan hati Anda.",

"Senyuman akan membuat kaya jiwa seseorang yang menerimanya, tanpa membuat miskin seseorang yang memberikannya.",

"Orang jarang sukses kecuali jika mereka senang dengan apa yang dikerjakannya.",

"Saya akan pergi kemanapun selama itu arahnya ke depan.",

"Jika Anda punya kemauan untuk menang, Anda sudah mencapai separuh sukses. Jika Anda tidak punya kemauan untuk menang, Anda sudah mencapai separuh kegagalan.",

"Rahasia menuju hidup kaya adalah mempunyai lebih banyak awal ketimbang akhir.",

"Kebenaran yang tidak dimengerti akan menjadi kesalahan.",

"Saya berpikir, karena itu saya ada.",

"Mental yang lemah lebih parah dari fisik yang lemah.",

"Satu-satunya sukses yang diraih sebelum bekerja hanyalah ada di kamus saja.",

"Sahabat terbaik dan musuh terburuk kita adalah pikiran-pikiran kita. Pikiran dapat lebih baik dari seorang dokter atau seorang bankir atau seorang teman kepercayaan. Juga dapat lebih berbahaya dadi penjahat.",

"Pergilah sejauh Anda bisa memandang, dan ketika Anda tiba disana, Anda akan memandang lebih jauh.",

"Jika kamu ingin pergi cepat, pergilah sendiri. Jika kamu ingin pergi jauh, pergilah bersama-sama.",

"Seorang intelektual tidak akan pernah mengatakan lebih daripada apa yang diketahuinya.",

"Persoalan-persoalan adalah harga yang Anda bayar untuk kemajuan.",

"Persoalan-persoalan adalah harga yang harus Anda bayar untuk kemajuan.",

"Hidup manusia penuh dengan bahaya, tetapi disitulah letak daya tariknya.",

"Anda tidak dapat merencanakan masa yang akan datang berdasarkan masa lalu.",

"Optimisme yang tidak disertai dengan usaha hanya merupakan pemikiran semata yang tidak menghasilkan buah.",

"Jika Anda termasuk orang yang senang menunggu datangnya peluang, Anda adalah bagian dari manusia pada umumnya.",

"Aku menghabiskan usia 30-an untuk memperbaiki segala kesalahanku di usia 20-an.",

"Berusaha untuk tidak menjadi manusia yang berhasil tapi berusahalah menjadi manusia yang berguna.",

"Mulai sekarang kita tidak usah membuang-buang waktu barang semenit pun untuk memikirkan orang-orang yang tidak kita sukai.",

"Ketika kita berhenti membuat kontribusi, kita mulai mati.",

"Kesalahan terbesar yang dibuat manusia dalam kehidupannya adalah terus-menerus merasa takut bahwa mereka akan melakukan kesalahan.",

"Janganlah menyebut orang tidak bahagia sebelum dia mati. Jangan menilai pekerjaan seseorang sebelum pekerjaannya berakhir.",

"Percaya pada diri sendiri adalah rahasia utama mencapai sukses.",

"Anda harus waspada dengan kesenangan. Pastikan bahwa Anda menikmatinya dan bukan dikendalikannya.",

"Kehilangan kekayaan masih dapat dicari kembali, kehilangan kepercayaan sulit didapatkan kembali.",

"Bila tidak mampu menemukan kedamaian dalam diri sendiri, tak ada gunanya mencari di tempat lain.",

"Kita terbiasa menyembunyikan diri dari orang lain, sampai akhirnya kita sendiri tersembunyi dari diri kita.",

"Kita lebih sibuk menyakinkan orang lain bahwa kita bahagia ketimbang benar-benar merasakan bahagia itu sendiri.",

"Anda mungkin ditipu jika terlalu mempercayai, tetapi hidup Anda akan tersiksa jika tidak cukup mempercayai.",

"Jadilah diri Anda sendiri. Siapa lagi yang bisa melakukannya lebih baik ketimbang diri Anda sendiri?.",

"Bila Anda ingin dicintai, cintailah dan bersikaplah sebagai orang yang patut dicintai.",

"Contoh yang baik adalah nasihat terbaik.",

"Rumput yang paling kuat tumbuhnya terdapat di atas tanah yang paling keras.",

"Kamu tidak dapat mengajari seseorang apa pun, kamu hanya bisa membantunyanya menemukan apa yang ada dalam dirinya sendiri.",

"Mereka yang berjiwa lemah tak akan mampu memberi seuntai maaf tulus. Pemaaf sejati hanya melekat bagi mereka yang berjiwa tangguh.",

"Kebahagiaan tergantung pada apa yang dapat Anda berikan, bukan pada apa yang Anda peroleh.",

"Tak ada rahasia untuk menggapai sukses. Sukses itu dapat terjadi karena persiapan, kerja keras dan mau belajar dari kegagalan.",

"Hidup bukanlah tentang menemukan dirimu sendiri. Hidup adalah tentang menciptakan dirimu sendiri.",

"Saya lebih baik kehilangan mahkota daripada melakukan tindakan yang menurut saya memalukan.",

"Tidak ada obat untuk kelahiran dan kematian, kecuali menikmati yang ada di antara keduanya.",

"Harapan tak pernah meninggalkan kita, kita yang meninggalkan harapan.",

"Agar bisa menjadi cukup cerdas untuk meraih semua uang yang diinginkan, kita harus cukup bodoh untuk menginginkannya.",

"Semua pengetahuan yang kumiliki bisa orang lain peroleh, tapi hatiku hanyalah untuk diriku sendiri.",

"Betapapun tingginya burung terbang, toh dia harus mencari dan mendapatkan makanannya di bumi juga.",

"Tetapkan apa yang Anda inginkan. Putuskan Anda ingin menukarnya dengan apa. Tentukan prioritas dan laksanakan.",

"Melihat pohon, saya jadi mengerti tentang kesabaran. Memandang rumput, saya jadi menghargai ketekunan.",

"Kecantikan yang abadi terletak pada keelokan adab dan ketinggian ilmu seseorang, bukan terletak pada wajah dan pakaiannya.",

"Kita harus yakin bahwa apa yang ditentukan oleh Tuhan untuk kita, itulah yang terbaik.",

"Berani menegakkan keadilan, walaupun mengenai diri sendiri, adalah puncak segala keberanian.",

"Hawa nafsu membawa kesesatan dan tidak berpedoman. Sementara akal menjadi pedoman menuju keutamaan. Hawa nafsu menyuruhmu berangan-angan, tetapi akal menyuruhmu menimbang.",

"Berusaha berhasil untuk memotivasi dirimu, tapi berusaha untuk selalu sempurna akan membuat tertekan.",

"Kita tidak akan belajar berani dan sabar jika di dunia ini hanya ada kegembiraan.",

"Kegagalan hanyalah kesempatan untuk memulai lagi dengan lebih pandai.",

"Kebaikan adalah satu-satunya investasi yang tidak akan merugikan.",

"Idealis adalah orang yang membantu orang lain untuk makmur.",

"Berpikir itu adalah pekerjaan yang berat di antara segala jenis pekerjaan. Itulah sebabnya sedikit sekali orang yang senang melakukannya.",

"Persaingan yang tujuannya hanya untuk bersaing, untuk mengalahkan orang lain, tak pernah mendatangkan banyak manfaat.",

"Kehidupan orang-orang besar mengingatkan kita bahwa kita bisa membuat kehidupan kita luhur.",

"Hidupku menjadi hiburanku dan tak hentinya memberikan kejutan. Hidupku bagaikan drama dengan begitu banyak babak tanpa adegan penutup.",

"Apa yang Anda lihat adalah apa yang Anda capai.",

"Kebahagiaan terletak pada kemenangan memerangi hawa nafsu dan menahan keinginan yang berlebih-lebihan.",

"Caci maki dari seorang penjahat merupakan kehormatan bagi seorang yang jujur.",

"Orang yang terlalu banyak merenung akan meraih sedikit.",

"Jangan gunakan orang-orang untuk membangun pekerjaan besar, gunakan pekerjaan Anda untuk membangun orang-orang besar.",

"Kesalahaan terbesar yang mungkin Anda buat adalah mempercayai bahwa Anda bekerja untuk orang lain.",

"Kepengecutan yang paling besar adalah ketika kita membuktikan kekuatan kita kepada kelemanan orang lain.",

"Jangan lihat masa lalu dengan penyesalan, jangan pula lihat masa depan dengan ketakutan, tapi lihatlah sekitar Anda dengan penuh kesadaran.",

"Jangan menunggu keadaan yang ideal. Jangan juga menunggu peluang-peluang terbaik. Keduanya tak akan pernah datang.",

"Kebanyakan orang sukses yang saya kenal bukan orang yang sibuk, mereka orang yang focus.",

"Anda tidak dapat melakukan banyak hal di hidup Anda, jika Anda hanya bekerja di hari-hari yang Anda rasakan baik.",

"Tembok yang kita bangun untuk menghambat kesedihan, juga membuat kita tertutup dari kebahagiaan.",

"Jika Anda tidak merancang hidup Anda sendiri, kemungkinan Anda akan menjalani rencana orang lain. Apa yang mereka rencanakan untuk Anda? Tidak banyak.",

"Motivasi adalah sesuatu yang membuat Anda memulai. Kebiasaan adalah sesuatu yang membuat Anda melanjutkan.",

"Ketika kekuatan akan cinta melebihi kecintaan akan kekuasaan, maka dunia pun menemukan kedamaian.",

"Aku tak bisa merubah arah angin, tapi aku bisa menyesuaikan layarku untuk tetap bisa mencapai tujuanku.",

"Kita tak bisa memilih bagaimana kita meninggal atau kapan. Kita hanya bisa memutuskan bagaimana kita hidup. Sekarang.",

"Jika Anda ingin sukses, Anda harus menciptakan peluang untuk diri sendiri.",

"Bekerja keras sekarang, merasakan hasilnya nanti; bermalas-malasan sekarang, merasakan akibatnya nanti.",

"Untuk menangani diri Anda sendiri, gunakan kepala Anda. Untuk menangani orang lain, gunakan hati Anda.",

"Bekerja keras sekarang, merasakannya nanti. Bermalas-malas sekarang, merasakan akibatnya nanti.",

"Tidak peduli seberapa banyak yang dapat Anda lakukan, tidak peduli seberapa menarik hati kepribadian Anda, Anda tidak dapat melangkah jauh jika Anda tidak dapat bekerja bersama orang lain.",

"Orang termiskin adalah orang yang tidak mempunyai apa-apa kecuali uang.",

"Jika kita melayani, maka hidup akan lebih berarti.",

"Sebenarnya semua kesulitan merupakan kesempatan bagi jiwa yang tumbuh.",

"Anda dilahirkan orisinal, jadi tidak perlu setengah mati meniru orang lain.",

"Seberapa jauh Anda gagal, tidak masalah, tetapi yang penting seberapa sering Anda bangkit kembali.",

"Jika tindakan-tindakan Anda mengAriai orang lain untuk bermimpi lebih, belajar lebih, bekerja lebih, dan menjadi lebih baik, Anda adalah seorang pemimpin.",

"Saya yakin, ujian pertama bagi orang besar ialah kerendahan hati.",

"Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tapi bagaimana ia berkembang karenanya.",

"Penghargaan tertinggi untuk kerja keras seseorang bukanlah apa yang ia hasilkan, tetapi bagaimana ia berkembang karenanya.",

"Perbuatan-perbuatan salah adalah biasa bagi manusia, tetapi perbuatan pura-pura itulah sebenarnya yang menimbulkan permusuhan dan pengkhianatan.",

"Rahmat sering datang kepada kita dalam bentuk kesakitan, kehilangan dan kekecewaan; tetapi kalau kita sabar, kita segera akan melihat bentuk aslinya.",

"Cinta sejati tidak datang kepadamu, tetapi harus datang dari dalam dirimu.",

"Integritas seseorang diukur dengan tingkah lakunya bukan profesinya.",

"Kita berdoa kalau kesusahan dan membutuhkan sesuatu, mestinya kita juga berdoa dalam kegembiraan besar dan saat rezeki melimpah.",

"Untuk memahami hati dan pikiran seseorang, jangan lihat apa yang sudah dia capai, tapi lihat apa yang dia cita-citakan.",

"Kadang kala, justru keputusan kecil yang akan mampu merubah hidup kita selamanya.",

"Apabila perjalanan menjadi sulit, orang ulet akan berjalan terus.",

"Orang yang berbudi tinggi selalu berpedoman pada keadilan dan selalu berusaha menjalankan kewajiban.",

"Kita semua hidup di bawah langit yang sama, tetapi tidak semua orang punya cakrawala yang sama.",

"Ia yang bijak akan merasa malu, jika kata-katanya lebih baik daripada tindakannya.",

"Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikku.",

"Saat sadar bahwa kau tidak kekurangan suatu apa pun, seisi dunia menjadi milikmu.",

"Terima tanggung jawab untuk diri Anda sendiri. Sadari bahwa hanya Anda sendiri, bukan orang lain, yang bisa membuat Anda pergi ke tempat yang Anda inginkan.",

"Meski yang kita hadapi adalah jalan buntu, namun cinta akan membangun jalan layang di atasnya.",

"Tahukah Anda rahasia sukses saya dalam mencapai tujuan? Cuma keuletan, tak lebih dan tak kurang.",

"Kepuasan terletak pada usaha, bukan pada hasil. Berusaha dengan keras adalah kemenangan yang hakiki.",

"Kerendahan hati merupakan ruang tunggu bagi kesempurnaan.",

"Saya belajar banyak dari kekalahan. Dan kekalahan-kekalahan itu, membuat saya semakin tabah.",

"Buatlah usaha Anda berhasil dengan satu-satunya cara: kerja keras!.",

"Kebaikan adalah bahasa yang dapat didengar si tuli dan bisa dilihat si buta.",

"Lakukan apa yang Anda senangi, uang akan mengikuti.",

"Tak ada waktu yang tidak tepat untuk melakukan sesuatu yang benar.",

"Kendatipun Anda berada di jalur yang tepat, Anda akan tetap terkejar jika hanya duduk-duduk saja disana.",

"Kebahagiaan selalu tampak kecil saat berada dalam genggaman. Tapi coba lepaskan dan Anda akan langsung tahu, betapa besar dan berhargannya kebahagiaan.",

"Latih diri Anda untuk tidak khawatir. Kekhawatiran tak pernah memperbaiki apa-apa.",

"Kematangan bukanlah suatu keadaan yang dicapai dengan usia. Dia merupakan perkembangan dari cinta, belajar, membaca dan berpikir hingga menghasilkan kemampuan.",

"Anda berhenti tertawa bukan karena bertambah tua. Sebaliknya Anda bertambah tua justru karena berhenti tertawa.",

"Pepatah adalah kalimat singkat berdasarkan pengalaman panjang.",

"Tidak dicintai orang lain memang menyedihkan, tapi lebih menyedihkan lagi kalau tidak bisa mencintai orang lain.",

"Kemiskinan jiwa lebih mengerikan daripada kemiskinan jasmani atau materi.",

"Anda belum bisa dibilang kaya sampai Anda memiliki sesuatu yang tidak dapat dibeli uang.",

"Pendidikan adalah senjata paling ampuh dimana kau dapat menggunakannya untuk merubah dunia.",

"Campakanlah jauh-jauh pikiran murung dan kesal itu, lalu bangkitkanlah.",

"Bukanlah yang kuat, tetapi yang uletlah yang menjadikan mereka manusia yang besar.",

"Kemajuan adalah hasil dari memusatkan seluruh kekuatan jiwa dan pikiran pada cita-cita yang dituju.",

"Semakin lama kita hidup, semakin kita menemukan bahwa kita mirip dengan orang lain.",

"Melakukan yang terbaik pada saat ini akan menempatkan Anda ke tempat terbaik pada saat berikutnya.",

"Jika seseorang menyatakan kebenaran, dia yakin; cepat atau lambat; akan mendapatkannya.",

"Bila semangat Anda menurun, lakukanlah sesuatu. Kalau Anda telah melakukan sesuatu keadaan tidak berubah, lakukanlah sesuatu yang berbeda.",

"Jangan takut dengan kesalahan. Kebijaksanaan biasanya lahir dari kesalahan.",

"Saya tidak pernah melihat suatu monumen didirikan bagi orang pesimis.",

"Beranilah menyadari kesalahan dan mulai lagi.",

"Benar jadi berani.",

"Orang yang bertanya, bodoh dalam 5 menit. Dan orang yang tidak bertanya akan tetap bodoh untuk selamanya.",

"Bila saya mendengar, saya akan lupa. Setelah melihat saya bisa mengerti. Dan setelah mengerjakan, barulah saya bisa memahami.",

"Orang yang tersenyum selalu lebih kuat dari orang yang marah.",

"Orang yang memindahkan gunung memulai dengan memindahkan batu-batu kecil.",

"Orang yang mencari masalah akan selalu mendapatkannya.",

"Keterampilan dan keyakinan merupakan pasukan bersenjata yang tidak dapat dikalahkan.",

"Sebatang anak panah mudah dipatahkan, tetapi tidak demikian dengan sepuluh anak panah yang disatukan.",

"Visi tanpa aksi adalah mimpi di siang bolong. Aksi tanpa visi adalah mimpi buruk.",

"Orang yang tak pernah mencicipi pahit tak akan tahu apa itu manis.",

"Dengan belajar Anda bisa mengajar. Dengan mengajar, Anda belajar.",

"Saya menangis karena tak punya sepatu, sampai saya melihat orang tak punya kaki.",

"Kesengsaraan menghasilkan ketekunan. Ketekunan menghasilkan watak, dan watak menghasilkan harapan.",

"Bila kemauan siap, kaki menjadi ringan.",

"Mengenal diri sendiri adalah awal dari perbaikan diri.",

"Jangan meremehkan raja yang picik, seperti halnya jangan meremehkan sungai yang kecil.",

"Apabila seseorang mengajarkan sesuatu, dia sendiri harus melaksanakan ajaran itu.",

"Kehidupan yang hebat adalah kulminasi dari pemikiran-pemikiran hebat disertai dengan tindakan-tindakan hebat.",

"Ada dua cara mengatasi kesulitan, Anda mengubah kesulitan-kesulitan atau Anda mengubah diri sendiri untuk mengatasinya.",

"Orang bijak berbicara karena mereka mempunyai sesuatu untuk dikatakan, orang bodoh berbicara karena mereka ingin mengatakan sesuatu.",

"Orang bijak berbicara karena ia memiliki sesuatu untuk dikatakan. Orang bodoh berbicara karena ia atau dia harus mengatakan sesuatu.",

"Berbuat tidak adil lebih memalukan daripada menderita ketidakadilan.",

"Siapa yang tidak bisa memimpin dirinya sendiri, tidak akan bisa memimpin orang.",

"Kesabaran adalah obat terbaik untuk semua masalah.",

"Jauh lebih mudah memulai secara baik daripada mengakhiri secara baik.",

"Harapan adalah tiang yang menyangga dunia.",

"Kemenangan gemilang tidak diperoleh dari medan pertempuran saja, tetapi sering diperoleh dari hati.",

"kita jatuh untuk bangun, berhenti untuk berjalan, dan tidur untuk bangun.",

"Kamu harus menghadapi depresi, sama seperti kamu menghadapi seekor harimau.",

"Jika Anda mempekerjakan orang-orang yang lebih pintar dari Anda, Anda membuktikan Anda lebih pintar dari mereka.",

"Kebahagiaan bukanlah memiliki apa yang kita inginkan, melainkan menginginkan apa yang kita miliki.",

"Satu ons aksi jauh lebih berharga daripada satu ton teori.",

"Seseorang itu sukses besar jika dia sadar, kegagalan-kegagalannya adalah persiapan untuk kemenangan-kemenangannya.",

"Kedamaian tidak terdapat di dunia luar, melainkan terdapat dalam jiwa manusia itu sendiri.",

"Percayalah kepada orang lain, dan mereka akan tulus kepada Anda. Perlakukan mereka seperti orang besar dan mereka akan memperlihatkan dirinya sebagai orang besar.",

"Tidak cukup hanya punya otak yang baik. Yang penting adalah menggunakannya secara baik.",

"Tanyakan pada diri sendiri rahasia sukses. Dengarkan jawaban Anda, dan lakukan.",

"Jika rumput tetangga lebih hijau, bersyukurlah Anda masih bisa berpijak di tanah untuk melihatnya.",

"Kesempatan Anda untuk sukses di setiap kondisi selalu dapat diukur oleh seberapa besar kepercayaan Anda pada diri sendiri.",

"Kemajuan merupakan kata-kata merdu, tetapi perubahanlah penggerakknya dan perubahan mempunyai banyak musuh.",

"Dua jalan dipisahkan pohon, dan saya mengambil jalan yang jarang ditempuh orang. Dan itulah yang membuat perubahan.",

"Alasan mengapa kecemasan membunuh lebih banyak orang dibanding kerja adalah, lebih banyak orang cemas dibanding bekerja.",

"Sedikit orang kaya yang memiliki harta. Kebanyakan harta yang memiliki mereka.",

"Ketekunan bisa membuat yang tidak mungkin jadi mungkin, membuat kemungkinan jadi kemungkinan besar, dan kemungkinan besar menjadi pasti.",

"Hanya ikan yang bodoh yang bisa dua kali kena pancing dengan umpan yang sama.",

"Ambisi seperti air laut, semakin banyak orang meminumnya semakin orang menjadi haus.",

"Cemas dan ketakutan adalah akibat kebodohan dan keraguan.",

"Pahlawan adalah seseorang yang melakukan apa yang mampu dia lakukan.",

"Jika Anda ingin menjadi orang besar, janganlah suka beromong besar, kerjakanlah hal-hal yang kecil dahulu.",

"Satu-satunya cara untuk mengubah hidup kita adalah dengan mengubah pikiran kita.",

"Perubahan terjadi ketika seseorang menjadi dirinya sendiri, bukan ketika ia mencoba menjadi orang lain.",

"Perbaiki diri Anda, tetapi jangan jatuhkan orang lain.",

"Cara tercepat untuk menuntaskan banyak hal adalah dengan menyelesaikannya satu demi satu.",

"Dua hal yang harus dilupakan, kebaikan yang telah kita lakukan kepada orang lain dan kesalahan orang lain kepada kita.",

"Ingatlah, jika Anda menutup mulut sebenarnya Anda telah melakukan pilihan.",

"Hati manusia tidak akan pernah tenteram sebelum berdamai dengan diri sendiri.",

"Hidup berarti berjuang. Hidup nikmat tanpa badai topan adalah laksana laut yang mati.",

"Kesedihan hanya bisa ditanggulangi oleh orang yang mengalaminya sendiri.",

"Beranikan diri untuk menjadi dirimu sendiri, karena kita bisa melakukan hal itu lebih baik daripada orang lain.",

"Lebih baik diasingkan daripada menyerah kepada kemunafikan.",

"Langkah pertama untuk memilih keyakinan pada diri sendiri adalah mengenal diri kita sendiri.",

"Bila seseorang kehilangan segala sumber kebahagiaan, dia tidak lagi hidup, tapi mayat yang bernafas.",

"Baik, lebih baik, terbaik. Jangan pernah berhenti sampai baik menjadi lebih baik, dan lebih baik menjadi terbaik.",

"Motivasi adalah api dari dalam. Jika orang lain mencoba menyalakannya untuk Anda, kemungkinan apinya hanya menyala sebentar.",

"Saya bangga, baik pada hal yang tidak kami lakukan maupun pada hal yang kami lakukan.",

"Cinta tak perlu pengorbanan. Pada saat kau merasa berkorban, pada saat itu cintamu mulai pudar.",

"Ancaman nyata sebenarnya bukan pada saat komputer mulai bisa berpikir seperti manusia, tetapi ketika manusia mulai berpikir seperti komputer.",

"Lakukan apa yang dapat Anda lakukan dengan apa yang Anda miliki dan tempat Anda berada.",

"Banyak kegagalan dalam ini dikarenakan orang-orang tidak menyadari betapa dekatnya mereka dengan keberhasilan saat mereka menyerah.",

"Pergilah sejauh mungkin yang bisa Anda lihat dan Anda akan bisa melihat lebih jauh.",

"Orang yang tidak bisa memaafkan orang lain sama saja dengan orang yang memutuskan jembatan yang harus dilaluinya, karena semua orang perlu dimaafkan.",

"Menyaksikan adalah mempercayai, tapi merasakan adalah kebenaran.",

"Dalam hal prinsip, usahakan kukuh seperti batu karang. Dalam hal selera, coba berenang mengikuti arus.",

"Setiap badai pasti berlalu dan saya akan tumbuh semakin kuat.",

"Setelah kehilangan segalanya, barulah kita bebas melakukan apa saja.",

"Raihlah ilmu dan untuk meraih ilmu belajarlah untuk tenang dan sabar.",

"Hiduplah seperti lilin yang menerangi orang lain. Jangan hidup seperti duri yang mencucuk diri dan menyakiti orang lain.",

"Kesedihan adalah buah. Tuhan tak pernah membiarkannya tumbuh dicabang yang terlalu lemah untuk menanggungnya.",

"Kebahagian tertinggi dalam kehidupan adalah kepastian bahwa Anda dicintai apa adanya, atau lebih tepatnya dicintai walaupun Anda seperti diri Anda adanya.",

"Masalahnya bukan kurangnya tenaga, tetapi kurangnya daya kemauan.",

"Kemenangan bukanlah segala-galanya, tetapi perjuangan untuk menang adalah segala-galanya.",

"Jika Anda tak bisa mengatakan hal yang benar dari diri Anda, maka Anda pun tak bisa mengatakan hal yang benar dari orang lain.",

"Burung yang terbang pagi akan memperoleh cacing paling banyak.",

"Cara untuk memulai adalah berhenti berbicara dan mulai lakukan sesuatu.",

"Sukses akan lebih permanen jika Anda meraihnya tanpa menghancurkan prinsip-prinsip Anda.",

"Dari dulu saya selalu yakin saya akan kaya. Saya kira saya tak pernah meragukannya, satu menit pun.",

"Lebih baik menyiapkan diri untuk sebuah peluang dan tidak mendapatkannya daripada punya peluang dan tidak menyiapkan diri.",

"Satu-satunya yang bisa menghalangi kita adalah keyakinan yang salah dan sikap yang negatif.",

"Saya tidak takut pada hari esok karena saya sudah melihat hari kemarin dan saya mencintai hari ini.",

"Guru yang biasa-biasa, berbicara. Guru yang bagus, menerangkan. Guru yang hebat, mendemonstrasikan. Guru yang agung, memberi inspirasi.",

"Semua masalah menjadi lebih kecil jika Anda tidak mengelaknya, tapi menghadapinya.",

"Perubahan yang paling bermakna dalam hidup adalah perubahan sikap. Sikap yang benar akan menghasilkan tindakan yang benar.",

"Jika Anda harus membuat pilihan dan Anda tidak melakukannya, itu saja sudah pilihan.",

"Percaya bahwa hidup itu berharga, dan kepercayaan Anda akan membantu menciptakan hidup yang berharga.",

"Kuatir sama seperti membayar bunga untuk uang yang mungkin tak pernah Anda pinjam.",

"Jangan sering menyalakan api kebencian terhadap musuhmu, karena nanti akan membakar dirimu sendiri.",
"Bila kamu jujur kepada dirimu sendiri, bagai siang pasti berganti malam, kamu takkan pernah berdusta kepada orang lain.",
"Kutu yang berani adalah kutu yang bisa berani mendapatkan sarapannya pada bibir seekor singa.",
"Kita menyambung hidup dengan apa yang kita peroleh, tapi kita menghadirkan kehidupkan dengan apa yang kita berikan.",
"Pengetahuan tidaklah cukup, kita harus mengamalkannya. Niat tidak cukup, kita harus melakukannya.",
"Ketika Anda bertambah tua, Anda akan menemukan satu-satunya hal yang Anda sesali adalah hal-hal yang tidak Anda lakukan.",
"Batu fondasi untuk sukses yang seimbang adalah kejujuran, watak, integritas, iman, cinta dan kesetiaan.",
"Kebanyakan orang gagal meraih cita-citanya bukan karena mereka tidak mampu, tetapi karena tidak berkomitmen.",
"Kita tidak harus hebat saat memulai, tapi kita harus memulai untuk menjadi hebat.",
]
