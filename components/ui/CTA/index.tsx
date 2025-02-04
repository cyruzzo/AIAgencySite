import { IconBrandTelegram, IconMail } from "@tabler/icons-react";
import LinkItem from "../LinkItem";

export default () => (
  <section className="mt-32 custom-screen">
    <div className="max-w-3xl mx-auto space-y-4 text-center">
      <h2 className="text-4xl heading">
        Make your ideas come to life with no time
      </h2>
      <p className="text-zinc-400 max-w-xl mx-auto">
        Let's start together and make your ideas come to life with our AI-powered automation platform. Automate your flows and processes with ease.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <LinkItem
          href="/"
          variant="shiny"
          className="inline-block w-full hover:bg-zinc-700 sm:w-auto"
        >
          Get started
        </LinkItem>
        <LinkItem
          href="mailto:info@altama.it"
          target="_blank"
          className="inline-block w-full sm:w-auto"
        >
          <IconMail className="inline mr-2" />
          Contact us
        </LinkItem>
      </div>
    </div>
  </section>
);
