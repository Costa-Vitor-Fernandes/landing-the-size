import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const data = req.body;
    const email = typeof data === 'string' ? data : data.email;

    if (!email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      return res.status(400).json({ message: "Email inválido" });
    }

    const messageHtml = typeof data === 'object' ? `
      <h2>Novo contato - uSize</h2>
      <p><strong>Nome:</strong> ${data.name || '—'}</p>
      <p><strong>Email:</strong> ${data.email || '—'}</p>
      <p><strong>Telefone:</strong> ${data.phone || '—'}</p>
      <p><strong>Mensagem:</strong> ${data.message || '—'}</p>
    ` : `<p>Email para demonstração: ${email}</p>`;

    await resend.emails.send({
      from: 'uSize <contato@usize.app>',
      to: process.env.CONTACT_EMAIL || 'usize.web@gmail.com',
      subject: typeof data === 'object' ? 'Contato - Landing uSize' : 'Agendar Demonstração - uSize',
      html: messageHtml,
    });

    res.status(200).json({ message: 'Email enviado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao enviar email" });
  }
}


