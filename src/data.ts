import { Project } from './types';
import solarHomeSite from './solar-prints/SolarHomeSite.webp';

export const projects: Project[] = [
  {
    id: 'solar-colina-ecosystem',
    title: 'Ecossistema Solar da Colina',
    category: 'Hospitalidade & Camping',
    description: 'Sistema full-stack completo: do site de reservas à integração com Airbnb e Booking.com, centralizando toda a operação do camping em um único lugar.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Channel-Manager'],
    stats: [
      { label: 'Reservas', value: '+200%' },
      { label: 'Ocupação', value: '98%' },
      { label: 'Sincronização', value: 'Real-time' }
    ],
    image: solarHomeSite,
    logicId: 'LOGIC 01'
  },
  {
    id: 'headless-ecommerce',
    title: 'Plataforma de E-commerce Headless',
    category: 'Scalable Commerce',
    description: 'Arquitetura desacoplada garantindo performance extrema em dispositivos móveis e SEO de nível superior.',
    tags: ['Shopify', 'Bling', 'CSS', 'Mercado Pago', '+'],
    stats: [
      { label: 'Page Speed', value: '98/100' },
      { label: 'Conversão', value: '+18%' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'multi-platform-sites',
    title: 'Mais de 50 Projetos Entregues',
    category: 'Web & E-commerce',
    description: 'Experiência comprovada no desenvolvimento de dezenas de sites e lojas virtuais. Do básico bem feito com HTML, CSS e JS, até integrações complexas em plataformas líderes de mercado.',
    tags: ['HTML/CSS/JS', 'Shopify', 'Mercado Livre', 'WooCommerce', 'WordPress', '+'],
    stats: [
      { label: 'Projetos', value: '+50' },
      { label: 'Plataformas', value: 'Múltiplas' }
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200'
  }
];
