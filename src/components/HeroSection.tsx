import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import studentImg from "@/assets/student-stressed.png";

const tagline = "Gada waktu buat nugas? Mumet karena tugas? JOKI AJA\n• Hidup lebih tenang tanpa tugas";

const HeroSection = () => {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(tagline.slice(0, i + 1));
      i++;
      if (i >= tagline.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, []);

  const badges = ["Revisi Gratis", "Anti Plagiarisme", "Garansi Nilai", "100% Rahasia"];
  const levels = ["SMP / MTs", "SMA / SMK / MA", "Perguruan Tinggi"];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h1 className="text-5xl md:text-7xl font-heading font-black leading-none mb-6">
                <span className="text-gradient-yellow drop-shadow-lg">Jasa JOKI</span>
                <br />
                <span className="text-gradient-yellow drop-shadow-lg">TUGAS</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg mb-8 min-h-[4.5rem] font-body whitespace-pre-line">
                {typed}
                <span className="animate-pulse text-accent">|</span>
              </p>

              {/* Level banners */}
              <div className="flex flex-wrap gap-3 mb-8">
                {levels.map((lvl, i) => (
                  <motion.div
                    key={lvl}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="bg-background/80 border border-border px-5 py-2 font-heading text-sm font-bold text-foreground clip-arrow"
                    style={{ clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)" }}
                  >
                    {lvl}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="https://wa.me/6283808283542"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-heading font-black text-accent-foreground pulse-glow hover:brightness-110 transition"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.24l-.308-.184-2.87.852.852-2.87-.184-.308A8 8 0 1112 20z" />
                </svg>
                PESAN SEKARANG VIA WA
              </motion.a>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {badges.map((b, i) => (
                  <motion.span
                    key={b}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="glass-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    ✓ {b}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px]" />
              <img src={studentImg} alt="Stressed student illustration" width={400} height={400} className="relative z-10 float-animation" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
