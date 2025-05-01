import React from 'react';

// Assuming Header/Footer are handled by the layout app/(website)/layout.tsx

export default function PricingPage() {
  return (
    // Commenting out original page content
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
       <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-8 sm:text-4xl text-center">
         Pricing
       </h1>
       <div className="text-center text-gray-500 py-10">
         Pricing information is currently unavailable.
       </div>
    </main>
    /*
    <main className="bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 sm:text-5xl lg:text-6xl mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-center text-xl text-gray-500 mb-16">
          Choose the plan that's right for your needs. No hidden fees.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-stretch">
          {/* Pricing Card 1: Free */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
              <div>
                <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-purple-100 text-purple-800">
                  Free
                </h3>
              </div>
              <div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900">
                $0
                <span className="ml-1 text-2xl font-medium text-gray-500">/mo</span>
              </div>
              <p className="mt-5 text-lg text-gray-500">Perfect for getting started and exploring.</p>
            </div>
            <div className="flex-1 px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
              <ul role="list" className="space-y-4">
                {[ 
                  'Access to basic AI tools',
                  '100 generations per month',
                  'Community support'
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
             <div className="px-6 pb-8 sm:px-10">
               <button className="mt-8 block w-full bg-gray-200 border border-transparent rounded-md py-3 px-6 text-base font-medium text-gray-700 hover:bg-gray-300">
                  Current Plan
                </button>
             </div>
          </div>

          {/* Pricing Card 2: Pro */}
          <div className="flex flex-col rounded-lg border-2 border-purple-600 bg-white shadow-xl overflow-hidden transform scale-105">
            <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
              <div>
                <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-purple-100 text-purple-800">
                  Pro
                </h3>
              </div>
              <div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900">
                $19
                <span className="ml-1 text-2xl font-medium text-gray-500">/mo</span>
              </div>
              <p className="mt-5 text-lg text-gray-500">Ideal for professionals and power users.</p>
            </div>
            <div className="flex-1 px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
              <ul role="list" className="space-y-4">
                {[
                  'Access to all AI tools',
                  'Unlimited generations',
                  'Priority email support',
                  'Early access to new features'
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                       <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
             <div className="px-6 pb-8 sm:px-10">
               <button className="mt-8 block w-full bg-purple-600 border border-transparent rounded-md py-3 px-6 text-base font-medium text-white hover:bg-purple-700">
                  Get Started
                </button>
             </div>
          </div>

          {/* Pricing Card 3: Enterprise */}
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
              <div>
                <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-gray-100 text-gray-800">
                  Enterprise
                </h3>
              </div>
              <div className="mt-4 flex items-baseline text-6xl font-extrabold text-gray-900">
                Custom
              </div>
              <p className="mt-5 text-lg text-gray-500">For large teams and custom requirements.</p>
            </div>
            <div className="flex-1 px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
              <ul role="list" className="space-y-4">
                 {[
                  'Everything in Pro, plus:',
                  'Dedicated account manager',
                  'Custom integrations',
                  'Volume discounts'
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                       <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pb-8 sm:px-10">
               <button className="mt-8 block w-full bg-gray-200 border border-transparent rounded-md py-3 px-6 text-base font-medium text-gray-700 hover:bg-gray-300">
                  Contact Sales
                </button>
             </div>
          </div>

        </div>
      </div>
    </main>
    */
  );
} 