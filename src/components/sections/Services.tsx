"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { services } from "@/data/services";
import { staggerContainer, cardVariant, fadeInUp, viewportConfig } from "@/lib/animations";

export default function Services() {
  return (
    <SectionWrapper background="white" id="servicios" animate={false}>
      <motion.div
        className="text-center mb-14"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <span className="inline-block text-teal-600 text-xs font-bold tracking-widest uppercase mb-3">
          Lo que ofrecemos
        </span>
        <h2 className="font-heading text-4xl font-bold text-stone-800 mb-4">
          Nuestros tratamientos
        </h2>
        <p className="text-stone-500 max-w-md mx-auto text-sm leading-relaxed">
          Cada procedimiento es personalizado según tu perfil y objetivos, siempre bajo
          supervisión médica certificada.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariant}
            whileHover={{ y: -6, boxShadow: "0 16px 40px 0 rgb(0 0 0 / 0.10)" }}
            transition={{ duration: 0.2 }}
            className="group bg-white rounded-2xl border border-stone-100 p-6 flex flex-col gap-4 shadow-[0_2px_12px_0_rgb(0,0,0,0.05)] cursor-default"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-50 group-hover:bg-teal-100 transition-colors flex items-center justify-center text-2xl">
              {service.icon}
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 text-[0.9rem] mb-1.5">
                {service.title}
              </h3>
              <p className="text-stone-500 text-xs leading-relaxed">
                {service.description}
              </p>
            </div>
            {service.benefits && (
              <ul className="mt-auto flex flex-col gap-1.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-teal-700">
                    <CheckCircle2 size={12} className="shrink-0 text-teal-500" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
