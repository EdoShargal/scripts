const { poolPromise } = require('../database/db')
class CategoryController {

    async getAllCategories(req , res){
        try{
            const pool = poolPromise
            const result = await pool.request()
                .query("select * from Customers")
            //console.log(result["recordset"])
            res.json(result["recordset"])
        } catch (error){
            res.status(500)
            res.send(error.message)
        }
    }

    async getSp(req, res){
        const pool = await poolPromise
        const result = await pool.request()
            .execute("SelectAllCustomers")
        res.json(result["recordset"])
    }

    async getSt(req, res){
        console.dir("fd")
        const pool = poolPromise
        pool.request().execute("SelectAllCustomers")
        .then(result=>res.json(result)) 
         
        //.than(response=>response.json(recordsets))
         
    }
}

const controller = new CategoryController()
module.exports = controller;
