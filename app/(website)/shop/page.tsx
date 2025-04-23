import Link from 'next/link';
import Image from 'next/image'; // Using Image component

export default function ShopPage() {
  // Sample course data
  const sampleCourse = {
    title: "Introduction to AI Fundamentals",
    description: "Learn the basics of Artificial Intelligence, machine learning, and neural networks in this introductory course.",
    imageUrl: "/img/placeholder-course.jpg", // Placeholder image path
    cost: "Free",
    enrollLink: "#" // Placeholder link
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
        Our Courses
      </h1>

      <div className="mx-auto grid max-w-md gap-8 md:max-w-2xl md:grid-cols-1 lg:max-w-4xl">
        {/* Sample Course Card */}
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
          {/* Placeholder Image - using next/image */}
          <div className="relative h-48 w-full">
            <Image
              src={sampleCourse.imageUrl}
              alt={sampleCourse.title}
              fill // Use fill to cover the container
              style={{ objectFit: 'cover' }} // Ensure image covers the area
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Adjust sizes as needed
              priority // Load image eagerly if it's above the fold
            />
          </div>
          <div className="p-6">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {sampleCourse.title}
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              {sampleCourse.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600 dark:text-green-400">
                {sampleCourse.cost}
              </span>
              <Link
                href={sampleCourse.enrollLink}
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-800"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>

        {/* Add more course cards here as needed */}

      </div>
    </div>
  );
} 