import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Fantasy",
    "Mystery",
    "Science Fiction",
    "Horror",
    "Bibilography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Children Books",
    "Travel",
    "Religion",
    "Business",
    "Programming"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  
  const handleChangesSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFUrl = form.bookPDFUrl.value;


    const bookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFUrl
    }
    console.log(bookObj)

    // send data to database

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Book uploaded successfully!")
      form.reset();
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>UPLOAD A BOOK</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* 1st row */}
        <div className='flex gap-8'>
          {/* Book Title */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' placeholder="Book Name" required  type="text"/>
          </div>

          {/* authorName */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' placeholder="Author Name" required  type="text"/>
          </div>
      
        </div>

        {/* 2nd Row */}
        <div className='flex gap-8'>
          {/* Image URL */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' placeholder="Book image URL" required  type="text"/>
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangesSelectedValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option> )
              }
            </Select>

          </div>
      
        </div>
        
        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" name='bookDescription' placeholder="Write your book description..." required className='w-full' rows={6} />
        </div>

        {/* book pdn link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFUrl" value="Book PDF Url" />
          </div>
          <TextInput id="bookPDFUrl" name='bookPDFUrl' type="text" placeholder="book PDF Url" required shadow />
      </div>

      <Button type="submit" className='mt-5 bg-cyan-700 hover:bg-cyan-800'>Upload Book</Button>

      </form>
    </div>
  )
}

export default UploadBook