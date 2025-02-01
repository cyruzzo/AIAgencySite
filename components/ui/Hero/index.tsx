import { IconBrandProducthunt } from "@tabler/icons-react";
import LinkItem from "../LinkItem";
import HeroBgGradientClient from "./HeroBgGradient.Client";

export default () => {
  return (
    <section className="custom-screen mt-20">
      <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
        <h1 className="text-5xl heading">
          Empower Your Business with AI Agents
        </h1>
        <p className="text-zinc-400">
          Be more productive with our AI-powered automation platform. Automate your flows and processes with ease.
          Integrations across CRMs, Email, Calendar, File Sharing Platforms, and More.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LinkItem
            href="/components"
            variant="shiny"
            className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
          >
            Get started
          </LinkItem>
          <LinkItem
            href="https://github.com/MarsX-dev/serviceautomate"
            variant="shiny"
            className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto"
            target="_blank"
          >
            <IconBrandProducthunt className="w-5 h-5" />
            Star on ProductHunt
          </LinkItem>
        </div>
      </div>
      <HeroBgGradientClient />
    </section>
  );
};
