//ini import package
const express = require("express");
const cors = require("cors");
const app = express();

const user = require("./controller/userController");

//ini sebuah middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//controller
//api (Application Programming Interface)
app.use("/api/user", user);
//listener 
app.listen(8000, () => console.log("server Berjalan di port 8000"));
