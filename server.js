import  Express  from 'express';
import {contenedor} from "./ManArchivos";
const express = require ('express')
const { Router } = express

const app = express()
const router = Router ()
const routerProductos = router()
const contenido = new contenedor ("productos.txt");

app.use ('/api/productos', routerProductos)

routerProductos.use(express.json)
routerProductos.use(express.urlencoded({extended: true}))
app.use ('/api', router)
app.use(express.static('public'))

/* ------------------------------------------------------ */
/* Productos */
const productos = contenido.getAll();

routerProductos.get('/api/productos', (req, res) => {
    productos(req.body)
    res.json(req.body)
})
routerProductos.get('/api/productos:id', (req, res) => {
    let producto = contenido.getById(id)
    producto(req.body)
    res.json(req.body)
})

routerProductos.post('/api/productos', (req, res) => {
    let agrega = contenido.save(productos)
    productos.push(req.body)
    res.json(req.body)
})
routerProductos.PUT('/api/productos/:id', (req, res) =>{
    
})
routerProductos.delete('api/productos/:id', (req, res)=>{

})



/* ------------------------------------------------------ */
/* Server */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

