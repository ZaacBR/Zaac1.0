# Zaac — Portfólio

Site de portfólio de Guilherme Izaac: gestão de projetos, CRM, automação e desenvolvimento web.
Publicado em **https://zaac.com.br**.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · i18next (PT/EN) · Motion · three.js/OGL (efeitos de fundo)

## Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # checagem de tipos (tsc --noEmit)
npm run build      # gera dist/
npm run preview    # serve o build localmente
```

## Estrutura

```
src/
  App.tsx          layout, navegação e meta tags por rota
  routes.ts        mapa view → URL (usado também pelo sitemap)
  data.ts          lista de projetos do portfólio
  views/           uma view por página (carregadas sob demanda)
  locales/         textos PT e EN (titles, descriptions, copy)
public/            og-preview.png, robots.txt, sitemap.xml, .htaccess
DOCs/              currículo (PDF e Markdown)
```

## Rotas

| URL | Página |
|---|---|
| `/` | Início |
| `/portfolio` | Portfólio |
| `/cases/solar-da-colina` | Case Solar da Colina |
| `/cases/zaac-design` | Case Zaac Design |
| `/sobre` | Sobre |
| `/experiencias` | Experiências |
| `/contato` | Contato |
| `/obrigado` | Confirmação do formulário (noindex) |

## Deploy

O site é uma SPA com URLs reais: o servidor precisa devolver `index.html` para rotas desconhecidas.
O `public/.htaccess` já faz isso em Apache/Hostinger. Em outros hosts, configure o equivalente
(Netlify/Cloudflare Pages: arquivo `_redirects` com `/* /index.html 200`; Nginx: `try_files $uri /index.html;`).

Ao adicionar uma página nova, atualize `src/routes.ts`, `public/sitemap.xml` e as chaves `titles.*` / `descriptions.*` em `src/locales/`.

Plano de evolução do portfólio: [PLANO_DE_ACAO.md](PLANO_DE_ACAO.md).
