import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { SubmitContactBody, SubmitContactResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const { name, email, phone, subject, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "OMEGA SERVICES <onboarding@resend.dev>",
      to: "omegaserviceszorgui@gmail.com",
      subject: subject || `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
        ${subject ? `<p><strong>Sujet:</strong> ${subject}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    const data = SubmitContactResponse.parse({
      success: true,
      message: "Votre message a été envoyé avec succès.",
    });
    res.json(data);
  } catch {
    res.status(500).json({ error: "Erreur lors de l'envoi du message." });
  }
});

export default router;
