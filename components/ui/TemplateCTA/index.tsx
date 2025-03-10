import LinkItem from '../LinkItem';
import BgGradient from './BgGradient';
import TemplateScoresCard from './TemplateScoresCard';
import TemplatesOverview from './TemplatesOverview';

export default () => {
  var elements = [
    { title: 'AI-driven Data Classification', description: 'Agents can categorize and organize received documents, such as resumes or contracts, based on predefined rules.' },
    { title: 'Automated Workflow Execution', description: 'Trigger specific actions when new information is received, such as filing invoices or updating project boards.' },
    { title: 'Intelligent Follow-Ups', description: 'Ensure timely follow-ups by tracking conversations and automatically scheduling reminders.' },
  ];

  return (
    <section className="mt-32 border-t border-zinc-800 pt-24 relative">
      <BgGradient className="absolute inset-x-0 mx-auto duration-500 top-0" />
      <div className="custom-screen relative z-10">
        <div className="max-w-xl mx-auto space-y-4 text-center mt-10">
          <h2 className="text-4xl heading">
            Discover our best product: <b className="bg-indigo-500 heading">Terabrain ™ </b>
          </h2>
          <p className="text-zinc-400">Terabrain is a platform that enables you to create AI agents that can automate your workflow. Terabrain can be used to automate tasks, create workflows, and integrate with your favorite tools.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          <LinkItem href="https://terabrain.ai" className="inline-block w-full sm:w-auto">
            Discover Terabrain ™
          </LinkItem>
        </div>

        <div className="gap-y-6 mt-10 space-y-6 md:flex md:space-y-0 flex-col">
          {elements.map((e, index) => (
            <div key={index} className={`md:flex gap-x-6 mt-10 space-y-6 md:space-y-0 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <TemplatesOverview title={e.title} description={e.description} />
              {/* <TemplateScoresCard /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
