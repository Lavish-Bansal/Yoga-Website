require("dotenv").config()

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

require("./db/conn");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const authRouter = require('./routes/authRoute');

app.get("/", (req, res) => {
  res.send("Server of yoga class");
});

app.use('/api/auth', authRouter)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
