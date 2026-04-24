import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { View } from '../types';
import BorderGlow from '../BorderGlow';
import { projects } from '../data';

import solarHomeSite from '../solar-prints/SolarHomeSite.webp';
import zaacDesignScreenshot from '../zaac-designdash.webp';
import logoBarra from '../logos/Logo-Barra-scaled.png';
import logoSolar from '../logos/Logo_solar_da_colina_2.0-removebg-preview.png';
import logoLoriane from '../logos/LorianeLogo.png';
import logoMTM from '../logos/logo-MTM.png.bv.webp';
import logoClara from '../logos/logoClaraInvestContabeis.png';

export default function PortfolioView({ setView }: { setView: (v: View) => void }) {
  const { t } = useTranslation();
  const partnerLogos = [
    { src: logoBarra, alt: 'Logo Barra' },
    { src: logoSolar, alt: 'Solar da Colina' },
    { src: logoLoriane, alt: 'Loriane' },
    { src: logoMTM, alt: 'MTM' },
    { src: logoClara, alt: 'Clara Invest Contábeis' },
  ];

  return (
    <div className="px-8 max-w-7xl mx-auto pb-40 space-y-40">
      <header className="pt-10">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-on-surface-variant text-xs font-bold uppercase tracking-[0.3em] mb-8"
          >
            {t('portfolio.header_subtitle')}
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-12">
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6}} className="block text-on-surface">{t('portfolio.header_title1')}</motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.1}} className="block text-primary">{t('portfolio.header_title2')}</motion.span>
        </h1>
      </header>

      <section className="mb-32">
        <div className="mb-20">
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-6">{t('portfolio.section1_subtitle')}</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">{t('portfolio.section1_title')}</h3>
          <p className="text-on-surface-variant max-w-2xl mt-6 font-sans text-sm leading-relaxed">
            {t('portfolio.section1_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Espaço para Sistema 1 (Solar da Colina) */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#0a0a0a"
            borderRadius={2}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            className="group transition-colors duration-500 overflow-hidden"
          >
            <div className="h-72 border-b border-outline-variant relative overflow-hidden flex items-center justify-center p-4">
              <img src={solarHomeSite} alt="Ecossistema Solar da Colina" loading="lazy" decoding="async" className="w-full h-full object-cover object-left-top border border-outline-variant shadow-2xl rounded-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-4">{t('portfolio.solar.badge')}</span>
              <h4 className="text-2xl font-display font-bold mb-4">{t('portfolio.solar.title')}</h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-8 flex-grow">
                {t('portfolio.solar.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'TypeScript', 'Node.js', 'MySQL'].map(tag => (
                  <span key={tag} className="text-[0.6rem] tracking-widest font-bold border border-outline-variant px-3 py-1.5 uppercase font-sans">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setView('solar-case')}
                className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2 self-start mt-auto"
              >
                {t('portfolio.btn_case')} <ExternalLink size={14} />
              </button>
            </div>
          </BorderGlow>

          {/* Espaço para Sistema 2 (Zaac Platform) */}
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#0a0a0a"
            borderRadius={2}
            glowRadius={40}
            glowIntensity={1}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            className="group transition-colors duration-500 overflow-hidden"
          >
            <div className="h-72 border-b border-outline-variant relative overflow-hidden flex items-center justify-center p-4">
              <img src={zaacDesignScreenshot} alt="Zaac Design Dashboard" loading="lazy" decoding="async" className="w-full h-full object-cover object-left-top border border-outline-variant shadow-2xl rounded-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-4">{t('portfolio.zaac.badge')}</span>
              <h4 className="text-2xl font-display font-bold mb-4">{t('portfolio.zaac.title')}</h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-8 flex-grow">
                {t('portfolio.zaac.desc')}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'TypeScript', 'Node.js', 'Google AI'].map(tag => (
                  <span key={tag} className="text-[0.6rem] tracking-widest font-bold border border-outline-variant px-3 py-1.5 uppercase font-sans">
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setView('zaac-case')}
                className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2 self-start mt-auto"
              >
                {t('portfolio.btn_case')} <ExternalLink size={14} />
              </button>
            </div>
          </BorderGlow>
        </div>
      </section>

      <section className="border-t border-outline-variant pt-32 mb-16">
        <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-16">{t('portfolio.section2_subtitle')}</h2>
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={project.id}
              className="group flex flex-col lg:flex-row border border-outline-variant bg-surface hover:border-primary transition-colors duration-500 overflow-hidden"
            >
              <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-between order-2 lg:order-1 relative z-10 bg-surface">
                <div>
                  <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-8">
                    {t(`projects.${project.id}.category`, { defaultValue: project.category })}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">{t(`projects.${project.id}.title`, { defaultValue: project.title })}</h2>
                  <p className="text-on-surface-variant font-sans text-sm max-w-md leading-relaxed mb-12">
                    {t(`projects.${project.id}.description`, { defaultValue: project.description })}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[0.6rem] tracking-widest font-bold border border-outline-variant px-3 py-1.5 uppercase font-sans">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-widest font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2 self-start mt-4"
                    >
                      {t('portfolio.btn_visit')} <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
              <div className="lg:w-1/2 min-h-[400px] relative order-1 lg:order-2 overflow-hidden border-b lg:border-b-0 lg:border-l border-outline-variant">
                <img 
                  src={project.image} 
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-outline-variant py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-6">{t('portfolio.section3_subtitle')}</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter leading-tight">
            {t('portfolio.section3_title')}<br />
            <span className="text-primary">{t('portfolio.section3_title_highlight')}</span>
          </h3>
          <p className="text-on-surface-variant font-sans text-sm leading-relaxed max-w-xl mt-8">
            {t('portfolio.section3_desc')}
          </p>
        </motion.div>

        <div className="space-y-0">
          {/* Passo 01 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-0 border border-outline-variant hover:border-primary transition-colors duration-500"
          >
            <div className="md:col-span-1 bg-surface border-r border-outline-variant flex items-center justify-center p-8">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-outline-variant group-hover:text-primary transition-colors writing-mode-vertical md:rotate-180 [writing-mode:vertical-rl]">01</span>
            </div>
            <div className="md:col-span-4 p-12 border-r border-outline-variant bg-surface flex flex-col justify-between">
              <div>
                <div className="w-8 h-[2px] bg-primary mb-8"></div>
                <h4 className="text-3xl font-display font-bold tracking-tight mb-4">{t('portfolio.steps.step1.title')}</h4>
                <p className="text-[0.6rem] uppercase tracking-[0.25em] text-primary font-bold">{t('portfolio.steps.step1.badge')}</p>
              </div>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mt-8">
                {t('portfolio.steps.step1.desc')}
              </p>
            </div>
            <div className="md:col-span-7 p-12 bg-surface/50 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-6">{t('portfolio.steps.step1.list_title')}</p>
              <ul className="space-y-4">
                {[
                  'Rotina real da equipe — como as tarefas chegam, como saem e onde morrem',
                  'Ferramentas em uso, integrações quebradas e processos manuais críticos',
                  'Onde o cliente se perde e onde a receita vaza sem ser percebida',
                  'Volume de dados, frequência de acesso e riscos operacionais ocultos',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-on-surface-variant font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    {t(`portfolio.steps.step1.items.${i}`, { defaultValue: item })}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Passo 02 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-0 border border-t-0 border-outline-variant hover:border-primary transition-colors duration-500"
          >
            <div className="md:col-span-1 bg-surface border-r border-outline-variant flex items-center justify-center p-8">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-outline-variant group-hover:text-primary transition-colors [writing-mode:vertical-rl] md:rotate-180">02</span>
            </div>
            <div className="md:col-span-4 p-12 border-r border-outline-variant bg-surface flex flex-col justify-between">
              <div>
                <div className="w-8 h-[2px] bg-primary mb-8"></div>
                <h4 className="text-3xl font-display font-bold tracking-tight mb-4">{t('portfolio.steps.step2.title')}</h4>
                <p className="text-[0.6rem] uppercase tracking-[0.25em] text-primary font-bold">{t('portfolio.steps.step2.badge')}</p>
              </div>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mt-8">
                {t('portfolio.steps.step2.desc')}
              </p>
            </div>
            <div className="md:col-span-7 p-12 bg-surface/50 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-6">{t('portfolio.steps.step2.list_title')}</p>
              <ul className="space-y-4">
                {[
                  'Mapa visual do fluxo operacional antes e depois da solução',
                  'Definição das tecnologias — por necessidade, não por tendência',
                  'Pontos de integração com sistemas já existentes (CRM, ERP, APIs)',
                  'Escopo fechado, cronograma real e critérios objetivos de sucesso',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-on-surface-variant font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    {t(`portfolio.steps.step2.items.${i}`, { defaultValue: item })}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Passo 03 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group grid grid-cols-1 md:grid-cols-12 gap-0 border border-t-0 border-outline-variant hover:border-primary transition-colors duration-500"
          >
            <div className="md:col-span-1 bg-surface border-r border-outline-variant flex items-center justify-center p-8">
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-outline-variant group-hover:text-primary transition-colors [writing-mode:vertical-rl] md:rotate-180">03</span>
            </div>
            <div className="md:col-span-4 p-12 border-r border-outline-variant bg-surface flex flex-col justify-between">
              <div>
                <div className="w-8 h-[2px] bg-primary mb-8"></div>
                <h4 className="text-3xl font-display font-bold tracking-tight mb-4">{t('portfolio.steps.step3.title')}</h4>
                <p className="text-[0.6rem] uppercase tracking-[0.25em] text-primary font-bold">{t('portfolio.steps.step3.badge')}</p>
              </div>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mt-8">
                {t('portfolio.steps.step3.desc')}
              </p>
            </div>
            <div className="md:col-span-7 p-12 bg-surface/50 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-6">{t('portfolio.steps.step3.list_title')}</p>
              <ul className="space-y-4">
                {[
                  'Sistema funcionando no ambiente real — não em demo isolada',
                  'Automações ativas conectando captura, operação e CRM em tempo real',
                  'Documentação técnica e vídeos de uso para toda a equipe',
                  'Suporte pós-entrega e janela de refinamento sem custo adicional',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm text-on-surface-variant font-sans leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                    {t(`portfolio.steps.step3.items.${i}`, { defaultValue: item })}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-outline-variant pt-20">
        <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-16 text-center">{t('portfolio.section4_subtitle')}</h2>
        <div className="relative overflow-hidden py-10">
          <motion.div 
            className="flex gap-20 items-center whitespace-nowrap"
            animate={{ x: [0, -2320] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-32 items-center">
                {partnerLogos.map((logo, idx) => (
                  <div key={`${i}-${idx}`} className="w-64 h-32 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-opacity duration-300">
                    <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" className="max-w-full max-h-full object-contain filter brightness-200 contrast-100" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
