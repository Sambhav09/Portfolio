import nodemailer from 'nodemailer';

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Message from ${name}: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        })
        return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
    } catch (err) {
        console.log(err)
        return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
    }


}