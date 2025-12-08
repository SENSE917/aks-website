import { JSX } from "react";


export interface BlogArticle {
  content: JSX.Element;
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const articles: BlogArticle[] = [
  {
    id: 1,
    title: "4 Teknologi Keren yang Bikin Sekolah Kamu Makin Kekinian!",
    excerpt: "Teknologi bukan untuk mengganti peran guru, tapi untuk bikin belajar lebih seru, efektif, dan relevan dengan dunia digital yang akan dihadapi siswa.",
    category: "News",
    date: "November 15, 2025",
    readTime: "5 min read",
    image: "/images/4.png",
    author: "Arda Karya Team",
    content: (
      <div>
        <p>Zaman sekarang, sekolah bukan cuma soal buku, papan tulis, dan
kapur. Dunia pendidikan sudah masuk era digital, dan teknologi di kelas bisa bikin belajar jadi
lebih seru, interaktif, dan pastinya… kekinian!</p>
<div className="h-10" />
        <p>Yuk, intip 4 teknologi keren yang mulai dipakai sekolah dan kampus di Indonesia:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <div className="h-8" />
          <li>
            <strong>1. Layar Sentuh Interaktif (Interactive Flat Panel)</strong>
            <p>
              Bayangin belajar Matematika sambil main game edukasi di layar besar yang bisa disentuh
              seperti tablet raksasa. Guru bisa gambar, tulis, bahkan putar video langsung di layar.
            </p>
          </li>
          <div className="h-8" />
          <li>
            <strong>2. Papan Pengumuman Digital (Digital Signage)</strong>
            <p>
              Nggak ada lagi papan pengumuman penuh kertas yang sobek-sobek. Semua info sekolah,
              jadwal ujian, dan pengumuman penting langsung muncul di layar digital yang keren.
            </p>
          </li>
          <div className="h-8" />
          <li>
            <strong>3. Video Wall untuk Event Sekolah</strong>
            <p>
              Mau pentas seni, seminar, atau lomba? Video Wall bikin acara sekolah jadi spektakuler
              dengan tampilan visual yang super besar dan jernih.
            </p>
          </li>
          <div className="h-8" />
          <li>
            <strong>4. Pembelajaran Online Terintegrasi</strong>
            <p>
              Bukan cuma saat pandemi, tapi sekarang banyak sekolah mulai pakai sistem pembelajaran
              online untuk tugas, kuis, sampai materi tambahan.
            </p>
          </li>
          <br /> <br />
        </ol>
      </div>
    )
  },
  {
    id: 2,
    title: "AKSinergy Dukung Smart Efficiency for Smart Hospitals di Event IKAMARS FKMUI",
    excerpt: "Acara ini mempertemukan para alumni, praktisi, dan pakar manajemen rumah sakit untuk membahas strategi dan inovasi dalam meningkatkan efisiensi layanan rumah sakit melalui pemanfaatan teknologi terkini.",
    category: "News",
    date: "November 10, 2025",
    readTime: "7 min read",
    image: "/images/7.jpg",
    author: "Arda Karya Team",
    content: (
      <div>
        <p>
          PT Arda Karya Sinergy (AKSinergy) berpartisipasi dalam kegiatan Ikatan Keluarga 
          Alumni Magister Administrasi Rumah Sakit (IKAMARS) Fakultas Kesehatan Masyarakat 
          Universitas Indonesia (FKMUI) yang mengangkat tema “Smart Efficiency for Smart 
          Hospitals: Redesigning Care Delivery through Robotics, Logistics, and Digital Pharmacy.
        </p>
        <div className="h-10" />
        <p>
          Acara ini mempertemukan para alumni, praktisi, dan pakar manajemen rumah 
          sakit untuk membahas strategi dan inovasi dalam meningkatkan efisiensi 
          layanan rumah sakit melalui pemanfaatan teknologi terkini.
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <div className="h-8" />
          <li>
          <strong>Peran AKSinergy dalam Mendorong Smart Efficiency</strong>
          <p>Sebagai penyedia solusi teknologi smart hospital, AKSinergy menampilkan 
            berbagai inovasi yang relevan dengan konsep smart efficiency, antara lain:</p>
          </li>
          <div className="h-8" />
          <li>
            <p>•	Digital Signage Rumah Sakit untuk informasi dan edukasi real-time.</p>
            <p>•	Interactive Flat Panel untuk pelatihan, presentasi, dan koordinasi internal.</p>
            <p>•	Smart Kiosk untuk mempercepat registrasi pasien dan mengurangi antrean.</p>
          </li>
          <div className="h-6" />
          <li>
            <p>Teknologi ini membantu rumah sakit mengoptimalkan alur kerja, 
              meminimalkan waktu tunggu pasien, serta meningkatkan pengalaman pelayanan.</p>
          </li>
          <div className="h-8" />
          <li>
            <strong>Kolaborasi dengan Jaringan Alumni</strong>
              <p>Event IKAMARS FKMUI menjadi wadah strategis bagi AKSinergy untuk 
                berinteraksi langsung dengan para pengelola rumah sakit dan pemangku 
                kepentingan, membangun peluang kolaborasi, dan mendiskusikan implementasi 
                teknologi yang selaras dengan kebutuhan rumah sakit di Indonesia.</p>
          </li>
          <div className="h-8" />
          <li>
            <strong>Komitmen AKSinergy untuk Transformasi Digital Rumah Sakit</strong>
            <p>Partisipasi AKSinergy di IKAMARS menegaskan komitmen perusahaan 
              dalam mendukung digitalisasi layanan kesehatan. Dengan pengalaman 
              di berbagai sektor, AKSinergy siap menjadi mitra strategis bagi rumah 
              sakit untuk menghadirkan layanan yang modern, efisien, dan berkelanjutan.</p>
          </li>
          <br /> <br />
        </ol>
      </div>
    )
  },
  {
    id: 3,
    title: "AKSinergy dan Lazismu PW Jawa Barat Dorong Smart Education di Sekolah Muhammadiyah Kota Bandung",
    excerpt: "AKSinergy berkomitmen menjadi mitra strategis bagi sekolah-sekolah di seluruh Indonesia dalam mengimplementasikan solusi Smart Education. Dengan pengalaman di sektor pendidikan, kesehatan, dan swasta, AKSinergy siap membantu sekolah mengintegrasikan teknologi untuk pembelajaran yang efektif, modern, dan berkelanjutan.",
    category: "News",
    date: "December 4, 2025",
    readTime: "6 min read",
    image: "/images/6.png",
    author: "Arda Karya Team",
    content: (
      <div>
        <strong>
          Bandung, 7 Agustus 2025 
        </strong>
        <p>
          Dalam upaya mendukung transformasi digital di dunia pendidikan, 
          PT Arda Karya Sinergy (AKSinergy) bekerja sama dengan Lazismu Pimpinan 
          Wilayah (PW) Jawa Barat yang dipimpin oleh Bapak Sani menggelar demo Smart 
          Education dengan peserta perwakilan dari tiga sekolah Muhammadiyah Kota Bandung, 
          yaitu SD Muhammadiyah 1 Kota Bandung, SMP Muhammadiyah 1 Kota Bandung, dan SMA 
          Muhammadiyah 3 Kota Bandung. Kegiatan ini bertujuan memperkenalkan teknologi 
          pendidikan modern kepada perwakilan guru dari masing-masing sekolah, sehingga 
          mereka dapat mengimplementasikan pembelajaran berbasis teknologi di kelas masing-masing.

        </p>
        <div className="h-8" />

        <strong>
          Memperkenalkan Teknologi Pendidikan Modern
        </strong>
        <p>
          Dalam demo Smart Education ini, AKSinergy menampilkan perangkat innovative 
          yaitu Interactive Flat Panel (IFP): papan interaktif untuk pembelajaran yang 
          lebih menarik dan kolaboratif. Teknologi ini dirancang untuk mempermudah 
          guru menyampaikan materi serta meningkatkan keterlibatan peserta didik 
          dalam kegiatan belajar mengajar.

        </p>
        <div className="h-8" />

        <strong>
          Sinergi AKSinergy dan Lazismu PW Jawa Barat
        </strong>
        <p>
          Kegiatan ini dihadiri langsung oleh Bapak Sani, Ketua Lazismu
          PW Jawa Barat, yang memberikan dukungan penuh terhadap inisiatif ini. 
          Menurut beliau, penerapan teknologi di sekolah Muhammadiyah merupakan 
          langkah penting untuk mempersiapkan generasi yang adaptif terhadap perkembangan zaman.
          Kolaborasi antara AKSinergy dan Lazismu menjadi bukti nyata bahwa kemajuan pendidikan 
          membutuhkan kerja sama berbagai pihak, termasuk sektor swasta dan organisasi sosial.

        </p>
        <div className="h-8" />

        <strong>
          Manfaat Nyata untuk Guru Sekolah Muhammadiyah
        </strong>
        <p>
          Melalui kegiatan ini, perwakilan guru mendapatkan kesempatan untuk 
          mencoba langsung fitur-fitur teknologi pembelajaran. Penerapan Smart
          Education diharapkan mampu:
        </p>
        <p>•	Membantu guru merancang metode mengajar yang lebih interaktif.</p>
        <p>•	Mempercepat adaptasi sekolah terhadap perkembangan teknologi.</p>
        <p>•	Meningkatkan kualitas pembelajaran di sekolah Muhammadiyah di era digital.</p>
        <div className="h-8" />

        <strong>Komitmen AKSinergy untuk Dunia Pendidikan</strong>
        <p>AKSinergy berkomitmen menjadi mitra strategis bagi sekolah-sekolah 
          di seluruh Indonesia dalam mengimplementasikan solusi Smart Education. 
          Dengan pengalaman di sektor pendidikan, kesehatan, dan swasta, AKSinergy 
          siap membantu sekolah mengintegrasikan teknologi untuk pembelajaran yang efektif, 
          modern, dan berkelanjutan.</p>
      </div>
    )
  },
  {
    id: 4,
    title: "Kolaborasi AKSinergy dan IAMARSI untuk Akselerasi Transformasi Digital Rumah Sakit",
    excerpt: "Transformasi digital rumah sakit menjadi salah satu fokus utama dalam meningkatkan kualitas layanan kesehatan di Indonesia. Dalam rangka mewujudkan hal tersebut, PT Arda Karya Sinergy (AKSinergy) berkolaborasi dengan Ikatan Ahli Manajemen Rumah Sakit Indonesia (IAMARSI) melalui partisipasi di acara bertema “Penguatan Strategi Bisnis Rumah Sakit di Era Digital”.",
    category: "News",
    date: "December 4, 2025",
    readTime: "6 min read",
    image: "/images/5.png",
    author: "Arda Karya Team",
    content: (
      <div>
        <strong>
          Bandung, 2 Agustus 2025 
        </strong>
        <p>
          Transformasi digital rumah sakit menjadi salah satu fokus utama 
          dalam meningkatkan kualitas layanan kesehatan di Indonesia. 
          Dalam rangka mewujudkan hal tersebut, PT Arda Karya Sinergy (AKSinergy) 
          berkolaborasi dengan Ikatan Ahli Manajemen Rumah Sakit Indonesia (IAMARSI) 
          melalui partisipasi di acara bertema “Penguatan Strategi Bisnis Rumah Sakit 
          di Era Digital”.

        </p>
        <div className="h-8" />

        <strong>
          Mendukung Transformasi Digital Rumah Sakit
        </strong>
        <p>
         Sebagai perusahaan penyedia teknologi smart hospital, 
         AKSinergy memperkenalkan berbagai solusi inovatif, antara lain:

        </p>
        <p>
          •	Digital Signage Rumah Sakit untuk menampilkan informasi kesehatan, jadwal pelayanan, dan kampanye edukasi secara real-time.
        </p>
        <p>•	Interactive Flat Panel yang mempermudah tenaga medis dan manajemen rumah sakit dalam edukasi pasien dan presentasi internal.</p>
        <p>•	Smart Kiosk yang membantu proses registrasi pasien secara mandiri dan cepat.</p>
        <p>•	Videotron & Video Wall untuk komunikasi visual skala besar di area publik rumah sakit.</p>
        <div className="h-4" />

        <p>Seluruh teknologi ini dirancang untuk membantu rumah sakit meningkatkan efisiensi 
          operasional, memperkuat citra brand, dan menciptakan pengalaman yang lebih 
          baik bagi pasien.</p>

          <div className="h-8" />

        <strong>
          Manfaat Digital Signage dan Smart Hospital
        </strong>
        <p>
          Pemanfaatan digital signage di rumah sakit tidak hanya mempercepat 
          penyebaran informasi, tetapi juga membuka peluang bagi rumah sakit 
          untuk mendapatkan pendapatan tambahan melalui pengelolaan slot iklan. 
          Selain itu, teknologi ini mendukung terciptanya lingkungan pelayanan 
          yang modern dan mampu menjangkau pasien dengan informasi yang tepat waktu dan relevan.

        </p>
        <div className="h-8" />

        <strong>
          Komitmen AKSinergy untuk Sektor Kesehatan
        </strong>
        <p>
          AKSinergy berkomitmen menjadi mitra strategis 
          bagi rumah sakit dalam perjalanan transformasi digital. 
          Dengan pengalaman dan jaringan yang luas di sektor kesehatan, pendidikan, 
          dan swasta, AKSinergy terus mengembangkan solusi teknologi yang relevan, 
          terintegrasi, dan memberikan dampak positif bagi pelayanan kesehatan.
        </p>
      
        <div className="h-8" />

        
      </div>
    )
  }
];
