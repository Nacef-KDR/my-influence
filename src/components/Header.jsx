import React from 'react'
import pic from '../images/avatars/Image-1.png'
const Header = () => {
  return (
    
    <div className='rounded-md m-9 h-12  flex justify-end w-auto  bg-white'>
      
      <div className=' '>
        <h2 className='mt-1 -mb-2 font-bold font-mono text-myinfluence-profile-text'>John Doe</h2>
        <h3 className='pb-1  text-sm text-myinfluence-profile-text text-end'>Profile</h3>
      </div>
      <div>
        <img className='bg-myinfluence-profile-bg rounded-full m-2' src={pic} alt='pic'/>
      </div>
      
    </div>
  )
}
export default Header;

// <img src={pic} alt='pic'/>