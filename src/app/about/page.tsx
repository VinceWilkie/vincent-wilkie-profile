export const metadata = {
  title: "About",
};

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <article className="flex flex-col items-start justify-center">
      <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto px-4 py-8">
        {/* Profile Picture */}
        <FadeIn>
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
            <Image
              src="/vincent-wilkie-profile-picture.png"
              alt="Vincent Wilkie profile picture"
              width={288}
              height={288}
              className="w-full h-full object-cover rounded-full shadow-xl border-4 border-gray-100"
              priority
              quality={95}
            />
            {/* Decorative overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"></div>
          </div>
        </FadeIn>

        {/* Content */}
        <div className="space-y-4 max-w-3xl">
          <FadeIn className="space-y-3" delayMs={100}>
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Vincent Wilkie
              </h1>
              <div className="mt-3">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-base font-medium bg-blue-100 text-blue-800">
                  Full Stack Software Developer
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700">
              I'm a passionate full stack software developer who loves building <span className="font-semibold text-gray-900">delightful web experiences</span> from the ground up. Whether it's crafting pixel-perfect frontends, architecting robust backends, or exploring innovative solutions.
            </p>

            <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-700">
              My approach centers on <span className="font-semibold text-gray-900">pragmatic solutions</span>, clean user experiences, and steady iteration. I believe great software comes from understanding both the technical challenges and the human needs behind every project.
            </p>
          </FadeIn>

          <FadeIn delayMs={200}>
            <div className="pt-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">What I Do</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 max-w-2xl mx-auto">
                <div className="flex flex-col items-center justify-center h-24 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                  <svg className="w-8 h-8 text-blue-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="text-gray-700 font-medium text-center text-sm leading-tight">Frontend Development</span>
                </div>
                <div className="flex flex-col items-center justify-center h-24 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                  <svg className="w-8 h-8 text-green-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h4M7 16h4" />
                  </svg>
                  <span className="text-gray-700 font-medium text-center text-sm leading-tight">Backend Architecture</span>
                </div>
                <div className="flex flex-col items-center justify-center h-24 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                  <svg className="w-8 h-8 text-purple-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12c0 2.21 3.582 4 8 4s8-1.79 8-4" />
                  </svg>
                  <span className="text-gray-700 font-medium text-center text-sm leading-tight">Database Design</span>
                </div>
                <div className="flex flex-col items-center justify-center h-24 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                  <svg className="w-8 h-8 text-orange-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-center text-sm leading-tight">API Development</span>
                </div>
                <div className="flex flex-col items-center justify-center h-24 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                  <svg className="w-8 h-8 text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 font-medium text-center text-sm leading-tight">DevOps & Deployment</span>
                </div>
                <div className="flex flex-col items-center justify-center h-24 p-3 rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                  <svg className="w-8 h-8 text-indigo-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <span className="text-gray-700 font-medium text-center text-sm leading-tight">System Integration</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
