const app =  require('./app')

const server  = app.listen(3055,() =>{
    console.log('WSV eCommerce start with port 3055')
})


process.on('SIGN',() =>{
    server.close(() =>console.log('Exit server Express'))
})