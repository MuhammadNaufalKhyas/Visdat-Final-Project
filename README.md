# Dashboard Kesejahteraan Pekerja Indonesia
> Sebuah dashboard interaktif untuk memvisualisasikan data Upah Minimum Provinsi (UMP) dan rata-rata upah per jam di Indonesia menggunakan data riil dari BPS dan Kemnaker periode 2020-2023.

Demo Live: https://visdat-final-project-phi.vercel.app/

## Isi Dashboard
* **KPI Cards (Key Performance Indicator)**: Menampilkan rata-rata UMP Nasional, Provinsi dengan UMP tertinggi, dan Provinsi dengan UMP terendah secara dinamis sesuai tahun yang dipilih.
* **Chart 1: Bar Chart**: Perbandingan nilai UMP (Rupiah) atau Rata-rata Upah per Jam dari 10 provinsi secara penuh berdasarkan filter tahun yang aktif.
* **Chart 2: Line Chart**: Tren perkembangan UMP dari tahun 2020 hingga 2023 di berbagai provinsi secara dinamis yang dapat dipilih atau difilter daerahnya secara kustom oleh pengguna.
* **Chart 3: Doughnut Chart**: Distribusi proporsi rata-rata pengeluaran bulanan per kapita pekerja (Pengeluaran Pangan/Makanan vs Non-Makanan) yang bergerak dinamis tiap tahunnya.
* **Chart 4: Scatter Plot**: Analisis hubungan/korelasi antara besaran nilai UMP dengan rata-rata upah per jam di berbagai provinsi secara dinamis berbasis tahun yang dipilih.

### Fitur Interaktif & Animasi
* **Fitur Interaktif**: 
  * *Interactive Tooltip*: Menampilkan detail nilai data, nama provinsi, dan satuan (Rp / %) saat kursor diarahkan (*hover*) ke elemen grafik dengan mode indeks vertikal pada grafik tren.
  * *Filter Dropdown Tahun*: Mengubah data pada KPI, Bar Chart, Doughnut Chart, dan Scatter Plot secara otomatis berdasarkan tahun yang dipilih (2020-2023).
  * *Toggle Button Mode*: Mengubah visualisasi Bar Chart secara dinamis antara mode "UMP (Rp)" dan "Rata-rata Upah/Jam".
  * *Filter Checkbox Daerah (Khusus Tren)*: Memungkinkan pengguna mencentang atau memilih provinsi tertentu saja untuk ditampilkan garis tren perkembangannya secara kustom pada Line Chart.
* **Animasi**:
  * *Entrance Animation*: Efek animasi bawaan Chart.js saat grafik pertama kali dimuat atau diperbarui.
  * *Count-up Number*: Angka pada KPI Card bergerak naik dari 0 hingga nilai akhir saat halaman dibuka atau filter tahun diubah.
  * *CSS Fade-in Slide Up*: Elemen kontainer muncul secara bertahap menggunakan `@keyframes` CSS untuk estetika modern yang halus.

## Sumber Data
* **Nama Dataset**: Dataset Kesejahteraan Pekerja Indonesia (WowEvan) — Diolah dari data riil Badan Pusat Statistik (BPS) & Kementerian Ketenagakerjaan (Kemnaker) 2020-2023.
* **URL Sumber**: [Kaggle Dataset - Kesejahteraan Pekerja Indonesia](https://www.kaggle.com/datasets/wowevan/dataset-kesejahteraan-pekerja-indonesia)

## Cara Jalankan di Lokal
1. Pastikan Anda telah mengunduh semua berkas proyek ini.
2. Buka berkas `index.html` secara langsung menggunakan browser pilihan Anda, atau gunakan ekstensi *Live Server* di VS Code untuk pengalaman pengembangan yang lebih baik.

## Teknologi
* HTML5 & CSS3 (Desain bertema *Galaxy Neon Grid*)
* JavaScript (ES6+ dengan manipulasi DOM dan logika sinkronisasi state)
* Chart.js v4.4.0 (Melalui CDN)
* Vercel (Platform Deployment)

## Anggota Kelompok
* Siti Inaya Shavarina - 103012300030
* Dyesta Rizka Amalia - 103012300095
* Nasywa Kayana Paramesti - 103012300352
* Muhammad Naufal K - 103012300433
* M Rifqi Nauval Nibros - 103012330482
