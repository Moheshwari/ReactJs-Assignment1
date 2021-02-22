import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'
import React from 'react'

import {useState} from 'react'
function App() {
  const [clicked, setClicked] = useState('');
  const [myInfo,setMyInfo] = useState('');

  const navigationClicked = (clickedName) => {
    setClicked(clickedName);
    
    //setMyInfo(clickedName === 'home' ? 'Mony' : 'Dhaka');

  };
  
  return (
    <>
      <h1>Welcome to our website!</h1>
      <button onClick={ () =>navigationClicked('home')}> Home</button>
      <button onClick={() =>navigationClicked('contact')}> Contact</button>
      {clicked === 'home' && <MyComponent name="Mony" componentname={'Home'}/>}
      {clicked === 'contact' && <MyComponent Contact="Dhaka" componentname={'Contact'}/>}
    </>
  );
}

export default App;


