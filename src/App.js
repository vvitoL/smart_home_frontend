import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [value, setValue] = useState(0);
    const [myValue, setMyValue] = useState(null);

    const [devices, setDevices] = useState()
    // let value = 0;
    // console.log('running app.js');
    // console.log('my val', myValue);

    const myFavVal = localStorage.getItem('myFavVal');
    // console.log('my fav val', myFavVal);

    useEffect(()=>{
        if (myFavVal) {
            setMyValue(myFavVal)
        }
    }, [value]);

    useEffect(()=>{
        if (myFavVal) {
            setMyValue(myFavVal)
        }
    }, [value]);

    const handleIncrement = (e) => {
        setValue(value+1);
    }

    const handleSaveMyValue = () => {
        // console.log('saved', value);
        localStorage.setItem('myFavVal', value)
        setMyValue(value);
    };
  return (
    <div className="App">
      <header className="App-header">
        <div> Hello World.! </div>
          <p>{value}</p>
          <p>{myValue ?myValue :  '---'}</p>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleSaveMyValue}>Save Favourite</button>
      </header>
    </div>
  );
}

export default App;
