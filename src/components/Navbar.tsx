import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = ["Layanan", "Harga", "Cara Pesan", "Testimoni", "FAQ"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src="/twh-logo.png?v=1" alt="TWH Logo" width={40} height={40} className="rounded-md" />
          <span className="font-heading text-lg font-black tracking-tight text-foreground">
            TUGAS<span className="text-gradient-blue">WITH</span>HAIKAL
          </span>
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
                className="relative text-sm font-medium text-muted-foreground hover:text-accent transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/6283808283542"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:brightness-110 transition"
            >
              Hubungi Kami
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card md:hidden px-4 pb-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(" ", "-"))}
              className="block w-full text-left py-2 text-muted-foreground hover:text-accent transition"
            >
              {item}
            </button>
          ))}
          <a
            href="https://wa.me/6283808283542"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg bg-accent px-4 py-2 text-center text-sm font-bold text-accent-foreground"
          >
            Hubungi Kami
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
