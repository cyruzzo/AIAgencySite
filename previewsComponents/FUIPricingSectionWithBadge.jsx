import React from 'react';

export default function FUIPricingSectionWithBadge() {
  const plans = [
    {
      name: 'Basic plan',
      desc: 'Ideal for small teams and individual projects.',
      price: 25,
      blurred: true,
      isMostPop: false,
      features: ['AI agent customization', 'Basic email integration', 'O365 integration', 'Telegram integration'],
    },
    {
      name: 'Preview',
      desc: 'Lifetime pricing for early adopters.',
      price: 89,
      clearPrice: 149,
      isMostPop: true,
      features: ['10M credits included', 'AI agent customization', 'Advanced email integration', 'O365 integration', 'File operations', 'CRM integrations'],
    },
    {
      name: 'Enterprise',
      desc: 'Best for large organizations and enterprises.',
      price: 419,
      blurred: true,
      isMostPop: false,
      features: ['100M credits included', 'Full email integration', 'O365 integration', 'File operations', 'Telegram integration', 'SuiteCRM integration'],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-zinc-100 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-zinc-400 text-3xl font-semibold sm:text-4xl">Pricing for all sizes</h3>
          <div className="mt-3 max-w-xl">
            <p>You can choose the plan that best suits your needs. If you need a custom plan, please contact us.</p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? 'mt-10' : ''} ${item.blurred ? 'filter blur-sm' : ''}`}>
              {item.isMostPop ? <span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">Most popular</span> : ''}
              <div className="p-8 space-y-4 border-b">
                <span className="text-yellow-600 font-medium">{item.name}</span>

                <div className="text-zinc-400 text-3xl font-semibold filter blur-sm">
                  € {item.price} <span className="text-xl text-zinc-100 font-normal">/mo</span>
                  {item.clearPrice && <div className="text-yellow-400 text-xl font-semibold line-through float-right transform rotate-45">€ {item.clearPrice}</div>}
                </div>
                <p>{item.desc}</p>
                <br/>
                <a className="px-3 py-3 block text-center rounded-lg w-full font-semibold text-sm duration-150 text-white bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700"
                href='mailto://info@linegon.com'
                >Request 30-day trial</a>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-zinc-400 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-400 m-5 p-5">"Limited Early Access" pricing available for early adopters. Contact us for enterprise solutions and custom integrations.</p>
        <h4 className="text-center  my-5">If you are fearful...</h4>
        <a className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700 block text-center" href='mailto://info@linegon.com'>Request a demo</a>
      </div>
    </section>
  );
}
