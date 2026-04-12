import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Maulidan", univ: "Universitas Nusa Putra", text: "Skripsi selesai tepat waktu, revisi cepat, dan hasilnya memuaskan banget! Recommended!", rating: 5 },
  { name: "Maula R.", univ: "Universitas Lampung", text: "Awalnya ragu, tapi hasilnya bener-bener bagus. Anti plagiat dan penjelasannya detail.", rating: 5 },
  { name: "Arjuna", univ: "UIN Sunan Ampel", text: "Tugas PPT dan makalah dikerjain cepet, rapih, dan harganya worth it. Pasti repeat order!", rating: 5 },
  { name: "Nicholas", univ: "Universitas Indonesia", text: "Bimbingan online-nya sangat membantu, bisa diskusi bebas dan solusinya on point.", rating: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimoni" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-heading font-black text-center mb-12"
        >
          Apa Kata <span className="text-gradient-yellow">Mereka</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.12 }}
              className="glass-card hover-lift p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-heading font-bold text-sm text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.univ}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
