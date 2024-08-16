import React from 'react'
import FavBookImg from "../assets/favouritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
        </div>

        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span 
            className='text-orange-700'>Book Here!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam modi dolores natus odit, porro nostrum provident placeat,
               asperiores alias, necessitatibus deserunt laudantium exercitationem ea eum dolorem quia nam quod. Laborum!</p>
               {/* stats */}
               <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>700+</h3>
                        <p className='text-base'>Book Listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>450+</h3>
                        <p className='text-base'>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>1000+</h3>
                        <p className='text-base'>PDF Downloads</p>
                    </div>
               </div>

               <Link to="/shop" className='mt-12 block'><button className='bg-teal-600 text-white font-semibold px-5 py-2 rounded hover:bg-orange-700 tansition-all duration-300'>
                Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook
