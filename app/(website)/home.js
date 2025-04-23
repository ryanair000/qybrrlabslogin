import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Image from "next/image";

export default function Post({ posts }) {
  // Assuming the first post is the featured one for now
  // You might want to fetch a specific featured post from Sanity later
  const featuredPost = posts?.[0];

  return (
    <>
      <Container>
        {/* New Featured Section */}
        <div className="relative mb-12 grid grid-cols-1 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 p-8 text-white shadow-lg md:grid-cols-2 md:items-center md:gap-8 md:p-12">
          {/* Text Content */}
          <div className="z-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-indigo-100">
              Featured Story
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              {/* Placeholder Title - Update with actual title later */}
              Exploring the Frontiers of AI
            </h1>
            <p className="mb-6 text-lg text-indigo-100 md:text-xl">
              {/* Placeholder Description - Update later */}
              Dive deep into the latest advancements and ethical considerations shaping the future of artificial intelligence.
            </p>
            <Link
              href="#" // TODO: Link to the actual featured post
              className="inline-block rounded-md bg-white px-6 py-3 text-base font-medium text-indigo-600 shadow-md transition duration-300 ease-in-out hover:bg-gray-100"
            >
              Read Feature
            </Link>
          </div>

          {/* Image Content - Adjusted for single image */}
          <div className="relative mt-8 h-64 md:mt-0 md:h-full">
            <Image
              src="/img/ai-featured.jpg" // Path to your image in public/img/
              alt="AI Featured Image"
              fill
              priority
              style={{ objectFit: 'cover' }}
              className="rounded-md"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
             {/* Optional: Add a subtle overlay if needed for text contrast */}
             {/* <div className="absolute inset-0 bg-black opacity-20 rounded-md"></div> */}
          </div>
        </div>

        {posts && (
          <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
            {posts.slice(0, 2).map(post => (
              <PostList
                key={post._id}
                post={post}
                aspect="landscape"
                preloadImage={true}
              />
            ))}
          </div>
        )}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {posts.slice(2, 14).map(post => (
            <PostList key={post._id} post={post} aspect="square" />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/archive"
            className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
            <span>View all Posts</span>
          </Link>
        </div>
      </Container>
    </>
  );
}
