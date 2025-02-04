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
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <h2 className="text-4xl heading">Our best use cases</h2>
          <p className="text-zinc-400">Service Automate offers all the vital building AI Agents you need to transform your processes into a streamless flow.</p>
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
