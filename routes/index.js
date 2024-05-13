const express = require("express");
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO user.js [user, js]
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file)//TODO users, storage
    if(name !== 'index'){
        console.log(`Cargando rutas ${name}`)
        router.use(`/${name}`,require(`./${file}`)) //TODO http://localhost:3000/api/user
    }
})


module.exports = router