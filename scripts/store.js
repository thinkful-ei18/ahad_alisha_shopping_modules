'use strict';
/* global cuid Item */

const store = (function () {

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(val) {
    this.searchTerm = val;
  };

  const findById = function(id) {
    return this.items.find( item => item.id === id );
  };

  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch (err){
      console.log('Error:' + err.message);
    }
  };

  const findAndToggleChecked = function(id) {
    let item = this.findById(id);
    item.checked = !item.checked;
  };

  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      let updatedItem = this.findById(id); // this returns a single item's object
      updatedItem.name = newName; // this changes the name of that object
    }
    catch (err) {
      console.log('Cannot update name:' + err.message);
    }
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

 


  return {
    items,
    hideCheckedItems,
    searchTerm,
    toggleCheckedFilter,
    setSearchTerm,
    findById, 
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}());