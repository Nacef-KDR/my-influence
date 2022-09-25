import shopping from '../images/cards-icons/shopping-bag.png' 
import credit from '../images/cards-icons/credit-card.png' 
import navigation from '../images/cards-icons/navigation.png' 
import share from '../images/cards-icons/share-2.png' 
import Card from './Card'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Card1 } from './Card1'
const Statistics = (props) => {
//const percentage = 83;    
  return (
    <div>
        <h2 className="text-sm font-semibold py-4 pl-10   text-myinfluence-profile-text"
        >
            Overall Performance
        </h2>
        <div className='flex'>
        <div>
        <div className=" py-4 pl-10 flex  gap-5  ">
          
            <Card 
              img ={shopping} 
              bgimg='#ffeced'
              
              performance="1M€"
              sector="Sales"
              />

            <Card 
              img ={credit} 
              bgimg='#e2e5ec'
              
              performance="1M€"
              sector="Transactions"
              />
            
            
            
        </div>
        <div className=" py-4 pl-10 flex  gap-11  ">
           <Card1
           img ={credit} 
           bgimg='#fdf4e5'
           
           performance="43€"
           sector="Panier moyen"
           /> 
           <Card1
           img ={share} 
           bgimg='#eaf5ed'
           
           performance="689"
           sector="31K"
           />
           <Card1
           img ={navigation} 
           bgimg='#ffe1e1'
           
           performance="31K"
           sector="Number of clicks"
           />
           
             
        </div>
        </div>
        <div>
            <div className="bg-white grid justify-items-center  ml-4 shadow-lg md:w-56 lg:w-[28rem] p-14 mt-4  rounded-xl "
                style={{ width: 385, height: 385 }}>
                    
                <CircularProgressbar value={83} />
            </div>
        </div>
        </div>
        
        
        
        
    </div>
  )
}
export default Statistics

/* <h2 className="text-sm font-semibold py-4 pl-10 whitespace-nowrap  text-myinfluence-profile-text"
        >
            Overall Performance
        </h2>
        <card >
            <img src={shopping} alt='shopping' />
            <h1>1M €</h1>
            <h3> Sales</h3>
        </card>
        
        
        
        <div className="bg-white grid justify-items-center h-44 ml-5  md:w-56 lg:w-[28rem] p-5  rounded-xl "
               style={{ width: 400, height: 400 }}>
                <CircularProgressbar value={83} />
            </div>
        
        */