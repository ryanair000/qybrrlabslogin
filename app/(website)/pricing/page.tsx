import Link from 'next/link';

// Simple Check Icon component
const CheckIcon = () => (
  <svg className="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

export default function PricingPage() {
  const tiers = [
    {
      name: 'Free (Community)',
      priceMonthly: 0,
      priceYearly: 0,
      description: 'Get started with our core content and community.',
      features: [
        'Weekly newsletter',
        'Public blog posts',
        'Basic AI tutorials',
      ],
      bestFor: 'Casual readers, Students',
      cta: 'Get Started',
      ctaLink: '/signup', // Link to sign up page
      highlight: false,
    },
    {
      name: 'Pro (Most Popular)',
      priceMonthly: 29,
      priceYearly: 249,
      yearlyDiscount: '30% off',
      description: 'Unlock exclusive content, insights, and community access.',
      features: [
        'All free features',
        'Exclusive research reports',
        'Live Q&A sessions',
        'Private Discord access',
        'Early beta access to new tools',
      ],
      bestFor: 'Tech leads, Startup founders, Professionals',
      cta: 'Choose Pro',
      ctaLink: '#', // Placeholder for payment link
      highlight: true,
    },
    {
      name: 'Enterprise (Custom)',
      priceMonthly: 299, // Displaying monthly price for consistency, but focus is custom
      priceYearly: 2999,
      description: 'Tailored solutions and dedicated support for your organization.',
      features: [
        'All Pro features',
        '1:1 strategy consultations',
        'Custom AI use case development',
        'White-label reports option',
        'Priority support & team onboarding',
      ],
      bestFor: 'CTOs, Innovation teams, Agencies',
      cta: 'Contact Us',
      ctaLink: '/contact', // Link to contact page
      highlight: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Pricing Plans
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            QybrrLabs Insider Program - For Executives, Developers & AI Enthusiasts
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border ${tier.highlight ? 'border-indigo-500 ring-2 ring-indigo-500' : 'border-gray-200 dark:border-gray-700'} bg-white p-8 shadow-lg dark:bg-gray-800`}
            >
              <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{tier.description}</p>
              <div className="mt-6">
                <p className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ${tier.priceMonthly}
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
                </p>
                {tier.priceYearly > 0 && tier.priceMonthly > 0 && (
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    or ${tier.priceYearly}/yr
                    {tier.yearlyDiscount && <span className="ml-1 font-medium text-indigo-600 dark:text-indigo-400">({tier.yearlyDiscount})</span>}
                  </p>
                )}
              </div>

              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
                Best for: {tier.bestFor}
              </p>

              <Link
                href={tier.ctaLink}
                className={`mt-8 block w-full rounded-md px-3.5 py-2 text-center text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600' : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:hover:ring-gray-500 dark:focus-visible:outline-gray-600'}`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 