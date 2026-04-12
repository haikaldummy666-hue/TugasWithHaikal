import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Apakah dijamin aman dan rahasia?", a: "100% rahasia. Kami tidak pernah membagikan data klien ke siapapun. Semua komunikasi hanya melalui WhatsApp pribadi." },
  { q: "Berapa lama pengerjaan tugas?", a: "Tergantung jenis dan tingkat kesulitan. Tugas biasa 1-3 hari, skripsi per BAB 3-7 hari. Bisa request urgent dengan biaya tambahan." },
  { q: "Apakah ada garansi revisi?", a: "Ya! Kami memberikan revisi gratis hingga tugas sesuai dengan brief yang diberikan. Revisi minor gratis, revisi mayor ada biaya tambahan." },
  { q: "Bagaimana sistem pembayaran?", a: "Pembayaran via transfer bank. Untuk tugas biasa bayar di muka, untuk skripsi bisa DP 50% di awal dan pelunasan saat selesai." },
  { q: "Apakah hasil tugas anti plagiarisme?", a: "Ya, semua tugas kami cek plagiarisme. Untuk skripsi bisa request cek Turnitin dengan biaya tambahan Rp 50.000." },
  { q: "Bisa konsultasi dulu sebelum pesan?", a: "Tentu! Chat kami di WhatsApp untuk konsultasi gratis. Kami akan bantu estimasi harga dan waktu pengerjaan." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-heading font-black text-center mb-12"
        >
          FAQ
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="font-medium text-sm text-foreground">{f.q}</span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-4"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
