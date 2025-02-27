import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIButtonsWithLowColors() {
  return (
    <div className="btns-container">
        <button
            className="px-3 py-1.5 text-sm text-yellow-600 duration-150 bg-yellow-50 rounded-lg hover:bg-yellow-100 active:bg-yellow-200"
        >
            Button
        </button>
        <button
            className="px-4 py-2 text-yellow-600 bg-yellow-50 rounded-lg duration-150 hover:bg-yellow-100 active:bg-yellow-200"
        >
            Button
        </button>
        <button
            className="px-5 py-3 text-yellow-600 duration-150 bg-yellow-50 rounded-lg hover:bg-yellow-100 active:bg-yellow-200"
        >
            Button
        </button>
        <button
            className="px-6 py-3.5 text-yellow-600 bg-yellow-50 rounded-lg duration-150 hover:bg-yellow-100 active:bg-yellow-200"
        >
            Button
        </button>

        <button
            className="px-7 py-4 text-yellow-600 duration-150 bg-yellow-50 rounded-lg hover:bg-yellow-100 active:bg-yellow-200"
        >
            Button
        </button>

    </div>
  )
}
        