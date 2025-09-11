import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, company, email, message } = await req.json();
        const { data, error } = await resend.emails.send({
            from: `Acme <contacto@gustavonadador.com>`,
            to: ['gustavoolea23@gmail.com'],
            subject: 'Patrocinio',
            html: `
        Hola soy <b>${name}</b>, representante de la empresa: <b>${company}</b>.<br /><br />
        ${message}<br /><br />
        Puedes contactarme a través de mi email: <a href="mailto:${email}">${email}</a>`,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}