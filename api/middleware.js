const db = require('../data/db-config')

const checkRecipeIdExists = async (req, res, next) => {
    const { recipe_id } = req.params;
    const exists = await db('recipes').where('recipe_id', recipe_id).first();

    if (!exists) {
        res.status(404).json(`Recipe with id ${recipe_id} could not be found.`);
        next();
    } else {
        next();
    }
};

module.exports = {
    checkRecipeIdExists
};