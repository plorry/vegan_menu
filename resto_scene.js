var Scene = require('gramework').Scene,
    TextBlock = require('gramework').uielements.TextBlock,
    _ = require('underscore');

var RestoScene = exports.RestoScene = Scene.extend({
    initialize: function(options) {
        this.name = options.name;
        this.dialogueBox = new TextBlock({
            width: 300,
            height: 100,
            x: 0,
            y: 0,
            font: '12px Georgia',
            color: [255,255,255, 0],
            rolling: true
        });

        this.dialogueVars = {
            ingredient: 'fish',
            dish: 'soup'
        }
        this.DIALOGUE = options.DIALOGUE;
        this.pushElement(this.dialogueBox);
        this.menu = options.menu;

        var resto = this;

        this.menuActions = {
            'PROMPT_DISH_REQUEST': function() {
                resto.setText(resto.DIALOGUE.PROMPT_DISH_REQUEST);
                resto.listDishes();
            }
        };
    },

    listDishes: function() {

    },

    replaceVars: function(text) {
        var outText = text;
        for (key in this.dialogueVars) {
            outText = outText.replace('{' + key + '}', this.dialogueVars[key]);
        }
        return outText;
    },

    setText: function(text) {
        this.dialogueBox.setText(this.replaceVars(text));
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

    handleClick: function(pos) {
        this.elements.forEach(function(element) {
            if (element.rect.collidePoint(pos)) {
                if (element.action) {
                    this.menuActions[element.action]();
                }
            }
        }, this);
    },

    update: function(dt) {
        RestoScene.super_.prototype.update.apply(this, arguments);
    }
});