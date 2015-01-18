var gamejs = require('gramework').gamejs,
    conf = require('./conf'),
    GameController = require('gramework').input.GameController,
    animate = require('gramework').animate,
    Scene = require('gramework').Scene,
    RestoScene = require('./resto_scene').RestoScene,
    DIALOGUE = require('./data_dialogue').DIALOGUE,
    TextBlock = require('gramework').uielements.TextBlock,
    MenuItem = require('gramework').uielements.MenuItem,
    _ = require('underscore');

var PIXEL_SCALE = 2;

// Container for the entire game.

var Game = exports.Game = function () {
    
    this.cont = new GameController();
    
    this.paused = false;

    this.scene = new RestoScene({
        width:360,
        height:240,
        pixelScale: PIXEL_SCALE
    });

    var textBlock = new TextBlock({
        width: 300,
        height: 100,
        x: 0,
        y: 0,
        font: '12px Georgia',
        text: DIALOGUE.TEST.replace(/{dish}/, 'soup').replace(/{ingredient}/, 'fish'),
        color: [255,255,255, 0]
    });

    var testItem = new MenuItem({
        width: 60,
        height: 20,
        x: 5,
        y: 150,
        font: '12px Arial',
        text: 'Ask about'
    });

    this.scene.pushElement(textBlock);
    this.scene.pushElement(testItem);

    this.initialize();
};

Game.prototype.initialize = function() {
    var game = this;

    this.controlMapDown = {
        left: function () {
        },
        up: function () {
        },
        right: function () {
        },
        down: function () {
        },
        action: function() {

        },
        mousePos: function(pos) {
            console.log(pos);
            game.scene.handleMouse(pos);
        },
        menu: function() {
            // MENU
        },
        cancel: function() {
        }
    };

    this.controlMapUp = {
        left: function() {
        },

        right: function() {
        },

        up: function() {
        }
    }

};

Game.prototype.draw = function(surface) {
    this.scene.draw(surface);
};

Game.prototype.event = function(ev) {
    
    var key = this.cont.handle(ev);

    if (key) {
        if (key.action == 'keyDown') {
            this.controlMapDown[key.label]();
        }
        if (key.action == 'keyUp') {
            this.controlMapUp[key.label]();
        }
        if (key.action == 'mouseMotion') {
            this.scene.handleMouse([Math.floor(key.value[0]/PIXEL_SCALE), Math.floor(key.value[1]/PIXEL_SCALE)]);
        }
    }
};


Game.prototype.update = function(dt) {
    if (dt > 1000 / 3) dt = 1000 / 3;
    this.scene.update(dt);
};
