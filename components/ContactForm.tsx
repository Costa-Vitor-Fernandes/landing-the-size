import React, { useState } from 'react';
import Link from 'next/link';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erro ao enviar');

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', consent: false });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div id='contato' className="mx-4 sm:mx-20 p-4 bg-gray-100 rounded-lg my-10">
      <h2 className="text-2xl font-semibold mb-4">Entre em contato com nossa equipe</h2>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-4 flex items-start gap-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1"
            required
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            Autorizo o tratamento dos meus dados pessoais conforme a{' '}
            <Link href="/politica-de-privacidade" className="underline" target="_blank">
              Política de Privacidade
            </Link>
            .
          </label>
        </div>
        <button
          type="submit"
          disabled={!formData.consent || status === 'loading'}
          className="z-10 bg-blue-500 text-white py-2 px-10 rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar'}
        </button>
        {status === 'success' && (
          <p className="mt-2 text-green-600">Mensagem enviada com sucesso! Entraremos em contato.</p>
        )}
        {status === 'error' && (
          <p className="mt-2 text-red-600">Erro ao enviar. Tente novamente ou mande um email direto.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;