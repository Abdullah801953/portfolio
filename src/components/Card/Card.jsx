import React from 'react';

const Card = () => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-xl">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          alt="Wooden House, Florida"
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="p-6">
        <h5 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white mb-2">
          Wooden House, Florida
        </h5>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
          Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
        </p>

        <div className="mt-6 flex gap-4">
          <button
            aria-label="Like"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
            </svg>
          </button>

          <button
            aria-label="Bookmark"
            className="flex items-center justify-center w-10 h-10 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M19.5 6h-15v9h15V6z"></path>
              <path
                fillRule="evenodd"
                d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zM3 16.875V4.875c0-.207.168-.375.375-.375h17.25c.207 0 .375.168.375.375v11.25a.375.375 0 01-.375.375H3.375A.375.375 0 013 16.875z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
