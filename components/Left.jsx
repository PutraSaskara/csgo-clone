"use client"
import React, {useState} from 'react'
import CardProfile from "./CardProfile"

function Left() {

    const [showFriends, setShowFriends] = useState(true);
    const [showHistory, setShowHistory] = useState(false);
  return (
    <>
     {/* left */}   
     <aside
        className="flex w-full flex-none flex-col items-start justify-start bg-gray-800 p-3 pb-10 text-gray-200 lg:sticky lg:left-0 lg:top-[var(--header-height)] lg:h-[calc(100vh-var(--header-height))] lg:w-96 lg:pb-4 gap-5"
        style={{ scrollbarGutter: "stable both-edges" }}
      >

        {/* Profile */}
        <div className="flex w-full">
          <div className="relative w-full">
            <input
              type="text"
              autocomplete="off"
              className="w-full rounded-md bg-gray text-gray-200 outline-none px-4 py-2.5 text-sm bg-gray rounded-r-none bg-[#202e3a]"
              placeholder="Steam ID / Steam Profile URL"
              value="76561199237032546"
            />
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 cursor-pointer w-12 p-0 rounded-l-none bg-[#3c83f6]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1rem"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
          </button>
        </div>

        <section className="flex w-full flex-col justify-start gap-6">
          <div className="flex gap-4">
            <div className="flex-center">
              <a
                className="rounded-full"
                target="_blank"
                href="https://steamcommunity.com/profiles/76561199237032546/"
              >
                <img
                  alt="McDonald is the best's avatar"
                  loading="lazy"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="rounded"
                  style={{ color: "transparent" }}
                  src="https://avatars.steamstatic.com/8862c81f51bb1d0ce83e345612b3a244d6c17698_full.jpg"
                />
              </a>
            </div>
            <div className="text-zinc-500 flex flex-col items-start justify-between">
              <a
                className="text-xl text-gray-200 hover:underline"
                target="_blank"
                href="https://steamcommunity.com/profiles/76561199237032546/"
              >
                McDonald is the best
              </a>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="1.2rem"
                    width="1.2rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>76561199237032546</span>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="1.2rem"
                    width="1.2rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Official Application</span>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="1.2rem"
                    width="1.2rem"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>Steam</span>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full">
            <div className="relative w-full">
                <input type="text" autocomplete="off" className="w-full rounded-md bg-gray text-gray-200 bg-[#202e3a] outline-none px-5 py-3 text-base pr-12" readonly="" value="https://csbackpack.net/inventory/76561199237032546"/>
                <div className="flex-center absolute -right-3 top-[80%] h-full -translate-y-1/2 pr-4">
                    <button className="relative -mr-2 h-8 w-8 rounded-md text-gray-300 hover:bg-gray-700" type="button">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="absolute-center transition-transform" height="1rem" width="1rem" xmlns="http://www.w3.org/2000/svg">
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" className="absolute-center scale-0 transition-transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>


        {/* Filter */}

        <div className="flex items-center w-full gap-4">
            <div class="flex-1 bg-gray-500/20 h-px w-full"></div>
            <h2 class="font-title text-gray-400 whitespace-nowrap">Filter</h2>
            <div class="flex-1 bg-gray-500/20 h-px w-full"></div>
        </div>

        {/* Frend List */}

        <section className="w-full text-xl ">
            <div className="flex flex-col gap-8">
                <div className="relative flex h-10 w-full rounded-md bg-gray before:absolute before:h-full before:w-1/2 before:rounded-md before:transition-transform before:content-[''] sm:hidden lg:flex bg-[#202e3a]">
                    <button
                        className={`flex-center z-10 flex-1 cursor-pointer ${showFriends ? 'bg-blue-500 text-white' : 'text-white'}`}
                        type="button"
                        onClick={() => {
                            setShowFriends(true);
                            setShowHistory(false);
                        }}
                    >
                        Friends
                    </button>
                    <button
                        className={`flex-center z-10 flex-1 cursor-pointer ${showHistory ? 'bg-blue-500 text-white' : 'text-white'}`}
                        type="button"
                        onClick={() => {
                            setShowFriends(false);
                            setShowHistory(true);
                        }}
                    >
                        History
                    </button>
                </div>

                {/* Friends and History sections */}
                <div className="block sm:hidden lg:block sm:h-[100%] lg:h-[50vh] overflow-y-auto overflow-x-hidden">
                    <div>
                        <div className="space-y-5">
                            <div className="flex h-full flex-col gap-3">
                                <div className="flex flex-1 flex-col justify-between gap-3">
                                    <div className="space-y-1 max-h-96 lg:max-h-none overflow-y-auto lg:overflow-auto">
                                        {/* Friends Section */}
                                        {showFriends && (
                                            <>
                                                <CardProfile />
                                                <CardProfile />
                                                <CardProfile />
                                                <CardProfile />
                                                <CardProfile />
                                               
                                        <div className="relative flex h-10 w-full rounded-md bg-gray before:absolute before:h-full before:w-1/2 before:rounded-md before:transition-transform before:content-[''] sm:hidden lg:flex bg-[#202e3a]">
                                            <button
                                            className={`flex-center z-10 flex-1 cursor-pointer`}
                                            type="button"
                                            >
                                                Show More Friends
                                            </button>
                                        </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="space-y-1 max-h-96 lg:max-h-none overflow-y-auto lg:overflow-auto">
                                        {/* History Section */}
                                        {showHistory && 
                                        <>
                                        <CardProfile />
                                        <div className="relative flex h-10 w-full rounded-md bg-gray before:absolute before:h-full before:w-1/2 before:rounded-md before:transition-transform before:content-[''] sm:hidden lg:flex bg-[#202e3a]">
                                            <button
                                                className={`flex-center z-10 flex-1 cursor-pointer`}
                                                type="button"
                                                >
                                                    Show More History
                                            </button>
                                        </div>
                                        </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Frend list for sm view */}
                <div className="hidden gap-20 sm:flex lg:hidden">
                    <div className="flex-1">
                        <div className="space-y-5">
                            <div className="flex h-full flex-col gap-3">
                                <div className="flex flex-1 flex-col justify-between gap-3">
                                    <div className="space-y-1 max-h-96 lg:max-h-none overflow-y-auto lg:overflow-auto">
                                        <CardProfile />
                                        <CardProfile />
                                        <CardProfile />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


      </aside>
    </>
  )
}

export default Left