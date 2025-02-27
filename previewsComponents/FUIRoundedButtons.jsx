import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIRoundedButtons() {
  return (
        <div className="btns-container">

        <button
            className="px-3 py-1.5 text-sm text-white duration-150 bg-yellow-600 rounded-full hover:bg-yellow-500 active:bg-yellow-700"
        >
            Button
        </button>

        <button
            className="px-4 py-2 text-white bg-yellow-600 rounded-full duration-150 hover:bg-yellow-500 active:bg-yellow-700"
        >
            Button
        </button>

        <button
            className="px-5 py-3 text-white duration-150 bg-yellow-600 rounded-full hover:bg-yellow-500 active:bg-yellow-700"
        >
            Button
        </button>

        <button
            className="px-6 py-3.5 text-white bg-yellow-600 rounded-full duration-150 hover:bg-yellow-500 active:bg-yellow-700"
        >
            Button
        </button>

        <button
            className="px-7 py-4 text-white duration-150 bg-yellow-600 rounded-full hover:bg-yellow-500 active:bg-yellow-700"
        >
            Button
        </button>

    </div>
  )
}
        