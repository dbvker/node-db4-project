const db = require('../data/db-config')

const getRecipeById = async (recipe_id) => {
    const recipe = await db('recipes as r')
        .leftJoin('steps as s', 'r.recipe_id', 's.recipe_id')
        .leftJoin('ingredients as i', 'r.recipe_id', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id)
        .select('s.*', 'r.recipe_name', 'r.recipe_id')
        // .orderBy('s.')

    const result = {
        recipe_id: recipe[0].recipe_id,
        recipe_name: recipe[0].recipe_name,
        steps: []
    };

    recipe.forEach(row => {
        if (row.step_id) {
          result.steps.push({
            step_id: row.step_id,
            step_number: row.step_number,
            step_instructions: row.step_text,
            ingredients: []
          })
        }
      });
        
    return result;
};

module.exports = {
    getRecipeById
};