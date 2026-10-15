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

    "UU12-18-3": { reg: "UU12", label: "Pasal 18 ayat (3)", status: "kutipan",
      bunyi: "Program sarjana wajib memiliki Dosen yang berkualifikasi akademik minimum lulusan program magister atau sederajat." },
    "UU12-19-3": { reg: "UU12", label: "Pasal 19 ayat (3)", status: "kutipan",
      bunyi: "Program magister wajib memiliki Dosen yang berkualifikasi akademik lulusan program doktor atau yang sederajat." },
    "UU12-21-4": { reg: "UU12", label: "Pasal 21 ayat (4)", status: "kutipan",
      bunyi: "Program diploma sebagaimana dimaksud pada ayat (3) wajib memiliki Dosen yang berkualifikasi akademik minimum lulusan program magister atau sederajat." },
    "UU12-35-3": { reg: "UU12", label: "Pasal 35 ayat (3)", status: "kutipan",
      bunyi: "Kurikulum Pendidikan Tinggi sebagaimana dimaksud pada ayat (1) wajib memuat mata kuliah: a. agama; b. Pancasila; c. kewarganegaraan; dan d. bahasa Indonesia." },
    "P7-40-1": { reg: "P7", label: "Pasal 40 ayat (1)", status: "kutipan",
      bunyi: "Beban kerja Dosen paling banyak 1,5 (satu koma lima) EWMP yaitu 56,25 (lima puluh enam koma dua puluh lima) jam per minggu." },
    "P7-41": { reg: "P7", label: "Pasal 41", status: "kutipan",
      bunyi: "Untuk memenuhi kecukupan Dosen, perguruan tinggi menggunakan Dosen yang bekerja: a. penuh waktu paling sedikit 60% (enam puluh persen) dari total EWMP; dan b. paruh waktu paling banyak 40% (empat puluh persen) dari total EWMP." },
    "P39-17": { reg: "P39", label: "Pasal 17 ayat (1) huruf c dan ayat (4)", status: "kutipan",
      bunyi: "(1) Beban belajar dan Masa Tempuh Kurikulum pada: ... c. program diploma tiga, paling sedikit 108 (seratus delapan) satuan kredit semester yang dirancang selama 6 (enam) semester. (4) Mahasiswa pada program diploma satu, diploma dua, dan diploma tiga wajib melaksanakan kegiatan magang di dunia usaha, dunia industri, dan dunia kerja yang relevan." },
    "P39-18-1": { reg: "P39", label: "Pasal 18 ayat (1)", status: "kutipan",
      bunyi: "Beban belajar dan Masa Tempuh Kurikulum pada program sarjana atau sarjana terapan paling sedikit 144 (seratus empat puluh empat) satuan kredit semester yang dirancang selama 8 (delapan) semester." },
    "P39-22": { reg: "P39", label: "Pasal 22", status: "kutipan",
      bunyi: "Beban belajar dan Masa Tempuh Kurikulum pada program profesi, spesialis, atau subspesialis disusun dan ditetapkan oleh perguruan tinggi bersama organisasi profesi, kementerian lain, dan/atau lembaga pemerintah nonkementerian yang bertanggung jawab atas mutu layanan profesi sesuai dengan ketentuan peraturan perundang-undangan." },
    "P39-23-2": { reg: "P39", label: "Pasal 23 ayat (2)", status: "kutipan",
      bunyi: "Masa Studi sebagaimana dimaksud pada ayat (1) tidak melebihi 2 (dua) kali Masa Tempuh Kurikulum bagi mahasiswa penuh waktu." },
    "P39-28-7": { reg: "P39", label: "Pasal 28 ayat (7)", status: "kutipan",
      bunyi: "Hasil penilaian sumatif dilaporkan perguruan tinggi ke PD Dikti." },
    "P39-30": { reg: "P39", label: "Pasal 30 ayat (1)–(2)", status: "kutipan",
      bunyi: "(1) Mahasiswa program diploma dan program sarjana atau sarjana terapan dinyatakan lulus jika telah menempuh seluruh beban belajar yang ditetapkan dan memiliki capaian pembelajaran lulusan yang ditargetkan oleh program studi dengan Indeks Prestasi Kumulatif lebih besar atau sama dengan 2,0 (dua koma nol). (2) Mahasiswa program profesi, program magister, program magister terapan, program spesialis, program doktor, program doktor terapan, dan program subspesialis, dinyatakan lulus jika telah menempuh seluruh beban belajar yang ditetapkan dan memiliki capaian pembelajaran lulusan yang ditargetkan oleh program studi dengan Indeks Prestasi Kumulatif lebih besar atau sama dengan 3,0 (tiga koma nol)." },
    "P39-44-1": { reg: "P39", label: "Pasal 44 ayat (1)", status: "kutipan",
      bunyi: "Kurikulum program studi minimal mencakup: a. capaian pembelajaran lulusan; b. Masa Tempuh Kurikulum; c. metode pembelajaran; d. modalitas pembelajaran; e. syarat kompetensi dan/atau kualifikasi calon mahasiswa; f. penilaian hasil belajar; g. materi pembelajaran yang harus ditempuh; dan h. tata cara penerimaan mahasiswa pada berbagai tahapan kurikulum." },
    "P39-67-1": { reg: "P39", label: "Pasal 67 ayat (1)", status: "kutipan",
      bunyi: "Perguruan tinggi wajib melaksanakan penjaminan mutu internal dengan mengembangkan SPMI." },
    "P39-116": { reg: "P39", label: "Pasal 116 huruf a", status: "kutipan",
      bunyi: "Pada saat Peraturan Menteri ini mulai berlaku: a. pengelolaan dan penyelenggaraan perguruan tinggi wajib menyesuaikan dengan Peraturan Menteri ini paling lama 2 (dua) tahun sejak Peraturan Menteri ini diundangkan;" },

    "P10-76": { reg: "P10", label: "Perubahan Pasal 76", status: "ringkasan",
      bunyi: "Status terakreditasi pertama diperoleh pada saat mendapat izin yang diperoleh sesuai ketentuan peraturan perundang-undangan (sebelumnya: izin penyelenggaraan atau pendirian dari Menteri)." },
    "P10-77-1": { reg: "P10", label: "Perubahan Pasal 77 ayat (1)", status: "ringkasan",
      bunyi: "Pengajuan Akreditasi oleh program studi berstatus terakreditasi pertama dilakukan paling lambat 2 (dua) tahun setelah menerima mahasiswa baru untuk pertama kali (sebelumnya: 2 tahun setelah beroperasi)." },
    "P10-77-ulang": { reg: "P10", label: "Perubahan Pasal 77", status: "ringkasan",
      bunyi: "Program studi yang dinilai tidak memenuhi SN Dikti diberi satu kesempatan mengajukan kembali paling lambat 6 (enam) bulan. Status tidak terakreditasi ditetapkan apabila pengajuan ulang juga tidak memenuhi." }
  },

  /* ---------- HALAMAN ----------
     menu = label singkat di sidebar (opsional)
     tipe blok: peta | kartu | langkah | jalur | garis | penyebab | tangga | ceklis | info | regulasi
     tingkat warna: normal | aksen | ringan | sedang | berat | cabut   */
  halaman: [

    { id: "peta", menu: "Gambaran umum", judul: "Gambaran umum program studi", ikon: "peta",
      sub: "Perjalanan prodi dari izin dibuka sampai kemungkinan ditutup",
      blok: [
        { tipe: "peta",
          langkah: [
            { judul: "Usul pembukaan", ket: "Menambah prodi baru pada perguruan tinggi yang sudah berizin", pasal: ["P7-22", "P7-23-1"] },
            { judul: "Izin Menteri", ket: "Prodi langsung berstatus terakreditasi pertama", pasal: ["UU12-33-3", "P39-76"] },
            { judul: "Wajib akreditasi", ket: "Paling lambat 2 tahun sejak menerima mahasiswa baru pertama", pasal: ["P39-77-1", "P10-77-1"] },
            { judul: "Terakreditasi", ket: "Berlaku 5 tahun, lalu wajib diakreditasi ulang", pasal: ["P39-77-3", "UU12-33-6"] }
          ],
          ulang: "Akreditasi ulang setiap masa berlaku habis",
          cabang: {
            judul: "Selama prodi berjalan, prodi dapat ditutup karena empat penyebab",
            item: [
              { judul: "Ditutup langsung", ket: "Kebijakan pemerintah berubah, prodi tidak terakreditasi, atau tidak mengajukan akreditasi", pasal: ["P7-27-1", "P39-77-7"], ke: "penyebab", tingkat: "berat" },
              { judul: "Ditutup bertahap", ket: "Pelanggaran tidak diperbaiki setelah ditegur, sampai sanksi berat", pasal: ["P7-72-3"], ke: "penyebab", tingkat: "cabut" }
            ]
          }
        },
        { tipe: "kartu", judul: "Tiga hal yang perlu diingat",
          item: [
            { ikon: "ijazah", judul: "Tanpa akreditasi, tidak bisa meluluskan", isi: "Prodi wajib berstatus terakreditasi untuk meluluskan mahasiswa dan menerbitkan ijazah.", pasal: ["P39-70-4"], tingkat: "aksen" },
            { ikon: "gelar", judul: "Gelar bisa dinyatakan tidak sah", isi: "Gelar yang dikeluarkan prodi tidak terakreditasi dinyatakan tidak sah dan dicabut Menteri.", pasal: ["UU12-28-3"], tingkat: "berat" },
            { ikon: "perisai", judul: "Mengapa izin bisa dicabut", isi: "Untuk melindungi masyarakat dari layanan pendidikan tinggi yang tidak bermutu.", pasal: ["P7-2-2"], tingkat: "normal" }
          ]
        }
      ]
    },

    { id: "pembukaan", menu: "Buka prodi", judul: "Membuka program studi", ikon: "buka",
      sub: "Tahapan sampai izin Menteri terbit",
      blok: [
        { tipe: "langkah",
          item: [
            { judul: "Penuhi syarat minimum akreditasi", isi: "Empat hal yang dinilai untuk prodi baru:",
              poin: ["Kurikulum", "Rencana pembelajaran", "Dosen dan tenaga kependidikan", "Sarana dan prasarana"], pasal: ["P39-76"] },
            { judul: "Penuhi syarat jenjang", isi: "Untuk jenjang di atas sarjana, prodi sebidang di bawahnya harus sudah terakreditasi minimal Baik Sekali:",
              poin: ["Magister: prodi sarjana sebidang", "Doktor: prodi magister sebidang", "Profesi: prodi sarjana sebidang"], pasal: ["P7-4-5", "P7-4-7", "P7-4-9"] },
            { judul: "Ajukan usul pembukaan", isi: "Pembukaan prodi di kampus utama adalah penambahan jumlah prodi pada perguruan tinggi yang sudah berizin.",
              pasal: ["P7-22", "P7-23-1"], menyusul: "Rincian dokumen dan prosedur teknis mengikuti pedoman Direktur Jenderal (belum dimuat)." },
            { judul: "Izin Menteri terbit", isi: "Prodi diselenggarakan atas izin Menteri dan saat itu juga memperoleh status terakreditasi pertama.",
              pasal: ["UU12-33-3", "UU12-33-5", "P39-76", "P10-76"], tingkat: "aksen" }
          ],
          akhir: { judul: "Sesudah izin terbit", isi: "Prodi wajib memenuhi syarat dan tidak boleh lengah. Lihat apa saja yang dapat membuat prodi ditutup.", ke: "penyebab" }
        }
      ]
    },

    { id: "penyebab", menu: "Penyebab prodi ditutup", judul: "Penyebab prodi ditutup", ikon: "peringatan",
      sub: "Empat penyebab menurut aturan. Tiga terjadi langsung, satu melalui tahapan sanksi.",
      blok: [
        { tipe: "penyebab",
          item: [
            { judul: "Kebijakan pemerintah atau peraturan berubah", jenis: "kebijakan", label: "Keputusan pemerintah", tingkat: "normal",
              pemicu: "Pemerintah mengubah kebijakan atau peraturan sehingga prodi tidak dapat diteruskan.",
              contoh: ["Peraturan baru terbit", "Prodi tidak lagi sesuai", "Menteri menetapkan penutupan"],
              pasal: ["P7-27-1", "P7-27-2"] },
            { judul: "Dinyatakan tidak terakreditasi", jenis: "langsung", label: "Langsung, tanpa tahapan sanksi", tingkat: "berat",
              pemicu: "Saat dinilai BAN-PT atau LAM (lembaga akreditasi), prodi tidak memenuhi SN Dikti (standar minimum nasional).",
              contoh: ["Akreditasi diajukan", "Dosen atau kurikulum di bawah standar", "Ajukan ulang maks. 6 bulan, tetap gagal", "Izin dicabut Menteri"],
              pasal: ["P39-77-6", "P39-77-7", "P10-77-ulang"], ke: "akreditasi" },
            { judul: "Tidak mengajukan akreditasi", jenis: "langsung", label: "Langsung", tingkat: "berat",
              pemicu: "Masa akreditasi habis, tetapi prodi tidak mengajukan akreditasi ulang.",
              contoh: ["Masa akreditasi 5 tahun habis", "Akreditasi ulang tidak diajukan", "Izin dapat dicabut Menteri"],
              pasal: ["UU12-33-6", "UU12-33-7", "P7-71", "P39-114"], ke: "akreditasi" },
            { judul: "Pelanggaran tidak diperbaiki", jenis: "bertahap", label: "Bertahap, minimal ±18 bulan", tingkat: "sedang",
              pemicu: "Prodi melanggar aturan, ditegur, tetapi tidak memperbaikinya sampai sanksi tertinggi.",
              contoh: ["Dosen tetap tinggal 4 orang", "Teguran tertulis", "6 bulan: penerimaan mahasiswa baru dihentikan", "6 bulan: penghentian pembinaan", "6 bulan: izin dicabut"],
              catatan: { isi: "Pelanggaran tertentu langsung masuk sanksi berat tanpa teguran, misalnya membuka prodi tanpa izin atau memberi ijazah kepada yang tidak berhak.", pasal: ["P7-71"] },
              pasal: ["P7-69-1", "P7-74", "P7-75", "P7-76", "P7-72-3"], ke: "sanksi" }
          ],
          akhir: { judul: "Prodi ditutup", ket: "Ditetapkan Menteri. Akibat yang harus ditanggung:",
            akibat: ["Dilarang menyelenggarakan kegiatan akademik dan non-akademik", "Wajib diumumkan di media massa nasional", "Yayasan menanggung seluruh kerugian mahasiswa, dosen, dan karyawan", "Dosen PNS yang dipekerjakan dikembalikan"],
            pasal: ["P7-27-2", "P7-77"] }
        }
      ]
    },

    { id: "akreditasi", menu: "Gagal akreditasi", judul: "Bila gagal akreditasi", ikon: "akreditasi",
      sub: "Prodi yang tidak memenuhi standar dicabut izinnya tanpa tahapan sanksi",
      blok: [
        { tipe: "garis", judul: "Garis waktu akreditasi prodi",
          item: [
            { waktu: "Saat izin terbit", judul: "Terakreditasi pertama", ket: "Diberikan bersama izin Menteri", pasal: ["P39-76"], tingkat: "normal" },
            { waktu: "Maks. 2 tahun", judul: "Wajib ajukan akreditasi", ket: "Dihitung sejak menerima mahasiswa baru pertama", pasal: ["P10-77-1"], tingkat: "normal" },
            { waktu: "Berlaku 5 tahun", judul: "Terakreditasi", ket: "Lalu wajib diakreditasi ulang", pasal: ["P39-77-3", "UU12-33-6"], tingkat: "aksen" },
            { waktu: "Bila gagal", judul: "Satu kali ajukan ulang", ket: "Paling lambat 6 bulan", pasal: ["P10-77-ulang"], tingkat: "sedang" },
            { waktu: "Tetap gagal", judul: "Izin dicabut Menteri", ket: "Status tidak terakreditasi", pasal: ["P39-77-6", "P39-77-7"], tingkat: "cabut" }
          ]
        },
        { tipe: "kartu",
          item: [
            { ikon: "ceklis", judul: "Apa yang dinilai", isi: "Pemenuhan SN Dikti (standar minimum nasional): dosen, kurikulum, kelulusan, dan pengelolaan.", pasal: ["P39-74"], tingkat: "aksen", ke: "ceklis", keTeks: "Lihat syarat wajib" },
            { ikon: "mata", judul: "Dipantau sewaktu-waktu", isi: "BAN-PT atau LAM dapat memantau mutu prodi kapan saja dari data PDDikti (pangkalan data pendidikan tinggi) dan pengaduan.", pasal: ["P39-83"], tingkat: "ringan" },
            { ikon: "jam", judul: "Batas masa peralihan", isi: "Prodi yang belum terakreditasi wajib mengajukan akreditasi paling lambat 2 September 2026. Bila tidak, izinnya dicabut.", pasal: ["P39-114"], tingkat: "berat" }
          ]
        }
      ]
    },

    { id: "ceklis", menu: "Syarat wajib prodi", judul: "Syarat wajib program studi", ikon: "ceklis",
      sub: "Yang dinilai saat akreditasi dan yang dapat berujung sanksi bila dilanggar",
      blok: [
        { tipe: "ceklis", judul: "Batas waktu menurut aturan",
          batas: [
            { angka: "2 tahun", judul: "Penyesuaian ke SN Dikti baru", ket: "Sejak Permen 39/2025 diundangkan (2 September 2025), yaitu paling lambat 2 September 2027", pasal: ["P39-116"] },
            { angka: "6 bulan", judul: "Per tingkat sanksi", ket: "Bila ditegur, pelanggaran wajib dihentikan dalam 6 bulan", pasal: ["P7-74", "P7-75", "P7-76"] },
            { angka: "5 tahun", judul: "Masa berlaku akreditasi", ket: "Prodi wajib diakreditasi ulang saat masa berlakunya habis", pasal: ["P39-77-3", "UU12-33-6"] }
          ]
        },
        { tipe: "ceklis", judul: "Syarat yang wajib dipenuhi",
          kelompok: [
            { judul: "Dosen", ikon: "dosen", item: [
              { syarat: "Dosen tetap paling sedikit 5 orang untuk setiap prodi", angka: "≥ 5 orang", pasal: ["P7-69-1"], sanksi: "ringan", akreditasi: true },
              { syarat: "Dosen program sarjana dan diploma minimal lulusan magister", angka: "≥ S2", pasal: ["UU12-18-3", "UU12-21-4"], akreditasi: true },
              { syarat: "Dosen program magister lulusan doktor", angka: "S3", pasal: ["UU12-19-3"], akreditasi: true },
              { syarat: "Dosen penuh waktu paling sedikit 60% dari total beban kerja dosen (EWMP, ekuivalen waktu mengajar penuh)", angka: "≥ 60%", pasal: ["P7-41"], akreditasi: true },
              { syarat: "Beban kerja dosen paling banyak 1,5 EWMP", angka: "≤ 56,25 jam/minggu", pasal: ["P7-40-1"], akreditasi: true },
              { syarat: "Perbandingan jumlah dosen dan mahasiswa terpenuhi", pasal: ["P7-69-1"], sanksi: "ringan", akreditasi: true, menyusul: "Angka perbandingan mengikuti ketentuan tersendiri, sumber belum dimuat." }
            ]},
            { judul: "Kurikulum", ikon: "kurikulum", item: [
              { syarat: "Memuat mata kuliah agama, Pancasila, kewarganegaraan, dan bahasa Indonesia", angka: "4 mata kuliah", pasal: ["UU12-35-3", "P7-69-1"], sanksi: "ringan", akreditasi: true },
              { syarat: "Kurikulum minimal memuat capaian pembelajaran lulusan, masa tempuh, metode, penilaian, dan materi", pasal: ["P39-44-1"], akreditasi: true },
              { syarat: "Beban belajar program sarjana", angka: "≥ 144 sks", pasal: ["P39-18-1"], akreditasi: true },
              { syarat: "Beban belajar program diploma tiga, dengan magang wajib", angka: "≥ 108 sks", pasal: ["P39-17"], akreditasi: true },
              { syarat: "Beban belajar program profesi ditetapkan bersama organisasi profesi", pasal: ["P39-22"], akreditasi: true },
              { syarat: "Bahasa Indonesia sebagai bahasa pengantar utama", pasal: ["P7-69-1"], sanksi: "ringan" }
            ]},
            { judul: "Kelulusan", ikon: "kelulusan", item: [
              { syarat: "IPK lulus program diploma dan sarjana", angka: "≥ 2,00", pasal: ["P39-30"], akreditasi: true },
              { syarat: "IPK lulus program profesi dan magister", angka: "≥ 3,00", pasal: ["P39-30"], akreditasi: true },
              { syarat: "Masa studi mahasiswa penuh waktu tidak melebihi 2 kali masa tempuh kurikulum", angka: "≤ 2×", pasal: ["P39-23-2"], akreditasi: true },
              { syarat: "Ijazah hanya diterbitkan saat prodi berstatus terakreditasi", pasal: ["P39-70-4", "UU12-28-3"], sanksi: "berat", sanksiTeks: "Bila dilanggar: langsung sanksi berat" }
            ]},
            { judul: "Pengelolaan dan pelaporan", ikon: "kelola", item: [
              { syarat: "Menjalankan sistem penjaminan mutu internal (SPMI)", pasal: ["P39-67-1"], akreditasi: true },
              { syarat: "Melapor berkala ke PDDikti, termasuk hasil penilaian mahasiswa", pasal: ["P7-69-1", "P39-28-7"], sanksi: "ringan" },
              { syarat: "Mengumumkan ringkasan laporan tahunan kepada masyarakat", pasal: ["P7-69-1"], sanksi: "ringan" },
              { syarat: "Mengajukan akreditasi ulang sebelum masa berlaku habis", pasal: ["UU12-33-6", "P7-71"], sanksi: "berat", sanksiTeks: "Bila dilanggar: langsung sanksi berat" }
            ]}
          ]
        }
      ]
    },

    { id: "sanksi", menu: "Sanksi bertingkat", judul: "Sanksi bertingkat", ikon: "sanksi",
      sub: "Pelanggaran yang tidak diperbaiki naik setiap 6 bulan sampai izin dicabut. Klik setiap anak tangga.",
      blok: [
        { tipe: "tangga",
          total: "Minimal ±18 bulan dari teguran tertulis sampai izin dicabut",
          tingkat: [
            { kode: "ringan", judul: "Sanksi ringan", bentuk: "Peringatan tertulis", tenggat: "6 bulan untuk menghentikan pelanggaran", oleh: "Ditetapkan pemimpin LLDIKTI",
              pasal: ["P7-72-1", "P7-74", "P7-81"],
              pelanggaran: [
                { t: "Dosen tetap kurang dari 5 orang untuk setiap prodi", sorot: true },
                { t: "Perbandingan dosen dan mahasiswa tidak terpenuhi", sorot: true },
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
            { kode: "sedang", judul: "Sanksi sedang", bentuk: "Penerimaan mahasiswa baru dihentikan sementara, usul prodi baru dan akreditasi ditunda, bantuan ditunda", tenggat: "6 bulan untuk menghentikan pelanggaran", oleh: "Ditetapkan Direktur Jenderal",
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
                { t: "Yayasan menanggung seluruh kerugian mahasiswa, dosen, dan karyawan", sorot: true },
                { t: "Dosen PNS yang dipekerjakan dikembalikan" }
              ],
              judulDaftar: "Akibat yang harus ditanggung",
              pelanggaranPasal: ["P7-77"] }
          ]
        },
        { tipe: "kartu",
          item: [
            { ikon: "mata", judul: "Dari mana pelanggaran diketahui", isi: "BAN-PT/LAM, LLDIKTI, Kementerian, pengawas pemerintah, pengaduan masyarakat, atau pemberitaan media.", pasal: ["P7-79"], tingkat: "normal" },
            { ikon: "sanksi", judul: "Siapa yang menetapkan", isi: "Sanksi ringan oleh LLDIKTI. Sanksi sedang dan penghentian pembinaan oleh Direktur Jenderal. Pencabutan izin oleh Menteri.", pasal: ["P7-80", "P7-81"], tingkat: "normal" }
          ]
        }
      ]
    },

    { id: "hak", menu: "Keberatan dan banding", judul: "Keberatan dan banding", ikon: "perisai",
      sub: "Upaya yang dapat ditempuh atas sanksi atau status akreditasi",
      blok: [
        { tipe: "kartu",
          item: [
            { ikon: "dokumen", judul: "Keberatan atas sanksi", isi: "Diajukan tertulis paling lama 21 hari kerja. Tidak menunda sanksi. Berlaku untuk sanksi ringan, sedang, dan penghentian pembinaan, tidak untuk pencabutan izin.", pasal: ["P7-82"], tingkat: "normal" },
            { ikon: "jam", judul: "Wajib dijawab 10 hari kerja", isi: "Bila pejabat tidak menjawab dalam 10 hari kerja, keberatan dianggap dikabulkan. Penolakan dapat dibanding.", pasal: ["P7-83", "P7-84-1"], tingkat: "aksen" },
            { ikon: "akreditasi", judul: "Keberatan atas status akreditasi", isi: "Diajukan kepada BAN-PT atau LAM yang menetapkan status.", pasal: ["P39-80-1"], tingkat: "normal" }
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
