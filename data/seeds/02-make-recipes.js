// DO NOT CHANGE THIS FILE
const recipes = [
    { recipe_name: 'Spaghetti and Meatballs' },
    { recipe_name: 'Chicken Tacos' },
    { recipe_name: 'Macaroni and Cheese' },
    { recipe_name: 'Hamburgers' },
];

const ingredients = [
    { ingredient_name: 'Spaghetti Noodles', ingredient_unit: 'oz' },
    { ingredient_name: 'Pasta Sauce', ingredient_unit: 'oz' },
    { ingredient_name: 'Beef', ingredient_unit: 'oz' },

    { ingredient_name: 'Chicken', ingredient_unit: 'oz' },
    { ingredient_name: 'Taco Shells', ingredient_unit: 'shells' },
    { ingredient_name: 'Taco Seasoning', ingredient_unit: 'grams' },

    { ingredient_name: 'Macaroni Noodles', ingredient_unit: 'oz' },
    { ingredient_name: 'Milk', ingredient_unit: 'ml' },
    { ingredient_name: 'Shredded Cheese', ingredient_unit: 'grams' },

    { ingredient_name: 'Ground Beef', ingredient_unit: 'oz' },
    { ingredient_name: 'American cheese', ingredient_unit: 'slices' },
    { ingredient_name: 'Buns', ingredient_unit: 'buns' },
];

const step_ingredients = [
    { step_id: 1, ingredient_id: 1, quantity: 2 },
    { step_id: 2, ingredient_id: 2, quantity: 2 },
    { step_id: 3, ingredient_id: 3, quantity: 8 },

    { step_id: 4, ingredient_id: 4, quantity: 8 },
    { step_id: 5, ingredient_id: 5, quantity: 4 },
    { step_id: 6, ingredient_id: 6, quantity: 100 },

    { step_id: 7, ingredient_id: 7, quantity: 8 },
    { step_id: 8, ingredient_id: 8, quantity: 140 },
    { step_id: 9, ingredient_id: 9, quantity: 112 },

    { step_id: 10, ingredient_id: 10, quantity: 16 },
    { step_id: 11, ingredient_id: 11, quantity: 4 },
    { step_id: 12, ingredient_id: 12, quantity: 4 },
];

const steps = [
    { step_text: 'Prepare meatballs', step_number: 1, recipe_id: 1 },
    { step_text: 'Cook pasta', step_number: 2, recipe_id: 1 },
    { step_text: 'Add sauce to pasta as well as meatballs', step_number: 3, recipe_id: 1 },

    { step_text: 'Cook chicken', step_number: 1, recipe_id: 2 },
    { step_text: 'Add taco seasoning', step_number: 2, recipe_id: 2 },
    { step_text: 'Add chicken to taco shells', step_number: 3, recipe_id: 2 },

    { step_text: 'Cook macaroni noodles', step_number: 1, recipe_id: 3 },
    { step_text: 'Add milk to macaroni', step_number: 2, recipe_id: 3 },
    { step_text: 'Add cheese to macaroni', step_number: 3, recipe_id: 3 },

    { step_text: 'Shape ground beef into hamburgers and season', step_number: 1, recipe_id: 4 },
    { step_text: 'Cook burgers and add cheese', step_number: 2, recipe_id: 4 },
    { step_text: 'Add hamburgers to buns', step_number: 5, recipe_id: 4 },
];

exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
};
