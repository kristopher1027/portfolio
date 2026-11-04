export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const origin = req.headers.origin;
  if (!origin || new URL(origin).host !== req.headers.host) {
    return res.status(403).json({ error: "Invalid request origin" });
  }

  const { name, email, message, company } = req.body ?? {};
  if (company) return res.status(200).json({ ok: true });
  if (
    typeof name !== "string" || !name.trim() || name.length > 80 ||
    typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
    typeof message !== "string" || !message.trim() || message.length > 1200
  ) {
    return res.status(400).json({ error: "Invalid form details" });
  }

  const key = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!key || !from) return res.status(503).json({ error: "Email delivery is not configured" });

  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: ["christopher.okoh@gmail.com"],
        reply_to: email.trim(),
        subject: `Portfolio enquiry from ${name.trim()}`,
        text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      }),
    });
    if (!result.ok) return res.status(502).json({ error: "Email delivery failed" });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: "Email service unavailable" });
  }
}
