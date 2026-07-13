import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_TO_EMAIL = "hello@fanvuemodels.com";

const subjectLabels: Record<string, string> = {
  general: "General enquiry",
  seo: "SEO Audit",
  ads: "Google Ads",
  enterprise: "Enterprise Programme",
  partnership: "Partnerships",
};

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "Nelson Digital <onboarding@resend.dev>";
    const subjectLabel = subjectLabels[subject] || subject;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Contact] ${subjectLabel} from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subjectLabel}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Message could not be sent" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Message could not be sent" },
      { status: 500 }
    );
  }
}
