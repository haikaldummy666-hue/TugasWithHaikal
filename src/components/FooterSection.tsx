const FooterSection = () => (
  <footer className="py-16 border-t border-border">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/twh-logo.png?v=1" alt="TWH" width={36} height={36} loading="lazy" className="rounded-md" />
            <span className="font-heading text-lg font-black">TUGASWITHHAIKAL</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Jasa joki tugas terpercaya untuk SMP, SMA, hingga Perguruan Tinggi. Profesional, rahasia, dan bergaransi.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading font-bold text-sm mb-4">Menu</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Layanan", "Harga", "Cara Pesan", "Testimoni", "FAQ"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => document.getElementById(item.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-sm mb-4">Hubungi Kami</h4>
          <a
            href="https://wa.me/6283808283542"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline text-sm font-medium"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.24l-.308-.184-2.87.852.852-2.87-.184-.308A8 8 0 1112 20z" />
            </svg>
            0838 0828 3542
          </a>
          <p className="text-xs text-muted-foreground mt-4">Respon cepat • Setiap hari 08.00 - 22.00 WIB</p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TugasWithHaikal. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
