import React, { useState } from 'react';
import './AddItemForm.css';


function AddItemForm ({addItem}) {


   const [newItem, setNewItem] = useState('');
   // function to handle submit
   const handleSubmit = (event) => {
      event.preventDefault();
      addItem(newItem);
   }
 return(
<form onSubmit={handleSubmit}>
   <label htmlFor="">Item:</label> 
      <input onChange={(event) => setNewItem({name: event.target.value})} 
         value={newItem.name} 
         placeholder="Item"
         type="text"
      />
   <label htmlFor="">Quantity:</label> 
   <input onChange={(event) => setNewItem({quantity: event.target.value})} 
         value={newItem.quantity} 
         placeholder="Quantity"
         type="text"
      />
  
   <label htmlFor="">Unit:</label> 
   <input onChange={(event) => setNewItem({unit: event.target.value})} 
         value={newItem.unit} 
         placeholder="Unit"
         type="text"
      />
   <input class="submitInput" type="submit" value="Save" />
</form>
 );   
};

export default AddItemForm;