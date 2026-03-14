import express from 'express';

const app = express();

app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(5000, () => {console.log("http://localhost:5000");});