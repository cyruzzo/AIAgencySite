"use client";


import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconBrandOffice, IconBrandTelegram, IconMailAi, IconUsersGroup } from "@tabler/icons-react";

type Feature = {
  title: string;
  desc: string;
  icon: ReactNode | string;
  href: string;
};

const SupportedLibraries = () => {
  const features: Feature[] = [
    {
      title: "Telegram",
      desc: "Unstyled, accessible, open source React primitives for high-quality web apps and design systems.",
      icon: <IconBrandTelegram />,
      href: "https://www.radix-ui.com/",
    },
    {
      title: "SuiteCRM",
      desc: "Unstyled, accessible components for building high‑quality design systems and web apps in Vue.",
      icon: <IconUsersGroup />,
      href: "https://www.radix-vue.com/",
    },
    {
      title: "O365",
      desc: "An open-source Svelte library for building high-quality, accessible design systems and web apps.",
      icon: <IconBrandOffice />,
      href: "https://www.melt-ui.com/",
    },
    {
      title: "Email",
      desc: "Alpine is a rugged, minimal tool for composing behavior directly in your markup.",
      icon: <IconMailAi />,
      href: "https://alpinejs.dev/",
    },
  ];

  return (
    <div className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
      {features.map((item: Feature, key: number) => (
        <Link
          href={item.href}
          key={key}
          target="_blank"
          className="no-underline relative space-y-3 w-full border border-zinc-800 rounded-lg p-5 bg-[linear-gradient(180deg,_rgba(24,_24,_27,_0.60)_0%,_rgba(24,_24,_27,_0.00)_100%)] hover:bg-zinc-900 duration-200"
        >
          <div className="text-gray-500 w-14 h-14 rounded-full bg-[linear-gradient(180deg,_rgba(39,_39,_42,_0.68)_100%,_rgba(39,_39,_42,_0.00)_100%)] flex items-center justify-center border border-zinc-700">
            {item.icon}
          </div>
          <h3 className="text-base text-zinc-100 font-semibold">
            {item.title}
          </h3>
          <p className="text-sm text-zinc-300">{item.desc}</p>
        </Link>
      ))}
    </div>
  );
};

function MeltUILogo() {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/134972826?s=200&v=4"
      width={50}
      height={50}
      alt="Melt UI"
      className="rounded-full"
    />
  );
}

export default SupportedLibraries;
