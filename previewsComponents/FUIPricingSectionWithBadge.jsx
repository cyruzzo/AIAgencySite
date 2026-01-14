import React from 'react';

export default function FUIPricingSectionWithBadge() {
  const plans = [
    {
      name: 'Piano Base',
      desc: 'Ideale per piccoli team e progetti individuali.',
      price: 25,
      blurred: true,
      isMostPop: false,
      features: ['Personalizzazione agente IA', 'Integrazione email base', 'Integrazione O365', 'Integrazione Telegram'],
    },
    {
      name: 'Anteprima',
      desc: 'Prezzo a vita per i primi utenti (Early Adopters).',
      price: 89,
      clearPrice: 149,
      isMostPop: true,
      features: ['10M crediti inclusi', 'Personalizzazione agente IA', 'Integrazione email avanzata', 'Integrazione O365', 'Operazioni sui file', 'Integrazioni CRM'],
    },
    {
      name: 'Enterprise',
      desc: 'Il meglio per grandi organizzazioni e aziende.',
      price: 419,
      blurred: true,
      isMostPop: false,
      features: ['100M crediti inclusi', 'Integrazione email completa', 'Integrazione O365', 'Operazioni sui file', 'Integrazione Telegram', 'Integrazione SuiteCRM'],
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-zinc-100 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-zinc-400 text-3xl font-semibold sm:text-4xl">Prezzi per tutte le esigenze</h3>
          <div className="mt-3 max-w-xl">
            <p>Puoi scegliere il piano più adatto a te. Se hai bisogno di un piano personalizzato, non esitare a contattarci.</p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? 'mt-10' : ''} ${item.blurred ? 'filter blur-sm' : ''}`}>
              {item.isMostPop ? <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">Più richiesto</span> : ''}
              <div className="p-8 space-y-4 border-b">
                <span className="text-yellow-600 font-medium">{item.name}</span>

                <div className="text-zinc-400 text-3xl font-semibold filter blur-sm">
                  € {item.price} <span className="text-xl text-zinc-100 font-normal">/mese</span>
                  {item.clearPrice && <div className="text-yellow-400 text-xl font-semibold line-through float-right transform rotate-45">€ {item.clearPrice}</div>}
                </div>
                <p>{item.desc}</p>
                <br/>
                <a className="px-3 py-3 block text-center rounded-lg w-full font-semibold text-sm duration-150 text-white bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700"
                href='mailto://info@linegon.com'
                >Richiedi prova di 30 giorni</a>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-zinc-400 font-medium">
                  <p>Funzionalità</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-zinc-400 m-5 p-5">Prezzi "Limited Early Access" disponibili per i primi utenti. Contattaci per soluzioni enterprise e integrazioni personalizzate.</p>
        <h4 className="text-center  my-5">Se hai ancora dei dubbi...</h4>
        <a className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-yellow-600 hover:bg-yellow-500 active:bg-yellow-700 block text-center" href='https://outlook.office.com/owa/calendar/LinegonSRL@linegon.com/bookings/s/V3ZqIVPSfESLQQWegLVh3A2?ismsaljsauthenabled'>Richiedi una demo</a>
      </div>
    </section>
  );
}