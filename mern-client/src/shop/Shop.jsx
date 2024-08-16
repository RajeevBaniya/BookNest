import React, { useEffect, useState } from 'react'

import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState ([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));
  }, [])
  return (
    <div className='mt-28 px-4lg:px24 bg-teal-100'>
        <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

        <div className='grid gap-8 my-9 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 '>
          {
            books.map(book => <Card
              className="max-w-sm"
            >
              <img src={book.imageURL} alt="" />
              <h5 className="text-1xl font-bold tracking-tight text-gray-900 dark:text-black">
                <p>
                 {book.bookTitle}
                </p>
                <p>
                {book.category}
                </p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>
                 Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.
                </p>
              </p>

              <button className='bg-teal-600 font-semibold text-white hover:bg-orange-700 transition-all ease-in duration-200 py-2 rounded'>Buy Now</button>
            </Card>)
          }
        </div>
    </div>
  )
}

export default Shop