import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { View } from '../types';

export default function ThanksView({ setView }: { setView: (v: View) => void }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="px-8 max-w-5xl mx-auto pb-40 min-h-[70vh] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="flex justify-center mb-8">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            className="w-20 h-20 bg-primary/10 flex items-center justify-center border border-primary/30"
          >
            <CheckCircle2 className="text-primary" size={40} />
          </motion.div>
        </div>

        <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none">
          MUITO <br />
          <span className="text-primary">OBRIGADO.</span>
        </h1>

        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-xl font-sans text-on-surface leading-relaxed">
            Sua mensagem foi enviada com sucesso. Vou retornar em breve!
          </p>
          <div className="bg-surface border border-outline-variant p-8 inline-block">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Prazo de Resposta</p>
            <p className="text-lg font-sans text-on-surface-variant">
              Resposta média em até <span className="text-on-surface font-bold">4 horas úteis</span>.
            </p>
          </div>
        </div>

        <div className="pt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setView('home')}
            className="border border-outline-variant text-on-surface font-bold px-12 py-5 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black hover:border-white flex items-center gap-2"
          >
            Voltar para o Início <ArrowRight size={16} />
          </button>
          <button
            onClick={() => setView('portfolio')}
            className="text-on-surface-variant font-bold px-12 py-5 uppercase tracking-widest text-xs transition-colors hover:text-primary flex items-center gap-2"
          >
            Ver Portfólio
          </button>
        </div>
      </motion.div>
    </div>
  );
}
