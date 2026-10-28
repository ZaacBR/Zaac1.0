# Plano de Ação — Evolução do Portfólio Zaac

> Base: leitura do repositório `Zaac1.0` (código, copy, currículo) e dos seus projetos em `~/Documents/Montseguro` (MontFlow, Disparos, Alertas, MontBench, Landing Pages, institucionais).
> Prioridade: 🔴 faça primeiro · 🟠 próximo · 🟡 depois · Esforço: P (até 2h) · M (meio dia) · G (1–3 dias)

---

## 1. Diagnóstico

**O que já está forte**
- Posicionamento claro (gestor de projetos + dev + automação), design autoral (Beams, DarkVeil, BorderGlow) e i18n PT/EN.
- Dois cases com página própria (Solar da Colina, Zaac Design) e currículo revisado.

**O que está segurando o portfólio**
1. **Só 3 projetos listados** (`src/data.ts`), e o 3º usa foto de banco de imagens (Unsplash) como capa. Enquanto isso, seu trabalho mais impressionante não aparece.
2. **Navegação por `useState`** (`App.tsx:74`): nenhuma página tem URL própria. Não dá para compartilhar `/cases/solar`, e o Google só indexa a home.
3. **SEO quebrado:** `og-preview.png` é referenciado no `index.html` mas não existe no repo. Sem `robots.txt`, `sitemap.xml` ou JSON-LD.
4. **Promessas sem prova:** a copy fala de Linux, Docker, ERP/CRM, "−70% de carga", "9.2/10", "15–22% de conversão", mas os cases mostram só sites. Nenhum número tem fonte ou contexto.
5. **Inconsistências:** Zera Company aparece como *Ago 2023* no currículo e *Ago 2025* no `copy_base_site.md`; e-mail `Guilherme@` vs `guilherme@`.
6. **Higiene do repositório:** `package.json` com nome `react-example`, `README.md` vazio, `.env.example` com texto do AI Studio, `Server/` (build antigo com 6 bundles) versionado, imagens duplicadas (`SolarPrints/` e `src/solar-prints/`, `zaacdesignprints/` e `src/zaac-prints/`), dependências possivelmente sem uso (`@google/genai`, `express`).
7. **Tom da copy:** "impiedoso", "severo", "destruindo retrabalho" repetido em muitos blocos. Cansa e soa genérico; um recrutador/cliente quer a história concreta.

---

## 2. Fase 1 — Correções que destravam tudo (1–2 dias)

| ID | Ação | Prio | Esf. |
|---|---|---|---|
| 1.1 | Criar `public/` com `og-preview.png` (1200×630), `robots.txt`, `sitemap.xml`; mover favicon/logo para lá | 🔴 | P |
| 1.2 | Trocar o roteamento por `react-router` (ou hash router se o host for estático). URLs: `/`, `/portfolio`, `/cases/solar-da-colina`, `/cases/zaac-design`, `/sobre`, `/contato` | 🔴 | M |
| 1.3 | `<title>`/meta por rota (react-helmet-async ou equivalente) e JSON-LD `Person` + `ProfessionalService` | 🔴 | M |
| 1.4 | Reconciliar datas/números do currículo × site (Zera 2023 ou 2025? e-mail único). Ter uma **fonte única** (`src/data.ts` ou JSON) que alimenta site e currículo | 🔴 | P |
| 1.5 | Higiene: renomear pacote, escrever README real, limpar `.env.example`, remover `Server/` do git (build vai para deploy, não para o repo), apagar pastas de prints duplicadas, remover deps sem uso | 🟠 | P |
| 1.6 | Auditar imagens: `.webp` com `loading="lazy"`, `width/height`, rodar Lighthouse (meta: ≥90 em Performance, SEO, Acessibilidade) | 🟠 | M |

---

## 3. Fase 2 — Conteúdo: mostrar o que você realmente construiu (1–2 semanas)

Seus projetos em `Montseguro/` são a melhor prova técnica que você tem. Transforme-os em cases, **anonimizando dados sensíveis** (clientes, base de contatos, segredos, domínios internos).

| ID | Case novo | O que contar | Prio | Esf. |
|---|---|---|---|---|
| 2.1 | **Disparos** — plataforma de e-mail marketing (PHP + React + AWS SES) | Plano com 100+ itens (S/B/P/F/D/N), 118 testes de backend + 112 de frontend, assinatura de webhooks SNS, A/B real, segmentação dinâmica, LGPD. É o case que prova engenharia séria | 🔴 | G |
| 2.2 | **MontFlow** — orquestrador visual de fluxos de WhatsApp (Cloud API) | Editor de grafos (`@xyflow/react`), motor de fluxo, webhooks, cron. Casa direto com seu discurso de "n8n/automação" | 🔴 | G |
| 2.3 | **Sistema de Alertas** — PWA com Web Push | Fases, PWA, VAPID, cron. Mostrar como você planeja em fases (gestão + código). Só publicar depois de concluir mais fases, ou como "em desenvolvimento" | 🟠 | M |
| 2.4 | **Landing pages por operadora + relatório CRO** | Pesquisa de mercado (Meta/Google Ads Library), 4 ganchos de conversão, antes/depois. Une marketing + dev | 🟠 | M |
| 2.5 | **MontBench** — plataforma de growth (docs de produto/UX) | Mostra seu lado de produto: user flows, especificação técnica, módulos. Bom para vagas de gestão | 🟡 | M |
| 2.6 | **Sites institucionais** (Montseguro, PROP5, TechBrabo, Grupo Mont) | Um case "design system + múltiplos sites" com o preloader e o design-system | 🟡 | M |

**Modelo único de case** (reaproveite `ZaacCaseView`/`SolarCaseView` como template genérico `CaseView`):
1. **Contexto** — quem era o cliente e qual a dor (2 linhas)
2. **Seu papel** — gestor, dev, ou os dois
3. **Solução** — diagrama de arquitetura simples + 3–5 screenshots/GIF
4. **Decisões técnicas** — 3 escolhas e por quê (ex.: "PHP puro em hospedagem compartilhada porque…")
5. **Resultados** — números com fonte e período, ou "sem métrica pública" (melhor do que número solto)
6. **Stack + links** (repo, demo, ou "privado sob NDA")

Refatorar para `src/data/cases.ts` + um único `CaseView` evita criar uma view por projeto.

---

## 4. Fase 3 — Credibilidade e prova (2–3 semanas, em paralelo)

| ID | Ação | Prio | Esf. |
|---|---|---|---|
| 3.1 | **Metodologia de números:** para cada métrica (100% on-time, 9.2/10, −95% falhas, −70% carga, 15–22% conversão), anotar origem. O que não tiver origem, suavizar ("em média", "nos projetos X e Y") ou remover | 🔴 | P |
| 3.2 | **Depoimentos reais** (2–3 clientes: Solar da Colina, Atelier Yamamoto, gestor da Zera) com nome, cargo e foto, ou citação no LinkedIn | 🟠 | M |
| 3.3 | **Demo pública** do MontFlow ou Disparos com dados fictícios (docker-compose + seed, hospedado) | 🟠 | G |
| 3.4 | **Repos públicos limpos** no GitHub (ZaacBR): versão sanitizada do Disparos e/ou MontFlow, com README, screenshots, `docker compose up` funcionando e licença | 🟠 | G |
| 3.5 | **Certificações**: concluir e listar 1–2 (ex.: PMP/CAPM ou Scrum, n8n, AWS Cloud Practitioner) alinhadas ao posicionamento de gestor técnico | 🟡 | G |
| 3.6 | Seção **"Stack e infra"** com evidência: diagrama da sua VPS/Docker/Portainer (você tem `DEPLOY-PORTAINER.md`), em vez de só afirmar "Linux de alta disponibilidade" | 🟡 | M |

> ⚠️ Antes de publicar qualquer repo/case: varrer por `.env`, tokens, chaves JWT/VAPID, dumps SQL (`admin.sql`), listas de contatos e a pasta `levantamento_financeiro.txt`. A Disparos mesmo tem pendência de "rotacionar segredos".

---

## 5. Fase 4 — Refino de copy e design (1 semana)

| ID | Ação | Prio | Esf. |
|---|---|---|---|
| 4.1 | Reescrever o hero e o "Manifesto" com frases concretas (cliente, problema, resultado) e menos adjetivos ("impiedoso", "severo", "extremo contraste") | 🟠 | M |
| 4.2 | Escolher **um** público principal: *cliente que contrata projeto* ou *empresa que contrata você*. Hoje o site fala com os dois. Pode ter um CTA para cada, mas o hero precisa de um foco | 🟠 | P |
| 4.3 | Um CTA primário único e visível (WhatsApp ou agendamento), com link direto, não só o formulário | 🟠 | P |
| 4.4 | Versão PT/EN completa: conferir se `en.json` cobre os cases novos; ajustar `<html lang>` conforme o idioma | 🟡 | M |
| 4.5 | Acessibilidade: contraste do tema escuro, foco visível, `prefers-reduced-motion` para Beams/DarkVeil (efeitos WebGL) e fallback estático em mobile | 🟡 | M |
| 4.6 | Currículo em PDF gerado a partir da mesma fonte de dados (item 1.4), com botão "Baixar CV" em PT e EN | 🟡 | M |

---

## 6. Fase 5 — Tração (contínuo)

| ID | Ação | Prio | Esf. |
|---|---|---|---|
| 5.1 | Aproveitar `posts_redes_sociais.md`: cada case novo vira 1 post + 1 carrossel (já existe o roteiro de pilares) | 🟡 | P/caso |
| 5.2 | Blog curto (3–5 artigos) tirado dos seus próprios aprendizados: "Como assinei webhooks SNS", "Fila de e-mail sem HTML por destinatário", "Anti-bloqueio de WhatsApp Cloud API". Bom para SEO e para mostrar profundidade | 🟡 | M/artigo |
| 5.3 | Analytics com privacidade: o `hitkeep` que você tem em Documents é um projeto de terceiros (MIT); dá para hospedar e usar no portfólio, com LGPD em dia | 🟡 | M |
| 5.4 | Alinhar LinkedIn e GitHub com o site (mesma headline, mesmos números, link para os cases) | 🟠 | P |

---

## 7. Ordem sugerida

1. **Semana 1:** 1.1 → 1.4 → 3.1 → 1.2 → 1.3 → 1.5 (site indexável, consistente e limpo)
2. **Semanas 2–3:** modelo `CaseView` + cases 2.1 (Disparos) e 2.2 (MontFlow)
3. **Semana 4:** 2.4 (Landing Pages/CRO), 3.2 (depoimentos), 4.1–4.3 (copy)
4. **Depois:** 3.3/3.4 (demo + repo público), 2.3, 2.5, 2.6, 5.x

## 8. Como medir

- Lighthouse ≥ 90 nas 4 categorias
- Todas as páginas indexadas no Search Console em 30 dias
- ≥ 5 cases publicados, cada um com contexto, papel, decisões e resultado
- 100% dos números do site com origem registrada
- Pelo menos 1 demo ou repo público funcionando
