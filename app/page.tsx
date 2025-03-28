export default function Home() {
  return (
    <>
      <section className="relative">
        <nav className="grid md:grid-cols-6 sm:grid-cols-5 w-full  left-0 bg-slate-600 max-w-screen items-center justify-between rounded-b-3xl mt-0 p-4">
          <h1 className="col-start-1 lg:col-span-2 text-white text-9xl">- Unova National Pokedex</h1>
            
            <div className="lg:col-start-3 sm:col-start-2 col-span-2">
                <input type="text" id="searchText" placeholder="Search" className="px-5 w-full text-gray-900 border-4 border-gray-300 rounded-3xl bg-gray-50 text-base focus:ring-blue-300 focus:border-blue-300"/>
                <div className="grid grid-cols-3" id="favList"></div>
            </div>
            
            <div className="sm:col-span-2 lg:col-span-1">
                <button type="button" id="searchBtn" className="w-full mx-3 bg-blue-300 border-blue-400 hover:bg-blue-500 hover:border-blue-600 focus:ring-4 border-4 focus:ring-blue-300 rounded-3xl">Search</button>                    
            </div>
            <div className="grid grid-cols-2 sm:col-span-3 sm:col-start-6">
                <div className="justify-self-center">
                    <button type="button" id="favBtn" className="bg-blue-300 border-blue-400 hover:bg-blue-500 hover:border-blue-600 border-4 focus:ring-blue-300 rounded-3xl">
                        <img src="/img/StarOff.png" alt="Favorites Button" className="m-3 object-fill"/>
                    </button>                    
                </div>
                <div className="sm:justify-self-center lg:justify-self-start">
                    <button type="button" id="shuffleBtn" className="bg-blue-300 border-blue-400 hover:bg-blue-500 hover:border-blue-600 border-4 focus:ring-blue-300 rounded-3xl">
                        <img src="/img/Shuffle.png" alt="Shuffle" className="m-3 object-fill"/>
                    </button>                    
                </div>
            </div>
          </nav>
      </section>

    </>
  )};

    
