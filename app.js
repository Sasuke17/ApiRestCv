
require("dotenv").config()
const express = require("express")
const {dbConnectMySql} = require("./config/mysql")
const cors = require("cors")
const app = express()
const morganBody = require("morgan-body")
const wbm = require('wbm');



const ENGINE_DB = process.env.ENGINE_DB;


app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const loggerStream = {
    write: message => {

/*         wbm.start({showBrowser:false}).then(async () => {          
            const phones = ['50769827669'];
            const mensajes = message;
            await wbm.send(phones, mensajes);
            await wbm.end();
        }).catch(err => console.log(err)); */
     
    },
  };
  

morganBody(app,{

    noColors:true,
    stream:loggerStream


})

const port = process.env.PORT || 3000

/**
 * 
 * Aqui invocamos a las rutas
 */

app.use("/api", require("./routes"))

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})

dbConnectMySql();