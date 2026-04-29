"use server";

import { Resend } from "resend";
import { z } from "zod";

type FieldName = "nombre" | "apellido" | "empresa" | "email" | "mensaje";

export type ContactState = {
  success?: boolean;
  errors?: Partial<Record<FieldName, string>>;
  serverError?: string;
};

const contactSchema = z.object({
  nombre: z.string().min(2, "Mínimo 2 caracteres"),
  apellido: z.string().min(2, "Mínimo 2 caracteres"),
  empresa: z.string().min(1, "Campo requerido"),
  email: z.email("Email inválido"),
  mensaje: z.string().min(15, "Mínimo 15 caracteres"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    nombre: formData.get("nombre"),
    apellido: formData.get("apellido"),
    empresa: formData.get("empresa"),
    email: formData.get("email"),
    mensaje: formData.get("mensaje"),
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    const errors: Partial<Record<FieldName, string>> = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as FieldName;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { errors };
  }

  const { nombre, apellido, empresa, email, mensaje } = result.data;

  try {
    await resend.emails.send({
      // Replace with your verified domain once set up: "Orquestba <contacto@orquestba.com.ar>"
      // from: "Orquestba <onboarding@resend.dev>",
      from: "Orquestba <contacto@orquestba.com>",
      // to: "alextraverso6@gmail.com",
      to: "orquestba@gmail.com",
      replyTo: email,
      subject: `Nuevo contacto — ${nombre} ${apellido} (${empresa})`,
      html: `
        <div style="font-family:system-ui,sans-serif;max-width:560px;color:#171210;">
          <h2 style="font-size:20px;margin:0 0 4px;">Nuevo mensaje de contacto</h2>
          <p style="color:#7a726a;font-size:13px;margin:0 0 24px;">Desde el formulario de orquestba.com</p>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#7a726a;font-size:13px;width:90px;vertical-align:top;">Nombre</td>
              <td style="padding:8px 0;font-size:14px;">${nombre} ${apellido}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#7a726a;font-size:13px;vertical-align:top;">Empresa</td>
              <td style="padding:8px 0;font-size:14px;">${empresa}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#7a726a;font-size:13px;vertical-align:top;">Email</td>
              <td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#b8692a;">${email}</a></td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #ddd8d0;margin:20px 0;" />
          <p style="color:#7a726a;font-size:13px;margin:0 0 8px;">Mensaje</p>
          <p style="font-size:15px;line-height:1.65;margin:0;">${mensaje.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return { success: true };
  } catch {
    return {
      serverError: "Error al enviar el mensaje. Por favor intentá de nuevo.",
    };
  }
}
