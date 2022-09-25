import smartphone from '../images/cards-icons/smartphone.png'
import award from '../images/cards-icons/award.png'
import package1 from '../images/cards-icons/package.png'
import calendar from '../images/cards-icons/calendar.png'
import target from '../images/cards-icons/target.png'
import sun from '../images/cards-icons/sun.png' 
import instagram from '../images/cards-icons/instagram.png' 

import Main1 from './Main1';
const Main = () => {
  return (
    <div>
        <h2 className="text-sm font-semibold py-4 pl-10   text-myinfluence-profile-text"
        >
            Main insights
        </h2>
        <div className='flex'>
          <div  className="bg-white grid justify-items-start p-8 ml-10  shadow-lg md:w-56 lg:w-[48rem]  rounded-xl ">
            <div className='flex '>
               <div className='pr-10 mr-10'>
              <Main1 
              img={smartphone}
              bgimg='#ffeced'
              title='Mobile'
              comment='Most used device'
            />

            <Main1
              img={award}
              bgimg='#eaf5ed'
              title='Baskets'
              comment='Most popular subcat..'
            />

            <Main1
              img={package1}
              bgimg='#e2e5ec'
              title='Lorem ipsum'
              comment='Most popular product'
            />  
            </div>
            <div className='pl-10 ml-10' >
              <Main1 
              img={target}
              bgimg='#ffe1e1'
              title='Black'
              comment='Most popular color'
            />

            <Main1
              img={calendar}
              bgimg='#fdf4e5'
              title='Monday'
              comment='Star of the week'
            />

            <Main1
              img={sun}
              bgimg='#e5ecf6'
              title='Evening'
              comment='Star of the day'
            />  
            </div>
             
            </div>
            
            
              
                
              
              
            </div>  
            <div>
            <div  className=" grid justify-items-center h-96  shadow-lg md:w-56 lg:w-[18rem]  p-10  rounded-xl ">
               <div className='bg-red-500 '>
                 <img
                    src={instagram} alt='shopping'
                    // style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="bg-pink-200  rounded-full  p-4 "
                    />
                
               </div>
               
               <div className='bg-white md:w-56 lg:w-[18rem] fixed mt-52'>
                <p className="mt-12 pt-1">
                <span className="text-2xl grid justify-items-center font-semibold">Instagram</span>
                
                </p>
                <p className="text-sm w-32 text-center grid justify-items-center text-gray-400  mt-1">Most popular socila media</p>
                </div> 
                
            </div>
            </div>
        </div>
        
            
    </div>
  )
}
export default Main;