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
import FUIStatsOnTheSide from '../previewsComponents/FUIStatsOnTheSide';
import FUIStepsWithTitlesOnTheBottom from '../previewsComponents/FUIStepsWithTitlesOnTheBottom';
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
      desc: 'Your agent can be reached via Telegram and can receive voice messages. This enables instant communication and hands-free command execution.',
      icon: <IconBrandTelegram color="#fff" size={42} />,
    },
    {
      title: 'Email',
      desc: 'Ask an agent to send emails to third parties and perform operations based on the response. Agents can monitor inboxes and take actions like updating CRM records or forwarding important messages.',
      icon: <IconMailAi color="#fff" size={42} />,
    },
  ];

  const crmIntegrations = [
    {
      title: 'SuiteCRM',
      desc: 'Have your agents add and read information on the CRM for you, create quotes, attach files. You can also trigger the agents from the standard SuiteCRM Workflow.',
      icon: <IconBrandOffice color="#fff" size={42} />,
      cta: 'Integrated',
    },
    {
      title: 'VTigerCRM',
      desc: 'Coming soon',
      icon: <IconBrandTelegram color="#fff" size={42} />,
      cta: 'Coming soon',
    },
    {
      title: 'DayLite CRM',
      desc: 'Coming soon',
      icon: <IconUsersGroup color="#fff" size={42} />,
      cta: 'Coming soon',
    },
  ];

  const appIntegrations = [
    {
      title: 'Office 365',
      desc: 'The agent can access your calendar to schedule meetings and access and archive your OneDrive/SharePoint files. Automate workflow tasks, reminders, and file sharing within your Microsoft ecosystem.',
      icon: <IconBrandOffice color="#fff" size={42} />,
    },
    {
      title: 'Google',
      desc: 'Access your calendar and Google Drive files (Coming Soon). AI agents will soon assist with document organization, scheduling, and collaboration',
      icon: <IconBrandGoogle color="#fff" size={42} />,
    },
  ];

  return (
    <>
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
      }} url="https://prod.spline.design/zwAkmuAFIRRf7Rbj/scene.splinecode"></spline-viewer>
        </div>   

      <Features />
      <spline-viewer url="https://prod.spline.design/9Hk-UJX7Uz9ixs6B/scene.splinecode" style={{
        position: 'relative',
      }}></spline-viewer>
      <video className="w-1/2 m-auto rounded-3xl mt-7 border-2 object-fit-contain mb-10" autoPlay loop muted style={{ height: '55vh', objectFit: 'cover' }}>
        <source src="/demo.mp4" type="video/mp4" />
      </video>
      <div className="max-w-xl mx-auto space-y-4 text-center mt-10 pt-10">
        <h2 className="text-4xl heading">Use your favorite integrations</h2>
        <p className="text-zinc-400">Our Agents Force is built to fulfill your needs and can be integrated with your favorite apps, creating a seamless experience.</p>
      </div>

      <FUIIntegrationsCard integrations={crmIntegrations} title="Agents that work with your systems" desc="Connect your CRM to your workflow. Get the best of CRM integrated with your workflow." />
      <FUIIntegrationsCard integrations={integrations} title="Agents that can communicate" desc="Let your agents talk to you. Connect your workflow to your favorite communication tools." />
      <FUIIntegrationsCard integrations={appIntegrations} title="Connect seamlessly to your systems" desc="Let your agents talk to you. Connect your workflow to your favorite communication tools." />

      <div id="pricing">
        <FUIPricingSectionWithBadge />
      </div>
      <FUITeamWithLargeAvatars />
      <CTA />
    </>
  );
};
