import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id, bookTitle,authorName, imageURL, category, bookDescription,bookPdfUrl} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 bg-orange-100'>
        <img src={imageURL} alt="" className='h-96'/>
        <h2>{bookTitle}</h2>
        <h3>{authorName}</h3>
        <h3>{category}</h3>
        <p>{bookDescription}</p>
        <a href={bookPdfUrl} className='bg-teal-600 py-1 px-1 rounded text-white font-medium hover:bg-orange-700 transition-all ease-in duration-200 flex w-20 mt-2 block'>Download</a>
    </div>
  )
}

export default SingleBook