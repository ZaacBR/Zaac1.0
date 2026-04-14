import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { View } from '../types';
import BorderGlow from '../BorderGlow';
import { projects } from '../data';


export default function ContactView({ setView }: { setView: (v: View) => void }) {
  const handleContactClick = () => {
    // Open WhatsApp in a new tab
    window.open("https://wa.me/556192439505?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto.", "_blank");
    // Redirect the current page to the thanks view
    setView('thanks');
  };

  return (
    <div className="px-8 max-w-5xl mx-auto pb-40">
      <header className="mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-8"
        >
          INICIAR <br/>
          <span className="text-primary">PROJETO.</span>
        </motion.h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="border border-outline-variant bg-surface p-12">
          <h2 className="text-2xl font-display font-bold mb-12 uppercase">Comunicação</h2>
          <div className="space-y-12">
            <div>
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant mb-3 block font-bold">Email Direto</label>
              <a href="mailto:Guilherme@zaac.com.br" className="text-lg font-sans font-medium text-on-surface hover:text-primary transition-colors">
                Guilherme@zaac.com.br
              </a>
            </div>
            <div>
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant mb-3 block font-bold">WhatsApp</label>
              <a href="https://wa.me/556192439505" target="_blank" rel="noopener text-lg font-sans font-medium text-on-surface hover:text-primary transition-colors block">
                +55 (61) 9243-9505
              </a>
            </div>
            <div>
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant mb-3 block font-bold">Local base</label>
              <span className="text-lg font-sans font-medium text-on-surface-variant">Brasília - DF / Global</span>
            </div>
          </div>
        </div>

        <div className="bg-primary text-black p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase">Disponibilidade</h2>
            <p className="font-sans font-medium leading-relaxed max-w-sm">
              Agenda aberta para novos projetos. Resposta média em até 4 horas úteis.
            </p>
          </div>
          <div className="mt-16">
            <button 
              onClick={handleContactClick}
              className="bg-black text-white font-sans font-bold uppercase tracking-widest px-8 py-5 text-xs inline-flex items-center gap-4 hover:bg-white hover:text-black transition-colors min-w-full justify-center"
            >
               Iniciar Conversa <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
