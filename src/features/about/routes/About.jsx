import { MainLayout } from "components/layouts";
import React from "react";

export const About = () => {
  return (
    <MainLayout>
      <div class="py-16">
        <div class="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
          <div>
            <h2 class="mt-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              A technology-first approach to portfolio management
            </h2>
          </div>
          <div class="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="space-y-16">
                <div
                  aria-hidden="true"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 dark:bg-gray-700"
                >
                  <span class="font-bold text-pink-600 dark:text-pink-300">
                    1
                  </span>
                </div>
                <div class="space-y-4">
                  <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
                    Customized portfolio
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Create a portfolio that is uniquely yours. Add your own text
                    and images, or choose from our curated collections.
                  </p>
                </div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7983/7983132.png"
                  class="w-16"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
              </div>
            </div>
            <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="space-y-16">
                <div
                  aria-hidden="true"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 dark:bg-gray-700"
                >
                  <span class="font-bold text-pink-600 dark:text-pink-300">
                    2
                  </span>
                </div>
                <div class="space-y-4">
                  <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
                    Social Media
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Connect your social media accounts to automatically share
                    your portfolio with your followers.
                  </p>
                </div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7983/7983306.png"
                  class="w-16"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
              </div>
            </div>
            <div class="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div class="space-y-16">
                <div
                  aria-hidden="true"
                  class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 dark:bg-gray-700"
                >
                  <span class="font-bold text-purple-600 dark:text-purple-300">
                    3
                  </span>
                </div>
                <div class="space-y-4">
                  <h3 class="text-2xl font-semibold text-gray-800 transition dark:text-white">
                    Your work
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300">
                    Add your work to your portfolio. You can add images, videos,
                    and links to your work.
                  </p>
                </div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7983/7983333.png"
                  class="w-16"
                  width="512"
                  height="512"
                  alt="burger illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
