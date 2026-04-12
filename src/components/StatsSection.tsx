import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Tugas Selesai" },
  { value: 120, suffix: "+", label: "Klien Puas" },
  { value: 50, suffix: "+", label: "Program Studi" },
  { value: 98, suffix: "%", label: "Tingkat Kepuasan" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-heading font-black text-gradient-yellow">
                <Counter target={s.value} suffix={s.suffix} inView={inView} />
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
