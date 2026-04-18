"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

const stats = [
  { value: "8+", label: "Tratamientos" },
  { value: "100%", label: "Médico certificado" },
  { value: "Gratis", label: "Primera evaluación" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-teal-950 via-teal-900 to-teal-800 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-teal-600/20 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-teal-400/15 blur-3xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          className="text-white"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="fill-teal-300 text-teal-300" />
              ))}
            </div>
            <span className="text-teal-300 text-sm font-medium">
              Medicina estética · Temuco, Chile
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-5xl lg:text-[3.75rem] font-bold leading-[1.1] mb-6"
          >
            Tu belleza,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">
              con respaldo
            </span>{" "}
            médico
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-teal-100/80 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Realizarse un tratamiento estético no es algo meramente superficial.
            En Vidaumed integramos salud, confianza y bienestar en cada procedimiento,
            con resultados naturales y seguimiento personalizado.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <Button
              href={buildWhatsAppUrl("Hola, me gustaría agendar una evaluación gratuita")}
              size="lg"
              variant="secondary"
              icon={<MessageCircle size={18} />}
            >
              Evaluación gratuita
            </Button>
            <Button
              href="#servicios"
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
              icon={<ArrowRight size={18} />}
            >
              Ver tratamientos
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap gap-6">
            {[
              "Médico certificado",
              "Resultados naturales",
              "Seguimiento post-tratamiento",
            ].map((text) => (
              <div key={text} className="flex items-center gap-2 text-sm text-teal-200">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: stats card */}
        <motion.div
          className="hidden lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center bg-white/10 rounded-2xl p-5 text-center"
                >
                  <span className="font-heading text-3xl font-bold text-teal-200 mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-teal-100/70 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <p className="text-teal-100 text-sm leading-relaxed italic">
                &ldquo;Mi filosofía es que cada persona merece un tratamiento diseñado
                exclusivamente para ella, con la seguridad y el respaldo de la medicina.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-500/40 flex items-center justify-center text-sm">
                  TV
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Dra. Teresa Vidaurre</p>
                  <p className="text-teal-300 text-xs">Cirujana · Univ. del Desarrollo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 72L1440 72L1440 36C1200 72 960 0 720 36C480 72 240 0 0 36L0 72Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
