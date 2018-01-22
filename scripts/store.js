'use strict';
/* global cuid Item */

const store = (function () {
  const foo = 'bar';
  
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findByID = function(id) {
    return this.items.find();
  };

  const addItem = function(name) {
    try {
      Item;
      this.items.push(Item);
    }
    catch (err){
      console.log('Error:' + err.message);
    }
  };

  const findAndToggleChecked = function(id) {
    return this.findById() === !this.findByID();
  };

  const findAndUpdate = function(id, newName) {
    // once the input field is updated locate the UID and newly typed grocery item.
    // then run it through the try/catch block below
    try {
      newName;
      console.log(newName);
      findByID;
    }
    catch (err) {
      console.log('Cannot update name:' + err.message);
    }
  };

  return {
    items,
    hideCheckedItems,
    searchTerm,
    findByID, 
    addItem,
    findAndToggleChecked,
    fin
  };
}());