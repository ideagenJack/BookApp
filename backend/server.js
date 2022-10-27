const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 5000; 
const database = require("./database/connect");
const Book = require("./models/book")

app.use(express.json())

// This displays message that the server running and listening to specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  database.connect()
  Book.sync()
}
)
// create a GET route
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/addBook', (req, res) => {
  console.log(req.body)
  const book = Book.create({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    image: req.body.file
  })
  res.send({
    data: book
  })
})
