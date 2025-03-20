const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// mongodb configuration
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://book-store:0IJjXLRbMd0k6b2J@cluster0.3firnrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const bookCollections = client.db("BookStore").collection("books");

    // inserting a book to the database using post method
    app.post("/upload-book", async(req, res) => {
        const data = req.body;
        const result = await bookCollections.insertOne(data);
        res.send(result);
    })

    // getting all books from the database with optional search query
    app.get("/all-books", async(req, res) => {
        let query = {};
        
        // Handle category filter
        if(req.query?.category) {
            query.category = req.query.category;
        }
        
        // Handle search query
        if(req.query?.search) {
            const searchRegex = new RegExp(req.query.search, 'i');
            query = {
                $or: [
                    { bookTitle: searchRegex },
                    { authorName: searchRegex },
                    { category: searchRegex }
                ]
            };
        }
        
        const result = await bookCollections.find(query).toArray();
        res.send(result);
    })

    //updating a book data: patching or updating methods
    app.patch("/book/:id", async(req, res) => {
        const id = req.params.id;
        const updateBookData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = { upsert: true };

        const updateDoc = {
            $set: {
                ...updateBookData
            }
        }

        const result = await bookCollections.updateOne(filter, updateDoc, options);
        res.send(result);
    })

    // for deleting a book data
    app.delete("/book/:id", async(req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await bookCollections.deleteOne(filter);
        res.send(result);
    })

    // to get single book data
    app.get("/book/:id", async(req, res) =>{
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result = await bookCollections.findOne(filter);
      res.send(result);
    })

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
