import CTA from 'components/ui/CTA';
import Features from 'components/ui/Features/Features';
import Hero from 'components/ui/Hero';
import TemplateCTA from 'components/ui/TemplateCTA';
import FUITeamWithLargeAvatars from '../previewsComponents/FUITeamWithLargeAvatars';
import Script from 'next/script';
import FUIBannerCentred from '../previewsComponents/FUIBannerCentred';
import FUIHeroSectionWithVideo from '../previewsComponents/FUIHeroSectionWithVideo';

export default async () => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2WTSRB0ZG2"></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];   function gtag()
        {        dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-2WTSRB0ZG2'); `}
      </Script>

      <Hero />
      <FUIHeroSectionWithVideo />
      
      <FUIBannerCentred />

      <Features />
      
      <div id="products">

      <TemplateCTA />
      </div>
      <FUITeamWithLargeAvatars />
      <CTA />
    </>
  );
};
