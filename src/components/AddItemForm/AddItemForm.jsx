import React, { useState } from 'react';
import './AddItemForm.css';

function AddItemForm({ addItem }) {
  const [newItem, setNewItem] = useState('');
  // function to handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    AddItem(newItem);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Item:</label> <input class="itemInput" type="text" /><br />
        <label htmlFor="">Quantity:</label> <input type="text" />
        <label htmlFor="">Unit:</label> <input type="text" /><br />
        <input class="submitInput" type="submit" value="Save" />
      </form>
    </>
  );
};

export default AddItemForm;