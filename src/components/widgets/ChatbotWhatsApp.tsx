"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowLeft, Send } from "lucide-react";
import { services } from "@/data/services";
import { buildWhatsAppUrl } from "@/lib/utils";

type Step = "closed" | "service" | "name" | "time";

export default function ChatbotWhatsApp() {
  const [step, setStep] = useState<Step>("closed");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  const reset = useCallback(() => {
    setStep("closed");
    setService("");
    setName("");
    setTime("");
  }, []);

  useEffect(() => {
    if (step === "closed") return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") reset();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [step, reset]);

  const sendToWhatsApp = () => {
    const msg =
      `Hola Dra. Vidaurre, soy ${name}. Me interesa una consulta sobre *${service}*.` +
      (time.trim() ? ` Horario preferido: ${time.trim()}.` : "");
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    reset();
  };

  const back = () => {
    if (step === "name") setStep("service");
    else if (step === "time") setStep("name");
  };

  const isOpen = step !== "closed";

  return (
    <>
      <motion.button
        type="button"
        onClick={() => (isOpen ? reset() : setStep("service"))}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de WhatsApp"}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-900/30 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] sm:w-[380px] max-h-[calc(100vh-8rem)] flex flex-col bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden"
            role="dialog"
            aria-label="Chat de Vidaumed"
          >
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4 flex items-center gap-3">
              {step !== "service" && (
                <button
                  type="button"
                  onClick={back}
                  aria-label="Atrás"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <ArrowLeft size={18} />
                </button>
              )}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm">Vidaumed</p>
                <p className="text-xs text-teal-100/90">Te respondemos por WhatsApp</p>
              </div>
            </div>

            <div className="p-4 overflow-y-auto">
              <div className="bg-stone-100 rounded-2xl rounded-tl-sm p-3 mb-4 text-sm text-stone-700 max-w-[90%]">
                {step === "service" && "Hola, ¿qué tratamiento te interesa?"}
                {step === "name" && "Genial. ¿Cuál es tu nombre?"}
                {step === "time" &&
                  `Perfecto, ${name}. ¿Tenés algún horario preferido? (opcional)`}
              </div>

              {step === "service" && (
                <div className="grid grid-cols-2 gap-2">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setService(s.title);
                        setStep("name");
                      }}
                      className="text-xs text-left px-3 py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-medium transition-colors"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              )}

              {step === "name" && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (name.trim().length >= 2) setStep("time");
                  }}
                  className="space-y-3"
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre"
                    autoFocus
                    maxLength={60}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={name.trim().length < 2}
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 disabled:bg-stone-300 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    Continuar
                  </button>
                </form>
              )}

              {step === "time" && (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Ej. mañanas, tardes, sábado..."
                    autoFocus
                    maxLength={80}
                    onKeyDown={(e) => e.key === "Enter" && sendToWhatsApp()}
                    className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={sendToWhatsApp}
                    className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Continuar en WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={sendToWhatsApp}
                    className="w-full text-xs text-stone-500 hover:text-stone-700 transition-colors"
                  >
                    Saltar y enviar
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
