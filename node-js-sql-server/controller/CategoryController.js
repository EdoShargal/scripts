 const { poolPromise } = require('../database/db')
class CategoryController {

    async getAllCategories(req, res){
        try{
            const pool = await poolPromise
            const result = await pool.request()
                .query("select * from Categories")
            //console.log(result["recordset"])
            res.json(result["recordset"])
        } catch (error){
            res.status(500)
            res.send(error.message)
        }
    }
}

const controller = new CategoryController()
module.exports = controller;


