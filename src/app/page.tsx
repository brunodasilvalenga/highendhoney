"use client";
import Image from 'next/image';
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  CheckBadgeIcon,
  ChevronDownIcon,
  FingerPrintIcon,
  MagnifyingGlassIcon,
  MinusSmallIcon,
  PlusSmallIcon,
  QuestionMarkCircleIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import { Fragment } from "react";

import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const features = [
  {
    name: "Verified",
    description:
      "Every professional undergoes a verification of their documents.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Facial recognition",
    description: "The Face must always be the same as the registered document.",
    icon: FingerPrintIcon,
  },
  {
    name: "Media 360º",
    description:
      "Verified video with body and face. It needs to be the same as the registered document.",
    icon: VideoCameraIcon,
  },
  {
    name: "FAQ",
    description: "Visit our FAQ page to get all your questions answered.",
    icon: QuestionMarkCircleIcon,
  },
];

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

const cities = [
  {
    name: "Sydney",
    imageUrl:
      "https://images.unsplash.com/photo-1590716209211-ea74d5f63573?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fFN5ZG5leXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Brisbane",
    imageUrl:
      "https://images.unsplash.com/photo-1610431009999-3f3d622888a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  },
  {
    name: "Melbourne",
    imageUrl:
      "https://images.unsplash.com/photo-1567165416885-6901968a167b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    name: "Perth",
    imageUrl:
      "https://images.unsplash.com/photo-1574471101497-d958f6e3ebd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900">
      <Navbar></Navbar>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F59E02" />
                <stop offset={1} stopColor="#F2B104" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              High end Honey
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Your gateway to a world of high-end companionship
            </p>
            <form>
              <div className="mt-10 flex items-center justify-center">
                <Menu
                  as="div"
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="relative inline-block text-left"
                >
                  <div>
                    <Menu.Button className="z-10 inline-flex flex-shrink-0 items-center rounded-l-lg border border-gray-300 bg-gray-100 py-2.5 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      Category
                      <ChevronDownIcon
                        className="ml-1 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Woman
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Men
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Trans
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full rounded-r-lg border border-l-2 border-gray-300 border-l-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:border-l-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                    placeholder="Search City, models, services..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 right-0 rounded-r-lg border border-amber-400 bg-amber-500 p-2.5 text-sm font-medium text-white hover:bg-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-300 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
                  >
                    <MagnifyingGlassIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(10%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F2B104" />
                <stop offset={1} stopColor="#F59E02" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-amber-500">
            Security
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            We take security seriously
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            We have a solid process to validate the information accurancy about
            the models.
          </p>
        </div>
        <div className="lg:mt-15 mx-auto mt-10 max-w-2xl sm:mt-20 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-5 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-14 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            We are all over australia
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Discover our nationwide presence and find the perfect model for your
            needs at a location near you. With our extensive coverage across
            Australia, you can easily connect with us and explore the range of
            models available in your area.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {cities.map((city) => (
            <li key={city.name}>
              <Image
                width={300}
                height={300}
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                src={city.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                {city.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            About us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Did you know that HIGH END HONEY is the largest advertising platform
            for escorts in the country? With over four years of experience in
            the market, the website offers free registration for advertisers and
            provides a safe and confidential space for customers seeking the
            services of sex professionals.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-900 dark:text-gray-300 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                At HEH, we believe in promoting respect for the escort
                profession and aim to showcase it as a dignified job like any
                other. We understand that open communication is essential in
                breaking taboos and prejudices, and as such, we invest in
                various channels to address the diverse topics that are part of
                the sex worker&apos;s universe.
              </p>
              <p className="mt-8">
                Our platform is committed to providing a professional and
                respectful experience for all parties involved. We take pride in
                offering our users a reliable and discreet service that upholds
                the highest standards of safety and privacy.
              </p>
              <p className="mt-8">
                Fatal Model takes user safety seriously, and as such, the
                platform has implemented various measures to combat fake
                profiles and malicious users. The dedicated team responsible for
                site security works tirelessly to develop and improve security
                features, ensuring that the platform remains a safe and
                trustworthy environment for all users.
              </p>
            </div>
            <div>
              <p>
                By choosing HIGH END HONEY, you are not only supporting the
                growth of the escort industry but also promoting a culture of
                inclusivit and acceptance. Join us today and experience the best
                that the world of escorts has to offer.
              </p>
              <p className="mt-8">
                One of the measures implemented to ensure customer satisfaction
                is the Comparison Media feature, which guarantees that the
                person a customer hires is the same individual advertised in the
                images. Additionally, the team has made it mandatory for
                advertisers to provide documentation during registration to
                avoid the creation of fake profiles and duplicate advertisements
                on the platform.
              </p>
              <p className="mt-8">
                It is important to note that while Fatal Model strives to
                maintain a secure platform, the platform cannot be held
                responsible for any incidents that occur during service
                provision. The hiring of companions takes place outside the
                platform, and as such, users must exercise caution and due
                diligence when engaging with companions found on the platform.
              </p>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
              <dt className="text-base leading-7 text-gray-900 dark:text-gray-300">
                Cities in Australia
              </dt>
              <dd className="text-3xl font-semibold tracking-tight text-amber-500">
                23
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
              <dt className="text-base leading-7 text-gray-900 dark:text-gray-300">
                Models Verified
              </dt>
              <dd className="text-3xl font-semibold tracking-tight text-amber-500">
                +370
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
              <dt className="text-base leading-7 text-gray-900 dark:text-gray-300">
                Customers satisfied
              </dt>
              <dd className="text-3xl font-semibold tracking-tight text-amber-500">
                198
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
              <dt className="text-base leading-7 text-gray-900 dark:text-gray-300">
                Searches
              </dt>
              <dd className="text-3xl font-semibold tracking-tight text-amber-500">
                +5000
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 dark:divide-gray-100/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 dark:text-gray-100">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
