import { ReactNode } from 'react';
import Card from './Card';
import { Icon123, IconBrandOffice, IconEdit, IconEditCircle } from '@tabler/icons-react';

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export default () => {
  const features: Feature[] = [
    {
      title: 'Perfettamente integrato',
      desc: 'TeraBrain ti consente di costruire agenti basati su bisogni e competenze specifiche.',
      icon: <Icon123 />,
    },
    {
      title: 'Completamente versatile',
      desc: 'TeraBrain è pienamente operativo e funziona in qualsiasi situazione.',
      icon: <IconBrandOffice />,
    },
    {
      title: 'Personalizzabile',
      desc: 'I tuoi agenti saranno completamente personalizzabili e potranno essere adattati alle tue esigenze.',
      icon: <IconEdit />,
    },
  ];

  return (
    <section className="custom-screen mt-32">
      <div className="max-w-xl mx-auto space-y-4 text-center">
        <h2 className="text-4xl heading">🔥 L'IA al fianco dei tuoi dipendenti</h2>
        <p className="text-zinc-400">
          TeraBrain è una piattaforma che ti permette di creare agenti IA in grado di automatizzare i tuoi flussi di lavoro e processi.
        </p>
      </div>
      <ul className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
        {features.map((item: Feature, key: number) => (
          <Card key={key} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </ul>
    </section>
  );
};