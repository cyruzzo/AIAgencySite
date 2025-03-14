'use client';
import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import * as ContextMenu from '@radix-ui/react-context-menu';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import * as Tabs from '@radix-ui/react-tabs';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function FUIStepsWithTitlesOnTheBottom({ data }) {
  const [steps, setStep] = React.useState({
    stepsItems: data || ['Profile', 'Contact', 'Identity', 'Passport'],
    currentStep: 2,
  });

  return (
    <>
      <div className="max-w-xl mx-auto space-y-4 text-center mt-24">
        <h2 className="text-4xl heading">Half the time, double the results.

        </h2>
        <p className="text-zinc-400">
            Training your AI model is a breeze with our easy-to-use interface. Get started in minutes, not hours.
        </p>
      </div>
      <div className="max-w-2xl mx-auto px-4 pt-16 md:px-0">
        <ul aria-label="Steps" className="items-center text-gray-600 font-medium md:flex">
          {steps.stepsItems.map((item, idx) => (
            <li aria-current={steps.currentStep == idx + 1 ? 'step' : false} className="flex gap-x-3 md:flex-col md:flex-1 md:gap-x-0">
              <div className="flex flex-col items-center md:flex-row md:flex-1">
                <hr className={`w-full border hidden md:block ${idx == 0 ? 'border-none' : '' || steps.currentStep >= idx + 1 ? 'border-yellow-600' : ''}`} />
                <div className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${steps.currentStep > idx + 1 ? 'bg-yellow-600 border-yellow-600' : '' || steps.currentStep == idx + 1 ? 'border-yellow-600' : ''}`}>
                  <span className={`w-2.5 h-2.5 rounded-full bg-yellow-600 ${steps.currentStep != idx + 1 ? 'hidden' : ''}`}></span>
                  {steps.currentStep > idx + 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    ''
                  )}
                </div>
                <hr className={`h-12 border md:w-full md:h-auto ${idx + 1 == steps.stepsItems.length ? 'border-none' : '' || steps.currentStep > idx + 1 ? 'border-yellow-600' : ''}`} />
              </div>
              <div className="h-8 flex justify-center items-center md:mt-3 md:h-auto">
                <h3 className={`text-sm ${steps.currentStep == idx + 1 ? 'text-yellow-600' : ''}`}>{item.split('\n').map(e => <>{e}<br /></>

                )}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
