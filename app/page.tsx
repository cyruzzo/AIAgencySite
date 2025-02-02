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
      <Hero />
      <iframe className="w-1/2 m-auto h-96 rounded-3xl mt-7" src="https://www.youtube.com/embed/ub8LcS1pdUc"></iframe>
      <Features />
      <FUIStepsWithTitlesOnTheBottom data={['Create a new account', 'Pick a wizard', 'Teach him something', 'Ask him to do the job']} />
      <SupportedFrameworks />
      {/*       <FUILogoGridWithTowRows />
      <FUIStatsOnTheSide /> */}

      <FUIIntegrationsCard integrations={crmIntegrations} title="CRM Integrations" desc="Connect your CRM to your workflow. Get the best of CRM integrated with your workflow." />
      <FUIIntegrationsCard integrations={integrations} title="Agents that can communicate" desc="Let your agents talk to you. Connect your workflow to your favorite communication tools." />
      <FUIIntegrationsCard integrations={appIntegrations} title="Connect seamlessly to your systems" desc="Let your agents talk to you. Connect your workflow to your favorite communication tools." />
      <TemplateCTA />
      <FUIPricingSectionWithBadge />
      <FUITeamWithLargeAvatars />
      <CTA />
    </>
  );
};
