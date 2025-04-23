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
        <div className="relative mb-12 grid grid-cols-1 overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white shadow-lg md:grid-cols-2 md:gap-8 md:p-12">
          {/* Text Content */}
          <div className="z-10">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-purple-100">
              Welcome to QybrrLabs
            </p>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
              Where AI Meets Real-World Impact
            </h1>
            <p className="mb-6 text-lg text-purple-100 md:text-xl">
              At QybrrLabs, we don&apos;t just talk about artificial intelligence—we build it, test it, and put it to work. This blog is your backstage pass to how AI is solving actual problems, minus the hype.
            </p>
            <Link
              href="/archive"
              className="inline-block rounded-md bg-white px-6 py-3 text-base font-medium text-purple-600 shadow-md transition duration-300 ease-in-out hover:bg-gray-100"
            >
              Explore Posts
            </Link>
          </div>

          {/* Image Content - Adjusted for single image */}
          <div className="relative mt-8 h-64 md:mt-0 md:h-full">
            <Image
              src="/img/robot-ai-automation-artificial-intelligence-ai-futuristic_10221-22832.jpg" // Path to your image in public/img/
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
