
export default function Navbar() {
    return (
        <nav className="flex top-0 items-center w-full fixed  backdrop-blur bg-white shadow-sm   bg-opacity-80 z-40 py-2 px-6">
            <div className='flex container w-full mx-auto justify-between flex-wrap'>

            <div className="flex items-center flex-shrink-0 text-white">
            
        </div>
        <div className="block md:hidden">
          <button className="flex items-center px-3 py-2  text-gray-800 " id="navbar-btn">
            <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block font-waheed flex-grow md:flex md:items-center md:w-auto " id="navbar">
          <div className="text-sm md:flex-grow hidden md:block  text-right">
            <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-white mr-4 text-lg">
              ހަބަރު
            </a>
            <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-white mr-4 text-lg">
              ހަބަރު
            </a>
            <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-white mr-4 text-lg">
              ހަބަރު
            </a>
            <a href="#responsive-header" className="block mt-4 md:inline-block md:mt-0 hover:text-white mr-4 text-lg">
              ހަބަރު
            </a>
          </div>
        </div>
            </div>
      </nav>
    )
  }