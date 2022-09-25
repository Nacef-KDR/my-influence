import React from 'react'
import { useState } from 'react';
import shopping from '../images/cards-icons/shopping-bag.png'

const Main1 = (props) => {
    
  return (
    <div>
      <div className='flex pb-8'>
                <img
                    src={props.img} alt='shopping' style={{backgroundColor:props.bgimg}}
                // style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className="bg-pink-100  rounded-sm  p-8 "
                />
                <div>
                    <p className="mt-3">
                    <span className="text-lg p-5 font-semibold">{props.title}</span>
                    
                    </p>
                    <p className="text-sm p-5 -mt-2 text-gray-400  ">{props.comment}</p>
                </div>
              </div>  
    </div>
  )
}
export default Main1;