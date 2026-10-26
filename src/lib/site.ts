// Data bisnis masih mengikuti mockup; verifikasi nomor, alamat, email, dan jam
// layanan bersama pemilik sebelum rilis.
export const site = {
  name: "Aksa Home",
  whatsappUrl: "https://wa.me/6281234567890",
  phoneDisplay: "0812-3456-7890",
  email: "beresdepok@gmail.com",
  address: "Jl. Anggrek Senja No. 18, Depok",
  hours: "Senin–Sabtu, 08.00–17.00 WIB",
  serviceArea: "Depok, Jawa Barat",
} as const;

export const navigation = [
  { label: "Layanan", href: "#layanan" },
  { label: "Area layanan", href: "#area" },
  { label: "Ulasan", href: "#ulasan" },
] as const;

export const services = [
  {
    title: "Cuci AC",
    description:
      "Untuk AC yang waktunya dibersihkan. Rawat filter, evaporator, dan unit secara berkala.",
    cta: "Tanya biaya cuci AC",
    image: "/images/service-cuci.webp",
    alt: "Dua teknisi memeriksa dan membersihkan unit AC di bengkel servis.",
  },
  {
    title: "Perbaikan AC",
    description:
      "Tidak dingin, bocor, atau bermasalah? Diskusikan gejalanya sebelum pengecekan.",
    cta: "Konsultasikan keluhan",
    image: "/images/service-perbaikan.webp",
    alt: "Obeng, tang, kabel, dan konektor untuk pekerjaan servis AC.",
  },
  {
    title: "Pasang & bongkar AC",
    description:
      "Pasang unit baru atau pindah lokasi AC. Diskusikan posisi unit dan kebutuhan material.",
    cta: "Tanya biaya pemasangan",
    image: "/images/service-pasang.webp",
    alt: "Unit outdoor AC terpasang pada dinding bangunan.",
  },
] as const;

export const reviews = [
  {
    quote:
      "AC kamar akhirnya dingin lagi. Teknisi menjelaskan masalahnya dengan jelas, jadi saya tahu apa yang perlu dikerjakan.",
    name: "Nadia R.",
    area: "Beji",
    preview: "Biayanya dibahas dulu.\nTidak bikin menebak.",
    previewName: "Arif P.",
  },
  {
    quote:
      "Sebelum dikerjakan, biaya dibahas dulu. Selesai cuci AC, alirannya terasa lebih enak dan area kerja dirapikan kembali.",
    name: "Arif P.",
    area: "Sukmajaya",
    preview: "Dari chat sampai beres,\nlebih praktis.",
    previewName: "Dina S.",
  },
  {
    quote:
      "Jadwal kunjungannya mudah diatur lewat WhatsApp. AC yang tadinya bocor sekarang bisa dipakai lagi dengan nyaman.",
    name: "Dina S.",
    area: "Cimanggis",
    preview: "Penjelasannya jelas.\nKamar nyaman lagi.",
    previewName: "Nadia R.",
  },
] as const;

export const faqs = [
  {
    question: "Berapa biaya servis AC?",
    answer:
      "Biaya bergantung pada kondisi unit dan pekerjaan yang diperlukan. Tanyakan biaya pengecekan, jasa, serta material sebelum menyetujui pekerjaan.",
  },
  {
    question: "Bisa menjadwalkan kunjungan kapan?",
    answer:
      "Sampaikan lokasi dan waktu yang Anda inginkan melalui WhatsApp. Jadwal kunjungan disepakati sesuai ketersediaan.",
  },
  {
    question: "AC tidak dingin, harus isi freon?",
    answer:
      "Belum tentu. Filter kotor, aliran udara, kebocoran, atau komponen lain juga bisa menjadi penyebab. Perlu pengecekan untuk mengetahui masalahnya.",
  },
  {
    question: "Apa yang perlu dikirim saat menghubungi?",
    answer:
      "Kirim keluhan, jumlah unit, serta lokasi di Depok. Jika ada, sertakan foto unit dan informasi merek atau kapasitas AC.",
  },
] as const;
