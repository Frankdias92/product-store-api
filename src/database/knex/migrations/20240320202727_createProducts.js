
exports.up = knex => knex.schema.createTable('produtos', table => {
    table.increments('id')
    table.text('title')
    table.text('description')
    table.integer('price')
    table.text('urlProduct')
    table.text('productIMG')
    table.integer('user_id').references('id').inTable('users')

    table.timestamp('created_at').default(knex.fn.now())
    table.timestamp('updated_at').default(knex.fn.now())
})


exports.down = knex => knex.schema.dropTable('produtos')

// para rodar a tabela é preciso executar o seguinte comando
// npx knex migrate:latest