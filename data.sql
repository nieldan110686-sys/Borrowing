CREATE TABLE pinjaman (
  id SERIAL PRIMARY KEY,
  nama_peminjam VARCHAR(255) NOT NULL,
  jumlah_pinjaman DECIMAL(15, 2) NOT NULL,
  mata_uang VARCHAR(3) NOT NULL CHECK (mata_uang IN ('IDR', 'THB')),
  tingkat_bunga DECIMAL(5, 2) NOT NULL,
  tanggal_pinjaman DATE NOT NULL
);

-- Menambahkan data contoh agar ada tampilan awal
INSERT INTO pinjaman (nama_peminjam, jumlah_pinjaman, mata_uang, tingkat_bunga, tanggal_pinjaman) VALUES
('Andi', 5000000.00, 'IDR', 10.00, '2023-10-26'),
('Budi', 15000.00, 'THB', 20.00, '2023-10-25'),
('Citra', 10000000.00, 'IDR', 10.00, '2023-10-20');