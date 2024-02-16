import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail1 = process.env.TO_EMAIL1;
const toEmail2 = process.env.TO_EMAIL2;
const toEmail3 = process.env.TO_EMAIL3;
const toEmail4 = process.env.TO_EMAIL4;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, toEmail1,toEmail2,toEmail3,toEmail4, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>Your new message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}