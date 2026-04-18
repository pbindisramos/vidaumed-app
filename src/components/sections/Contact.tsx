"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { z } from "zod";
import { MessageCircle, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { slideInLeft, slideInRight, viewportConfig } from "@/lib/animations";

const schema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  email: z.string().email("Correo inválido"),
  message: z.string().min(10, "Escribe al menos 10 caracteres"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  {
    icon: Phone,
    label: "+56 9 618 61768",
    href: "https://wa.me/56961861768",
  },
  {
    icon: Mail,
    label: "vidaumed@gmail.com",
    href: "mailto:vidaumed@gmail.com",
  },
  {
    icon: MapPin,
    label: "Temuco, Chile",
    href: null,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: standardSchemaResolver(schema) });

  function onSubmit(data: FormData) {
    const msg = `Hola, soy ${data.name}.\n${data.message}\nEmail: ${data.email}`;
    window.open(buildWhatsAppUrl(msg), "_blank");
    setSent(true);
  }

  return (
    <SectionWrapper background="teal" id="contacto" animate={false}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className="inline-block text-teal-300 text-xs font-bold tracking-widest uppercase mb-3">
            Hablemos
          </span>
          <h2 className="font-heading text-4xl font-bold text-white mb-6">
            ¿Lista para tu transformación?
          </h2>
          <p className="text-teal-100/80 leading-relaxed mb-10 max-w-sm">
            Agenda tu evaluación gratuita con la Dra. Vidaurre. Sin compromiso,
            solo una conversación honesta sobre lo que buscas y lo que podemos hacer por ti.
          </p>

          <a
            href={buildWhatsAppUrl("Hola, me gustaría agendar una evaluación gratuita")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold px-7 py-4 rounded-full transition-colors shadow-lg mb-10"
          >
            <MessageCircle size={20} />
            Agenda por WhatsApp
          </a>

          <ul className="flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 text-sm text-teal-200 hover:text-white transition-colors group"
                  >
                    <Icon size={15} className="shrink-0 text-teal-400 group-hover:text-teal-200" />
                    {label}
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-sm text-teal-300">
                    <Icon size={15} className="shrink-0 text-teal-400" />
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-teal-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-stone-800">
                  ¡Te esperamos!
                </h3>
                <p className="text-stone-500 text-sm max-w-xs">
                  Se abrió WhatsApp con tu mensaje. La Dra. Vidaurre te responderá pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                <h3 className="font-heading text-xl font-semibold text-stone-800">
                  Escríbenos
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                    Nombre
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Tu nombre completo"
                    className={cn(
                      "w-full border rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-400 outline-none transition-all",
                      errors.name
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-stone-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                    Correo electrónico
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="tu@correo.cl"
                    className={cn(
                      "w-full border rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-400 outline-none transition-all",
                      errors.email
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-stone-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                    )}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">
                    Mensaje
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="¿En qué te podemos ayudar?"
                    className={cn(
                      "w-full border rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-400 outline-none transition-all resize-none",
                      errors.message
                        ? "border-red-300 bg-red-50 focus:ring-2 focus:ring-red-200"
                        : "border-stone-200 focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
                    )}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="md" disabled={isSubmitting} icon={<Send size={16} />}>
                  {isSubmitting ? "Enviando..." : "Enviar por WhatsApp"}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
