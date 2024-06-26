const { diskStorage } = require('multer')
const knex = require('../database/knex')
const fs = require('fs/promises')
const DiskStorage = require('../providers/DiskStorage')


class ProductController {
    async create(req, res) {
        try {
            const { title, description, price, urlProduct, tags, category } = req.body
            const user_id = req.user.id
            
            // Check if there's a file uploaded
            if (!req.file) {
                return res.status(400).json({ error: 'Product image is required' })
            }

            const productIMG = req.file.filename
            const diskStorage = new DiskStorage()

            const filename = await diskStorage.saveFile(productIMG)

            const [product_id] = await knex('produtos')
            .insert({
                title,
                description,
                price,
                urlProduct,
                category,
                productIMG: filename,
                user_id
            })
            
            const linkInsert = await knex('links').insert({
                urlProduct,
                product_id,
                user_id
            })

            const tagsInsert = tags.map(name => {
                return {
                    product_id,
                    name,
                    user_id
                }
            })
            await knex('tags').insert(tagsInsert)

            return res.json({ message: 'Product created successfully' })
        } catch (error) {
            console.log('Error creating product: ', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params

            const product = await knex('produtos').where({ id }).first()
            const tags = await knex('tags').where({ product_id: id }).orderBy('name')

            return res.json(product)
        } catch (error) {
            console.error('Error fetching product:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params

            await knex('produtos').where({ id }).delete()

            return res.json({ message: 'Product deleted successfully' })
        } catch (error) {
            console.error('Error deleting product:', error)
            return res.status(500).json({ error: 'Internal server error' })
        }
    }

    async index(req, res) {
        try {
            const { title, tags } = req.query
            const user_id = req.user.id
            let products
            if (tags) {
                const filterTags = tags.split(',').map(tag => tag.trim())
                products = await knex('tags')
                    .select([
                        'produtos.id',
                        'produtos.title',
                        'produtos.user_id',
                    ])
                    .where('produtos.user_id', user_id)
                    .whereLike('produtos.title', `%${title}%`)
                    .whereIn('name', filterTags)
                    .innerJoin('produtos', 'produtos.id', 'tags.product_id')
                    .orderBy('produtos.title')
                } else {
                    products = await knex('produtos')
                    .where({ user_id })
                    .whereLike('title', `%${title}%`)
                    .orderBy('title')
                }
                
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

}

module.exports = ProductController
