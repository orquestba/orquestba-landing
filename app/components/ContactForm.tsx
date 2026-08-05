"use client";

import { useActionState, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Title from "./shared/Title";
import { sendContactEmail, type ContactState } from "../actions/contact";
import { staggerContainer as container, fadeUpItem as item } from "./shared/motion";

const inputBase =
  "w-full bg-white border rounded px-4 py-3 text-sm text-ink placeholder:text-ink-4 transition-colors focus:border-copper focus:outline-2 focus:outline-copper focus:-outline-offset-2";

const initialState: ContactState = {};

function FormContent({ onReset }: { onReset: () => void }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  const err = state.errors ?? {};

  if (state.success) {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 py-16 px-8 bg-white border border-rule rounded-xl">
        <CheckCircle2 className="text-copper" size={40} strokeWidth={1.5} />
        <h3 className="font-heading text-2xl text-navy">¡Mensaje enviado!</h3>
        <p className="text-[15px] text-ink-3 max-w-xs leading-[1.65]">
          Gracias por escribirnos. Te respondemos dentro de las próximas 48
          horas.
        </p>
        <button
          onClick={onReset}
          className="mt-1 text-sm font-semibold text-copper hover:text-copper-light transition-colors cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="flex flex-col gap-5"
      id="contact-form"
    >
      {/* Nombre + Apellido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="nombre"
            className="text-[13px] font-semibold text-ink-2"
          >
            Nombre <span className="text-copper">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Juan"
            className={`${inputBase} ${err.nombre ? "border-red-400" : "border-rule"}`}
          />
          {err.nombre && (
            <span className="flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={11} />
              {err.nombre}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="apellido"
            className="text-[13px] font-semibold text-ink-2"
          >
            Apellido <span className="text-copper">*</span>
          </label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            placeholder="García"
            className={`${inputBase} ${err.apellido ? "border-red-400" : "border-rule"}`}
          />
          {err.apellido && (
            <span className="flex items-center gap-1 text-xs text-red-500">
              <AlertCircle size={11} />
              {err.apellido}
            </span>
          )}
        </div>
      </div>

      {/* Empresa */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="empresa"
          className="text-[13px] font-semibold text-ink-2"
        >
          Empresa <span className="text-copper">*</span>
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          placeholder="Empresa S.A."
          className={`${inputBase} ${err.empresa ? "border-red-400" : "border-rule"}`}
        />
        {err.empresa && (
          <span className="flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={11} />
            {err.empresa}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[13px] font-semibold text-ink-2">
          Email <span className="text-copper">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="juan@empresa.com"
          className={`${inputBase} ${err.email ? "border-red-400" : "border-rule"}`}
        />
        {err.email && (
          <span className="flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={11} />
            {err.email}
          </span>
        )}
      </div>

      {/* Mensaje */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="mensaje"
          className="text-[13px] font-semibold text-ink-2"
        >
          Mensaje <span className="text-copper">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Contanos brevemente qué está pasando en tu empresa."
          rows={5}
          className={`${inputBase} resize-none ${err.mensaje ? "border-red-400" : "border-rule"}`}
        />
        {err.mensaje && (
          <span className="flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={11} />
            {err.mensaje}
          </span>
        )}
      </div>

      {/* Server error */}
      {state.serverError && (
        <div className="flex items-center gap-2 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle size={15} className="shrink-0" />
          {state.serverError}
        </div>
      )}

      <div className="pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="btn-primary-large disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Enviando..." : "Enviar mensaje"}
          {!isPending && <ArrowRight size={18} />}
        </button>
      </div>
    </form>
  );
}

export default function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });
  const [formKey, setFormKey] = useState(0);

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="py-16 md:py-20 lg:py-30 bg-cream"
      id="contacto"
    >
      <div className="max-w-345 mx-auto px-5 md:px-8 lg:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: heading + contact details */}
          <motion.div variants={item}>
            <div className="eyebrow">Contacto</div>
            <Title>Empecemos por un diagnóstico</Title>
            <Title.Lede className="mt-4 lg:mt-5 max-w-120">
              Planificar no es decidir el próximo período, es decidir cómo
              llegás a él. Completá el formulario y coordinamos una primera
              conversación sin compromiso.
            </Title.Lede>

            <div className="mt-8 lg:mt-10 flex flex-col gap-5 pt-8 lg:pt-10 border-t border-rule">
              {[
                { label: "Email", value: "orquestba@gmail.com" },
                { label: "Teléfono", value: "+54 9 11 65535769" },
                { label: "Ubicación", value: "Buenos Aires, Argentina" },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-mono text-[11px] font-medium tracking-[0.1em] uppercase text-ink-4">
                    {label}
                  </span>
                  <span className="text-[14px] text-ink-2">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div variants={item}>
            <FormContent
              key={formKey}
              onReset={() => setFormKey((k) => k + 1)}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
