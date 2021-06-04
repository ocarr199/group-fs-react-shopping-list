import React, { useState } from 'react';
import './AddItemForm.css';


function AddItemForm({ addItem }) {


  const [newItemName, setNewItemName] = useState('');
  const [newItemQuantity, setNewItemQuantity] = useState('');
  const [newItemUnit, setNewItemUnit] = useState('');



  // function to handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name: newItemName,
      quantity: newItemQuantity,
      unit: newItemUnit
    };
    addItem(newItem);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Item:</label>
      <input onChange={(event) => setNewItemName( event.target.value )}
        value={newItemName.name}
        placeholder="Item"
        type="text"
      />
      <label htmlFor="">Quantity:</label>
      <input onChange={(event) => setNewItemQuantity( event.target.value )}
        value={newItemQuantity.quantity}
        placeholder="Quantity"
        type="text"
      />

      <label htmlFor="">Unit:</label>
      <input onChange={(event) => setNewItemUnit( event.target.value )}
        value={newItemUnit.unit}
        placeholder="Unit"
        type="text"
      />
      <input class="submitInput" type="submit" value="Save" />
    </form>
  );
};

export default AddItemForm;