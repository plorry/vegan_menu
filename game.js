var gamejs = require('gramework').gamejs,
    conf = require('./conf'),
    GameController = require('gramework').input.GameController,
    animate = require('gramework').animate,
    Scene = require('gramework').Scene,
    _ = require('underscore');

// Container for the entire game.

var Game = exports.Game = function () {
    
    this.cont = new GameController();
    
    this.paused = false;

    this.scene = new Scene({
        width:320,
        height:240,
        pixelScale: 2
    });

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
    this.scene.draw(surface, {clear: false});
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
    }
};


Game.prototype.update = function(dt) {
    if (dt > 1000 / 3) dt = 1000 / 3;
    this.scene.update(dt);
};
