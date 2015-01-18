var Scene = require('gramework').Scene,
    _ = require('underscore');

var RestoScene = exports.RestoScene = Scene.extend({
    initialize: function(options) {
        this.name = options.name;
    },

    handleMouse: function(pos) {
        this.elements.forEach(function(element) {
            if (element.rect.collidePoint(pos)) {
                if (element.hoverOver) {
                    element.hoverOver();
                }
            } else {
                if (element.unHover) {
                    element.unHover();
                }
            }
        });
    },

    update: function(dt) {
        RestoScene.super_.prototype.update.apply(this, arguments);
    }
});