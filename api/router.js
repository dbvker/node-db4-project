const router = require('express').Router();
const { checkRecipeIdExists } = require('./middleware');

const Recipe = require('./model');

router.get('/:recipe_id', checkRecipeIdExists, (req, res, next) => {
    const { recipe_id } = req.params;
    Recipe.getRecipeById(recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        }).catch(next);
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Something went wrong in the router',
        message: err.message
    });
});

module.exports = router;