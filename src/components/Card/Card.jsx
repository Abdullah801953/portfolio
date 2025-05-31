import React from 'react'

const Card = () => {
    return (
        <div className=" bg-slate-300 dark:bg-[#a3a3a3] bg-clip-border text-gray-700 shadow-lg col-span-6 lg:col-span-4 w-30 h-[auto] rounded-lg bg-transparent relative">
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                <img
                    src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                    alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

            </div>

            <div className="p-6">

                <div className="mb-3 flex items-center justify-between">
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased text-gray-500 dark:text-white">
                        Wooden House, Florida
                    </h5>

                </div>

                <p className="block font-sans text-base font-light leading-relaxed text-gray-950 dark:text-gray-200 antialiased">
                    Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
                </p>

                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">




                    <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 hover:border-pink-500/10 hover:bg-pink-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                        </svg>
                    </span>

                    <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 hover:border-pink-500/10 hover:bg-pink-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                            <path d="M19.5 6h-15v9h15V6z"></path>
                            <path fill-rule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375zM3 16.875V4.875c0-.207.168-.375.375-.375h17.25c.207 0 .375.168.375.375v11.25a.375.375 0 01-.375.375H3.375A.375.375 0 013 16.875z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
