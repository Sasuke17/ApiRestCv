
require("dotenv").config()
const express = require("express")
const {dbConnectMySql} = require("./config/mysql")
const cors = require("cors")
const swaggerUI = require("swagger-ui-express")
const app = express()
const loggerStream = require("./utils/handleLogger");
const morganBody = require("morgan-body")
const openApiConfiguration = require("./docs/swagger")

const ENGINE_DB = process.env.ENGINE_DB;


app.use(cors())
app.use(express.json())
app.use(express.static("storage"))


  

morganBody(app,{

    noColors:true,
    stream:loggerStream,
    skip:function(req, res){
        return res.statusCode < 400
    }


})

const port = process.env.PORT || 3000

/**
 * 
 * Definir ruta de documentacion
 */
app.use('/documentacion', 
swaggerUI.serve, 
swaggerUI.setup(openApiConfiguration))
/**
 * 
 * Aqui invocamos a las rutas
 */

app.use("/api", require("./routes"))

app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
})

dbConnectMySql();