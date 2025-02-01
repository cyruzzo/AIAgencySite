import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IconBrandOffice, IconBrandTelegram, IconUsersGroup } from "@tabler/icons-react";

export default 

function FUIIntegrationsCard({integrations, title = "Integrations", desc = "Extend and automate your workflow by using integrations for your favorite tools."}) {


  
  return (
    <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-md">
                <h1 className="text-zinc-400 text-xl font-extrabold sm:text-2xl">{title}</h1>
                <p className="text-zinc-100 mt-2">{desc}</p>
            </div>
            <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    integrations?.map((item, idx) => (
                        <li className="border rounded-lg flex flex-col">
                            <div className="flex items-start justify-between p-4" style={{flex: "1 1"}}>
                                <div className="space-y-2">
                                    {item.icon}
                                    <h4 className="text-zinc-400 font-semibold">{item.title}</h4>
                                    <p className="text-zinc-100 text-sm">{item.desc}</p>
                                </div>
                                {item.cta && (<button className="text-zinc-400 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100" disabled>{item.cta}</button>)}
                            </div>
                            <div className="py-5 px-4 border-t text-right">
                                <a href="javascript:void(0)" className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                                    View integration
                                </a>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
)
} 

        