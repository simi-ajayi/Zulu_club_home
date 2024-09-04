import React from "react";

const Pricecard = () => {
  const data = [
    {
      planeName: "Bronze Plan",
      price: "Free",
      b1: "Customizable Outlet",
      b2: "POS & payments",
      b3: "Order tracking",
      b4: "Zulu B2B Market",
    },
    {
      planeName: "Silver Plan",
      price: "₹2,500",
      b1: "Branded Website",
      b2: " Order, Payment, Shipping",
      b3: "CRM & Loyalty plan",
      b4: "Open your bulk outlet",
    },
    {
      planeName: "Gold Plan",
      price: "₹5,000",
      b1: "Branded website & App",
      b2: "HQ catalog - AI content",
      b3: "Manage your team online",
      b4: "Exclusive Brand Partnerships",
    },
  ];
  return (
    <section class="bg-transparent mt-20">
      <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div class="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            ZULU Club has many tiers - choose your plan wisely
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Start your 15 day free trial now to avail the BRAND experience
          </p>
        </div>
        <div class="space-y-8 w-full lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {data.map((item, index) => (
            <div
              key={index}
              class="flex flex-col p-6 mx-auto w-[90%] text-center bg-white text-black rounded-lg border border-gray-100 shadow xl:p-8"
            >
              <h3 class="mb-4 text-2xl font-semibold">{item.planeName}</h3>
              <p class="font-light sm:text-lg">
                {/* Best option for personal use & for your next project. */}
              </p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">{item.price}</span>
                <span class="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{item.b1}</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{item.b2}</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{item.b3}</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>{item.b4}</span>
                </li>
              </ul>
              <a
                href="#"
                class="text-black bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricecard;
