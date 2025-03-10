import { IconBrandProducthunt } from '@tabler/icons-react';
import LinkItem from '../LinkItem';
import HeroBgGradientClient from './HeroBgGradient.Client';

export default () => {
  return (
    <section className="custom-screen mt-20">
      <div className="relative z-10 max-w-2xl mx-auto space-y-4 text-center">
        <h1 className="text-5xl heading my-7 py-7">
          <b className="bg-indigo-500 heading">AI Agents </b>
          to Empower Your Business
        </h1>
        <p className="text-zinc-400 py-7 my-7">
          Follow the line of AI agents that will help you automate your workflow
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <LinkItem href="https://terabrain.ai" variant="shiny" className="inline-block w-full hover:bg-zinc-700 sm:w-auto">
          Discover our products
          </LinkItem>
{/*           <LinkItem href="https://github.com/MarsX-dev/serviceautomate" variant="shiny" className="inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto" target="_blank">
            <IconBrandProducthunt className="w-5 h-5" />
            Star us on ProductHunt
          </LinkItem> */}
        </div>
      </div>
      <HeroBgGradientClient />
    </section>
  );
};
