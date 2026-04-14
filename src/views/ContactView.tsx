import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Linkedin, Github, MessageSquare } from 'lucide-react';
import { View } from '../types';

export default function ContactView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/556192439505?text=Olá%2C%20Guilherme!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
      '_blank'
    );
    setView('thanks');
  };

  return (
    <div className="px-8 max-w-5xl mx-auto pb-40">
      <header className="mb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 text-on-surface-variant text-xs font-bold uppercase tracking-[0.3em] mb-8"
        >
          Vamos conversar
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-none mb-6"
        >
          INICIAR <br />
          <span className="text-primary">PROJETO.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant font-sans text-lg max-w-xl leading-relaxed"
        >
          Agenda aberta para novos projetos, consultorias e oportunidades. Resposta média em até <strong className="text-on-surface">4 horas úteis</strong>.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="border border-outline-variant bg-surface p-10 space-y-10"
        >
          <h2 className="text-2xl font-display font-bold uppercase">Canais Diretos</h2>

          <div className="space-y-8">
            <a
              href="mailto:Guilherme@zaac.com.br"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 border border-outline-variant flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors shrink-0">
                <Mail size={16} />
              </div>
              <div>
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant font-bold mb-1">Email Direto</div>
                <span className="font-sans font-medium text-on-surface group-hover:text-primary transition-colors">Guilherme@zaac.com.br</span>
              </div>
            </a>

            <a
              href="https://wa.me/556192439505"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group"
            >
              <div className="w-10 h-10 border border-outline-variant flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors shrink-0">
                <MessageSquare size={16} />
              </div>
              <div>
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant font-bold mb-1">WhatsApp</div>
                <span className="font-sans font-medium text-on-surface group-hover:text-primary transition-colors">+55 (61) 9243-9505</span>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant shrink-0">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-[0.6rem] tracking-[0.2em] uppercase text-on-surface-variant font-bold mb-1">Localização</div>
                <span className="font-sans font-medium text-on-surface-variant">Brasília, DF — Projetos Remotos</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="border-t border-outline-variant pt-8 flex gap-4">
            <a
              href="https://www.linkedin.com/in/guilherme-izaac/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/ZaacBR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-primary text-black p-10 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 border border-black/20 flex items-center justify-center mb-8">
              <MessageSquare size={16} />
            </div>
            <h2 className="text-2xl font-display font-bold mb-4 uppercase">Conversar Agora</h2>
            <p className="font-sans leading-relaxed text-black/70 mb-4 text-sm">
              Me conta o desafio do seu negócio — seja um novo sistema, automação de processos ou gestão de projeto.
            </p>
            <ul className="space-y-2 text-sm font-sans text-black/80">
              {['Desenvolvimento de sistemas', 'Automações & Integrações CRM', 'Gestão de projetos digitais', 'Consultoria técnica'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-black rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 space-y-3">
            <button
              onClick={handleWhatsApp}
              className="bg-black text-white font-sans font-bold uppercase tracking-widest px-8 py-5 text-xs inline-flex items-center gap-4 hover:bg-white hover:text-black transition-colors w-full justify-center"
            >
              Iniciar no WhatsApp <ArrowRight size={16} />
            </button>
            <p className="text-[0.6rem] text-center text-black/50 uppercase tracking-widest">Resposta em até 4 horas úteis</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
