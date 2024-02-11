import React from 'react'

function CardProfile() {
  return (
    <div class="flex cursor-pointer gap-3 rounded-md p-2 hover:bg-gray-700">
        <figure>
            <img alt="Alexander's avatar" loading="lazy" width="60" height="60" decoding="async" data-nimg="1" class="rounded-md" src="https://avatars.steamstatic.com/18b84bca24976337ff090a6635fcc351f6fb08c2_full.jpg" style={{color: "transparent"}}/>
        </figure>
        <div class="text-zinc-500 flex flex-1 flex-col">
            <h4 class="text-xl text-gray-300 line-clamp-1">Alexander</h4>
            <div class="flex items-center gap-1 text-base">
                <span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg">
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                    </svg>
                </span>
                <p class="line-clamp-1">N/A</p>
            </div>
        </div>
    </div>

  )
}

export default CardProfile