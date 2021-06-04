//#region ⬇⬇ All document setup below:
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import axios from 'axios';
//#endregion ⬆⬆ All document setup above. 


function App() {

const addItem = (newItem) => {
    console.log(newItem);
    // AXIOS POST
    axios.post('/items',  newItem)
    .then(response => {
        console.log(`POSTED ${newItem}`);
        // call getter function
    }).catch(err => {
        console.log('failed to post', err);
    })

}

    //#region ⬇⬇ All state variables & app load below:
    // ⬇ State variables:
    const [item, setItem] = useState([]);
    // ⬇ On load, get items:
    useEffect( () => {
      getItems();
      }, []);
    //#endregion ⬆⬆ All state variables & app load above. 


    //#region ⬇⬇ All CRUD routes below:
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





    //#endregion ⬆⬆ All CRUD routes above. 


    //#region ⬇⬇ All rendering below:
    return (
        <div className="App">
            <Header />
            <main>
                
                <p>Under Construction...</p>
            </main>
        </div>
    ); // End return
    //#endregion ⬆⬆ All rendering above. 
} // End App


export default App;
