// 1 import json server
const jsonServer = require('json-server')

//2 create server application using json server
const mediaAppServer =jsonServer.create()

//3 create a middleware used by json server
const middleware =jsonServer.defaults()

// 4 create router : set up router for db.json file
const router =jsonServer.router('db.json')

// applying middleware to server 
mediaAppServer.use(middleware)

// applying router to server
mediaAppServer.use(router)

// Define Port

const PORT =3000

// Starting the server  
mediaAppServer.listen(PORT,()=>{
    console.log("Media app Server started on PORT " + PORT);
})

