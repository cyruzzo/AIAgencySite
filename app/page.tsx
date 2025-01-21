import CTA from "components/ui/CTA";
import Features from "components/ui/Features/Features";
import Hero from "components/ui/Hero";
import SupportedFrameworks from "components/ui/SupportedFrameworks";
import TemplateCTA from "components/ui/TemplateCTA";
import FUITeamWithLargeAvatars from "../previewsComponents/FUITeamWithLargeAvatars";
import FUIPricingSectionWithBadge from "../previewsComponents/FUIPricingSectionWithBadge";
import FUIIntegrationsCard from "../previewsComponents/FUIIntegrationsCard";
import FUILogoGridWithTowRows from "../previewsComponents/FUILogoGridWithTowRows";
import FUIBlogSectionWithPostsCard from "../previewsComponents/FUIBlogSectionWithPostsCard";
import FUITestimonialWithBackgroundColor from "../previewsComponents/FUITestimonialWithBackgroundColor";
import FUIBasicSteps from "../previewsComponents/FUIBasicSteps";
import FUIStatsOnTheSide from "../previewsComponents/FUIStatsOnTheSide";
import FUIStepsWithTitlesOnTheSide from "../previewsComponents/FUIStepsWithTitlesOnTheSide";
import FUIStepsWithTitlesOnTheBottom from "../previewsComponents/FUIStepsWithTitlesOnTheBottom";

export default async () => {

  return (
    <>
      <Hero />
      <Features />
      <FUIStepsWithTitlesOnTheBottom data={[
        'Create a new account',
        'Pick a wizard',
        'Teach him something',
        'Ask him to do the job'
      ]} />
      <SupportedFrameworks />
      <FUILogoGridWithTowRows />
      <FUIStatsOnTheSide />

    <FUIIntegrationsCard />
      <TemplateCTA />
      <FUIPricingSectionWithBadge />
      <FUITestimonialWithBackgroundColor />
      <FUITeamWithLargeAvatars />
      <CTA />
    </>
  );
};
