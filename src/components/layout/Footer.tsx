import Link from "next/link";
import { MapPin, Mail, Phone, Share2 } from "lucide-react";
import { navItems } from "@/data/navigation";
import { buildWhatsAppUrl } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-stone-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-0.5 mb-4">
              <span className="text-2xl font-bold text-teal-400 font-heading">Vida</span>
              <span className="text-2xl font-light text-white font-heading">umed</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 max-w-xs">
              Medicina estética con propósito. Resultados naturales bajo supervisión
              de la Dra. Teresa Vidaurre en Temuco, Chile.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-stone-500 hover:text-teal-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={buildWhatsAppUrl("Hola, me gustaría más información")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-500 hover:text-teal-400 transition-colors group"
                >
                  <Phone size={15} className="shrink-0 group-hover:text-teal-400" />
                  +56 9 618 61768
                </a>
              </li>
              <li>
                <a
                  href="mailto:vidaumed@gmail.com"
                  className="flex items-center gap-3 text-sm text-stone-500 hover:text-teal-400 transition-colors group"
                >
                  <Mail size={15} className="shrink-0 group-hover:text-teal-400" />
                  vidaumed@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/vidaumed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-stone-500 hover:text-teal-400 transition-colors group"
                >
                  <Share2 size={15} className="shrink-0 group-hover:text-teal-400" />
                  @vidaumed
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-stone-600">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                Temuco, Chile
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
          <p>© {new Date().getFullYear()} Vidaumed. Todos los derechos reservados.</p>
          <p>Dra. Teresa Vidaurre · Licencia SIS 434431</p>
        </div>
      </div>
    </footer>
  );
}
