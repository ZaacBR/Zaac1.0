import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { View } from '../types';
import BorderGlow from '../BorderGlow';
import { projects } from '../data';

import zaacDesignScreenshot from '../zaac-designdash.webp';
import zaacPrint1 from '../zaac-prints/screencapture-design-zaac-br-dashboard-2026-04-09-01_10_18.webp';
import zaacPrint2 from '../zaac-prints/screencapture-design-zaac-br-dashboard-services-2026-04-09-01_10_27.webp';
import zaacPrint3 from '../zaac-prints/screencapture-design-zaac-br-dashboard-professionals-2026-04-09-01_10_35.webp';
import zaacPrint4 from '../zaac-prints/screencapture-design-zaac-br-dashboard-clients-2026-04-09-01_10_43.webp';
import zaacPrint5 from '../zaac-prints/screencapture-design-zaac-br-dashboard-reports-2026-04-09-01_10_51.webp';

export default function ZaacCaseView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="px-8 max-w-5xl mx-auto pb-40">
      <header className="mb-24 pt-10">
        <button 
          onClick={() => setView('portfolio')}
          className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-12 flex items-center gap-2"
        >
          <ArrowRight className="rotate-180" size={16} /> Voltar para Portfólio
        </button>
        <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-6">Case de Desenvolvimento</span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8"
        >
          ZAAC <br/>
          <span className="text-primary">PLATFORM.</span>
        </motion.h1>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border border-outline-variant bg-surface mb-24 overflow-hidden p-2"
      >
        <img src={zaacDesignScreenshot} alt="Zaac Platform Dashboard" loading="lazy" decoding="async" className="w-full object-cover rounded-sm border border-outline-variant/30 shadow-2xl" />
      </motion.div>

      <section className="mb-32 border-b border-outline-variant pb-32">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-20 text-center">Interface & Operação</h2>
        <div className="space-y-32">
          {[
            { img: zaacPrint1, title: "Visão Geral", desc: "Métricas de desempenho, faturamento e fluxo de clientes em tempo real no dashboard central." },
            { img: zaacPrint2, title: "Gestão de Serviços", desc: "Visualização e controle detalhado do catálogo de procedimentos (Cortes, Coloração, Massagens)." },
            { img: zaacPrint3, title: "Gestão de Equipe", desc: "Controle e acompanhamento visual da agenda dos profissionais e especialistas da clínica." },
            { img: zaacPrint4, title: "CRM / Base de Clientes", desc: "Gestão centralizada de dados dos clientes e histórico completo de atendimentos." },
            { img: zaacPrint5, title: "Relatórios Avançados", desc: "Análise de dados avançada baseada em métricas e insights para tomada de decisão estratégica." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
            >
              <div className={`md:col-span-8 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="border border-outline-variant p-2 bg-surface shadow-xl">
                  <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className={`md:col-span-4 space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="text-primary font-display font-black text-4xl">0{index + 1}</div>
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{item.title}</h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 item-start">
        <div className="md:col-span-8 space-y-16">
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Propósito</h2>
            <p className="text-on-surface-variant font-sans text-lg leading-relaxed">
              Transformar a experiência de autocuidado em um "Santuário Digital", facilitando o processo de agendamento para os clientes e centralizando toda a operação administrativa em uma interface focada em design premium e eficiência. A Zaac Design é uma plataforma full-stack moderna para gestão de negócios nos setores de estética e bem-estar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Administração & Dashboard</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              <li><strong className="text-on-surface">Visão Geral de Métricas:</strong> Acompanhamento de desempenho, faturamento e fluxo de clientes em tempo real.</li>
              <li><strong className="text-on-surface">Agenda Inteligente:</strong> Gestão visual e intuitiva de horários dos profissionais com bloqueio de intervalos.</li>
              <li><strong className="text-on-surface">Gestão de Equipe:</strong> Controle total sobre o cadastro de procedimentos e profissionais especialistas.</li>
              <li><strong className="text-on-surface">CRM Centralizado:</strong> Base de dados rica com histórico completo de atendimentos por cliente.</li>
              <li><strong className="text-on-surface">IA Suporte:</strong> Integração com Google Gemini para suporte e automação inteligente no atendimento.</li>
              <li><strong className="text-on-surface">Design System:</strong> Customização total do tema (Light/Dark mode) e personalização da interface.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Experiência do Cliente</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              <li><strong className="text-on-surface">Catálogo de Serviços:</strong> Visualização detalhada e elegante de procedimentos como corte, coloração e massagens.</li>
              <li><strong className="text-on-surface">Agendamento Inteligente:</strong> Fluxo simplificado em 4 passos (Serviço → Especialista → Data/Hora → Confirmação).</li>
              <li><strong className="text-on-surface">Painel do Cliente:</strong> Área dedicada para histórico de sessões e gestão de perfil personalizada.</li>
              <li><strong className="text-on-surface">Landing Page Premium:</strong> Experiência visual imersiva que reflete a identidade luxuosa da marca.</li>
            </ul>
          </section>
        </div>

        <div className="md:col-span-4 space-y-12">
          <div className="border border-outline-variant p-8 bg-background">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">Stack & Engine</h3>
            <ul className="space-y-6 font-sans text-sm text-on-surface-variant">
              <li className="border-b border-outline-variant/30 pb-4"><strong className="block text-on-surface mb-1">Frontend</strong> React 19, TypeScript e Tailwind CSS 4</li>
              <li className="border-b border-outline-variant/30 pb-4"><strong className="block text-on-surface mb-1">Animações</strong> Motion (Framer Motion)</li>
              <li className="border-b border-outline-variant/30 pb-4"><strong className="block text-on-surface mb-1">Inteligência Artificial</strong> Google Generative AI</li>
              <li className="border-b border-outline-variant/30 pb-4"><strong className="block text-on-surface mb-1">Backend</strong> Node.js com Express</li>
              <li className="pt-2"><strong className="block text-on-surface mb-1">Design System</strong> Custom Theme (Dark/Light)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Case Navigation */}
      <div className="mt-24 pt-12 border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-6">
        <button
          onClick={() => setView('solar-case')}
          className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
        >
          <ArrowRight className="rotate-180" size={14} /> Case Anterior: Solar da Colina
        </button>
        <button
          onClick={() => setView('portfolio')}
          className="bg-primary text-on-primary font-bold px-10 py-4 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black flex items-center gap-3"
        >
          Ver Todos os Projetos <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
