import React, { useState } from 'react';
import logo from '../images/logo-smi-insights1.png';

const Sidebar = () => {
  
    const [open , setOpen] = useState(false);
    const Icons =[
      {title:"home",src:"home" , gap:true, active:true},
      {title:"calendar-1",src:"calendar-1"},
      {title:"Group-1",src:"Group-1"},
      {title:"Group-3",src:"Group-3" ,gap:true},
      {title:"map",src:"map", gap:true},
      {title:"Group195",src:"Group195"},
      {title:"database",src:"database"},
      {title:"Group-2",src:"Group-2"},
      {title:"archive",src:"archive"},
    ]
    return (
      <div className='flex' >
        <div 
          className={`${open ? "w-72" : "w-20"}
          'h-screen duration-200 pt-9 bg-white relative shadow-lg`}>
      
          <div>
            <img src={logo} 
              alt='logo' 
              className={`cursor-pointer  pl-1 duration-700 ${open && "rotate-[360deg]"}`}
              onClick={() => setOpen(!open)}
            />
            
          </div>
          <ul className='pt-10 pl-2 pr-2'>
            {Icons.map((icon,index)=>(
              <li key={index} 
                className={`flex items-center gap-x-6 cursor-pointer p-5 text-gray-500
                 hover:bg-myinfluence-blue  rounded-md ${icon.active? "bg-myinfluence-blue":""}  ${open? "pl-7 p-4":"place-content-center "}`}>
                <img src={require('../images/slide-menu-icons/' + icon.src + '.png')}
                alt={icon.title}/>
                <span className={`font-mono text-lg ${!open && "hidden"} origin-left duration-0 ${icon.gap ? "ml-1.5" : "" }`} >{icon.title}</span>
              </li>
            ))}
          </ul>
        </div>
        
      
      </div>
    )
  
}
export default Sidebar;