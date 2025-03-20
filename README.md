<h1 align="center">BookNest</h1>
<h1 align="center">A modern book store application built with the MERN stack (MongoDB, Express.js, React.js, Node.js).</h1>  

## Tech Stack

### Frontend
- React.js
- Vite
- Flowbite React (UI Components)
- React Router DOM
- Chart.js & Recharts (Data Visualization)
- Swiper (Carousel)
- Firebase (Authentication)

### Backend
- Node.js
- Express.js
- MongoDB
- CORS
- dotenv

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/book-store.git
cd book-store
```

2. **Install server dependencies:**
```bash
cd mern-server
npm install
```

3. **Install client dependencies:**
```bash
cd ../mern-client
npm install
```

4. **Create a `.env` file in the server directory with your MongoDB connection string:**
```
MONGODB_URI=your_mongodb_connection_string
```

### Running the Application

**Start the server:**
```bash
cd mern-server
npm start
```

**Start the client:**
```bash
cd mern-client
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

## Project Structure

```
Book Store/
├── mern-client/         # Frontend React application
│   ├── src/
│   │   ├── dashboard/  # Dashboard components
│   │   └── ...         # Other components
│   └── package.json
├── mern-server/        # Backend Node.js application
│   ├── index.js        # Server entry point
│   └── package.json
└── README.md
```

## Features
- User authentication
- Book catalog management
- Dashboard with analytics
- Responsive design
- Real-time updates
- Data visualization

## Preview

![preview img](/preview1.png)
![preview img](/preview2.png)
![preview img](/preview3.png)

## License
This project is licensed under the MIT License.







