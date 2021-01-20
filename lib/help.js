function help() {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

╔══°❀〘 Group Commands 〙❀°═══
║
╠❥ *!add 62858xxxxx*
╠❥ *!kick @tagmember*
╠❥ *!promote @tagmember*
╠❥ *!demote @tagadmin*
╠❥ *!mentionAll*
╠❥ *!adminList*
╠❥ *!ownerGroup*
╠❥ *!leave*
╠❥ *!linkGroup*
╠❥ *!delete [replyChatBot]*
╠❥ *!kickAll*
╠❥ *!NSFW [enable|disable]*
╠❥ *!welcome [enable|disable]*
║
╠══°❀〘 Downloader Commands 〙❀°═══
║
╠❥ *!ytmp3 [linkYt]*
╠❥ *!ytmp4 [linkYt]*
╠❥ *!ig [linkIg]*
╠❥ *!fb [linkFb]*
║
╠══°❀〘 Others Commands 〙❀°═══
║
╠❥ *!sticker*
╠❥ *!stickerGif*
╠❥ *!creator*
╠❥ *!inu*
╠❥ *!jadwalShalat [daerah]*
╠❥ *!jadwalTv [channel]*
╠❥ *!cuaca [tempat]*
╠❥ *!tts [kode bhs] [teks]*
╠❥ *!igStalk [@username]*
╠❥ *!wiki [query]*
╠❥ *!anime [query]*
╠❥ *!brainly [pertanyaan] [.jumlah]*
╠❥ *!loli*
╠❥ *!waifu*
╠❥ *!husbu*
╠❥ *!randomNekoNime*
╠❥ *!randomTrapNime*
╠❥ *!randomAnime*
╠❥ *!infoGempa*
╠❥ *!meme*
╠❥ *!quotemaker [|teks|author|theme]*
╠❥ *!join [linkGroup]*
╠❥ *!quotes*
╠❥ *!quotesnime*
╠❥ *!wait*
╠❥ *!nulis [teks]*
╠❥ *!donasi*
╠❥ *!lirik [optional]*
╠❥ *!chord [query]*
║
╠════════════════
║ Hope you have a great day!✨
╠════════════════
║ Kirim perintah *!readme* untuk mengetahui fungsi dan cara penggunaan perintah di atas, WAJIB BACA!!.
╚════════════════`
}
exports.help = help()
function readme() {
    return `
*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *!ytmp4 https://youtu.be/Bskehapzke8*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *!ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *!fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalTv Indosiar*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *!cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *!tts id Test*
Note : Max 250 huruf

*[@username]* Diisi dengan username Instagram yang valid, tanpa tanda “[” dan “]”
Contoh : *!igStalk @duar_amjay*

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *!quotemaker |Odading|Mang Oleh|Shark*

*[linkGroup]* Diisi dengan link group whatsapp yang valid, tanpa tanda “[” dan “]”.
Contoh : *!join https://chat.whatsapp.com/Bhhw77d5t2gjao8*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *!lirik aku bukan boneka*`
}
exports.readme = readme()
function info() {
    return `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Owner Bot : wa.me/6285231061579
Author? : ZzDevl

Oh iya om, bot ini gratis ya, soalnya saya lihat banyak yang jual bot² kayak gini, tapi ini gratis kok.`
}
exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *ZzDevl*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk()
function donate() {
    return `
╔════════════════
║       DONASI  
╠════════════════
╠═⊱ DONASI BOSQUE ❉⊰══✿
║  
╠➥ *DANA* : 0852-3106-1579
╠➥ *PULSA* : 0852-3106-1579
║
╠════════════════
║ *POWERED BY ZzDevl*
╚════════════════`
}
exports.donate = donate()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
