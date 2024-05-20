const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API config Info
 */

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Documentacion APICV',
      version: '1.0.0',
      description:
      'Esta es una aplicación REST API creada con Express.',
    },
    servers:[
       { 
          url:"http://localhost:3001/api",
          description: 'Development server',
       }
    ],
    components:{
        schemas:{
            user:{
            type: "object",
            required:["nombre,email, password, role"],
            properties:{
                nombre:{
                    type:"string"
                },
                email:{
                    type:"string"
                },
                password:{
                    type:"string"
                },
                role:{
                    type:"enum"
                }
            }
        }
        }
    }

}

/**
 * Opciones
 */

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
}

const openApiConfiguration = swaggerJsdoc(options);



module.exports = openApiConfiguration