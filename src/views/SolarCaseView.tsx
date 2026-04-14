import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { View } from '../types';
import BorderGlow from '../BorderGlow';
import { projects } from '../data';

import solarAppScreenshot from '../solardash.webp';
import solarPrint1 from '../solar-prints/screencapture-solar-zaac-br-2026-04-09-00_49_59.webp';
import solarPrint2 from '../solar-prints/screencapture-solar-zaac-br-2026-04-09-00_50_23.webp';
import solarPrint3 from '../solar-prints/screencapture-solar-zaac-br-2026-04-09-00_50_36.webp';
import solarPrint4 from '../solar-prints/screencapture-solar-zaac-br-2026-04-09-00_50_51.webp';
import solarPrint5 from '../solar-prints/screencapture-solar-zaac-br-2026-04-09-00_51_04.webp';
import solarPrint6 from '../solar-prints/screencapture-solar-zaac-br-2026-04-09-00_51_34.webp';
import solarPrint7 from '../solar-prints/screencapture-solar-zaac-br-2026-04-09-00_51_45.webp';

export default function SolarCaseView({ setView }: { setView: (v: View) => void }) {
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
          SOLAR <br/>
          <span className="text-primary">DA COLINA.</span>
        </motion.h1>
        
        <div className="flex items-center gap-4 mt-8">
          <a 
            href="https://solardacolina.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-outline-variant text-on-surface font-bold px-8 py-4 uppercase tracking-widest text-[0.65rem] transition-colors hover:bg-white hover:text-black hover:border-white inline-flex items-center gap-2"
          >
            Acessar Sistema <ExternalLink size={14} />
          </a>
        </div>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border border-outline-variant bg-surface mb-24 overflow-hidden p-2"
      >
        <img src={solarAppScreenshot} alt="Solar da Colina Dashboard App" loading="lazy" decoding="async" className="w-full object-cover rounded-sm border border-outline-variant/30 shadow-2xl" />
      </motion.div>

      <section className="mb-32 border-b border-outline-variant pb-32">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-20 text-center">Interface & Operação</h2>
        <div className="space-y-32">
          {[
            { img: solarPrint1, title: "Painel de Controle", desc: "Visão geral em tempo real de ocupação, faturamento e atividades recentes em um layout limpo." },
            { img: solarPrint2, title: "Calendário de Disponibilidade", desc: "Gestão visual e intuitiva para controle de reservas e bloqueio estratégico de datas." },
            { img: solarPrint3, title: "Gestão de Acomodações", desc: "Cadastro e edição detalhada de unidades (Camping, Suítes, Chalés) com controle de capacidade." },
            { img: solarPrint4, title: "Fluxo de Check-in & Out", desc: "Monitoramento diário de chegadas e partidas, garantindo fluidez na recepção e limpeza." },
            { img: solarPrint5, title: "Gestão de Preços", desc: "Configuração de inteligência tarifária para altas temporadas e feriados programados." },
            { img: solarPrint6, title: "Diretório de Usuários", desc: "Controle rigoroso de permissões e logs de auditoria para monitorar toda a atividade administrativa." },
            { img: solarPrint7, title: "Interface Pública de Reserva", desc: "Fluxo minimalista focado em conversão para que o cliente reserve sua estadia em segundos." }
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
              Facilitar o processo de reserva para os clientes e centralizar toda a operação administrativa em uma única interface intuitiva e potente. O Solar da Colina é uma plataforma full-stack moderna desenvolvida para a gestão completa de reservas e administração de uma propriedade de hospedagem de alto fluxo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Motor Administrativo (Admin)</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              <li><strong className="text-on-surface">Dashboard de Visão Geral:</strong> Métricas instantâneas sobre taxas de ocupação, faturamento e tarefas do dia.</li>
              <li><strong className="text-on-surface">Calendário Interativo:</strong> Gestão visual e rápida para visualizar disponibilidade na linha do tempo e forçar bloqueios.</li>
              <li><strong className="text-on-surface">Quadro Kanban:</strong> Sistema ágil para movimentar reservadas baseadas no status (Pendente, Negociação, Check-in, Finalizado).</li>
              <li><strong className="text-on-surface">Gestão de Preços Dinâmicos:</strong> Setup de regras tarifárias baseadas em alta/baixa temporada e taxas adicionais escaláveis.</li>
              <li><strong className="text-on-surface">Sincronização iCal:</strong> Integração com plataformas externas como Airbnb e Booking.com.</li>
              <li><strong className="text-on-surface">Gestão de Check-in:</strong> Fluxo extremamente agilizado para recepção rápida dos hóspedes e emissão de notas.</li>
              <li><strong className="text-on-surface">Controle de Usuários:</strong> Gerenciamento de acessos e permissões para garantir o controle da operação.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">Experiência do Cliente</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              <li><strong className="text-on-surface">Catálogo de Acomodações:</strong> Visualização rica e detalhada de opções de hospedagem, incluindo Camping, Quartos e Chalés.</li>
              <li><strong className="text-on-surface">Sistema de Reserva:</strong> Fluxo minimalista e rápido, desde a escolha da data no calendário até a confirmação do pagamento final.</li>
              <li><strong className="text-on-surface">Painel do Cliente:</strong> Histórico de faturas, reservas antigas e administração fluída do perfil logado.</li>
              <li><strong className="text-on-surface">Políticas & Suporte:</strong> Páginas informativas sobre regras da casa e canais de contato com a equipe.</li>
            </ul>
          </section>
        </div>
      </div>


    </div>
  );
}
