import CTA from 'components/ui/CTA';
import Features from 'components/ui/Features/Features';
import Hero from 'components/ui/Hero';
import SupportedFrameworks from 'components/ui/SupportedFrameworks';
import TemplateCTA from 'components/ui/TemplateCTA';
import FUITeamWithLargeAvatars from '../previewsComponents/FUITeamWithLargeAvatars';
import FUIPricingSectionWithBadge from '../previewsComponents/FUIPricingSectionWithBadge';
import FUIIntegrationsCard from '../previewsComponents/FUIIntegrationsCard';
import FUILogoGridWithTowRows from '../previewsComponents/FUILogoGridWithTowRows';
import FUIBlogSectionWithPostsCard from '../previewsComponents/FUIBlogSectionWithPostsCard';
import FUITestimonialWithBackgroundColor from '../previewsComponents/FUITestimonialWithBackgroundColor';
import FUIBasicSteps from '../previewsComponents/FUIBasicSteps';
import FUILogoGrid from '../previewsComponents/FUILogoGrid';
import FUIImageFollowMouse from '../previewsComponents/FUIImageFollowMouse';

import { IconBrandGoogle, IconBrandOffice, IconBrandTelegram, IconMailAi, IconUsersGroup } from '@tabler/icons-react';
import Script from 'next/script';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default async () => {
  const integrations = [
    {
      title: 'Telegram',
      desc: 'Il tuo agente può essere contattato tramite Telegram e può ricevere messaggi vocali. Questo consente una comunicazione istantanea e l\'esecuzione di comandi a mani libere.',
      icon: <IconBrandTelegram color="#fff" size={42} />,
    },
    {
      title: 'Email',
      desc: 'Chiedi a un agente di inviare email a terzi ed eseguire operazioni in base alla risposta. Gli agenti possono monitorare la posta in arrivo e intraprendere azioni come l\'aggiornamento dei record CRM o l\'inoltro di messaggi importanti.',
      icon: <IconMailAi color="#fff" size={42} />,
    },
  ];

  const crmIntegrations = [
    {
      title: 'SuiteCRM',
      desc: 'Fai aggiungere e leggere informazioni sul CRM dai tuoi agenti, creare preventivi, allegare file. Puoi anche attivare gli agenti direttamente dal flusso di lavoro standard di SuiteCRM.',
      icon: <IconBrandOffice color="#fff" size={42} />,
      cta: 'Integrato',
    },
    {
      title: 'VTigerCRM',
      desc: 'In arrivo',
      icon: <IconBrandTelegram color="#fff" size={42} />,
      cta: 'In arrivo',
    },
    {
      title: 'DayLite CRM',
      desc: 'In arrivo',
      icon: <IconUsersGroup color="#fff" size={42} />,
      cta: 'In arrivo',
    },
  ];

  const appIntegrations = [
    {
      title: 'Office 365',
      desc: 'L\'agente può accedere al tuo calendario per programmare riunioni e accedere/archiviare i tuoi file OneDrive/SharePoint. Automatizza le attività del flusso di lavoro, i promemoria e la condivisione di file all\'interno del tuo ecosistema Microsoft.',
      icon: <IconBrandOffice color="#fff" size={42} />,
    },
    {
      title: 'Google',
      desc: 'Accedi al tuo calendario e ai file di Google Drive (In arrivo). Gli agenti IA ti assisteranno presto nell\'organizzazione dei documenti, nella pianificazione e nella collaborazione.',
      icon: <IconBrandGoogle color="#fff" size={42} />,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2WTSRB0ZG2"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];   function gtag()
        {        dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-2WTSRB0ZG2'); `}
      </Script>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js"></script>
          
      <div className='relative'>
      <Hero />
        
      <spline-viewer style={{ 
        position: 'absolute',
        top: '0',
        right: '0',
        width: '50%',
      }} url="https://prod.spline.design/zwAkmuAFIRRf7Rbj/scene.splinecode" class='lg:block md:hidden md-hidden'></spline-viewer>
        </div>   

      <Features />
      <spline-viewer url="https://prod.spline.design/9Hk-UJX7Uz9ixs6B/scene.splinecode" style={{
        position: 'relative',
      }}></spline-viewer>
      <video className="md:w-full lg:w-1/2 m-auto rounded-3xl mt-7 border-2 object-fit-contain mb-10" controls autoPlay loop muted style={{ height: '55vh', objectFit: 'cover' }}>
        <source src="/demo.mp4" type="video/mp4" />
      </video>
      <div className='relative flex flex-col items-center justify-center'>
      <div className="max-w-xl mx-auto space-y-4 text-center mt-10 pt-10" style={{height: '30vh'}} id="about">
        <h2 className="text-4xl heading">Usa le tue integrazioni preferite</h2>
        <p className="text-zinc-400">La nostra Agents Force è costruita per soddisfare le tue esigenze e può essere integrata con le tue app preferite, creando un'esperienza fluida.</p>
      </div>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.75/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/zY6WC1fMdzg8IVNF/scene.splinecode" class='xl:block lg:hidden md:hidden md-hidden' style={{ 
        position: 'absolute',
        top: '0',
        right: '0',
        width: '50%',
      }}></spline-viewer>
      </div>

      <div className="flex items-center justify-center">
      <FUIImageFollowMouse s="/integrations.png" className="m-auto w-1/3 mb-0 pulse" />

      </div>

      <div className='relative'>
        <div  className='absolute left-0 w-1/3 md:hidden lg:block top-[40%]'>
      <spline-viewer url="https://prod.spline.design/WgZXordciaDpmqxh/scene.splinecode"></spline-viewer>
      </div>

      <FUIIntegrationsCard integrations={crmIntegrations} title="Agenti che lavorano con i tuoi sistemi" desc="Collega il tuo CRM al tuo flusso di lavoro. Ottieni il meglio dal CRM integrato nei tuoi processi." />
      <FUIIntegrationsCard integrations={integrations} title="Agenti in grado di comunicare" desc="Lascia che i tuoi agenti parlino con te. Collega il tuo flusso di lavoro ai tuoi strumenti di comunicazione preferiti." />
      <FUIIntegrationsCard integrations={appIntegrations} title="Connettiti perfettamente ai tuoi sistemi" desc="Lascia che i tuoi agenti parlino con te. Collega il tuo flusso di lavoro ai tuoi strumenti di comunicazione preferiti." />
</div>
      <div className='relative flex items-center justify-center m-auto w-auto gap-10 my-6'>
        <div>
          <h2 className="text-4xl heading">Framework Supportati</h2>
          <p className="text-zinc-400">La nostra Agents Army è costruita per soddisfare le tue esigenze e può essere integrata con le tue app preferite,<br/>creando un'esperienza fluida.</p>
        </div>
      <FUILogoGrid 
      className='w-1/3'
      style={{right: '-5%'}}
      imageUrls={[
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png',
        'https://store-images.s-microsoft.com/image/apps.30616.14374512070697751.fcbc53c2-4843-4c59-aa6a-206ec85835b5.915cc067-8e3d-468b-bc6b-37c7c8d35d93',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg/1280px-Microsoft_Office_OneDrive_%282019%E2%80%93present%29.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png',
        'https://www.computerhope.com/issues/pictures/google-drive-logo.png',
        'https://community.suitecrm.com/uploads/default/original/1X/50fde6396ff43ec7974c3b4a0c7d1eae133f1ab4.png',
        'https://images.squarespace-cdn.com/content/v1/538f7ebce4b0cff6fb36b092/9b1203f8-7398-453a-ac8c-22c5d4f9c394/DayliteLogotypeBlack_1000x282.png',
        'https://www.liveagent.com/app/uploads/2020/11/vtiger_logo-185x185.png',
        'https://brandlogos.net/wp-content/uploads/2021/02/bing-logo.png'
      ]}
      />
      </div>
      <div id="pricing">
        <FUIPricingSectionWithBadge />
      </div>
      {/*<FUITeamWithLargeAvatars />*/}
      <CTA />
    </div>
  );
};