import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header.jsx'
import './App.css';


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

    return (
        <div className="App">
            <Header />
            <main>
                
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
