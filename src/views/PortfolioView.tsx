import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
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
            Portfólio de Projetos
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-12">
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6}} className="block text-on-surface">CASOS DE</motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.1}} className="block text-primary">SUCESSO</motion.span>
        </h1>
      </header>

      <section className="mb-32">
        <div className="mb-20">
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-6">Software & Engenharia</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">Sistemas Desenvolvidos.</h3>
          <p className="text-on-surface-variant max-w-2xl mt-6 font-sans text-sm leading-relaxed">
            Plataformas proprietárias e ecossistemas construídos do zero para resolver gargalos corporativos complexos. Modulamos código focado em conversão, velocidade e integração profunda.
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
              <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-4">SaaS / Gestão de Hospedagem</span>
              <h4 className="text-2xl font-display font-bold mb-4">Ecossistema Solar da Colina</h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-8 flex-grow">
                Plataforma full-stack moderna para gestão completa de reservas. Centraliza o catálogo de hóspedes e a operação administrativa em uma interface única e rápida.
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
                Ver Case Completo <ExternalLink size={14} />
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
              <img src={zaacDesignScreenshot} alt="Zaac Platform Dashboard" loading="lazy" decoding="async" className="w-full h-full object-cover object-left-top border border-outline-variant shadow-2xl rounded-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="p-10 flex-grow flex flex-col">
              <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold mb-4">SaaS / Gestão de Estética & Design</span>
              <h4 className="text-2xl font-display font-bold mb-4">Zaac Platform</h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-8 flex-grow">
                Ecossistema premium para gestão de agendamentos e administração de negócios de bem-estar. Interface imersiva focada em UX de alta fidelidade.
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
                Ver Case Completo <ExternalLink size={14} />
              </button>
            </div>
          </BorderGlow>
        </div>
      </section>

      <section className="border-t border-outline-variant pt-32 mb-16">
        <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-16">Aplicações Diversas</h2>
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
                    {project.category}
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 tracking-tight">{project.title}</h2>
                  <p className="text-on-surface-variant font-sans text-sm max-w-md leading-relaxed mb-12">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[0.6rem] tracking-widest font-bold border border-outline-variant px-3 py-1.5 uppercase font-sans">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 min-h-[400px] relative order-1 lg:order-2 overflow-hidden border-b lg:border-b-0 lg:border-l border-outline-variant">
                <img 
                  src={project.image} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  alt={project.title}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-outline-variant py-32">
        <div className="mb-20">
          <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-6">A Estrutura Por Trás</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">Metodologia de Entrega.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <div className="text-5xl font-display font-black text-outline-variant mb-8 group-hover:text-primary transition-colors">/01</div>
            <h4 className="text-2xl font-display font-bold mb-6">Auditoria Linux & Servidores</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
              O diagnóstico severo. Analisamos rotas de rede, segurança de acesso aos bancos e eficiência do provisionamento (Docker). Não construímos o topo antes da base estrutural. Todo o ambiente de servidor cloud suportará, desde o dia zero, o triplo da carga exigida pela operação.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <div className="text-5xl font-display font-black text-outline-variant mb-8 group-hover:text-primary transition-colors">/02</div>
            <h4 className="text-2xl font-display font-bold mb-6">Soluções Sob Medida</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
              Onde o código reflete a regra de negócio comercial. Front-ends imersivos construídos via React e modelagens orientadas a escalabilidade. Nenhuma API é construída por capricho técnico, tudo é desenhado visando extrair conversão de leads e fluidez implacável da equipe comercial interligada.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <div className="text-5xl font-display font-black text-outline-variant mb-8 group-hover:text-primary transition-colors">/03</div>
            <h4 className="text-2xl font-display font-bold mb-6">Integração Massiva (CRM)</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
              Sementes de tráfego convertidas em ecossistemas de vendas (Kommo/Pipedrive). Usando mapeamento de Webhooks JSON complexos acoplados à engenharia de dados corporativos (n8n), forçamos uma união perfeita: o sistema de captura avisa o CRM central sem necessidade de atritos, cliques manuais ou importações frágeis.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-outline-variant pt-20">
        <h2 className="text-[0.65rem] text-primary font-bold tracking-[0.3em] uppercase mb-16 text-center">Ecossistemas em Operação</h2>
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
