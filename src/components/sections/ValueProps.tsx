"use client";

import { motion } from "framer-motion";
import { Stethoscope, Leaf, HeartHandshake } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { staggerContainer, cardVariant, fadeInUp, viewportConfig } from "@/lib/animations";

const props = [
  {
    icon: Stethoscope,
    title: "Médico certificado",
    description:
      "Todos los procedimientos son realizados por la Dra. Teresa Vidaurre, cirujana titulada de la Universidad del Desarrollo (Licencia SIS 434431).",
    color: "bg-teal-100 text-teal-700",
  },
  {
    icon: Leaf,
    title: "Resultados naturales",
    description:
      "Nuestra filosofía es realzar tu belleza sin alterar tu esencia. Cada tratamiento está diseñado para un resultado armónico y auténtico.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: HeartHandshake,
    title: "Seguimiento personalizado",
    description:
      "Te acompañamos antes, durante y después del tratamiento para asegurar los mejores resultados y resolver cada duda.",
    color: "bg-rose-100 text-rose-700",
  },
];

export default function ValueProps() {
  return (
    <SectionWrapper background="white" animate={false}>
      <motion.div
        className="text-center mb-14"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <span className="inline-block text-teal-600 text-xs font-bold tracking-widest uppercase mb-3">
          ¿Por qué elegirnos?
        </span>
        <h2 className="font-heading text-4xl font-bold text-stone-800">
          Medicina estética con propósito
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {props.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={cardVariant}
              className="group flex flex-col items-start p-8 rounded-3xl border border-stone-100 bg-stone-50 hover:bg-white hover:shadow-lg hover:border-stone-200 transition-all duration-300"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${item.color} mb-5 transition-transform group-hover:scale-110 duration-300`}>
                <Icon size={22} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-stone-800 mb-3">
                {item.title}
              </h3>
              <p className="text-stone-500 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
