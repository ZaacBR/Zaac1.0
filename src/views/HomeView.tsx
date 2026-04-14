import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { View } from '../types';

const skills = [
  'Gestão de Projetos', 'React.js', 'TypeScript', 'n8n', 'Kommo CRM',
  'Next.js', 'Docker', 'Linux', 'REST APIs', 'Pipedrive', 'Make',
  'Node.js', 'Automação', 'Agile / Scrum', 'Google Analytics',
  'WordPress', 'UI/UX Design', 'Meta Ads', 'Google Ads', 'Webhooks',
];

function AnimatedCounter({ to, suffix = '', prefix = '' }: { to: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, to, motionVal]);

  useEffect(() => {
    return spring.on('change', (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function HomeView({ setView }: { setView: (v: View) => void }) {
  return (
    <div className="pb-40 overflow-x-hidden">
      {/* Hero: Fixed Fold CTA */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-center">
        <div className="px-8 max-w-[1400px] mx-auto w-full space-y-12 relative z-10 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-primary text-xs font-bold uppercase tracking-[0.3em]"
          >
            <div className="w-8 h-[2px] bg-primary"></div>
            Soluções Robustas, Resultados Reais
          </motion.div>
          
          <h1 className="type-giant font-display text-on-surface block">
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="block"
            >
              SOLUÇÕES
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="block text-primary"
            >
              DIGITAIS
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block text-on-surface"
            >
              SOB MEDIDA.
            </motion.span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <button 
              onClick={() => setView('contact')}
              className="bg-primary text-on-primary font-bold px-12 py-5 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black"
            >
              Iniciar Projeto
            </button>
            <button 
              onClick={() => setView('portfolio')}
              className="border border-outline-variant text-on-surface font-bold px-12 py-5 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black hover:border-white"
            >
              Ver Portfólio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Skills Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="w-full overflow-hidden border-y border-outline-variant/40 py-4 my-2"
      >
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="flex items-center gap-4 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-on-surface-variant shrink-0">
              <span className="w-1 h-1 bg-primary inline-block rounded-full"></span>
              {skill}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Metrics Strip */}
      <section className="px-8 max-w-7xl mx-auto py-20 border-b border-outline-variant">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: 15, suffix: '+', label: 'Projetos B2B\nLiderados' },
            { value: 100, suffix: '%', label: 'On-Time\nDelivery' },
            { value: 22, suffix: '%', label: 'Conversão\nMáxima Web' },
            { value: 95, suffix: '%', label: 'Redução de\nErros Operacionais' },
          ].map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl md:text-5xl font-display font-black mb-2 ${i % 2 === 0 ? 'text-primary' : 'text-on-surface'}`}>
                <AnimatedCounter to={value} suffix={suffix} />
              </div>
              <div className="text-[0.55rem] uppercase tracking-[0.2em] text-on-surface-variant font-bold leading-tight whitespace-pre-line">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Vision Section: Centralized and Concise */}
      <section className="px-8 max-w-7xl mx-auto py-28">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="w-12 h-[1px] bg-primary mx-auto"></div>
          <p className="text-lg md:text-xl text-on-surface-variant font-sans leading-relaxed">
            Unimos webdesign de alta fidelidade à implementação de sistemas robustos. Desenvolvemos propostas personalizadas que transformam complexidade em eficiência, garantindo que sua fundação digital seja sempre contínua, escalável e impecável.
          </p>
        </motion.div>
      </section>

      {/* Process: Linear Flow */}
      <section className="px-8 max-w-7xl mx-auto py-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter uppercase text-on-surface mb-6">PROCESSO</h2>
          <div className="w-full h-[1px] bg-outline-variant"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-outline-variant pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group space-y-6">
            <div className="text-8xl font-display font-black text-primary mb-8 transition-colors duration-500">01</div>
            <h3 className="text-3xl font-display font-bold tracking-tight">Estudo da Dor</h3>
            <p className="text-on-surface-variant font-sans leading-relaxed text-sm">
              Toda arquitetura brilhante nasce de um problema limitante. Antes de qualquer linha de código ou infraestrutura, mergulhamos na raiz da sua dor corporativa para entender exatamente quais gargalos estão consumindo seus recursos, corrompendo a rotina e blindando a escala natural da sua empresa.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="group space-y-6">
            <div className="text-8xl font-display font-black text-primary mb-8 transition-colors duration-500">02</div>
            <h3 className="text-3xl font-display font-bold tracking-tight">Diagnóstico Preciso</h3>
            <p className="text-on-surface-variant font-sans leading-relaxed text-sm">
              Em uma reunião de alinhamento tático, expomos as fragilidades operacionais em um mapa transparente. Dissecamos os requisitos arquitetônicos para amarrar perfeitamente as tecnologias necessárias com os processos já existentes. Traçamos conectores essenciais em comunicação com CRMs e ERPs cruciais.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="group space-y-6">
            <div className="text-8xl font-display font-black text-primary mb-8 transition-colors duration-500">03</div>
            <h3 className="text-3xl font-display font-bold tracking-tight">Proposta de Solução</h3>
            <p className="text-on-surface-variant font-sans leading-relaxed text-sm">
              Apresentamos o mapa definitivo. Uma fundação técnica customizada que centraliza operações desordenadas sem gargalos ou dependência engessada. Validamos o modelo, a velocidade da infraestrutura (Cloud), escopo assertivo e o plano de implantação sob medida para você escalar de imediato.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Block */}
      <section className="px-8 max-w-7xl mx-auto py-32 border-b border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <h2 className="text-5xl md:text-6xl font-display font-black leading-[1.1] uppercase tracking-tighter">
              A Direção da Escala <br/> <span className="text-primary italic font-light tracking-tight">Quebra <br/> </span> Sistemas Amadores.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            className="md:col-span-7 space-y-8 text-xl font-sans text-on-surface-variant leading-relaxed"
          >
            <p>
              Nós não acreditamos no conforto da superfície: enquanto os negócios delegam o controle total da sua gestão ao software fechado oferecido pelo mercado, as rupturas se tornam inevitáveis quando submetidas a uma força desproporcional. 
              As empresas perdem retenção massiva de base nas entediantes "falhas em logs de contatos" ou travamento de APIs de terceiros.
            </p>
            <p>
              Sua equipe exige automação impiedosa construída em fundações modulares. Assumindo a responsabilidade ponta-a-ponta – do Bash Script rodando invisível sob os servidores virtuais no ecossistema até o hook complexo capturando o cliente ideal –, o crescimento se estabiliza. E é o que a gestão robusta faz: previsibilidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statement CTA */}
      <section className="w-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-primary text-on-primary py-32 px-8 flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter max-w-4xl mx-auto leading-none mb-12">
            ESCALABILIDADE SEM LIMITES.
          </h2>
          <button 
              onClick={() => setView('contact')}
              className="bg-black text-white font-sans font-bold px-12 py-5 uppercase tracking-widest text-xs transition-transform hover:scale-105"
            >
              Agendar Consultoria
            </button>
        </motion.div>
      </section>
    </div>
  );
}
