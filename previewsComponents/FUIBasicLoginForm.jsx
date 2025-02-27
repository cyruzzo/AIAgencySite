import React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import * as Tabs from "@radix-ui/react-tabs";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIBasicLoginForm() {
    return (
        <main className="w-full h-[700px] flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src="https://terabrain.ai/logo.svg" width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <a href="javascript:void(0)" className="font-medium text-yellow-600 hover:text-yellow-500">Sign up</a></p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-yellow-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-600 rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                    <div className="text-center">
                        <a href="javascript:void(0)" className="hover:text-yellow-600">Forgot password?</a>
                    </div>
                </form>
            </div>
        </main>
    )
}
        