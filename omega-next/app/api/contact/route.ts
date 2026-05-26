import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "OMEGA SERVICES <onboarding@resend.dev>",
      to: ["omegaserviceszorgui@gmail.com"],
      subject: `📩 Contact: ${subject || "Nouveau message"} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
          <h2 style="color:#1a3c6e;margin-bottom:16px">📩 Nouveau message — OMEGA SERVICES</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;width:140px">Nom</td><td style="padding:8px 0;font-weight:600">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0">${email}</td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#6b7280">Téléphone</td><td style="padding:8px 0">${phone}</td></tr>` : ""}
            ${subject ? `<tr><td style="padding:8px 0;color:#6b7280">Sujet</td><td style="padding:8px 0">${subject}</td></tr>` : ""}
          </table>
          <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px">
            <p style="color:#374151;white-space:pre-wrap;margin:0">${message}</p>
          </div>
          <p style="margin-top:16px;color:#9ca3af;font-size:12px">Envoyé via le formulaire de contact OMEGA SERVICES</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Message envoyé avec succès!" });
  } catch {
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
