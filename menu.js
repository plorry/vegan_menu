var _ = require('underscore');

var Ingredient = exports.Ingredient = function(name, options) {
    this.type = 'ingredient';
    this.name = name;
    this.init(options);
};

_.extend(Ingredient.prototype, {
    init: function(options) {
        this.isMeat = options.isMeat || false;
        this.isDairy = options.isDairy || false;
        this.isEgg = options.isEgg || false;
        this.isFish = options.isFish || false;
        this.isGluten = options.isGluten || false;
        this.isTrace = options.isTrace || false;
    }
});

var Dish = exports.Dish = function(name, options) {
    this.type = 'dish';
    this.name = name;
    this.init(options);
};

_.extend(Dish.prototype, {
    init: function(options) {
        this.ingredients = options.ingredients || [];
        this.optionalIngredients = options.
        this.isVegan;
        this.updateIsVegan();
    },

    updateIsVegan: function() {
        this.isVegan = true;
        this.ingredients.forEach(function(ingredient){
            if (!ingredient.isVegan) {
                this.isVegan = false;
                return;
            }
        }, this);
    },

    addIngredient: function(ingredient) {
        this.ingredients.push(ingredient);
        this.updateIsVegan();
    },

    removeIngredient: function(ingredient) {
        var index = this.ingredients.indexOf(ingredient);
        this.ingredients.splice(index, 1);
    }
});

var Menu = exports.Menu = function(name, options) {
    this.type = 'menu';
    this.name = name;
    this.init(options);
};

_.extend(Menu.prototype, {
    init: function(options) {

    }
});
