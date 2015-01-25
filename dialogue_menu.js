var MenuItem = require('gramework').uielements.MenuItem,
    _ = require('underscore');

var DialogueMenu = _.extend(MenuItem.prototype, {
    intialize: function(options) {
        DialogueMenu.super_.prototype.initialize.apply(this, arguments);
        
    }
});