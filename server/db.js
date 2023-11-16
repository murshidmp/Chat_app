require("dotenv").config();
const mongodbURI = process.env.MONGODB_URI;
const mongoose = require("mongoose");
console.log(mongodbURI)

let db


function init(cb){
    return new Promise ((resolve)=>{
        mongoose.connect(mongodbURI, {});
    db = mongoose.connection;
    db.on("error", (err) => {
        console.error("MongoDB connection error:", err);
      });
      
      db.once("open", async () => {
        cb(db)
        resolve();
        console.log("Connected to MongoDB");
      });
      
    })
    
}


module.exports = {init}