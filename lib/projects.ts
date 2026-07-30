export type ProjectCategory = "website" | "mobile" | "uiux";

export interface Project {
  slug: string;
  title: string;
  categories: ProjectCategory[]; 
  description: string;
  longDescription: string[];
  image: string;
  tools: string[]; 
  viewDesignUrl?: string; 
}

export const PROJECTS: Project[] = [
  {
    slug: "fikcare",
    title: "FIK CARE",
    categories: ["website"],
    description: "FIK-CARE sistem pengaduan berbasis web untuk mahasiswa Fakultas Ilmu Komputer Universitas Jember",
    longDescription: [
      "FIK-CARE merupakan sebuah aplikasi pengaduan berbasis web yang dirancang untuk memfasilitasi mahasiswa Fakultas Ilmu Komputer Universitas Jember dalam menyampaikan aspirasi, keluhan, ataupun laporan terkait layanan dan fasilitas kampus. Aplikasi ini memberikan kemudahan bagi mahasiswa untuk membuat laporan secara daring, memantau perkembangan status laporan mereka, serta mengakses informasi profil pribadi. Dengan tampilan antarmuka yang sederhana dan responsif, FIK-CARE bertujuan menciptakan pengalaman pelaporan yang lebih cepat, efisien, dan terkoordinasi."
    ],
    image: "/projects/fikcare.png",
    tools: ["Laravel", "PHP"],
    viewDesignUrl: "https://dribbble.com/shots/27607376-FIK-CARE-1",
  },
  {
    slug: "nogosari",
    title: "Website Nogosari",
    categories: ["website"],
    description: "Website Desa Nogosari sistem monitoring dan peringantan dini real time berbasis IoT",
    longDescription: [
      "SI-Tanggap merupakan sistem monitoring kondisi lingkungan desa secara real-time melalui sensor IoT untuk mendeteksi potensi bencana lebih awal. Sistem ini mencakup pemantauan ketinggian air sungai, kondisi cuaca, dan kualitas udara untuk memberikan peringatan dini yang akurat bagi seluruh warga desa."
    ],
    image: "/projects/nogosari.png",
    tools: ["React", "Next.js", "Figma", "Node.js"],
    viewDesignUrl: "https://dribbble.com/shots/27606826-Website-Desa-Nogosari",
  },
  {
    slug: "sikandang",
    title: "SiKandang",
    categories: ["mobile", "uiux"],
    description: "Aplikasi Mobile Berbasis IOT Untuk Monitoring Kesehatan Dan Manajemen Peternakan Ayam",
    longDescription: [
      "SiKandang adalah aplikasi mobile berbasis Internet of Things (IoT) yang dirancang untuk membantu peternak ayam dalam memonitor kesehatan ternak dan mengelola manajemen peternakan secara digital. Aplikasi ini hadir sebagai solusi atas permasalahan di peternakan skala menengah, di mana pemantauan kondisi lingkungan seperti suhu, kelembapan, dan kadar amonia, serta pencatatan data operasional sering kali masih dilakukan secara manual dan tidak efisien. Dengan mengintegrasikan perangkat sensor IoT, aplikasi ini memungkinkan peternak untuk memantau kondisi kandang secara real-time dan akurat melalui perangkat seluler mereka.",
      "Selain fitur pemantauan, SiKandang juga menyediakan manajemen pakan otomatis dan sistem pencatatan data siklus ternak yang terintegrasi untuk meminimalisir kesalahan manusia (human error). Aplikasi ini bertujuan menjaga konsistensi jadwal pakan serta mendukung peternak dalam pengambilan keputusan strategis berdasarkan data yang valid dan terdokumentasi dengan baik. Melalui tampilan yang sederhana dan sistem yang terorganisir, SiKandang membantu mengubah proses pengelolaan peternakan menjadi lebih proaktif guna mengoptimalkan produktivitas hasil panen dan menekan risiko kerugian."
    ],
    image: "/projects/sikandang.png",
    tools: ["Figma", "Flutter"], 
    viewDesignUrl: "https://www.figma.com/proto/xBG75Pf52X4KBxz8RxNfO1/UIUX-SiKandang---Kel-5?node-id=981-7988&t=QNeLlZf5g62BXWi3-0&scaling=scale-down&content-scaling=fixed&page-id=584%3A6638&starting-point-node-id=981%3A7988",
  },
  {
    slug: "simogura",
    title: "SimoGura",
    categories: ["mobile", "uiux"], 
    description: "SmartFish Farm Internet of Things (IoT) untuk Monitoring Kualitas Air dan Ketinggian Air pada Budidaya Ikan Gurame.",
    longDescription: [
        "SIMOGURA (SmartFish Farm Internet of Things untuk Monitoring Kualitas Air dan Ketinggian Air pada Budidaya Ikan Gurame) adalah sistem berbasis aplikasi mobile yang terintegrasi dengan perangkat IoT untuk membantu pengelolaan budidaya ikan gurame. Fungsi utamanya adalah menggantikan proses pemantauan manual yang kurang efisien dengan sistem digital yang otomatis. Sistem ini memantau parameter kualitas air seperti suhu, pH, dan ketinggian air secara real-time.",
        "Fitur-fitur utama SIMOGURA meliputi: Monitoring Real-Time untuk memberikan data suhu, pH, dan ketinggian air kolam secara langsung; serta Notifikasi Otomatis untuk memberikan peringatan cepat kepada admin atau petugas lapangan jika terjadi kondisi air yang tidak normal, sehingga penanganan dapat dilakukan dengan segera.",
        "Sistem ini juga dilengkapi fitur Manajemen Data & Historis yang memungkinkan pengelolaan data kolam dan pencatatan riwayat kondisi air untuk analisis produktivitas serta pengambilan keputusan berbasis data. Dengan SIMOGURA, diharapkan risiko kematian ikan dapat ditekan dan efisiensi operasional BUMDes Lestari Desa Rowokangkung dapat meningkat."
    ],
    image: "/projects/simogura.png",
    tools: ["Figma", "Flutter", "ESP32", "supabase", "MQTT"], 
    viewDesignUrl: "https://dribbble.com/shots/27543443-SimoGura-1", 
  },
  {
    slug: "aduinjember",
    title: "Aduin Jember",
    categories: ["mobile", "uiux"], 
    description: "Aduin Jember : Solusi Pelaporan Digital Masyarakat Jember untuk Transformasi Smart City Jember dengan Integrasi Kamera, dan Maps API",
    longDescription: [
        "Aduin Jember adalah aplikasi pengaduan publik berbasis mobile yang dirancang untuk memfasilitasi warga Kabupaten Jember dalam melaporkan permasalahan infrastruktur dan layanan sosial secara praktis dan transparan. Dikembangkan menggunakan framework Flutter dengan backend Supabase, aplikasi ini bertujuan mendukung transformasi Smart City di Jember melalui digitalisasi layanan publik, sehingga partisipasi masyarakat dalam memberikan laporan terkait kondisi lingkungan sekitar menjadi lebih cepat dan akurat.",
        "Aplikasi ini dilengkapi dengan tiga fitur utama untuk mendukung fungsinya: \"Sambat\" yang memungkinkan pelaporan masalah dengan integrasi kamera untuk bukti visual serta geotagging otomatis untuk lokasi, \"Woro-Woro\" sebagai pusat informasi satu pintu untuk pengumuman resmi dari instansi terkait, dan \"Gawat\" yang berfungsi sebagai tombol darurat untuk penanganan cepat situasi mendesak seperti bencana atau tindak kriminal.",
        "Dengan integrasi teknologi tersebut, Aduin Jember diharapkan dapat meminimalisir laporan tidak valid dan membantu pemerintah daerah dalam memberikan respons yang lebih efektif terhadap kebutuhan masyarakat."
    ],
    image: "/projects/aduinjember.png",
    tools: ["Figma" , "Flutter", "supabase", "Maps API", "Camera API"], 
    viewDesignUrl: "https://dribbble.com/shots/27543576-Aduin-Jember-1", 
  },
  {
    slug: "travelbest",
    title: "Travel Best",
    categories:  ["uiux", "website"],
    description: "TRAVELBEST: SISTEM INFORMASI PEMESANAN DAN MANAJEMEN TRIP WISATA BESTTRIP.BWI",
    longDescription: [
    "TravelBest adalah sistem informasi yang dirancang khusus sebagai solusi bagi Besttrip.Bwi dalam mengelola pemesanan dan manajemen trip wisata di area Banyuwangi. Aplikasi ini hadir untuk mengatasi kendala operasional yang sebelumnya dilakukan secara manual, seperti ketidakefisienan, risiko kehilangan data, serta kesulitan dalam memantau status pemesanan. Dengan sistem yang terintegrasi, TravelBest membantu penyedia layanan dalam mencatat, mengelola, serta memantau seluruh aktivitas pemesanan secara akurat dan efisien.",
    "Secara fungsional, aplikasi ini menyederhanakan proses administrasi dengan fitur-fitur seperti pengaturan jadwal, pengelolaan kuota peserta, dan informasi paket wisata yang terstruktur. Bagi pelanggan, TravelBest memberikan kemudahan dalam melakukan pemesanan secara digital dan transparan, sekaligus memungkinkan mereka untuk melihat riwayat transaksi. Melalui transformasi digital ini, diharapkan operasional bisnis wisata menjadi lebih profesional, pelayanan kepada wisatawan menjadi lebih cepat, dan data tersimpan dengan lebih aman."
    ],
    image: "/projects/travelbest.png",
    tools: ["Figma"],
    viewDesignUrl: "https://dribbble.com/shots/27543451-Travel-Best-1", // Menggunakan format array
  },
  {
    slug: "jaloka",
    title: "Jñānaloka",
    categories:  ["uiux", "website"],
    description: "JALOKA (Jñānaloka atau dunia pengetahuan) adalah sebuah aplikasi perpustakaan sekolah yang dirancang untuk mendigitalisasi proses peminjaman buku.",
    longDescription: [
    "JALOKA (Jñānaloka atau dunia pengetahuan) adalah sebuah aplikasi perpustakaan sekolah yang dirancang untuk mendigitalisasi dan menyederhanakan proses peminjaman buku. Aplikasi ini hadir sebagai solusi atas kendala sistem peminjaman manual yang sering kali tidak efisien, seperti antrean panjang, ketidakakuratan pencatatan data, serta kesulitan dalam memantau ketersediaan buku.",
    "Dengan JALOKA, siswa dapat mengakses katalog buku, melihat ketersediaan stok secara real-time, dan melakukan proses peminjaman melalui perangkat mereka sendiri kapan saja dan di mana saja. Sistem ini juga memfasilitasi manajemen perpustakaan yang lebih terstruktur bagi pustakawan, serta menyediakan akses khusus bagi staf kurikulum, sehingga seluruh proses administrasi mulai dari peminjaman hingga pengembalian menjadi lebih tertib dan efisien."
    ],
    image: "/projects/jaloka.png",
    tools: ["Figma", "C#", "Windows Forms", "MySQL"],
    viewDesignUrl: "https://dribbble.com/shots/27543453-Jaloka-JNANALOKA-1", // Menggunakan format array
  },

];

export const CATEGORIES: { label: string; value: "all" | ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Website", value: "website" },
  { label: "Mobile", value: "mobile" },
  { label: "UI/UX", value: "uiux" },
];