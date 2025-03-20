import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBooks = async (search = "") => {
    try {
      setLoading(true);
      const url = `http://localhost:5000/all-books${search ? `?search=${search}` : ""}`;
      const response = await fetch(url);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks(searchQuery);
  };

  return (
    <div className='mt-28 px-4 lg:px-24 bg-teal-100 min-h-screen'>
      <div className='flex flex-col items-center gap-4 mb-8'>
        <h2 className='text-5xl font-bold text-center'>All Books are here</h2>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className='w-full max-w-md flex gap-2'>
          <input
            type="text"
            placeholder="Search a book"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-teal-500'
          />
          <button
            type="submit"
            className='px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors'
          >
            Search
          </button>
        </form>
      </div>

      {loading ? (
        <div className='flex justify-center items-center min-h-[400px]'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600'></div>
        </div>
      ) : books.length === 0 ? (
        <div className='text-center text-gray-600 py-8'>
          No books found. Try a different search.
        </div>
      ) : (
        <div className='grid gap-8 my-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
          {books.map(book => (
            <Card key={book._id} className="max-w-sm">
              <img src={book.imageURL} alt={book.bookTitle} className="h-48 w-full object-cover" />
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                {book.bookTitle}
              </h5>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{book.authorName}</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-teal-100 text-teal-800">
                  {book.category}
                </span>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                {book.bookDescription || "No description available"}
              </p>
              <button className='bg-teal-600 font-semibold text-white hover:bg-orange-700 transition-all ease-in duration-200 py-2 rounded'>
                Buy Now
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Shop
