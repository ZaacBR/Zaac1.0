import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { View } from '../types';
import BorderGlow from '../BorderGlow';
import { projects } from '../data';


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
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
            <CheckCircle2 className="text-primary" size={40} />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none">
          MUITO <br/>
          <span className="text-primary">OBRIGADO.</span>
        </h1>
        
        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-xl font-sans text-on-surface leading-relaxed">
            Sua mensagem foi redirecionada com sucesso. Nossa equipe já foi notificada sobre o seu interesse.
          </p>
          <div className="bg-surface border border-outline-variant p-8 inline-block">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Prazo de Resposta</p>
            <p className="text-lg font-sans text-on-surface-variant">
              Resposta média em até <span className="text-on-surface font-bold">4 horas úteis</span>.
            </p>
          </div>
        </div>

        <div className="pt-12">
          <button 
            onClick={() => setView('home')}
            className="border border-outline-variant text-on-surface font-bold px-12 py-5 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black hover:border-white flex items-center gap-2 mx-auto"
          >
            Voltar para o Início <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
