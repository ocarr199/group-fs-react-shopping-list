//#region ⬇⬇ All document setup below:
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import axios from 'axios';
import AddItemForm from '../AddItemForm/AddItemForm';
//#endregion ⬆⬆ All document setup above. 


function App() {



  //#region ⬇⬇ All state variables & app load below:
  // ⬇ State variables:
  const [item, setItem] = useState([]);
  // ⬇ On load, get items:
  useEffect(() => {
    getItems();
  }, []);
  //#endregion ⬆⬆ All state variables & app load above. 


  //#region ⬇⬇ All CRUD routes below:
  // GET: 
  const getItems = () => {
    console.log('In getItems');
    // ⬇ Axios GET to pull from DB:
    axios.get('/list')
      .then(response => {
        console.log('logging response data in get', response.data);
        setItem(response.data);
      }) // End .then
      .catch(error => {
        alert('error getting items');
        console.log('error in get', error);
      }); // End .catch
  } // End getItems

  // POST: 
  const addItem = (newItem) => {
    console.log('In newItem, newItem is:', newItem);
    // AXIOS POST
    axios.post('/list', newItem)
      .then(response => {
        console.log(`POSTED ${newItem}`);
        // call getter function
      }) // End .then
      .catch(err => {
        console.log('failed to post', err);
      }); // End catch
  }; // End addItem

  //#endregion ⬆⬆ All CRUD routes above. 


  //#region ⬇⬇ All rendering below:
  return (
    <div className="App">
      <Header />
      <AddItemForm />
      <main>

        <p>Under Construction...</p>
      </main>
    </div>
  ); // End return
  //#endregion ⬆⬆ All rendering above. 
} // End App


export default App;
