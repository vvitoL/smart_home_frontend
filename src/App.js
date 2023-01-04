import './App.css';
import {useEffect, useState} from "react";
import axios, {get} from "axios";
import DeviceList from "./components/device-list";

const url1 = 'http://192.168.69.177:8000/api/devices/'
const url2 = 'http://192.168.69.177:8000/api/devices/1/changestate'

function App() {
    const [value, setValue] = useState(0);
    const [myValue, setMyValue] = useState(null);

    const [devices, setDevices] = useState([])
    // let value = 0;
    // console.log('my val', myValue);

    const myFavVal = localStorage.getItem('myFavVal');
    // console.log('my fav val', myFavVal);

    useEffect(() => {
        if (myFavVal) {
            setMyValue(myFavVal)
        }
    }, [value]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        axios
            .get(url1)
            .then(res => {
                // console.log(res)
                // console.log(res.data)
                setDevices(res.data)

            })
            .catch((err)=> console.log(err))
    }

    const handleChangeLights = () => {
        axios
            .get(url2)
            .then(res => {
                console.log(res.data)
            })
            .catch((err)=> console.log(err))
    }

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
          <hr />
          <button onClick={handleChangeLights}>Set the light</button>
          <hr />
          <a href="http://192.168.69.177:8000/api/devices/1/changestate/">
            <button>Gabinet</button>
          </a>
          <hr />
          <DeviceList data={devices}/>
      </header>
    </div>
  );
}

export default App;
