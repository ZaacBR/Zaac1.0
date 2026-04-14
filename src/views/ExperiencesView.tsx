import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Linkedin, Github, ExternalLink } from 'lucide-react';
import { View } from '../types';

const techStack = [
  { name: 'Gestão de Projetos', level: 'Avançado', years: '3 anos', tag: 'Agile / Scrum / Kanban', color: 'primary' },
  { name: 'React.js', level: 'Avançado', years: '3 anos', tag: 'Aplicações SaaS & Dashboards', color: 'white' },
  { name: 'TypeScript', level: 'Avançado', years: '2 anos', tag: 'Tipagem em todos os projetos', color: 'primary' },
  { name: 'n8n (Docker)', level: 'Avançado', years: '2 anos', tag: '+1.000 registros/dia automatizados', color: 'white' },
  { name: 'Kommo / Pipedrive', level: 'Avançado', years: '3 anos', tag: '15+ implantações B2B', color: 'primary' },
  { name: 'Next.js', level: 'Intermediário', years: '2 anos', tag: 'Landing pages & sites institucionais', color: 'white' },
  { name: 'Make / Zapier', level: 'Avançado', years: '3 anos', tag: 'Fluxos multi-plataforma', color: 'primary' },
  { name: 'REST APIs / Webhooks', level: 'Avançado', years: '3 anos', tag: 'JSON, integrações corporativas', color: 'white' },
  { name: 'Linux / VPS', level: 'Intermediário', years: '2 anos', tag: 'Servidores self-hosted', color: 'primary' },
  { name: 'WordPress', level: 'Avançado', years: '4 anos', tag: 'Elementor, 15-22% conversão', color: 'white' },
  { name: 'Google Analytics (GA4)', level: 'Avançado', years: '2 anos', tag: 'GTM, rastreamento e dashboards', color: 'primary' },
  { name: 'Google / Meta Ads', level: 'Intermediário', years: '2 anos', tag: 'Setup de tags e tracking', color: 'white' },
];

const certifications = [
  { title: 'Project Management Fundamentals (Agile/Scrum)', issuer: 'Udemy', year: '2023' },
  { title: 'Configuração Avançada — Kommo CRM', issuer: 'Kommo Academy', year: '2023' },
  { title: 'Configuração Avançada — Pipedrive', issuer: 'Pipedrive Academy', year: '2023' },
  { title: 'n8n 2.0 — Workflows, Docker & Error Handling', issuer: 'n8n Community', year: '2024' },
  { title: 'APIs REST, Webhooks e Sync de Dados', issuer: 'Udemy', year: '2023' },
  { title: 'Front-End: React.js, TypeScript, Next.js', issuer: 'Udemy / Prática', year: '2022–2024' },
];

const impacts = [
  { value: '15+', label: 'Empresas B2B\nImplementadas' },
  { value: '100%', label: 'On-Time\nDelivery' },
  { value: '9.2', label: 'Satisfação\nMédia (/10)' },
  { value: '95%', label: 'Erros\nEliminados' },
  { value: '+1k', label: 'Registros/dia\nAutomatizados' },
  { value: '22%', label: 'Conversão\nMáxima Web' },
];

export default function ExperiencesView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pb-40 overflow-x-hidden">
      {/* Header */}
      <header className="px-8 max-w-7xl mx-auto pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 text-on-surface-variant text-xs font-bold uppercase tracking-[0.3em] mb-8"
        >
          Minha Trajetória
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-16">
          <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="block text-on-surface">HABILIDADES &</motion.span>
          <motion.span initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="block text-primary">RESULTADOS</motion.span>
        </h1>
      </header>

      {/* Impact Metrics */}
      <section className="px-8 max-w-7xl mx-auto mb-24 border-b border-outline-variant pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-2">Impacto Mensurável</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter">Números que Convencem.</h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {impacts.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="border border-outline-variant bg-surface p-6 text-center group hover:border-primary transition-colors duration-300"
            >
              <div className={`text-3xl md:text-4xl font-display font-black mb-2 group-hover:text-primary transition-colors ${i % 2 === 0 ? 'text-primary' : 'text-on-surface'}`}>
                {value}
              </div>
              <div className="text-[0.5rem] uppercase tracking-[0.2em] text-on-surface-variant font-bold leading-tight whitespace-pre-line">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Arsenal */}
      <section className="px-8 max-w-7xl mx-auto mb-24 border-b border-outline-variant pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-2">Competências Técnicas</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter">O Arsenal.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map(({ name, level, years, tag, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-outline-variant bg-surface p-6 group hover:border-primary transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-display font-bold text-lg uppercase tracking-tight group-hover:text-primary transition-colors">{name}</h4>
                <span className={`text-[0.55rem] font-bold uppercase tracking-widest px-2 py-1 border shrink-0 ml-2 ${color === 'primary' ? 'border-primary/40 text-primary' : 'border-outline-variant text-on-surface-variant'}`}>
                  {level}
                </span>
              </div>
              <p className="text-[0.65rem] text-on-surface-variant font-sans leading-relaxed mb-3">{tag}</p>
              <div className="text-[0.55rem] font-bold uppercase tracking-widest text-outline-variant">{years}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section className="px-8 max-w-7xl mx-auto mb-24 border-b border-outline-variant pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mb-16"
        >
          Trajetória Profissional
        </motion.h2>

        <div className="space-y-0">
          {[
            {
              period: 'Ago 2023 – Presente',
              role: 'Gestor de Projetos de Automação & CRM',
              company: 'Zera Company',
              color: 'primary',
              highlights: [
                '15+ implementações B2B com 100% on-time delivery',
                '+1.000 registros/dia automatizados via n8n + Webhooks',
                'Taxa de satisfação média de 9.2/10 nos projetos entregues',
                'Landing pages com 15-22% de taxa de conversão',
              ],
            },
            {
              period: 'Nov 2022 – Presente',
              role: 'Desenvolvedor Front-End & Integrador de Sistemas',
              company: 'Freelancer / Projetos Paralelos',
              color: 'white',
              highlights: [
                'Aplicações SaaS em React.js, TypeScript e Next.js',
                'APIs REST e integrações multi-plataforma',
                'Automações em n8n, Make e Google Apps Script',
                'UI/UX de alta fidelidade com foco em conversão',
              ],
            },
            {
              period: 'Fev 2023 – Mai 2024',
              role: 'Analista de T.I & Suporte Avançado',
              company: 'Kamaleão Color',
              color: 'primary',
              highlights: [
                'Administração de infraestrutura para 30+ usuários',
                'Migração de e-commerce com +30.000 clientes',
                'Configuração de redes, switches e servidores',
              ],
            },
          ].map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-6 py-10 group ${i > 0 ? 'border-t border-outline-variant/30' : ''}`}
            >
              <div className="md:col-span-3">
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface-variant group-hover:text-primary transition-colors mb-2">
                  {exp.period}
                </div>
                <div className={`text-[0.65rem] font-bold uppercase tracking-widest ${exp.color === 'primary' ? 'text-primary' : 'text-on-surface'}`}>
                  {exp.company}
                </div>
              </div>
              <div className="md:col-span-9 md:border-l md:border-outline-variant/30 md:pl-8">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-6 group-hover:text-primary transition-colors">{exp.role}</h3>
                <ul className="space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm font-sans text-on-surface-variant">
                      <span className="w-1 h-1 bg-primary mt-2 shrink-0 rounded-full"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="px-8 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-2">Educação Contínua</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter">Certificações.</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map(({ title, issuer, year }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-start gap-4 border border-outline-variant bg-surface p-6 group hover:border-primary transition-colors duration-300"
            >
              <CheckCircle2 className="text-on-surface-variant group-hover:text-primary transition-colors shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-display font-bold text-sm uppercase tracking-tight mb-1">{title}</h4>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-on-surface-variant">
                  {issuer} <span className="text-primary">· {year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary text-on-primary py-32 px-8 flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter max-w-4xl mx-auto leading-none mb-4">
            PRONTO PARA ESCALAR?
          </h2>
          <p className="text-black/70 font-sans mb-12 text-sm">Resposta em até 4 horas úteis.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button
              onClick={() => setView('contact')}
              className="bg-black text-white font-sans font-bold px-12 py-5 uppercase tracking-widest text-xs transition-transform hover:scale-105"
            >
              Entrar em Contato
            </button>
            <a
              href="https://www.linkedin.com/in/guilherme-izaac/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/30 text-black font-sans font-bold px-12 py-5 uppercase tracking-widest text-xs transition-all hover:bg-black hover:text-white flex items-center gap-2"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
