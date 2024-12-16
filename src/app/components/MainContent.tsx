import React from "react";

const MainContent = () => {
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div
          className="main-image h-[35rem] rounded-md overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/diagon-photos/diagon-alley-main.jpg')",
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Ollivanders</h2>
              <p className="mt-2 text-gray-300 text-sm">
                The premier wandmaker in the wizarding world, renowned for
                crafting the finest wands since 382 B.C. With a rich history of
                pairing witches and wizards with their perfect wand, each wand
                is unique and filled with magic. Discover your perfect wand from
                a trusted family legacy of craftsmanship and enchantment.
              </p>

              <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Begin Your Wand Journey</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex mt-8 md:-mx-4">
          <div
            className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style={{
              backgroundImage: "url('/diagon-photos/brooms/brooms.jpg')",
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Quality Broomsticks
                </h2>
                <p className="mt-2 text-gray-300 text-sm">
                  We offers the finest flying brooms in the wizarding world,
                  renowned for speed, durability, and style. Whether you're a
                  professional Quidditch player or a casual flyer, find your
                  perfect broom to take flight with ease and excitement.
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>Take Flight</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
            style={{
              backgroundImage:
                "url('/diagon-photos/weasleys/weasley-shop.png')",
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Weasleys' Wizard Wheezes
                </h2>
                <p className="mt-2 text-gray-400">
                  Discover the magic of mischief at Weasleys' Wizard Wheezes,
                  your one-stop shop for enchanted pranks, joke items, and
                  wizarding wonders! From Skiving Snackboxes to Peruvian Instant
                  Darkness Powder, bring a touch of wizardry to your everyday
                  fun—delivered straight to your door.
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>Conjure Now</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-gray-600 text-2xl font-medium">Featured</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage: "url('/diagon-photos/wands/wand7.jpg')",
                  backgroundSize: "14rem",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Gold Inlay Wand</h3>
                <span className="text-gray-500 mt-2">ʛ 800</span>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage: "url('/diagon-photos/brooms/broom1.jpg')",
                  backgroundSize: "14rem",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Firebolt</h3>
                <span className="text-gray-500 mt-2">ʛ 300</span>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('/diagon-photos/weasleys/fever-fudge.png')",
                }}
              >
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Fever Fudge</h3>
                <span className="text-gray-500 mt-2">Ś 7</span>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage: "url('/diagon-photos/owls/owl1.jpg')",
                }}
              >
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Barn Owl</h3>
                <span className="text-gray-500 mt-2">ʛ 10</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-gray-600 text-2xl font-medium">
            Madam Malkin's Robes for All Occasions
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('/diagon-photos/robes/slytherin-robe.jpg')",
                }}
              >
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">
                  Slytherin House Robe
                </h3>
                <span className="text-gray-500 mt-2">ʛ 5</span>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('/diagon-photos/robes/gryffindor-robe.jpg')",
                }}
              >
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Man Mix</h3>
                <span className="text-gray-500 mt-2">ʛ 5</span>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('/diagon-photos/robes/ravenclaw-robe.jpg')",
                }}
              >
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">Classic watch</h3>
                <span className="text-gray-500 mt-2">ʛ 5</span>
              </div>
            </div>
            <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                className="flex items-end justify-end h-56 w-full bg-cover"
                style={{
                  backgroundImage:
                    "url('/diagon-photos/robes/hufflepuff-robe.jpg')",
                }}
              >
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </div>
              <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">woman mix</h3>
                <span className="text-gray-500 mt-2">ʛ 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
