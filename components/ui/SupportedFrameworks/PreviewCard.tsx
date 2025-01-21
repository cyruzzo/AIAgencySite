import { PlusIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Button from "../Button";
import LinkItem from "../LinkItem";
import Avatar from "boring-avatars";

const members = [
  {
    name: "John Lorin",
    email: "Dev support",
  },
  {
    name: "Chris Bondi",
    email: "Sales assistant",
  },
  {
    name: "Sarah Samson",
    email: "Team leader",
  },
  {
    name: "Joseph Smith",
    email: "Data entry specialist",
  },
];

export default () => (
  <div className="flex-1 max-w-lg mx-auto p-6 rounded-2xl bg-[#18181B]/75 hidden md:block">
    <div className="items-start justify-between sm:flex">
      <div>
        <h3 className="text-zinc-100 text-lg font-semibold">Agents Force</h3>
        <p className="mt-2 text-zinc-300 text-sm max-w-xs">
          Give your team members access to manage the system.
        </p>
      </div>
      <LinkItem className="flex-none flex items-center gap-1 rounded-lg text-xs text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 px-3 py-2" href="https://app.test.serviceautomate.com/" target="_blank">
        <PlusIcon className="w-5 h-5" />
        New agent
      </LinkItem>
    </div>
    <ul className="mt-12 divide-y divide-zinc-800">
      {members.map((item, idx) => (
        <li key={idx} className="py-5">
          <div className="flex gap-3">
            <Avatar size={48} name={item.name} variant="beam" colors={['#000', '#fff', "#000", "#fff", "#000"]}/>
            <div className="text-sm">
              <span className="block text-zinc-100 font-semibold">
                {item.name}
              </span>
              <span className="block mt-2 text-zinc-400">{item.email}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
