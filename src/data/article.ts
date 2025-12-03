import article1Img from "../assets/images/1.jpg";
import article2Img from "../assets/images/2.jpg";
import article3Img from "../assets/images/3.jpg";

export interface BlogArticle {
  content: string;
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
    title: "Digital Signage AKS sudah aktif di stasiun Kertasono",
    excerpt: "Digital Signage AKS sudah aktif di stasiun Kertasono.",
    category: "News",
    date: "November 15, 2025",
    readTime: "5 min read",
    image: article1Img,
    author: "Arda Karya Team",
    content: `Digital Signage AKS sudah aktif di stasiun Kertasono.
Tim kami memastikan seluruh perangkat berjalan lancar dan siap digunakan oleh masyarakat.
Kami berharap ini meningkatkan pengalaman penumpang.`
  },
  {
    id: 2,
    title: "Digital Signage AKS sudah terpasang di berbagai titik di Indonesia",
    excerpt: "Digital Signage AKS sudah terpasang di berbagai titik di Indonesia.",
    category: "News",
    date: "November 10, 2025",
    readTime: "7 min read",
    image: article2Img,
    author: "Arda Karya Team",
    content: `Digital Signage AKS kini sudah terpasang di berbagai titik strategis di Indonesia.
Kami akan terus memperluas jangkauan demi kenyamanan pengguna.
Terima kasih atas dukungan semua pihak yang terlibat.`
  },
  {
    id: 3,
    title: "Update Fitur Terbaru di Digital Signage AKS",
    excerpt: "Fitur terbaru digital signage kini mendukung interaksi lebih baik.",
    category: "Updates",
    date: "December 1, 2025",
    readTime: "6 min read",
    image: article3Img,
    author: "Arda Karya Team",
    content: `Kami telah menambahkan fitur interaktif terbaru pada digital signage AKS.
Pengguna kini bisa melihat informasi real-time dan berinteraksi melalui layar sentuh.
Update ini akan tersedia di semua titik utama secara bertahap.`
  }
];
