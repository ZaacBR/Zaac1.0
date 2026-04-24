import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
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
        <span className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block mb-6">{t('zaacCase.badge')}</span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none mb-8"
        >
          {t('zaacCase.title1')} <br/>
          <span className="text-primary">{t('zaacCase.title2')}</span>
        </motion.h1>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="border border-outline-variant bg-surface mb-24 overflow-hidden p-2"
      >
        <img src={zaacDesignScreenshot} alt="Zaac Design Dashboard" loading="lazy" decoding="async" className="w-full object-cover rounded-sm border border-outline-variant/30 shadow-2xl" />
      </motion.div>

      <section className="mb-32 border-b border-outline-variant pb-32">
        <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter mb-20 text-center">{t('zaacCase.interface_title')}</h2>
        <div className="space-y-32">
          {[
            { img: zaacPrint1 },
            { img: zaacPrint2 },
            { img: zaacPrint3 },
            { img: zaacPrint4 },
            { img: zaacPrint5 }
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
                  <img src={item.img} alt={t(`zaacCase.screens.${index}.title`)} loading="lazy" decoding="async" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className={`md:col-span-4 space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="text-primary font-display font-black text-4xl">0{index + 1}</div>
                <h3 className="text-2xl font-display font-bold uppercase tracking-tight">{t(`zaacCase.screens.${index}.title`)}</h3>
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">{t(`zaacCase.screens.${index}.desc`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 item-start">
        <div className="md:col-span-8 space-y-16">
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">{t('zaacCase.purpose_title')}</h2>
            <p className="text-on-surface-variant font-sans text-lg leading-relaxed">
              {t('zaacCase.purpose_desc')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">{t('zaacCase.admin_title')}</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              {[0, 1, 2, 3, 4, 5].map(i => (
                <li key={i}>
                  <Trans i18nKey={`zaacCase.admin_items.${i}`}>
                    <strong className="text-on-surface">Label:</strong> Descrição.
                  </Trans>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold mb-6 uppercase border-l-2 border-primary pl-4">{t('zaacCase.client_title')}</h2>
            <ul className="space-y-4 font-sans text-on-surface-variant leading-relaxed">
              {[0, 1, 2, 3].map(i => (
                <li key={i}>
                  <Trans i18nKey={`zaacCase.client_items.${i}`}>
                    <strong className="text-on-surface">Label:</strong> Descrição.
                  </Trans>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="md:col-span-4 space-y-12">
          <div className="border border-outline-variant p-8 bg-background">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">{t('zaacCase.stack_title')}</h3>
            <ul className="space-y-6 font-sans text-sm text-on-surface-variant">
              {[0, 1, 2, 3, 4].map(i => (
                <li key={i} className={i < 4 ? "border-b border-outline-variant/30 pb-4" : "pt-2"}>
                  <Trans i18nKey={`zaacCase.stack_items.${i}`}>
                    <strong className="block text-on-surface mb-1">Label</strong> Descrição
                  </Trans>
                </li>
              ))}
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
          <ArrowRight className="rotate-180" size={14} /> {t('zaacCase.btn_back')}
        </button>
        <button
          onClick={() => setView('portfolio')}
          className="bg-primary text-on-primary font-bold px-10 py-4 uppercase tracking-widest text-xs transition-colors hover:bg-white hover:text-black flex items-center gap-3"
        >
          {t('zaacCase.btn_all')} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
