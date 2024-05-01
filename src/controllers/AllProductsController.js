const knex = require('../database/knex')

class AllProductsController {
    async index(req, res) {
        const response = await knex('produtos')
        
        console.log('passei por aqui', response)
        return res.json(response)
    }
}

module.exports = AllProductsController