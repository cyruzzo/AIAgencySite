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
href='https://terabrain.ai'
          className="inline-block w-full sm:w-auto"
        >
          Discover Terabrain
        </LinkItem>
      </div>
    </div>
  </section>
);
