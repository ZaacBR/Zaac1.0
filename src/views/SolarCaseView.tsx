import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
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
  const { t } = useTranslation();
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="px-8 max-w-5xl mx-auto pb-40">
      <header className="mb-24 pt-10">
        <button 
          onClick={() => setView('portfolio')}
          className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors mb-12 flex items-center gap-2"
        >
          <ArrowRight className="rotate-180" size={16} /> {t('solarCase.btn_back')}
        </button>
        <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-6">{t('solarCase.badge')}</span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8"
        >
          {t('solarCase.title1')} <br/>
          <span className="text-primary">{t('solarCase.title2')}</span>
        </motion.h1>
        
        <div className="flex items-center gap-4 mt-8">
          <a 
            href="https://solardacolina.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-outline-variant text-on-surface font-bold px-8 py-4 uppercase tracking-widest text-[0.65rem] transition-colors hover:bg-white hover:text-black hover:border-white inline-flex items-center gap-2"
          >
            {t('solarCase.btn_system')} <ExternalLink size={14} />
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
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-20 text-center">{t('solarCase.interface_title')}</h2>
        <div className="space-y-32">
          {[
            { img: solarPrint1 },
            { img: solarPrint2 },
            { img: solarPrint3 },
            { img: solarPrint4 },
            { img: solarPrint5 },
            { img: solarPrint6 },
            { img: solarPrint7 }
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
                  <img src={item.img} alt={t(`solarCase.screens.${index}.title`)} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className={`md:col-span-4 space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="text-primary font-display font-black text-4xl">0{index + 1}</div>
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{t(`solarCase.screens.${index}.title`)}</h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">{t(`solarCase.screens.${index}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 item-start">
        <div className="md:col-span-8 space-y-16">
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">{t('solarCase.purpose_title')}</h2>
            <p className="text-on-surface-variant font-sans text-lg leading-relaxed">
              {t('solarCase.purpose_desc')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">{t('solarCase.admin_title')}</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              {[0, 1, 2, 3, 4, 5, 6].map(i => (
                <li key={i}>
                  <Trans i18nKey={`solarCase.admin_items.${i}`}>
                    <strong className="text-on-surface">Label:</strong> Descrição.
                  </Trans>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">{t('solarCase.client_title')}</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              {[0, 1, 2, 3].map(i => (
                <li key={i}>
                  <Trans i18nKey={`solarCase.client_items.${i}`}>
                    <strong className="text-on-surface">Label:</strong> Descrição.
                  </Trans>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Case Navigation */}
      <div className="mt-24 pt-12 border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-6">
        <button
          onClick={() => setView('portfolio')}
          className="text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
        >
          <ArrowRight className="rotate-180" size={14} /> {t('solarCase.btn_all')}
        </button>
        <button
          onClick={() => setView('zaac-case')}
          className="bg-primary text-on-primary font-bold px-10 py-4 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black flex items-center gap-3"
        >
          {t('solarCase.btn_next')} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
