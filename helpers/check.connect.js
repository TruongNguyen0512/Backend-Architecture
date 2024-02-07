'use strict' 

const mongoose = require('mongoose') 
const os =  require('os') 
const process =  require('process')
const _SECONDS =5000 
// check connect
const countConnect = () => {
    const numConnection  =  mongoose.connection.length
    console.log(`Number of connection : ${numConnection}`)
}

// check overload 
const checkOverload = () =>{
    setInterval(()=>{
        const numConnection  =  mongoose.connection.length 
        const numCores = os.cpus().length   
        const memoryUsage = process.memoryUsage().rss;


        //Example maximun number of connection based on number of cores
        const maxConnection =  numCores*5  
        
        console.log(`Active connections :${numConnection}`)
        console.log(`Memory usage :${memoryUsage/1024/1024}MB`)

        if(numConnection >maxConnection) {
             console.log('Connection overload detected')
        }
    },_SECONDS)
}

module.exports = {
    countConnect,
    checkOverload
}