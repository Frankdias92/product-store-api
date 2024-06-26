const knex = require('../database/knex')
const DiskStorage = require('../providers/DiskStorage')

class AllProductsController {
    async index(req, res) {
        try {
            const products = await knex('produtos')
            const userTags = await knex('tags')

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

    async category(req, res) {
        try {
            userTags = await knex('tags')
            products = await knex('produtos')
                .select([
                    'produtos.category'
                ])
                .whereLike('productos.category', `%${category}%`)
                .orderBy('title')

            productsWithTags = products.map(product => {
                const productTags = userTags.filter(tag => tag.product_id === product.id)
                
                return {
                    ...product,
                    tags: productTags
                }
            })
                
            const userTags = await knex('tags').where({ user_id })
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

    async show(req, res) {
        const { id } = req.params
        try {
            const products = await knex('produtos').where({ id })
            const userTags = await knex('tags')

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