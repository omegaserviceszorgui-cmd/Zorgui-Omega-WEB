import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { SubmitBookingBody, SubmitBookingResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/booking", async (req, res) => {
  const parsed = SubmitBookingBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  const { name, phone, email, service, date, message } = parsed.data;

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: "Email service not configured" });
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "OMEGA SERVICES <onboarding@resend.dev>",
      to: "omegaserviceszorgui@gmail.com",
      subject: `Nouvelle réservation - ${service} - ${name}`,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date souhaitée:</strong> ${date}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });

    const data = SubmitBookingResponse.parse({
      success: true,
      message: "Votre réservation a été envoyée avec succès.",
    });
    res.json(data);
  } catch {
    res.status(500).json({ error: "Erreur lors de l'envoi de la réservation." });
  }
});

export default router;
