require("dotenv").config();
const express = require('express')
const app = express()
const protectRoutes = require('./routes/protectedRoutes');
const cors = require('cors');
const connectDb  = require('./connection/connection')
const authRoutes = require('./routes/signUp'); 

app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json())

app.get("/" , (req, res)=>{
    res.send({msg: "hello Home Page"})
})
app.use('/api', authRoutes);
app.use("/protected", protectRoutes); 

const start = async () => {
    try {
      await connectDb(process.env.MONGODB_URL); 
      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();
