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

  const findById = function(id) {
    return this.items.find(item => item.id===id);
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
    return this.findById() === !this.findById();
  };

  const editListItemName = function(id, newName) {
    // once the input field is updated locate the UID and newly typed grocery item.
    // then run it through the try/catch block below
    // console.log("Testing");
    try {
      Item.validateName(newName);
      console.log(newName);
      let updatedItem=this.findById(id);
      updatedItem.name=newName;
      console.log(this.items);

    }
    catch (err) {
      console.log('Cannot update name:' + err.message);
    }
  };

  const findAndDelete = function(id) {
    console.log(id);
    let deletedItem = this.items.filter(item => this.items.id !== id);
    console.log(deletedItem);
  };

  // function findAndDelete(id) {
  //   let deletedItem = this.items.filter(item => this.items.id !== id);
  //   console.log(deletedItem);
  // }


  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById, 
    addItem,
    findAndToggleChecked,
    editListItemName,
    findAndDelete
  };
}());