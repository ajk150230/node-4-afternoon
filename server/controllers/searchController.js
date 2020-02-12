const swag = require("../models/swag")


 module.exports ={
     search: (req, res) => {
         const { category } = req.query
         if(!category){
             res.status(200).send(swag)
         }else {
             const filter = swag.filter(element => element.category === category)
             res.status(200).send(filter)
         }
     }
 }