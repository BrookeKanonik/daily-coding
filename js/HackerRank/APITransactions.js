const express = require('express')
const app = express()

async function getItems(){
    try{
        app.get('INSERT API HERE', (req,res) => {
            console.log(res, res.data)
        })
    }catch(error){
        console.log(error)
    }
}
getItems()