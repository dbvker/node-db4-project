exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', (table) => {
        table.increments('recipe_id')
        table.string('recipe_name', 256).notNullable().unique()
    })
    .createTable('ingredients', (table) => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 256).notNullable().unique()
        table.string('ingredient_unit', 256)
    })
    .createTable('steps', (table) => {
        table.increments('step_id')
        table.string('step_text').notNullable()
        table.string('step_number').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('step_ingredients', (table) => {
        table.increments('step_ingredient_id')
        table.string('quantity', 256).notNullable()
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
        table.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
