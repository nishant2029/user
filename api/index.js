const cors=require('cors');
require('dotenv').config(); 
const express= require('express');
const mongoose = require('mongoose');

const app=express();
app.use(cors());
const port=8080;
const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("connected to Database");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Database is disconnected");
});

connect();
app.use(express.json());

// Import routes
const loginRoute = require('./routes/Login');
const registerRoute = require('./routes/Registeration');
const userRoute=require('./routes/User');

// Use routes
app.use('/', loginRoute);
app.use('/', registerRoute);
app.use('/',userRoute);

app.get('/',(req,res)=>{
    res.send('Hello World');
});










app.listen(port,()=>{
    console.log(`server is running on ${port}`)
});