'use strict'

const { ContentTypeOptions } = require('helmet')
const mongoose  =  require('mongoose') 
const {countConnect} = require('../helpers/check.connect')

const connectString  = 'mongodb+srv://dannynguyen:123@cluster0.psrnfci.mongodb.net/mydatabase?retryWrites=true&w=majority'

class Database {
    constructor() {
        this.connect()
    }

    // connect 
    connect(type ='mongodb'){
        if(1===1) {
            mongoose.set('debug',true) 
            mongoose.set('debug',{color :true})
        }
        mongoose.connect(connectString).then(() =>console.log('Connected mongodb Success',countConnect()))
        .catch(err => console.log(ContentTypeOptions))
    }
    static getInstance() {
        if(!Database.instance) {
            Database.instance = new Database()
        }

        return Database.instance 
    }

}


const instanceMongoDb =  Database.getInstance() 

module.exports = instanceMongoDb