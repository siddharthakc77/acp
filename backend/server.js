import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// connect MongoDB
mongoose.connect("mongodb://localhost:27017/library")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// test
const Book = mongoose.model("Book", {
  title: String,
  author: String
});

// insert test book
app.get("/add", async (req, res) => {
  const book = new Book({
    title: "Test Book",
    author: "Admin"
  });

  await book.save();
  res.send("Book inserted");
});

app.listen(5000, () => {console.log("http://localhost:5000");});