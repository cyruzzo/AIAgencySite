import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIVerticalTabs() {
  
  const [selectedTab, setSelectedTab] = React.useState("Overview");
  const tabItems = [
    "Overview",
    "Integration",
    "Billing",
    "Transactions",
    "plans",
  ];

  return (
    <Tabs.Root
      className="max-w-screen-xl mx-auto mt-4 px-4 md:px-8"
      value={selectedTab}
      onValueChange={(val) => setSelectedTab(val)}
      orientation="vertical"
    >
      <Tabs.List
        className="hidden border-l flex-col justify-start items-start gap-y-3 text-sm sm:flex"
        aria-label="Manage your account"
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className="group outline-none px-1.5 border-l-2 border-white text-gray-500 data-[state=active]:border-yellow-600 data-[state=active]:text-yellow-600"
            value={item}
          >
            <div className="py-1.5 px-3 rounded-lg duration-150 group-hover:text-yellow-600 group-hover:bg-gray-100 font-medium">
              {item}
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className="relative text-gray-500 sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <select
          value={selectedTab}
          className="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-yellow-600 text-sm"
          onChange={(e) => setSelectedTab(e.target.value)}
        >
          {tabItems.map((item, idx) => (
            <option key={idx} idx={idx}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className="py-6" value={item}>
          <p className="text-xs leading-normal">
            This is <b>{item}</b> Tab
          </p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

        