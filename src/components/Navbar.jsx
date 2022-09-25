
import icon from '../images/slide-menu-icons/calendar-1.png'

export default function Navbar() {
    
    return (
        <>
        <div className="flex flex-wrap py-2">
          <div className="w-full px-0">
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  rounded">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                  <h1
                    className="text-md font-bold  pr-5  py-2  text-myinfluence-profile-text"
                  >
                    Summary dashboard: Drope facts
                  </h1>
                  
                </div>
                <div
                  className={
                    "lg:flex flex-grow items-center"
                  }
                  
                >
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="nav-item">
                      <button className="bg-transparent pl-5 pr-5 hover:bg-myinfluence-button text-myinfluence-button font-semibold hover:text-white py-2 px-4 border border-myinfluence-button hover:border-transparent rounded"
                       // className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        >
                        Customize a period
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        
                        className="bg-myinfluence-button ml-3 pl-9 pr-9 hover:bg-myinfluence-button text-white font-semibold py-2 px-4 border border-myinfluence-button rounded"
                       // className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        
                      >
                        Select a period
                      </button>
                    </li>
                    <li className="nav-item">
                      <button className="bg-transparent ml-12 mr-3 pl-6 pr-6 flex hover:bg-myinfluence-button text-myinfluence-button font-semibold hover:text-white py-2 px-4 border border-myinfluence-button hover:border-transparent rounded"
                        //className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        
                      >
                        <img className='pr-2 pt-1' src={icon} alt='icon' />Tout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
    )}
  /*
  <div className='justify-end  flex'>
                <h2 className=' text-myinfluence-button'>
                    Period
                </h2>
            </div>

            <div className="flex">
                <div className=''>
                    <h1 className='text-myinfluence-profile-text font-bold '>
                        Summary dashboard: Drope facts
                    </h1>  
                </div>
                <div className='flex'>
                    <button class="bg-transparent hover:bg-myinfluence-button text-myinfluence-button font-semibold hover:text-white py-2 px-4 border border-myinfluence-button hover:border-transparent rounded">
                    Customize a period
                    </button>
                    <button class="bg-myinfluence-button hover:bg-myinfluence-button text-white font-semibold py-2 px-4 border border-myinfluence-button rounded">
                        Select a period
                    </button>
                    <button  class="bg-transparent pl-5 flex hover:bg-myinfluence-button text-myinfluence-button font-semibold hover:text-white py-2 px-4 border border-myinfluence-button hover:border-transparent rounded">
                        <img className='pt-1' src={icon} />Tout
                    </button>
                </div>
                
            </div> 
  */