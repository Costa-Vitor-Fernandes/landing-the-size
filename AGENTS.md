# uSize — Landing Page

Landing page institucional do uSize, provador virtual para e-commerces.
Next.js (Pages Router), Tailwind CSS, GSAP, SendGrid.

## Stack
- Next.js 13.4.9 (Pages Router)
- Tailwind CSS 3.3.2
- GSAP 3.12 (animações)
- SendGrid (envio de e-mails do formulário de contato)
- Deploy: Vercel

## Estrutura
```
pages/
  _app.tsx          — App wrapper
  _document.tsx     — HTML document, meta tags, viewport
  index.tsx         — Landing page principal
  api/
    hello.ts        — Health check
    sendEmail.tsx   — POST /api/sendEmail (SendGrid)
components/
  AnimatedText.tsx   — Animação GSAP do headline
  Card.tsx           — Card de planos (Prata/Ouro/Diamante)
  ColorTest.jsx      — Utilitário de teste de cor (legado)
  ContactForm.tsx    — Formulário de contato
  FlippingButton.tsx — Botão "Agende uma demonstração" com flip
  InfiniteLooper.tsx — Carrossel infinito de logos
public/
  integra/           — Logos de e-commerces parceiros
styles/
  globals.css        — Tailwind + animações custom
```

## Regras
- Não misturar Pages Router com App Router
- Manter formulário de contato funcional (SendGrid)
- GSAP só pra animações existentes; evitar adicionar novas libs JS pesadas
- SEO: manter Open Graph, Twitter Cards, canonical
- LGPD: sempre incluir checkbox de consentimento em formulários

## Variáveis de ambiente
```
SENDGRID_API_KEY=
CONTACT_EMAIL=
NEXT_PUBLIC_URL=
```

## Scripts
- `npm run dev` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — iniciar produção
- `npm run lint` — ESLint

## Observações
- Viewport é gerenciado via JS em `_document.tsx` — abordagem legada, precisa de refactor
- Phone input usa `type="number"` — trocar pra `type="tel"`
- Sem política de privacidade / aviso LGPD atualmente