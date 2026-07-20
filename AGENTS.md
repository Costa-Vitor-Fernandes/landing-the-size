# uSize — Landing Page

Landing page institucional do uSize, provador virtual para e-commerces.
Next.js (Pages Router), Tailwind CSS, GSAP, Resend.

## Stack
- Next.js 13.5.11 (Pages Router)
- Tailwind CSS 3.3.2
- GSAP 3.12 (animações)
- Resend (envio de e-mails)
- Deploy: Vercel

## Estrutura
```
pages/
  _app.tsx               — App wrapper
  _document.tsx          — HTML document, meta tags, SEO
  index.tsx              — Landing page principal
  politica-de-privacidade.tsx — LGPD / Política de Privacidade
  api/
    hello.ts             — Health check
    sendEmail.tsx        — POST /api/sendEmail (Resend)
components/
  AnimatedText.tsx       — Animação GSAP do headline
  Card.tsx               — Card de planos (Prata/Ouro/Diamante)
  ColorTest.jsx          — Utilitário de teste de cor (legado)
  ContactForm.tsx        — Formulário de contato com LGPD
  FlippingButton.tsx     — Botão "Agende uma demonstração" com flip
  InfiniteLooper.tsx     — Carrossel infinito de logos
public/
  integra/               — Logos de e-commerces parceiros
styles/
  globals.css            — Tailwind + animações custom
```

## Regras
- Não misturar Pages Router com App Router
- Manter formulário de contato funcional (Resend)
- GSAP só pra animações existentes; evitar adicionar novas libs JS pesadas
- SEO: manter Open Graph, Twitter Cards, canonical
- LGPD: sempre incluir checkbox de consentimento em formulários
- Viewport responsivo (width=device-width), sem hacks JS

## Variáveis de ambiente
```
RESEND_API_KEY=
CONTACT_EMAIL=
```

## Scripts
- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — iniciar produção
- `npm run lint` — ESLint

## Observações
- Viewport corrigido para responsivo padrão (removido hack width=380/580)
- SendGrid substituído por Resend (mais simples, seguro, Vercel-native)
- Input phone corrigido para `type="tel"`
- Política de privacidade criada em `/politica-de-privacidade`
- Formulário de contato com consentimento LGPD obrigatório
- Feedback visual de sucesso/erro nos formulários