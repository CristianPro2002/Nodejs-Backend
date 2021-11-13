const express = require('express')

const app = express()

app.set('port', 5000)

//rutas

app.get('/', (req,res)=>{
    res.send('Bienvenidos')
})

app.get('/hola', (req,res)=>{
    res.send('Bienvenidos2')
})

app.listen(app.get('port'), () => {
    console.log(`Bienvenido a mi aplicacion ${app.get('port')}`)

})





