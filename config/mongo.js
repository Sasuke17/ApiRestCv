const mongoose = require("mongoose");

const  dbConnect = async () =>{
    mongoose.set('strictQuery', false)
    const DB_URI = process.env.DB_URI

    mongoose.connect(DB_URI, {
    },).then((res) => {
        console.log("*** Conexion Exitosa ****");
      }).catch(error => {
         console.log(error);
       });
}

module.exports = dbConnect