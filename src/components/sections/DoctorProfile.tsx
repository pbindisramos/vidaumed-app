"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Microscope } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { slideInLeft, slideInRight, viewportConfig, fadeInUp, staggerContainer, cardVariant } from "@/lib/animations";
import { buildWhatsAppUrl } from "@/lib/utils";

const credentials = [
  { icon: GraduationCap, label: "Universidad del Desarrollo" },
  { icon: BadgeCheck, label: "Licencia SIS 434431" },
  { icon: Microscope, label: "Procedimientos mínimamente invasivos" },
];

export default function DoctorProfile() {
  return (
    <SectionWrapper background="light" id="nosotros" animate={false}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Avatar */}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="relative">
            <div className="w-72 h-72 lg:w-[360px] lg:h-[360px] rounded-[2rem] bg-gradient-to-br from-teal-200 via-teal-300 to-teal-500 flex items-center justify-center shadow-2xl overflow-hidden">
              {/* placeholder avatar */}
              <div className="flex flex-col items-center gap-3 text-teal-800">
                <div className="w-24 h-24 rounded-full bg-white/40 flex items-center justify-center text-5xl">
                  👩‍⚕️
                </div>
                <span className="text-sm font-semibold">Dra. Teresa Vidaurre</span>
              </div>
              {/* decorative ring */}
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20" />
            </div>

            {/* Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-3 border border-stone-100"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                <BadgeCheck size={18} className="text-teal-600" />
              </div>
              <div>
                <p className="text-xs text-stone-400">Licencia médica</p>
                <p className="text-sm font-bold text-stone-800">SIS 434431</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="inline-block text-teal-600 text-xs font-bold tracking-widest uppercase mb-3">
            Conócenos
          </span>
          <h2 className="font-heading text-4xl font-bold text-stone-800 mb-2">
            Dra. Teresa Vidaurre
          </h2>
          <p className="text-teal-600 font-medium mb-6">
            Cirujana · Universidad del Desarrollo
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            Con formación en cirugía y especialización en procedimientos mínimamente
            invasivos, la Dra. Vidaurre combina rigor médico con una mirada estética
            cuidadosa y personalizada para cada paciente.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Su enfoque integra salud y bienestar: cada tratamiento parte de una evaluación
            profunda para garantizar resultados seguros, naturales y duraderos.
          </p>

          {/* Credential chips */}
          <motion.ul
            className="flex flex-col gap-3 mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <motion.li
                  key={cred.label}
                  variants={cardVariant}
                  className="flex items-center gap-3 text-sm text-stone-700"
                >
                  <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-teal-700" />
                  </div>
                  {cred.label}
                </motion.li>
              );
            })}
          </motion.ul>

          <Button
            href={buildWhatsAppUrl("Hola, quisiera agendar una consulta gratuita")}
            size="md"
          >
            Consulta gratuita
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
