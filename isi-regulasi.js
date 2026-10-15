/* ================================================================
   ISI WEB ALUR PROGRAM STUDI — YAYASAN EKA HARAP
   Berkas ini hanya berisi ISI. Tampilan diatur index.html.
   Untuk menambah aturan: tambah entri di REGULASI dan PASAL,
   lalu rujuk kodenya di HALAMAN. index.html tidak perlu diubah.
   ================================================================ */

window.ISI = {

  meta: {
    judul: "Alur Program Studi",
    organisasi: "Yayasan Eka Harap",
    pembaruan: "15 Oktober 2026"
  },

  /* ---------- DAFTAR REGULASI ---------- */
  regulasi: {
    UU12: {
      nama: "Undang-Undang Nomor 12 Tahun 2012 tentang Pendidikan Tinggi",
      singkat: "UU 12/2012",
      status: "Berlaku",
      sumber: "https://pasal.id/peraturan/uu/uu-no-12-tahun-2012"
    },
    P7: {
      nama: "Permendikbud Nomor 7 Tahun 2020 tentang Pendirian, Perubahan, Pembubaran PTN, dan Pendirian, Perubahan, Pencabutan Izin PTS",
      singkat: "Permen 7/2020",
      status: "Berlaku",
      sumber: "https://peraturan.go.id/files/bn51-2020.pdf"
    },
    P39: {
      nama: "Permendiktisaintek Nomor 39 Tahun 2025 tentang Penjaminan Mutu Pendidikan Tinggi",
      singkat: "Permen 39/2025",
      status: "Berlaku, diubah Permen 10/2026",
      sumber: "https://peraturan.go.id/files/permendiktisaintek-no-39-tahun-2025.pdf"
    },
    P10: {
      nama: "Permendiktisaintek Nomor 10 Tahun 2026 tentang Perubahan atas Permendiktisaintek Nomor 39 Tahun 2025",
      singkat: "Permen 10/2026",
      status: "Berlaku sejak 16 Juli 2026",
      sumber: "https://lpm.unand.ac.id/wp-content/uploads/2026/07/Permendiktisaintek-10-2026-terhadap-39-2025.pdf",
      catatan: "Bunyi resmi belum dimuat. Isi diambil dari ringkasan perbandingan."
    }
  },

  /* ---------- BUNYI PASAL ----------
     status: "kutipan"  = bunyi dikutip dari naskah
             "ringkasan"= bukan bunyi resmi, menunggu naskah
             "cek"      = bunyi dikutip, nomor ayat perlu dicocokkan  */
  pasal: {
    "UU12-28-3": { reg: "UU12", label: "Pasal 28 ayat (3)", status: "kutipan",
      bunyi: "Gelar akademik dan gelar vokasi dinyatakan tidak sah dan dicabut oleh Menteri apabila dikeluarkan oleh: a. Perguruan Tinggi dan/atau Program Studi yang tidak terakreditasi; dan/atau b. perseorangan, organisasi, atau penyelenggara Pendidikan Tinggi yang tanpa hak mengeluarkan gelar akademik dan gelar vokasi." },
    "UU12-33-3": { reg: "UU12", label: "Pasal 33 ayat (3)", status: "kutipan",
      bunyi: "Program Studi diselenggarakan atas izin Menteri setelah memenuhi persyaratan minimum akreditasi." },
    "UU12-33-5": { reg: "UU12", label: "Pasal 33 ayat (5)", status: "kutipan",
      bunyi: "Program Studi sebagaimana dimaksud pada ayat (1) mendapatkan akreditasi pada saat memperoleh izin penyelenggaraan." },
    "UU12-33-6": { reg: "UU12", label: "Pasal 33 ayat (6)", status: "kutipan",
      bunyi: "Program Studi wajib diakreditasi ulang pada saat jangka waktu akreditasinya berakhir." },
    "UU12-33-7": { reg: "UU12", label: "Pasal 33 ayat (7)", status: "kutipan",
      bunyi: "Program Studi yang tidak diakreditasi ulang sebagaimana dimaksud pada ayat (6) dapat dicabut izinnya oleh Menteri." },
    "UU12-92-2": { reg: "UU12", label: "Pasal 92 ayat (2)", status: "kutipan",
      bunyi: "Sanksi administratif sebagaimana dimaksud pada ayat (1) berupa: a. peringatan tertulis; b. penghentian sementara bantuan biaya Pendidikan dari Pemerintah; c. penghentian sementara kegiatan penyelenggaraan Pendidikan; d. penghentian pembinaan; dan/atau e. pencabutan izin." },

    "P7-2-2": { reg: "P7", label: "Pasal 2 ayat (2)", status: "kutipan",
      bunyi: "Pembubaran PTN dan pencabutan izin PTS atau pencabutan izin Program Studi bertujuan melindungi masyarakat dari kerugian akibat memperoleh layanan Pendidikan Tinggi yang tidak bermutu." },
    "P7-4-5": { reg: "P7", label: "Pasal 4 ayat (5)", status: "cek",
      bunyi: "Program Studi pada program magister atau program magister terapan dapat diselenggarakan setelah Program Studi dalam cabang ilmu yang sama pada program sarjana atau program diploma empat atau sarjana terapan telah terakreditasi dengan peringkat akreditasi paling rendah Baik Sekali, kecuali ditentukan lain oleh peraturan perundang-undangan." },
    "P7-4-7": { reg: "P7", label: "Pasal 4 ayat (7)", status: "cek",
      bunyi: "Program Studi pada program doktor atau program doktor terapan dapat diselenggarakan setelah Program Studi sebidang pada program magister atau program magister terapan telah terakreditasi dengan peringkat akreditasi paling rendah Baik Sekali, kecuali ditentukan lain oleh peraturan perundang-undangan." },
    "P7-4-9": { reg: "P7", label: "Pasal 4 ayat (9)", status: "cek",
      bunyi: "Program profesi dapat diselenggarakan setelah Program Studi sebidang pada program sarjana atau program diploma empat atau sarjana terapan telah terakreditasi dengan peringkat akreditasi paling rendah Baik Sekali, kecuali ditentukan lain oleh peraturan perundang-undangan." },
    "P7-22": { reg: "P7", label: "Pasal 22", status: "kutipan",
      bunyi: "Pembukaan Program Studi meliputi: a. Program Studi di Kampus Utama; dan b. PSDKU." },
    "P7-23-1": { reg: "P7", label: "Pasal 23 ayat (1)", status: "kutipan",
      bunyi: "Pembukaan Program Studi di Kampus Utama sebagaimana dimaksud dalam Pasal 22 huruf a merupakan penambahan jumlah Program Studi pada PTN atau PTS yang memiliki izin Pendirian PTN atau PTS." },
    "P7-23-2": { reg: "P7", label: "Pasal 23 ayat (2)", status: "kutipan",
      bunyi: "Penutupan Program Studi di Kampus Utama sebagaimana dimaksud dalam Pasal 22 huruf a merupakan pengurangan jumlah Program Studi yang telah ada pada PTN atau PTS yang memiliki izin Pendirian PTN atau PTS." },
    "P7-23-3": { reg: "P7", label: "Pasal 23 ayat (3)", status: "kutipan",
      bunyi: "Apabila penutupan Program Studi di Kampus Utama sebagaimana dimaksud dalam Pasal 22 huruf a mengakibatkan perubahan jumlah dan jenis Program Studi sebagaimana dimaksud dalam Pasal 3 ayat (3) sampai dengan ayat (8), sehingga tidak memenuhi syarat bentuk PTN atau PTS tertentu, PTN atau PTS yang bersangkutan berubah bentuk." },
    "P7-27-1": { reg: "P7", label: "Pasal 27 ayat (1)", status: "kutipan",
      bunyi: "Penutupan Program Studi sebagaimana dimaksud dalam Pasal 23 ayat (2) dilakukan dengan alasan: a. perubahan kebijakan Pemerintah Pusat dan/atau peraturan perundang-undangan; b. diusulkan PTN atau Badan Penyelenggara PTS setelah mendapat pertimbangan dari senat perguruan tinggi; dan/atau c. dikenai Sanksi Administratif berat." },
    "P7-27-2": { reg: "P7", label: "Pasal 27 ayat (2)", status: "kutipan",
      bunyi: "Penutupan Program Studi sebagaimana dimaksud pada ayat (1) ditetapkan oleh Menteri." },
    "P7-68": { reg: "P7", label: "Pasal 68", status: "kutipan",
      bunyi: "(1) Sanksi Administratif dikenakan kepada perguruan tinggi dan/atau Badan Penyelenggara yang melakukan pelanggaran terhadap ketentuan peraturan perundang-undangan. (2) Sanksi Administratif terdiri atas Sanksi Administratif ringan, sedang, dan berat." },
    "P7-69-1": { reg: "P7", label: "Pasal 69 ayat (1)", status: "kutipan",
      bunyi: "Pelanggaran yang dikenai Sanksi Administratif ringan, terdiri atas: a. pemimpin perguruan tinggi tidak melindungi dan memfasilitasi pelaksanaan kebebasan akademik, kebebasan mimbar akademik, dan otonomi keilmuan di perguruan tinggi; b. perguruan tinggi tidak memuat mata kuliah agama, Pancasila, kewarganegaraan, dan bahasa Indonesia dalam kurikulumnya; c. perguruan tinggi tidak menggunakan bahasa Indonesia sebagai bahasa pengantar utama; d. perguruan tinggi tidak menyebarluaskan hasil penelitian dengan cara diseminarkan, dipublikasikan, dan/atau dipatenkan, kecuali hasil penelitian yang bersifat rahasia, mengganggu, dan/atau membahayakan kepentingan umum; e. PTN tidak menerima calon Mahasiswa yang telah memenuhi persyaratan akademik dan lolos seleksi penerimaan Mahasiswa secara nasional; f. PTN tidak mencari dan menjaring calon Mahasiswa yang memiliki potensi akademik tinggi, tetapi kurang mampu secara ekonomi dan calon Mahasiswa dari daerah terdepan, terluar, dan tertinggal untuk diterima paling sedikit 20% (dua puluh persen) dari seluruh Mahasiswa baru yang diterima dan tersebar pada semua Program Studi; g. perguruan tinggi tidak memenuhi hak Mahasiswa yang kurang mampu secara ekonomi untuk dapat menyelesaikan studinya sesuai dengan peraturan akademik; h. perguruan tinggi memberi gelar yang tidak menggunakan bahasa Indonesia; i. pemimpin perguruan tinggi tidak melindungi dan memfasilitasi pengelolaan di bidang non-akademik; j. perguruan tinggi tidak mengumumkan ringkasan laporan tahunan kepada masyarakat; k. perguruan tinggi memiliki Dosen tetap kurang dari 5 (lima) orang untuk setiap Program Studi; l. perguruan tinggi tidak memenuhi nisbah Dosen dan Mahasiswa sesuai dengan ketentuan peraturan perundang-undangan; dan/atau m. perguruan tinggi tidak melakukan pelaporan secara berkala ke pangkalan data Pendidikan Tinggi." },
    "P7-69-2": { reg: "P7", label: "Pasal 69 ayat (2)", status: "kutipan",
      bunyi: "Dalam hal telah dilakukan penjatuhan Sanksi Administratif ringan terhadap pelanggaran sebagaimana dimaksud pada ayat (1), dan perguruan tinggi tidak menghentikan pelanggaran atau melakukan perbaikan, maka perguruan tinggi dikenai Sanksi Administratif sedang." },
    "P7-69-3": { reg: "P7", label: "Pasal 69 ayat (3)", status: "kutipan",
      bunyi: "Dalam hal telah dilakukan penjatuhan Sanksi Administratif sedang terhadap pelanggaran sebagaimana dimaksud pada ayat (2), dan perguruan tinggi tidak menghentikan pelanggaran atau melakukan perbaikan, perguruan tinggi dikenai Sanksi Administratif berat." },
    "P7-70": { reg: "P7", label: "Pasal 70", status: "ringkasan",
      bunyi: "Daftar pelanggaran yang dikenai Sanksi Administratif sedang. Bunyi resmi belum dimuat di web ini." },
    "P7-71": { reg: "P7", label: "Pasal 71", status: "kutipan",
      bunyi: "Pelanggaran yang dikenai Sanksi Administratif berat, terdiri atas: a. perguruan tinggi dan/atau Program Studi yang tidak terakreditasi mengeluarkan gelar akademik, gelar vokasi, dan/atau gelar profesi; b. perguruan tinggi dan/atau Program Studi memberikan ijazah, gelar akademik, gelar vokasi, dan/atau gelar profesi kepada orang yang tidak berhak; c. perguruan tinggi tidak mengusulkan akreditasi ulang Program Studi sebagaimana ditentukan dalam peraturan perundang-undangan; d. perguruan tinggi lembaga negara lain yang menyelenggarakan pendidikan di wilayah Negara Kesatuan Republik Indonesia yang tidak sesuai dengan ketentuan peraturan perundang-undangan; e. perguruan tinggi melakukan penerimaan Mahasiswa baru dengan tujuan komersial; f. pengelolaan perguruan tinggi tidak berprinsip nirlaba; g. perguruan tinggi dan/atau Badan Penyelenggara melakukan perubahan nama perguruan tinggi, nama dan/atau bentuk Badan Penyelenggara, dan/atau lokasi Kampus Utama PTS tanpa izin dari Menteri; h. perguruan tinggi menyelenggarakan Program Studi tanpa izin dari Menteri; i. perguruan tinggi menyelenggarakan PJJ tanpa izin dari Menteri; j. perguruan tinggi dan/atau Program Studi tidak lagi memenuhi syarat pendirian perguruan tinggi dan/atau pembukaan Program Studi; dan/atau k. terjadi sengketa: 1. antar pemangku kepentingan internal Badan Penyelenggara; 2. antar pemangku kepentingan internal PTS; dan/atau 3. antara pemangku kepentingan internal Badan Penyelenggara dan pemangku kepentingan internal PTS; yang menyebabkan terganggunya penyelenggaraan tridharma perguruan tinggi." },
    "P7-72-1": { reg: "P7", label: "Pasal 72 ayat (1)", status: "kutipan",
      bunyi: "Sanksi Administratif ringan berupa peringatan tertulis." },
    "P7-72-2": { reg: "P7", label: "Pasal 72 ayat (2)", status: "kutipan",
      bunyi: "Sanksi Administratif sedang terdiri atas: a. penghentian sementara bantuan biaya pendidikan dari Pemerintah Pusat; dan b. penghentian sementara kegiatan penyelenggaraan pendidikan." },
    "P7-72-3": { reg: "P7", label: "Pasal 72 ayat (3)", status: "kutipan",
      bunyi: "Sanksi Administratif berat terdiri atas: a. penghentian pembinaan; b. pencabutan izin Program Studi; dan c. pembubaran PTN atau pencabutan izin PTS." },
    "P7-73": { reg: "P7", label: "Pasal 73", status: "kutipan",
      bunyi: "(1) Sanksi Administratif sedang sebagaimana dimaksud dalam Pasal 72 ayat (2) huruf a berupa penundaan pemberian bantuan keuangan, hibah, dan/atau bentuk bantuan lain bagi perguruan tinggi. (2) Sanksi Administratif sedang sebagaimana dimaksud dalam Pasal 72 ayat (2) huruf b berupa: a. penghentian sementara penerimaan Mahasiswa baru; b. penundaan proses usul pembukaan Program Studi baru; dan c. penundaan pelaksanaan akreditasi." },
    "P7-74": { reg: "P7", label: "Pasal 74", status: "kutipan",
      bunyi: "(1) Perguruan tinggi yang dikenai Sanksi Administratif ringan berupa peringatan tertulis sebagaimana dimaksud dalam Pasal 72 ayat (1), harus menghentikan pelanggaran dan memenuhi kewajiban paling lama 6 (enam) bulan sejak ditetapkan. (2) Perguruan tinggi yang dikenai Sanksi Administratif ringan sebagaimana dimaksud pada ayat (1) dan tidak menghentikan pelanggaran atau tidak memenuhi kewajiban, dikenai Sanksi Administratif sedang." },
    "P7-75": { reg: "P7", label: "Pasal 75", status: "kutipan",
      bunyi: "(1) Perguruan tinggi yang dikenai Sanksi Administratif sedang sebagaimana dimaksud dalam Pasal 72 ayat (2), harus menghentikan pelanggaran dan memenuhi kewajiban paling lama 6 (enam) bulan sejak ditetapkan. (2) Perguruan tinggi yang dikenai Sanksi Administratif sedang sebagaimana dimaksud pada ayat (1) tetapi tidak menghentikan pelanggaran dan tidak memenuhi kewajiban, dikenai Sanksi Administratif berat." },
    "P7-76": { reg: "P7", label: "Pasal 76", status: "kutipan",
      bunyi: "(1) Perguruan tinggi yang dikenai Sanksi Administratif berat berupa penghentian pembinaan sebagaimana dimaksud dalam Pasal 72 ayat (3) huruf a, harus menghentikan pelanggaran dan memenuhi kewajiban paling lama 6 (enam) bulan sejak ditetapkan. (2) Perguruan tinggi yang dikenai Sanksi Administratif berat sebagaimana dimaksud pada ayat (1) tetapi tidak menghentikan pelanggaran dan tidak memenuhi kewajiban, dikenai Sanksi Administratif berat sebagaimana dimaksud dalam Pasal 72 ayat (3) huruf b dan/atau huruf c." },
    "P7-77": { reg: "P7", label: "Pasal 77", status: "kutipan",
      bunyi: "(1) Perguruan tinggi yang dikenai Sanksi Administratif berat berupa pencabutan izin Program Studi sebagaimana dimaksud dalam Pasal 72 ayat (3) huruf b, dilarang menyelenggarakan kegiatan akademik dan non-akademik. (2) Perguruan tinggi yang dikenai Sanksi Administratif berat sebagaimana dimaksud pada ayat (1) harus mengumumkan pencabutan izin Program Studi melalui media masa nasional. (3) Badan Penyelenggara harus: a. menanggung seluruh kerugian Mahasiswa, Dosen, dan/atau karyawan yang timbul akibat pencabutan izin Program Studi sebagaimana dimaksud pada ayat (1); dan b. mengembalikan Dosen Pegawai Negeri Sipil yang dipekerjakan." },
    "P7-79": { reg: "P7", label: "Pasal 79", status: "kutipan",
      bunyi: "Dugaan pelanggaran perguruan tinggi dan/atau Badan Penyelenggara dapat berasal dari: a. Badan Akreditasi Nasional Perguruan Tinggi dan/atau Lembaga Akreditasi Mandiri; b. hasil pemantauan dan evaluasi LLDIKTI; c. hasil pemantauan dan evaluasi Kementerian; d. hasil pemeriksaan aparat pengawas internal pemerintah; e. hasil pemeriksaan aparat pengawas eksternal pemerintah; f. laporan/pengaduan masyarakat secara lisan/tulisan; dan/atau g. pemberitaan melalui media masa." },
    "P7-80": { reg: "P7", label: "Pasal 80 ayat (1)–(2)", status: "kutipan",
      bunyi: "(1) Pemeriksaan dugaan pelanggaran yang dikenai Sanksi Administratif ringan dilakukan oleh pemimpin LLDIKTI. (2) Pemeriksaan dugaan pelanggaran yang dikenai Sanksi Administratif sedang dan Sanksi Administratif berat dilakukan oleh direktur jenderal terkait sesuai dengan kewenangannya." },
    "P7-81": { reg: "P7", label: "Pasal 81", status: "kutipan",
      bunyi: "(1) Pemimpin LLDIKTI menetapkan Sanksi Administratif ringan. (2) Penetapan Sanksi Administratif ringan sebagaimana dimaksud pada ayat (1) dilaporkan kepada direktur jenderal terkait sesuai dengan kewenangannya. (3) Direktur jenderal terkait sesuai dengan kewenangannya menetapkan Sanksi Administratif sedang dan Sanksi Administratif berat berupa penghentian pembinaan." },
    "P7-82": { reg: "P7", label: "Pasal 82", status: "kutipan",
      bunyi: "(1) Perguruan tinggi dan/atau Badan Penyelenggara dapat mengajukan permohonan keberatan atas pengenaan Sanksi Administratif sebagaimana dimaksud dalam Pasal 72 ayat (1), ayat (2), dan ayat (3) huruf a. (2) Permohonan keberatan sebagaimana dimaksud pada ayat (1) disampaikan secara tertulis kepada pejabat yang menetapkan Sanksi Administratif paling lama 21 (dua puluh satu) hari kerja sejak diterimanya keputusan penetapan Sanksi Administratif. (3) Permohonan keberatan sebagaimana dimaksud pada ayat (1) tidak menunda pelaksanaan Sanksi Administratif." },
    "P7-83": { reg: "P7", label: "Pasal 83", status: "kutipan",
      bunyi: "(1) Terhadap permohonan keberatan sebagaimana dimaksud dalam Pasal 82, pejabat yang menetapkan Sanksi Administratif dapat memutuskan: a. menolak; b. mengubah keputusan; atau c. membatalkan keputusan. (2) Pejabat yang menetapkan Sanksi Administratif harus menjawab keberatan paling lama 10 (sepuluh) hari kerja sejak diterimanya keberatan. (3) Dalam hal pejabat yang menetapkan Sanksi Administratif tidak menjawab keberatan dalam jangka waktu sebagaimana dimaksud pada ayat (2), keberatan dianggap dikabulkan." },
    "P7-84-1": { reg: "P7", label: "Pasal 84 ayat (1)", status: "kutipan",
      bunyi: "Perguruan tinggi dan/atau Badan Penyelenggara yang dikenai Sanksi Administratif dapat mengajukan banding terhadap penolakan keberatan atau perubahan keputusan sebagaimana dimaksud dalam Pasal 83 ayat (1) huruf a dan huruf b." },

    "P39-70-4": { reg: "P39", label: "Pasal 70 ayat (4)", status: "kutipan",
      bunyi: "Program studi sebagaimana dimaksud pada ayat (2) wajib memiliki status terakreditasi pertama, terakreditasi, atau terakreditasi unggul untuk meluluskan mahasiswa dan menerbitkan ijazah." },
    "P39-74": { reg: "P39", label: "Pasal 74 ayat (4) dan (7)", status: "kutipan",
      bunyi: "(4) Status Akreditasi sebagaimana dimaksud pada ayat (3) terdiri atas: a. terakreditasi; b. terakreditasi unggul; atau c. tidak terakreditasi. (7) Status tidak terakreditasi sebagaimana dimaksud pada ayat (4) huruf c menunjukkan program studi tidak memenuhi atau berada di bawah SN Dikti." },
    "P39-76": { reg: "P39", label: "Pasal 76 ayat (1)–(3)", status: "kutipan",
      bunyi: "(1) Program studi baru atau perguruan tinggi baru mendapatkan status terakreditasi pertama pada saat memperoleh izin penyelenggaraan atau izin pendirian dari Menteri. (2) Status terakreditasi pertama sebagaimana dimaksud pada ayat (1) diberikan setelah program studi baru atau perguruan tinggi baru memenuhi syarat minimum Akreditasi. (3) Syarat minimum Akreditasi untuk program studi baru sebagaimana dimaksud pada ayat (2) terdiri atas kriteria minimum mengenai: a. kurikulum; b. rencana pembelajaran; c. dosen dan tenaga kependidikan; dan d. sarana dan prasarana." },
    "P39-77-1": { reg: "P39", label: "Pasal 77 ayat (1)", status: "kutipan",
      bunyi: "Perguruan tinggi dan program studi dengan status terakreditasi pertama wajib mengajukan permohonan Akreditasi kepada BAN-PT atau LAM sesuai dengan kewenangannya untuk memperoleh status terakreditasi atau terakreditasi unggul paling lambat 2 (dua) tahun setelah beroperasi." },
    "P39-77-3": { reg: "P39", label: "Pasal 77 ayat (3)", status: "kutipan",
      bunyi: "Status terakreditasi dari BAN-PT atau LAM sebagaimana dimaksud pada ayat (2) diberikan untuk masa berlaku selama: a. 5 (lima) tahun untuk program studi; atau b. 8 (delapan) tahun untuk perguruan tinggi." },
    "P39-77-6": { reg: "P39", label: "Pasal 77 ayat (6)", status: "kutipan",
      bunyi: "Dalam hal BAN-PT atau LAM menilai perguruan tinggi atau program studi yang mengajukan permohonan Akreditasi sebagaimana dimaksud pada ayat (1) tidak memenuhi SN Dikti, BAN-PT atau LAM sesuai dengan kewenangannya menetapkan status tidak terakreditasi." },
    "P39-77-7": { reg: "P39", label: "Pasal 77 ayat (7)", status: "kutipan",
      bunyi: "Berdasarkan penetapan status tidak terakreditasi oleh BAN-PT atau LAM sebagaimana dimaksud pada ayat (6), Menteri mencabut izin pendirian perguruan tinggi dan/atau izin program studi." },
    "P39-80-1": { reg: "P39", label: "Pasal 80 ayat (1)", status: "kutipan",
      bunyi: "Perguruan tinggi dapat mengajukan keberatan terhadap penetapan status Akreditasi program studi dan/atau perguruan tinggi kepada BAN-PT atau LAM sesuai dengan kewenangannya." },
    "P39-83": { reg: "P39", label: "Pasal 83 ayat (1)–(2)", status: "kutipan",
      bunyi: "(1) BAN-PT atau LAM sesuai dengan kewenangannya melakukan pemantauan mutu pada perguruan tinggi atau program studi yang telah terakreditasi dengan memperhatikan: a. data dan informasi pada PD Dikti; b. pengaduan masyarakat; c. permintaan dari Kementerian; dan/atau d. informasi lain yang dapat dipertanggungjawabkan. (2) Pemantauan mutu sebagaimana dimaksud pada ayat (1) dilakukan sewaktu-waktu." },
    "P39-114": { reg: "P39", label: "Pasal 114 ayat (1) huruf c dan ayat (2)", status: "kutipan",
      bunyi: "(1) Pada saat Peraturan Menteri ini mulai berlaku: ... c. perguruan tinggi dan/atau program studi yang tidak terakreditasi dan/atau belum mengajukan permohonan Akreditasi wajib mengajukan permohonan Akreditasi sesuai dengan peraturan Menteri ini paling lambat 1 (satu) tahun sejak Peraturan Menteri ini diundangkan. (2) Perguruan tinggi yang tidak mengajukan permohonan Akreditasi kepada BAN-PT atau LAM sebagaimana dimaksud pada ayat (1) huruf c dicabut izin penyelenggaraan perguruan tinggi atau program studinya oleh Menteri." },

    "P10-76": { reg: "P10", label: "Perubahan Pasal 76", status: "ringkasan",
      bunyi: "Status terakreditasi pertama diperoleh pada saat mendapat izin yang diperoleh sesuai ketentuan peraturan perundang-undangan (sebelumnya: izin penyelenggaraan atau pendirian dari Menteri)." },
    "P10-77-1": { reg: "P10", label: "Perubahan Pasal 77 ayat (1)", status: "ringkasan",
      bunyi: "Pengajuan Akreditasi oleh program studi berstatus terakreditasi pertama dilakukan paling lambat 2 (dua) tahun setelah menerima mahasiswa baru untuk pertama kali (sebelumnya: 2 tahun setelah beroperasi)." },
    "P10-77-ulang": { reg: "P10", label: "Perubahan Pasal 77", status: "ringkasan",
      bunyi: "Program studi yang dinilai tidak memenuhi SN Dikti diberi satu kesempatan mengajukan kembali paling lambat 6 (enam) bulan. Status tidak terakreditasi ditetapkan apabila pengajuan ulang juga tidak memenuhi." }
  },

  /* ---------- HALAMAN ----------
     menu = label singkat di sidebar (opsional)
     tipe blok: peta | kartu | langkah | jalur | tangga | info | regulasi
     tingkat warna: normal | aksen | ringan | sedang | berat | cabut   */
  halaman: [

    { id: "peta", menu: "Peta hidup prodi", judul: "Peta hidup program studi", ikon: "peta",
      sub: "Dari izin dibuka sampai dua kemungkinan berakhirnya prodi",
      blok: [
        { tipe: "peta",
          langkah: [
            { judul: "Usul pembukaan", ket: "Penambahan prodi pada PTS yang berizin", pasal: ["P7-22", "P7-23-1"] },
            { judul: "Izin Menteri", ket: "Langsung berstatus terakreditasi pertama", pasal: ["UU12-33-3", "P39-76"] },
            { judul: "Wajib akreditasi", ket: "Paling lambat 2 tahun sejak menerima mahasiswa baru pertama", pasal: ["P39-77-1", "P10-77-1"] },
            { judul: "Terakreditasi", ket: "Berlaku 5 tahun, wajib diakreditasi ulang", pasal: ["P39-77-3", "UU12-33-6"] }
          ],
          ulang: "Akreditasi ulang setiap masa berlaku habis",
          cabang: {
            judul: "Selama prodi berjalan, dua hal ini dapat mengakhirinya",
            item: [
              { judul: "Penutupan prodi", ket: "Ditetapkan Menteri karena perubahan kebijakan atau sanksi berat", pasal: ["P7-27-1", "P7-27-2"], ke: "penutupan", tingkat: "berat" },
              { judul: "Pencabutan izin prodi", ket: "Karena tidak terakreditasi, tidak diakreditasi ulang, atau sanksi berat", pasal: ["P39-77-7", "UU12-33-7", "P7-72-3"], ke: "penutupan", tingkat: "cabut" }
            ]
          }
        },
        { tipe: "kartu", judul: "Tiga hal yang perlu diingat pimpinan",
          item: [
            { ikon: "ijazah", judul: "Tanpa akreditasi, tidak bisa meluluskan", isi: "Prodi wajib berstatus terakreditasi untuk meluluskan mahasiswa dan menerbitkan ijazah.", pasal: ["P39-70-4"], tingkat: "aksen" },
            { ikon: "gelar", judul: "Gelar bisa dinyatakan tidak sah", isi: "Gelar yang dikeluarkan prodi tidak terakreditasi dinyatakan tidak sah dan dicabut Menteri.", pasal: ["UU12-28-3"], tingkat: "berat" },
            { ikon: "perisai", judul: "Tujuan pencabutan izin", isi: "Melindungi masyarakat dari layanan pendidikan tinggi yang tidak bermutu.", pasal: ["P7-2-2"], tingkat: "normal" }
          ]
        }
      ]
    },

    { id: "pembukaan", menu: "Membuka prodi", judul: "Membuka program studi", ikon: "buka",
      sub: "Tahapan sampai izin Menteri terbit",
      blok: [
        { tipe: "langkah",
          item: [
            { judul: "Penuhi syarat minimum akreditasi", isi: "Empat kriteria minimum yang dinilai untuk prodi baru:",
              poin: ["Kurikulum", "Rencana pembelajaran", "Dosen dan tenaga kependidikan", "Sarana dan prasarana"], pasal: ["P39-76"] },
            { judul: "Penuhi syarat jenjang", isi: "Untuk jenjang di atas sarjana, prodi sebidang di bawahnya harus sudah terakreditasi minimal Baik Sekali:",
              poin: ["Magister: prodi sarjana sebidang", "Doktor: prodi magister sebidang", "Profesi: prodi sarjana sebidang"], pasal: ["P7-4-5", "P7-4-7", "P7-4-9"] },
            { judul: "Ajukan usul pembukaan", isi: "Pembukaan prodi di kampus utama adalah penambahan jumlah prodi pada PTS yang sudah berizin.",
              pasal: ["P7-22", "P7-23-1"], menyusul: "Rincian dokumen dan prosedur teknis mengikuti pedoman Direktur Jenderal (belum dimuat)." },
            { judul: "Izin Menteri terbit", isi: "Prodi diselenggarakan atas izin Menteri dan saat itu juga memperoleh status terakreditasi pertama.",
              pasal: ["UU12-33-3", "UU12-33-5", "P39-76", "P10-76"], tingkat: "aksen" }
          ],
          akhir: { judul: "Sesudah izin terbit", isi: "Kewajiban akreditasi mulai berjalan. Lihat halaman Pemicu penutupan.", ke: "penutupan" }
        }
      ]
    },

    { id: "penutupan", menu: "Pemicu penutupan", judul: "Pemicu penutupan program studi", ikon: "peringatan",
      sub: "Dua jalur resmi yang dapat berujung pada berakhirnya prodi",
      blok: [
        { tipe: "jalur",
          kolom: [
            { judul: "Jalur 1 · Akreditasi", ikon: "akreditasi",
              item: [
                { judul: "Wajib mengajukan akreditasi", ket: "2 tahun sejak mahasiswa baru pertama, lalu setiap 5 tahun", pasal: ["P10-77-1", "P39-77-3", "UU12-33-6"], tingkat: "normal" },
                { judul: "Dinilai tidak memenuhi SN Dikti", ket: "Penilaian oleh BAN-PT atau LAM", pasal: ["P39-77-6", "P39-74"], tingkat: "ringan" },
                { judul: "Satu kali ajukan ulang", ket: "Paling lambat 6 bulan", pasal: ["P10-77-ulang"], tingkat: "sedang" },
                { judul: "Status tidak terakreditasi", ket: "Ditetapkan BAN-PT atau LAM", pasal: ["P39-77-6"], tingkat: "berat" },
                { judul: "Izin prodi dicabut Menteri", ket: "Wajib, tanpa tahapan sanksi", pasal: ["P39-77-7"], tingkat: "cabut" }
              ],
              catatan: { isi: "Prodi yang tidak mengajukan akreditasi dalam masa peralihan (batas 2 September 2026) juga dicabut izinnya.", pasal: ["P39-114"] }
            },
            { judul: "Jalur 2 · Sanksi administratif", ikon: "sanksi",
              item: [
                { judul: "Dugaan pelanggaran diketahui", ket: "Dari BAN-PT/LAM, LLDIKTI, Kementerian, pengawas, atau pengaduan", pasal: ["P7-79"], tingkat: "normal" },
                { judul: "Diperiksa dan ditetapkan", ket: "Ringan oleh LLDIKTI; sedang dan berat oleh Dirjen", pasal: ["P7-80", "P7-81"], tingkat: "ringan" },
                { judul: "Naik bertingkat bila tidak diperbaiki", ket: "Ringan → sedang → berat, tiap tingkat 6 bulan", pasal: ["P7-74", "P7-75", "P7-76"], tingkat: "sedang" },
                { judul: "Penghentian pembinaan", ket: "Tahap terakhir sebelum izin dicabut", pasal: ["P7-72-3", "P7-76"], tingkat: "berat" },
                { judul: "Izin prodi dicabut, prodi ditutup", ket: "Penutupan ditetapkan Menteri", pasal: ["P7-72-3", "P7-27-1", "P7-27-2"], tingkat: "cabut" }
              ],
              catatan: { isi: "Rincian tiap tingkat sanksi ada di tangga di bawah.", pasal: [] }
            }
          ]
        },
        { tipe: "tangga", judul: "Tangga sanksi administratif",
          total: "Minimal ±18 bulan dari teguran tertulis sampai izin dicabut",
          tingkat: [
            { kode: "ringan", judul: "Sanksi ringan", bentuk: "Peringatan tertulis", tenggat: "6 bulan untuk menghentikan pelanggaran", oleh: "Ditetapkan pemimpin LLDIKTI",
              pasal: ["P7-72-1", "P7-74", "P7-81"],
              pelanggaran: [
                { t: "Dosen tetap kurang dari 5 orang untuk setiap prodi", sorot: true },
                { t: "Nisbah dosen dan mahasiswa tidak terpenuhi", sorot: true },
                { t: "Tidak melapor berkala ke PDDikti", sorot: true },
                { t: "Kurikulum tanpa mata kuliah agama, Pancasila, kewarganegaraan, bahasa Indonesia" },
                { t: "Bahasa Indonesia tidak dipakai sebagai bahasa pengantar utama" },
                { t: "Hasil penelitian tidak disebarluaskan" },
                { t: "Gelar tidak berbahasa Indonesia" },
                { t: "Ringkasan laporan tahunan tidak diumumkan" },
                { t: "Kebebasan akademik dan pengelolaan non-akademik tidak dilindungi" },
                { t: "Hak mahasiswa kurang mampu tidak dipenuhi" }
              ],
              pelanggaranPasal: ["P7-69-1"] },
            { kode: "sedang", judul: "Sanksi sedang", bentuk: "Penghentian sementara penerimaan mahasiswa baru, penundaan usul prodi baru, penundaan akreditasi, dan penundaan bantuan", tenggat: "6 bulan untuk menghentikan pelanggaran", oleh: "Ditetapkan Direktur Jenderal",
              pasal: ["P7-72-2", "P7-73", "P7-75", "P7-81"],
              pelanggaran: [
                { t: "Sanksi ringan tidak diperbaiki dalam 6 bulan", sorot: true },
                { t: "Daftar pelanggaran tingkat sedang (Pasal 70)", menyusul: true }
              ],
              pelanggaranPasal: ["P7-69-2", "P7-70"] },
            { kode: "berat", judul: "Sanksi berat", bentuk: "Penghentian pembinaan", tenggat: "6 bulan untuk menghentikan pelanggaran", oleh: "Ditetapkan Direktur Jenderal",
              pasal: ["P7-72-3", "P7-76", "P7-81"],
              pelanggaran: [
                { t: "Sanksi sedang tidak diperbaiki dalam 6 bulan", sorot: true },
                { t: "Langsung berat: prodi tidak terakreditasi mengeluarkan gelar", sorot: true },
                { t: "Langsung berat: ijazah atau gelar diberikan kepada yang tidak berhak", sorot: true },
                { t: "Langsung berat: tidak mengusulkan akreditasi ulang prodi", sorot: true },
                { t: "Langsung berat: menyelenggarakan prodi tanpa izin Menteri", sorot: true },
                { t: "Langsung berat: tidak lagi memenuhi syarat pembukaan prodi" },
                { t: "Langsung berat: penerimaan mahasiswa baru bertujuan komersial" },
                { t: "Langsung berat: pengelolaan tidak berprinsip nirlaba" },
                { t: "Langsung berat: ubah nama PT, Badan Penyelenggara, atau lokasi kampus tanpa izin" },
                { t: "Langsung berat: sengketa internal yang mengganggu tridharma" }
              ],
              pelanggaranPasal: ["P7-69-3", "P7-71"] },
            { kode: "cabut", judul: "Izin prodi dicabut", bentuk: "Pencabutan izin Program Studi", tenggat: "Akhir tahapan", oleh: "Ditetapkan Menteri",
              pasal: ["P7-72-3", "P7-76", "P7-27-1"],
              pelanggaran: [
                { t: "Dilarang menyelenggarakan kegiatan akademik dan non-akademik", sorot: true },
                { t: "Wajib mengumumkan pencabutan di media massa nasional" },
                { t: "Badan Penyelenggara menanggung seluruh kerugian mahasiswa, dosen, dan karyawan", sorot: true },
                { t: "Dosen PNS yang dipekerjakan dikembalikan" }
              ],
              judulDaftar: "Akibat yang harus ditanggung",
              pelanggaranPasal: ["P7-77"] }
          ]
        },
        { tipe: "kartu", judul: "Hak membela diri",
          item: [
            { ikon: "dokumen", judul: "Keberatan atas sanksi", isi: "Diajukan tertulis paling lama 21 hari kerja. Tidak menunda sanksi. Berlaku untuk sanksi ringan, sedang, dan penghentian pembinaan, tidak untuk pencabutan izin.", pasal: ["P7-82"], tingkat: "normal" },
            { ikon: "jam", judul: "Wajib dijawab 10 hari kerja", isi: "Bila pejabat tidak menjawab dalam 10 hari kerja, keberatan dianggap dikabulkan. Penolakan dapat dibanding.", pasal: ["P7-83", "P7-84-1"], tingkat: "aksen" },
            { ikon: "akreditasi", judul: "Keberatan atas status akreditasi", isi: "Diajukan kepada BAN-PT atau LAM yang menetapkan status.", pasal: ["P39-80-1"], tingkat: "normal" },
            { ikon: "mata", judul: "Pemantauan sewaktu-waktu", isi: "BAN-PT atau LAM dapat memantau mutu prodi terakreditasi kapan saja dari data PDDikti dan pengaduan.", pasal: ["P39-83"], tingkat: "ringan" }
          ]
        }
      ]
    },

    { id: "regulasi", menu: "Dasar regulasi", judul: "Dasar regulasi", ikon: "buku",
      sub: "Regulasi yang menjadi rujukan web ini",
      blok: [ { tipe: "regulasi" } ]
    }
  ]
};
