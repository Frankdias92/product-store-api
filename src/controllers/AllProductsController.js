const knex = require('../database/knex')

class AllProductsController {
    async index(req, res) {
        // const response = await knex('produtos')
        
        // console.log('passei por aqui', response)
        // return res.json(response)
        
        try {
            const products = await knex('produtos')
            const userTags = await knex('tags')
            // const user_id = req.user.id

            
            const productsWithTags = products.map(product => {
                const productTags = userTags.filter(tag => tag.product_id === product.id)
                
                return {
                    ...product,
                    tags: productTags
                }
            })
                
            return res.json(productsWithTags)
        } catch (error) {
            console.error('Error fetching products:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }
}

module.exports = AllProductsController