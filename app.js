const express =  require('express') 
const morgan = require('morgan');
const {default: helmet} = require('helmet')
const compression = require('compression')

app = express()  
//init middlewares  
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
// morgan("combined")
// morgan("compile")
// morgan("short")
// morgan("tiny")
// morgan()


// init db 
app.get('/',(req,res,next) =>{
    const strCompress = 'Hello '
    return res.status(500).json({
        message : 'Welcome '
    })
})
// init routes 


// handling error 

module.exports = app 