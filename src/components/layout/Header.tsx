"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { useUIStore } from "@/store/ui";
import { navItems } from "@/data/navigation";
import { buildWhatsAppUrl, cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Header() {
  const scrolled = useScrolled(20);
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transform-gpu transition-colors duration-300 ${
        scrolled || isMobileMenuOpen
          ? "bg-white shadow-sm border-b border-stone-100 md:bg-white/90 md:backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-24 md:h-20 pt-3 md:pt-0 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMobileMenu} aria-label="Vidaumed - Inicio">
          <Image
            src="/logo.png"
            alt="Vidaumed - Medicina Estética"
            width={300}
            height={98}
            priority
            style={{ width: "auto" }}
            className={cn(
              "h-12 md:h-14 object-contain",
              !scrolled && !isMobileMenuOpen && "brightness-0 invert"
            )}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors relative group",
                scrolled
                  ? "text-stone-600 hover:text-teal-600"
                  : "text-white hover:text-teal-200"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300",
                  scrolled ? "bg-teal-600" : "bg-white"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={buildWhatsAppUrl("Hola, me gustaría agendar una evaluación gratuita")}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled
                ? "text-stone-500 hover:text-teal-600"
                : "text-white/90 hover:text-white"
            )}
          >
            <Phone size={15} />
            +56 9 618 61768
          </a>
          <Button href="#contacto" size="sm">
            Agendar evaluación
          </Button>
        </div>

        {/* Mobile toggle */}
        <motion.button
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled || isMobileMenuOpen
              ? "text-stone-600 hover:bg-stone-100"
              : "text-white hover:bg-white/10"
          )}
          onClick={toggleMobileMenu}
          aria-label="Abrir menú"
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-stone-100"
          >
            <div className="px-4 py-5 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 px-3 rounded-lg text-stone-700 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-stone-100 mt-2">
                <Button
                  href="#contacto"
                  className="w-full"
                  onClick={closeMobileMenu}
                >
                  Agendar evaluación
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
