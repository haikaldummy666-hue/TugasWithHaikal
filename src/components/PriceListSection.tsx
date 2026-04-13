import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const prices = [
  { item: "Judul (Sampai ACC)", price: "Rp 600.000" },
  { item: "Bab 1 (Pendahuluan)", price: "Rp 650.000" },
  { item: "Bab 2 (Landasan Teori)", price: "Rp 650.000" },
  { item: "Bab 3 (Metodologi Penelitian)", price: "Rp 600.000" },
  { item: "Ambil &/Olah Data Kuantitatif", price: "Rp 950.000" },
  { item: "Ambil &/Olah Data Kualitatif", price: "Rp 1.050.000" },
  { item: "Bab 4 (Hasil & Pembahasan)", price: "Rp 1.350.000" },
  { item: "Bab 5 (Penutup)", price: "Rp 500.000" },
  { item: "Formatting", price: "Rp 150.000" },
  { item: "PPT Sidang", price: "Rp 200.000" },
  { item: "Artikel Jurnal (Mulai dari)", price: "Rp 150.000" },
  { item: "Makalah (Mulai dari)", price: "Rp 75.000" },
];

const PriceListSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="harga" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-4xl font-heading font-black text-center mb-2"
        >
          Price List <span className="text-gradient-yellow">Skripsi</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-center text-muted-foreground mb-10 text-sm"
        >
          Daftar Harga Satuan Layanan Kami
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 font-heading text-sm text-muted-foreground">Layanan</th>
                <th className="text-right px-6 py-4 font-heading text-sm text-muted-foreground">Harga</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                >
                  <td className="px-6 py-3 text-sm text-foreground">{p.item}</td>
                  <td className="px-6 py-3 text-sm font-bold text-accent text-right whitespace-nowrap">{p.price}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Extra info */}
          <div className="px-6 py-4 border-t border-border bg-secondary/20">
            <p className="text-sm font-bold text-primary mb-2">Tambahan (Opsional)</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Bahasa Inggris, Tesis S2, serta jurusan Informatika/Teknik/Kesehatan/Hubungan Internasional/Agri (dan lainnya) dikenakan biaya tambahan +35%.</li>
              <li>Harga di atas tidak termasuk pembuatan project (untuk bidang informatika dan lainnya), hanya penulisan skripsinya saja.</li>
              <li>Pengerjaan ekspres dikenakan biaya tambahan +15% untuk setiap hari yang dipercepat (maksimal dipercepat hingga 2x24 jam).</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-6 glass-card p-6 text-sm text-muted-foreground"
        >
          <p className="font-heading font-bold text-foreground mb-2 text-center">Disclaimer</p>
          <ul className="space-y-1">
            <li>Pembayaran DP dapat dilakukan terlebih dahulu.</li>
            <li>Semua layanan sudah termasuk garansi revisi sampai diterima, anti plagiarisme, bimbingan via chat & Google Meet, garansi refund, serta bonus lainnya termasuk Formatting untuk mempermudah proses penyusunan skripsi.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceListSection;
