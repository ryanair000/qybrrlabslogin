import React from 'react';

// Assuming Header/Footer are handled by the layout app/(website)/layout.tsx

export default function SolutionsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-12 sm:text-4xl text-center">
        Innovative Solutions Tailored for You
      </h1>
      
      {/* Sample Solution Section */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden md:flex mb-12 border border-gray-200">
        {/* Image Placeholder */}
        <div className="md:w-1/2 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-8">
           {/* Placeholder Icon - Replace with actual image later */}
           <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-indigo-500 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
             <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
           </svg>
        </div>
        {/* Content */}
        <div className="md:w-1/2 p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            AI-Powered Content Automation
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Streamline your content creation workflow with our cutting-edge AI solution. Generate high-quality articles, social media posts, and marketing copy in minutes, freeing up your team to focus on strategy and growth.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Rapid content generation based on your inputs.</span>
            </li>
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Maintains brand voice and consistency.</span>
            </li>
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-green-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Integrates seamlessly with existing tools.</span>
            </li>
          </ul>
          <button className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* You can add more solution sections here following the same pattern */}

    </main>
  );
} 