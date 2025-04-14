import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !phone || !subject || !message) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL, 
            pass: process.env.SMTP_PASS,  
        },
    });

    const mailOptions = {
        from: email,
        replyTo: email,
        to: process.env.SMTP_EMAIL,
        subject: `New Contact Form Submission: ${subject}`,
        html: message,
    };

    try {
        const response = await transporter.sendMail(mailOptions);

        console.log(response, 'resadasd');

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }
}
