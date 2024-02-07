const express =  require('express') 
const morgan = require('morgan');
const {default: helmet} = require('helmet')
const compression = require('compression')
const app = express() 
const instanceMongoDb = require('./dbs/init.mongoodb')

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
require('./dbs/init.mongoodb')    
const {checkOverload} = require('./helpers/check.connect')
checkOverload()
// init routes 
app.get('/',(req,res,next) =>{
    const strCompress = 'Hello '
    return res.status(500).json({
        message : 'Welcome '  
    })
})

// handling error 

module.exports = app 