import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const taskTypes = ["Pilihan Ganda", "Esai", "Makalah", "PPT", "Proposal", "Jurnal"];

const programs = [
  "Teknik Informatika", "Sistem Informasi", "Teknik Komputer", "Ilmu Komunikasi",
  "DKV", "Akuntansi", "Manajemen", "Bisnis", "Administrasi Bisnis", "Administrasi Publik",
  "Farmasi", "Ekonomi", "Biologi", "PGSD", "PAI", "Hubungan Internasional",
  "Hukum", "Ilmu Politik", "Sosiologi", "Fisika & Kimia",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  return (
    <section id="layanan" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-heading font-black text-center mb-4"
        >
          Layanan <span className="text-gradient-yellow">Lengkap</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          Semua jenis tugas akademik dari SMP hingga Perguruan Tinggi
        </motion.p>

        {/* Task types */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {taskTypes.map((t, i) => (
            <motion.div
              key={t}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              className="glass-card hover-lift px-6 py-3 font-heading font-bold text-sm text-foreground cursor-default"
            >
              {t}
            </motion.div>
          ))}
        </div>

        {/* School levels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8 text-center"
        >
          <p className="font-heading font-bold text-accent text-lg">SMK / SMA / MA — SEMUA JURUSAN</p>
        </motion.div>

        {/* Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass-card p-8"
        >
          <h3 className="font-heading font-bold text-lg mb-6 text-center">Program Studi yang Dilayani</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {programs.map((p, i) => (
              <motion.button
                key={p}
                custom={i}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                type="button"
                aria-pressed={activeProgram === p}
                data-active={activeProgram === p}
                onClick={() => setActiveProgram((cur) => (cur === p ? null : p))}
                className="w-full text-sm text-muted-foreground font-medium py-2 px-3 rounded-md bg-secondary/50 text-center select-none outline-none transform-gpu transition-[transform,box-shadow,background-color,color] duration-300 ease-out hover:bg-secondary/70 hover:text-foreground hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_0_1px_hsl(var(--accent)/0.30),0_10px_30px_-16px_hsl(var(--accent)/0.55)] focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background data-[active=true]:bg-accent/15 data-[active=true]:text-foreground data-[active=true]:-translate-y-1 data-[active=true]:scale-[1.05] data-[active=true]:shadow-[0_0_0_1px_hsl(var(--accent)/0.45),0_18px_45px_-18px_hsl(var(--accent)/0.75)]"
              >
                {p}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
