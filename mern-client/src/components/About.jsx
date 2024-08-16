import React from 'react';

const About = () => {
  return (
    <div className="about-container bg-teal-100">
      <h1 className='text-2xl font-bold leading-snug text-orange-700'>About Book Inventory Management System</h1>
      <h1 className='text-1xl font-bold leading-snug text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magnam ullam blanditiis esse voluptates tempore 
        rem enim nesciunt quaerat quod quo accusamus, qui sint, aspernatur assumenda nisi numquam asperiores architecto!</h1>
      <div className="about-columns">
        <div className="about-column">
          <img src="src/assets/banner-book/book3.png" alt="Bookshelf" className="about-image" />
          <h2>Easy Book Management</h2>
          <p>Manage your book inventory with ease, add, remove, and update book records.</p>
        </div>
        {/* <div className="about-column">
          <img src="book-search.jpg" alt="Book Search" className="about-image" />
          <h2>Powerful Search</h2>
          <p>Quickly find books by title, author, or ISBN with our powerful search functionality.</p>
        </div> */}
        <div className="about-column">
          <img src="src/assets/banner-book/book2.png" alt="Book Report" className="about-image" />
          <h2>Insightful Reporting</h2>
          <p>Generate detailed reports on book sales, inventory, and customer behavior to inform your business decisions.</p>
        </div>
        <div className="about-column">
          <img src="src/assets/banner-book/book1.jpg" alt="Book Analytics" className="about-image" />
          <h2>Data-Driven Insights</h2>
          <p>Get actionable insights into your book sales and inventory trends to optimize your business strategy.</p>
        </div>
      </div>
      <div className="about-columns">
        <div className="about-column">
          <img src="src/assets/banner-book/book4.png" alt="Book Automation" className="about-image" />
          <h2>Automated Processes</h2>
          <p>Streamline your book inventory management with automated processes, saving you time and reducing errors.</p>
        </div>
        <div className="about-column">
          <img src="src/assets/banner-book/book5.png" alt="Book Security" className="about-image" />
          <h2>Secure Data Storage</h2>
          <p>Rest assured that your book inventory data is secure and protected with our robust data storage solutions.</p>
        </div>
        {/* <div className="about-column">
          <img src="book-support.jpg" alt="Book Support" className="about-image" />
          <h2>Exceptional Support</h2>
          <p>Get help when you need it with our dedicated customer support team, available to assist you with any questions or issues.</p>
        </div> */}
        <div className="about-column">
          <img src="src/assets/banner-book/book2.png" alt="Book Integration" className="about-image" />
          <h2>Seamless Integration</h2>
          <p>Easily integrate our book inventory management system with your existing systems and processes, saving you time and effort.</p>
        </div>
      </div>
      <style>
        {`
          .about-container {
            max-width: 1400px;
            margin: 60px auto;
            padding: 20px;
            // background-color: #f9f9f9;
            border: 1px solid #ddd;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .about-columns {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .about-column {
            width: 20%;
            margin: 20px;
          }
          .about-image {
            width: 100%;
            height: 150px;
            margin-bottom: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
            margin-bottom: 10px;
          }
          p {
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default About;


// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About