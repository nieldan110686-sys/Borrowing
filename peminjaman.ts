import { sql } from '@vercel/postgres';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nama_peminjam, jumlah_pinjaman, mata_uang, tingkat_bunga } = body;

    if (!nama_peminjam || !jumlah_pinjaman || !mata_uang || !tingkat_bunga) {
      return new Response(JSON.stringify({ error: 'Data tidak lengkap' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await sql`
      INSERT INTO pinjaman (nama_peminjam, jumlah_pinjaman, mata_uang, tingkat_bunga, tanggal_pinjaman)
      VALUES (${nama_peminjam}, ${jumlah_pinjaman}, ${mata_uang}, ${tingkat_bunga}, ${new Date().toISOString().split('T')[0]})
    `;

    return new Response(JSON.stringify({ success: true, message: 'Pinjaman berhasil ditambahkan.' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Failed to add loan:", error);
    return new Response(JSON.stringify({ error: 'Gagal menambahkan pinjaman' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}