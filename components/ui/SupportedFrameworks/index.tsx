import FrameworksTabs from "./FrameworksTabs";
import PreviewCard from "./PreviewCard";

export default () => {
  return (
    <section className="mt-32">
      <div className="custom-screen">
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <h2 className="text-4xl heading">Use your favorite integrations</h2>
          <p className="text-zinc-400">
            Our Agents Force is built to fulfill your needs and can be integrated with your favorite apps, creating a seamless experience.
          </p>
        </div>
        <div className="mt-10 flex items-center justify-between gap-x-6">
          <img src="https://cdn.dribbble.com/users/4354257/screenshots/7945713/media/42ea287e69d2050a47125201f9726561.gif" alt="React" className="w-1/3 rounded-xl" />
          <PreviewCard />
        </div>
      </div>
    </section>
  );
};
