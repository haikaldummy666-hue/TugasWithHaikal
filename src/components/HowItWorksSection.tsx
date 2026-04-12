import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileText, CreditCard, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Hubungi via WA", desc: "Chat kami di WhatsApp, jelaskan detail tugas kamu." },
  { icon: FileText, title: "Kirim Detail Tugas", desc: "Kirim file, brief, atau instruksi tugas ke kami." },
  { icon: CreditCard, title: "Bayar & Proses", desc: "Setelah deal harga, bayar DP dan tugas mulai dikerjakan." },
  { icon: CheckCircle, title: "Terima Hasil", desc: "Tugas selesai, revisi gratis, dan kamu tinggal kumpulkan!" },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cara-pesan" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-heading font-black text-center mb-12"
        >
          Cara <span className="text-gradient-blue">Pesan</span>
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="glass-card hover-lift p-6 text-center relative"
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-heading font-black text-sm text-accent-foreground">
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
