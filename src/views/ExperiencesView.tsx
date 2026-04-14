import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { View } from '../types';
import BorderGlow from '../BorderGlow';
import { projects } from '../data';


export default function ExperiencesView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="px-8 max-w-7xl mx-auto pb-40">
      <header className="pt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 text-on-surface-variant text-xs font-bold uppercase tracking-[0.3em] mb-8"
        >
          Minha Trajetória
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-12">
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6}} className="block text-on-surface">EXPERIÊNCIAS &</motion.span>
          <motion.span initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 0.1}} className="block text-primary">HABILIDADES</motion.span>
        </h1>
      </header>

      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          
          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">WordPress & Front-End</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Desenvolvimento e manutenção em WordPress / Customização de landing pages (front-end). Costumo utilizar Wordpress com Elementor para o desenvolvimento das páginas, e HTML/CSS/JS para customizações. Utilizo ReactJS para desenvolvimento Frontend em projetos fora do ecossistema Wordpress.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Integração de APIs & CRMs</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Integração de formulários nativos (Elementor, Google, Meta) e envio de dados para o CRM <strong className="text-on-surface hover:text-primary transition-colors"><a href="https://kommo.com" target="_blank" rel="noreferrer">Kommo.com</a></strong>. Automação de fluxos utilizando Make.com e N8N. Deploy e gerenciamento de VPS Linux com Docker Portainer para instâncias self-hosted do N8N.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Automações Zapier & Make</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Construção de integrações entre ferramentas e formulários centralizando-as em planilhas para gerar dashboards, conectando todos os leads com o CRM para tratamento dos dados ou construindo sistemas de atendimento com o n8n.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Implementação de Tracking (GA4 & GTM)</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Configuração pelo Google Tag Manager via native do WordPress para inserir tags em todas páginas. Monitoramento no Google Analytics para feedbacks e otimizações de performance, juntamente com a equipe de tráfego.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Integrações de Mídia</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              (Google Ads e Meta Ads). Configuração de tags rastreáveis utilizando métodos nativos de plataformas ou injeção manual na tag Head das páginas, mantendo a métrica de vendas e leads 100% precisa.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Organização de Fluxos de Dados</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Práticas ágeis (Kanban) na gestão processual. Ferramentas como Notion e ClickUp utilizadas amplamente, bem como desenvolvimento de ferramentas proprietárias para acompanhamento de progressos e aprovação de protótipos.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500 md:col-span-2">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Diagnóstico e Solução de Problemas Técnicos</h4>
            <p className="text-on-surface-variant font-sans text-sm leading-relaxed mb-6">
              Iniciado em 2016 na área de tecnologia (Grupo Marista). Minha vivência une o entendimento das "dores" dos clientes aos parâmetros técnicos necessários para resolver não apenas falhas em anúncios, mas investigar e resolver os fluxos empresariais e operacionais por completo.
            </p>
          </div>

          <div className="border border-outline-variant p-10 bg-surface group hover:border-primary transition-colors duration-500 md:col-span-2">
            <h4 className="text-2xl font-display font-bold mb-4 uppercase">Otimização & Processos Extras</h4>
            <ul className="space-y-4 font-sans text-sm text-on-surface-variant pt-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary"></div> Criação ágil de Copy's baseadas nas transcrições de reuniões gravadas com IA.</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary"></div> Gestão de repositórios de referências de UI/UX.</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary"></div> Configuração de DNS e gerenciamento de infraestrutura de hospedagens/servidores.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Statement CTA */}
      <section className="text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-primary text-on-primary py-32 px-8 flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter max-w-4xl mx-auto leading-none mb-12">
            PRONTO PARA ESCALAR?
          </h2>
          <button 
              onClick={() => setView('contact')}
              className="bg-black text-white font-sans font-bold px-12 py-5 uppercase tracking-widest text-xs transition-transform hover:scale-105"
            >
              Entrar em Contato
            </button>
        </motion.div>
      </section>
    </div>
  );
}
