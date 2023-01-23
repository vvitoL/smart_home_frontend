import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import DeviceList from "./components/device-list";
// import 'react-range-slider-input/dist/style.css';
import 'bulma/css/bulma.css'

const url1 = 'http://192.168.69.155:8000/api/devices/'
const url2 = 'http://192.168.69.155:8000/api/devices/1/changestate'
const url3 = 'http://192.168.69.155:8000/api/devices/2/changestate'

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
    }, [value, myFavVal]);

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

    const handleChangeLights = (light) => {
        axios
            .get(url2)
            .then(res => {
                console.log(res.data)
            })
            .catch((err)=> console.log(err))
    }

    const handleChangeLights2 = (light) => {
        axios
            .get(url3)
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
          <button onClick={handleChangeLights}>Gabinet Główne Światło</button>
          <hr />
          <button onClick={handleChangeLights2}>Gabinet LED RGB</button>
          <hr />
          {/*<Slider rangeSlideDisabled={true}/>*/}
          <hr />
          <DeviceList data={devices}/>
      </header>
    </div>
  );
}

export default App;
