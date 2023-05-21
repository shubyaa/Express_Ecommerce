const express = require("express");
const User = require("../models/UserModel");

//Define the Route
const userRoute = express.Router();


//Accessing User
userRoute.get("/", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

userRoute.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await User.findById(_id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Add user
userRoute.post('/add', async (req, res)  => {
  const email = "shubya8451@gmail.com";

  // var data = new User({
  //     username : "Shyam",
  //     email : "shhhyam@gmail.com",
  //     name : "Shyam Pawar",
  //     password : "$2a$10$YNDakRfScziEfdLyRugvsOzkTkK7n1iBw0.0qobPi9bc9T701Z7IW",
  //     phone: 9865487898,
  //     email_verification: false,
  //     image_url: "www.example1.com",
  //     isLogin : false,
  //     verifyMobile: false,
  //     favourite_stores: ["store_5", "store_6"],
  // });

  var data = new User({
    username : req.body.username,
    email : req.body.email,
    name : req.body.name,
    password : req.body.password,
    phone: req.body.phone,
    email_verification: req.body.email_verification,
    image_url: req.body.image_url,
    isLogin : req.body.isLogin,
    verifyMobile: req.body.verifyMobile,
    favourite_stores: req.body.favourite_stores,
});

  try {
      var message = "";
      var statusCode = 200;

      const userExists = await User.findOne({ email: data.email });
      if (userExists) {
          message = "User already exists!";
          statusCode = 403;
          res.status(statusCode).json(message);
      } else {
          await data.save();
          message = "User added";
          statusCode = 200;
          res.status(statusCode).json(message);
      }
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

//Update and delete user
userRoute.delete("/delete/:id", async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Success", description : user})
    
})

userRoute.post("/login", (req, res) => {
  res.status(200).json({ message: "Login Endpoint" });
});

userRoute.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logout Endpoint" });
});
userRoute.post("/signin", (req, res) => {
  res.status(200).json({ message: "signin Endpoint" });
});


module.exports = userRoute;