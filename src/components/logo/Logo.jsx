import Image from 'next/image';
import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <Image alt='logo' src='/logo.png'   width={40}
          height={30}/>
          <span  className='text-green-700'>idz</span>-<span className='text-blue-400'>Toys</span>
            
        </div>
    );
};

export default Logo;