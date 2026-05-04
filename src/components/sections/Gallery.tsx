"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { staggerContainer, cardVariant, fadeInUp, viewportConfig } from "@/lib/animations";

const photos = [
  {
    src: "/instagram/01-doctora-tratamiento.jpg",
    alt: "Dra. Teresa Vidaurre aplicando un tratamiento Picolaser en consulta",
    label: "En consulta",
  },
  {
    src: "/instagram/02-equipo.jpg",
    alt: "Equipo médico de Vidaumed con sus diplomas de certificación",
    label: "Equipo certificado",
  },
  {
    src: "/instagram/03-botox-antes-despues.jpg",
    alt: "Comparativa antes y después de aplicación de toxina botulínica",
    label: "Resultados de Botox",
  },
  {
    src: "/instagram/04-dysport.jpg",
    alt: "Producto Dysport 500U, toxina botulínica utilizada en Vidaumed",
    label: "Productos certificados",
  },
];

export default function Gallery() {
  return (
    <SectionWrapper background="light" id="galeria" animate={false}>
      <motion.div
        className="text-center mb-14"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <span className="inline-block text-teal-600 text-xs font-bold tracking-widest uppercase mb-3">
          Síguenos en Instagram
        </span>
        <h2 className="font-heading text-4xl font-bold text-stone-800 mb-4">
          Nuestro día a día
        </h2>
        <p className="text-stone-500 max-w-md mx-auto text-sm leading-relaxed">
          Procedimientos reales, resultados reales. Conoce de cerca nuestro trabajo y
          la experiencia de quienes ya confiaron en nosotros.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {photos.map((photo) => (
          <motion.a
            key={photo.src}
            href="https://www.instagram.com/vidaumed/"
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariant}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200 shadow-[0_2px_12px_0_rgb(0,0,0,0.05)]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/0 to-stone-950/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium">{photo.label}</span>
              <Camera size={16} />
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        className="mt-10 text-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <a
          href="https://www.instagram.com/vidaumed/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 text-sm font-semibold transition-colors"
        >
          Ver más en @vidaumed
          <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
