import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { service, name, email, company, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
      <div style="background:#C8203E;padding:24px 32px;border-radius:8px 8px 0 0">
        <h1 style="margin:0;color:#fff;font-size:20px;font-weight:600">New Advisory Inquiry — ESPS Capital</h1>
      </div>
      <div style="border:1px solid #e5e7eb;border-top:none;padding:32px;border-radius:0 0 8px 8px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:130px">Service</td><td style="padding:8px 0;font-weight:600">${service}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Name</td><td style="padding:8px 0">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#C8203E">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Company</td><td style="padding:8px 0">${company}</td></tr>` : ''}
          ${phone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Phone</td><td style="padding:8px 0">${phone}</td></tr>` : ''}
        </table>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
        <p style="color:#6b7280;font-size:13px;margin:0 0 8px">Message</p>
        <p style="white-space:pre-wrap;font-size:15px;line-height:1.6;margin:0">${message}</p>
      </div>
      <p style="text-align:center;color:#9ca3af;font-size:11px;margin-top:16px">Sent from espscapital.com · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"ESPS Capital Website" <${process.env.SMTP_USER}>`,
    to: 'espscapital@gmail.com',
    replyTo: email,
    subject: `[${service}] Advisory Inquiry from ${name}`,
    html,
  });

  return NextResponse.json({ ok: true });
}
