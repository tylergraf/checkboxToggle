/*
 * Module Description
 * toggles hide on element when checkbox is checked or not
 *
 *
 */ 

/**
 * Module Deps
 *
 */
var events = require("event"); 
var classes = require('classes');

module.exports = function checkboxToggle(checkbox, toggleEl){

  events.bind(checkbox, 'change', function() {
    classes(toggleEl)
      .toggle('hide');
  });
};