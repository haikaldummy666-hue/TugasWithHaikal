import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, GraduationCap, MessageCircle, BarChart3, Lightbulb, Sparkles } from "lucide-react";

const offers = [
  { icon: GraduationCap, title: "Skripsi Teknik dan Non Teknik" },
  { icon: BookOpen, title: "Tugas Mata Kuliah Teknik dan Non Teknik" },
  { icon: MessageCircle, title: "Diskusi Tentang Tugas Kuliah / Skripsi" },
  { icon: BarChart3, title: "Cari Data / Analisis Data" },
  { icon: Lightbulb, title: "Diskusi Tentang Apapun / Cari Ide" },
  { icon: Sparkles, title: "Apapun yang berhubungan dengan akademik/kuliah" },
];

const NewOfferSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block glass-card glow-border px-6 py-2 text-sm font-bold text-accent mb-4">
            NEW OFFER
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-black">
            Open Bimbingan <span className="text-gradient-blue">Online / Offline</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((o, i) => {
            const Icon = o.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card hover-lift p-6 flex items-start gap-4 cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground text-sm leading-relaxed">{o.title}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewOfferSection;
