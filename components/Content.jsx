import React from 'react';
import Article from './Article2';
import article from './article.json';

function Content() {
  return (
    <div className='relative'>
      <div className='mt-4 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 px-4'>
        <div className="flex-center rounded-lg bg-gray-700 p-4 text-center text-2xl font-bold text-white lg:text-3xl">
          Are you aware that you have {article.length} items?
        </div>
        {article.map((item, index) => (
          <Article
            key={index}
            price={item.price}
            time={item.time}
            itemName={item['item-name']}
            img={item.img}
          />
        ))}
      </div>
      <div className="overlay fixed top-0 z-50 opacity-100 left-0 w-screen h-screen bg-gray-400/10 transition-all hidden"></div>
    </div>
  );
}

export default Content;
