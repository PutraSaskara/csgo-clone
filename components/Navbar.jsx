"use client";
import React, { useState } from "react";

function Navbar() {
  // Inside your functional component
  const [showNewDiv, setShowNewDiv] = useState(false);

  // Add this function to toggle the visibility of the new div
  const toggleDiv = () => {
    setShowNewDiv(!showNewDiv);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  return (
    <>
      {/* phone view */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-900 bg-gray-950 transition-all lg:hidden">
        <div className="px-5 flex h-16 justify-between items-center">
          <div className="flex items-center gap-4">
            <svg
              onClick={toggleDiv}
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-white cursor-pointer hover:text-blue"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Ramiul6:"
              data-state="closed"
              height="2rem"
              width="2rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
            </svg>
            <a className="flex-none mr-5 -mt-2" href="/">
              <figure>
                <img
                  alt="CSBACKPACK LOGO"
                  loading="lazy"
                  width="120"
                  height="113"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="/csgobackpack.png"
                />
              </figure>
            </a>
          </div>
          <div className="h-10 text-sm">
            <a
              className="rounded inline-flex items-center gap-3 bg-blue-700 px-4 py-2 text-white font-bold hover:bg-blue-800 transition-all"
              href="https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&amp;openid.mode=checkid_setup&amp;openid.return_to=https://csbackpack.net/api/steam/login_check&amp;openid.realm=https://csbackpack.net/api/steam/login&amp;openid.identity=http://specs.openid.net/auth/2.0/identifier_select&amp;openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select"
            >
              <span className="inline">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="inline-flex"
                  color="#fff"
                  style={{ color: "#fff" }}
                  height="1.5rem"
                  width="1.5rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z"></path>
                </svg>
              </span>
              <span className="hidden lg:block">Login with Steam</span>
            </a>
          </div>
        </div>
        {/* New div to show/hide */}
        {showNewDiv && (
          <div
            data-state="open"
            className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 w-full"
            style={{ pointerEvents: "auto" }}
            data-aria-hidden="true"
            aria-hidden="true"
          >
            <div
              role="dialog"
              id="radix-:r1fp:"
              aria-describedby="radix-:r1fr:"
              aria-labelledby="radix-:r1fq:"
              data-state="open"
              class="fixed z-50 gap-4 bg-gray-900 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in border-gray inset-y-0 left-0 h-full border-r sm:max-w-sm flex flex-col max-w-full"
              tabindex="-1"
              style={{ pointerEvents: "auto" }}
            >
              <div className="flex flex-col space-y-2 text-center sm:text-left">
                <a className="flex-none mr-5 -mt-2 !m-0 w-max" href="/">
                  <figure>
                    <img
                      alt="CSBACKPACK LOGO"
                      loading="lazy"
                      width="120"
                      height="113"
                      decoding="async"
                      data-nimg="1"
                      src="/csgobackpack.png"
                      style={{ color: "transparent" }}
                    />
                  </figure>
                </a>
              </div>
              <div className="grid gap-4 py-4 text-white">
                <div>
                  <nav className="flex flex-col gap-3 text-xl text-white">
                    <div className="flex items-center hover:text-blue transition-colors">
                      <a className="flex-1" href="/">
                        Home
                      </a>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M184 112l144 144-144 144"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex items-center hover:text-blue transition-colors">
                      <a className="flex-1" href="/items">
                        Skins
                      </a>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M184 112l144 144-144 144"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex items-center hover:text-blue transition-colors">
                      <a className="flex-1" href="/cases?container_type=case">
                        Cases
                      </a>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M184 112l144 144-144 144"
                        ></path>
                      </svg>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="flex items-end gap-2 justify-between flex-1 text-lg">
                <div className="w-max z-10">
                  <div className="relative h-full">
                    <button
                      className="relative w-full cursor-default rounded-lg bg-gray-800 text-white py-2 pl-2 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-gray-500 h-full"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                      onClick={toggleDropdown}
                    >
                      <div className="flex items-center gap-2 truncate">
                        Prices from Steam
                      </div>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className={`text-violet-200 transition-transform ${
                            showDropdown ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="48"
                            d="M112 184l144 144 144-144"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  {showDropdown && (
                    <div className="absolute z-50 mt-2 w-max shadow-lg rounded-md bg-gray-800 bottom-20 left-5">
                      {/* Your dropdown content goes here */}
                      <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-blue-500"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                        <button>Price From Stem</button>
                      </div>
                      <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-blue-500"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                        <button>Price From Market</button>
                      </div>
                      <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-blue-500"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                        <button>Price Mixed</button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="w-max z-10">
                  <div className="relative h-full">
                    <button
                      className="relative w-full cursor-default rounded-lg bg-gray-800 text-white py-2 pl-2 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-gray-500 h-full"
                      id="headlessui-listbox-button-:r1gb:"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                      data-headlessui-state=""
                    >
                      <div
                        className="flex items-center gap-2 truncate"
                        onClick={toggleDropdown1}
                      >
                        <img
                          src="/united-states-flag-icon.png"
                          alt="flag"
                          className="h-4 w-4"
                        />
                        English
                      </div>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 512 512"
                          className={`text-violet-200 transition-transform ${
                            showDropdown1 ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="48"
                            d="M112 184l144 144 144-144"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  {showDropdown1 && (
                    <div className="absolute z-50 mt-2 w-max shadow-lg rounded-md bg-gray-800 bottom-20 right-2">
                      {/* Your dropdown content goes here */}
                      <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700 hover:cursor-default">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-blue-500"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                        <div className="flex items-center gap-2 truncate">
                          <img
                            src="/united-states-flag-icon.png"
                            alt="flag"
                            className="h-4 w-4"
                          />
                          English
                        </div>
                      </div>
                      <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700 hover:cursor-default">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-blue-500"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                        <div className="flex items-center gap-2 truncate">
                          <img
                            src="/united-states-flag-icon.png"
                            alt="flag"
                            className="h-4 w-4"
                          />
                          Русский
                        </div>
                      </div>
                      <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700 hover:cursor-default">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-blue-500"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                        <div className="flex items-center gap-2 truncate">
                          <img
                            src="/united-states-flag-icon.png"
                            alt="flag"
                            className="h-4 w-4"
                          />
                          Türkce
                        </div>
                      </div>
                      <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700 hover:cursor-default">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          className="text-blue-500"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          aria-hidden="true"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                        <div className="flex items-center gap-2 truncate">
                          <img
                            src="/united-states-flag-icon.png"
                            alt="flag"
                            className="h-4 w-4"
                          />
                          Deutsch
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full opacity-100 transition-opacity active:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary"
                onClick={toggleDiv}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-10 w-10 p-2 text-white hover:bg-gray rounded-full"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* web view */}

      <header className="sticky top-0 z-50 w-full border-b border-gray-900 bg-gray-950 transition-all hidden lg:block">
        <div className="px-5 flex h-16 justify-between items-center">
          <div className="flex items-center gap-1">
            <a className="flex-none mr-5 -mt-2" href="/">
              <figure>
                <img
                  alt="CSBACKPACK LOGO"
                  loading="lazy"
                  width="120"
                  height="113"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="/csgobackpack.png"
                />
              </figure>
            </a>
            <nav className="flex text-white">
              <a target="_self" href="/">
                <div className="cursor-pointer rounded-md  border-2 border-transparent px-3 py-2 transition-all hover:border-gray-700 font-bold">
                  <span className="pr-1">Home</span>
                  <span className="bg-gray-700 relative top-[-2px] right-0 text-[8px] p-1 rounded">
                    Inventory
                  </span>
                </div>
              </a>
              <a target="_self" href="/items">
                <div className="cursor-pointer rounded-md  border-2 border-transparent px-3 py-2 transition-all hover:border-gray-700 font-bold">
                  <span className="pr-1">Skins</span>
                  <span className="relative top-[-2px] right-0 text-[8px] p-1 rounded bg-red-300">
                    Deals
                  </span>
                </div>
              </a>
              <a target="_self" href="/cases?container_type=case">
                <div className="cursor-pointer rounded-md  border-2 border-transparent px-3 py-2 transition-all hover:border-gray-700 font-bold">
                  <span className="pr-1">Cases</span>
                  <span className="bg-gray-700 relative top-[-2px] right-0 text-[8px] p-1 rounded">
                    Container
                  </span>
                </div>
              </a>
              <a target="_blank" href="https://discord.gg/4Y7aDGc9MD">
                <div className="cursor-pointer rounded-md  border-2 border-transparent px-3 py-2 transition-all hover:border-gray-700 font-bold">
                  <span className="pr-1">Discord</span>
                </div>
              </a>
            </nav>
          </div>
          <div className="flex gap-2 h-10 text-sm">
            <div className="w-max z-10">
              <div className="relative h-full bg-gray-800">
                <button
                  className="relative w-full cursor-default rounded-lg bg-gray-800 text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-gray-500 h-full"
                  id="headlessui-listbox-button-:R6d6iul6:"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center gap-2 truncate">
                    Prices from Steam
                  </div>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className={`text-violet-200 transition-transform ${
                        showDropdown ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="48"
                        d="M112 184l144 144 144-144"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              {/* Conditionally render dropdown content */}
              {showDropdown && (
                <div className="absolute z-50 mt-2 w-max shadow-lg rounded-md bg-gray-800 ">
                  {/* Your dropdown content goes here */}
                  <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      className="text-blue-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    <button>Price From Stem</button>
                  </div>
                  <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      className="text-blue-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    <button>Price From Market</button>
                  </div>
                  <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      className="text-blue-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    <button>Price Mixed</button>
                  </div>
                </div>
              )}
            </div>

            <div className="w-max z-10">
              <div className="relative h-full">
                <button
                  className="relative w-full cursor-default rounded-lg bg-gray-700 text-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-gray-500 h-full"
                  id="headlessui-listbox-button-:R6l6iul6:"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                  onClick={toggleDropdown1}
                >
                  <div className="flex items-center gap-2 truncate">
                    <img
                      src="/united-states-flag-icon.png"
                      alt="flag"
                      className="h-4 w-4"
                    />
                    English
                  </div>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className={`text-violet-200 transition-transform ${
                        showDropdown1 ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        strokeWidth="48"
                        d="M112 184l144 144 144-144"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              {/* Conditionally render dropdown content */}
              {showDropdown1 && (
                <div className="absolute z-50 mt-2 w-max shadow-lg rounded-md bg-gray-800 ">
                  {/* Your dropdown content goes here */}
                  <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700 hover:cursor-default">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      className="text-blue-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    <div className="flex items-center gap-2 truncate">
                      <img
                        src="/united-states-flag-icon.png"
                        alt="flag"
                        className="h-4 w-4"
                      />
                      English
                    </div>
                  </div>
                  <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700 hover:cursor-default">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      className="text-blue-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    <div className="flex items-center gap-2 truncate">
                      <img
                        src="/united-states-flag-icon.png"
                        alt="flag"
                        className="h-4 w-4"
                      />
                      Русский
                    </div>
                  </div>
                  <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700 hover:cursor-default">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      className="text-blue-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    <div className="flex items-center gap-2 truncate">
                      <img
                        src="/united-states-flag-icon.png"
                        alt="flag"
                        className="h-4 w-4"
                      />
                      Türkce
                    </div>
                  </div>
                  <div className="text-white flex gap-2 px-4 py-2 hover:bg-gray-700 hover:cursor-default">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      className="text-blue-500"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    <div className="flex items-center gap-2 truncate">
                      <img
                        src="/united-states-flag-icon.png"
                        alt="flag"
                        className="h-4 w-4"
                      />
                      Deutsch
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              className="rounded inline-flex items-center gap-3 bg-blue-700 px-4 py-2 text-white font-bold hover:bg-blue-800 transition-all"
              href="https://steamcommunity.com/openid/login?openid.ns=http://specs.openid.net/auth/2.0&amp;openid.mode=checkid_setup&amp;openid.return_to=https://csbackpack.net/api/steam/login_check&amp;openid.realm=https://csbackpack.net/api/steam/login&amp;openid.identity=http://specs.openid.net/auth/2.0/identifier_select&amp;openid.claimed_id=http://specs.openid.net/auth/2.0/identifier_select"
            >
              <span className="inline">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="inline-flex"
                  color="#fff"
                  style={{ color: "#fff" }}
                  height="1.5rem"
                  width="1.5rem"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M395.5 177.5c0 33.8-27.5 61-61 61-33.8 0-61-27.3-61-61s27.3-61 61-61c33.5 0 61 27.2 61 61zm52.5.2c0 63-51 113.8-113.7 113.8L225 371.3c-4 43-40.5 76.8-84.5 76.8-40.5 0-74.7-28.8-83-67L0 358V250.7L97.2 290c15.1-9.2 32.2-13.3 52-11.5l71-101.7c.5-62.3 51.5-112.8 114-112.8C397 64 448 115 448 177.7zM203 363c0-34.7-27.8-62.5-62.5-62.5-4.5 0-9 .5-13.5 1.5l26 10.5c25.5 10.2 38 39 27.7 64.5-10.2 25.5-39.2 38-64.7 27.5-10.2-4-20.5-8.3-30.7-12.2 10.5 19.7 31.2 33.2 55.2 33.2 34.7 0 62.5-27.8 62.5-62.5zm207.5-185.3c0-42-34.3-76.2-76.2-76.2-42.3 0-76.5 34.2-76.5 76.2 0 42.2 34.3 76.2 76.5 76.2 41.9.1 76.2-33.9 76.2-76.2z"></path>
                </svg>
              </span>
              <span className="hidden lg:block">Login with Steam</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
