'use strict';
/* global cuid */

const Item = (function(){
  const foo = 'bar';
  return {
    validateName,
    create
  };  
}());

function validateName(name) {
  if (!name) {
    throw new Error('Name does not exist');
  }
}

function create(name) {
  return {
    id: cuid(),
    name,
    checked: false
  };
}
