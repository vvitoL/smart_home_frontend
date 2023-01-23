import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import DeviceList from "./components/device-list";
// import 'react-range-slider-input/dist/style.css';
import 'bulma/css/bulma.css'
// import PostItem from "./components/device-item";

const url1 = 'http://192.168.69.153:8000/api/devices/'

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
            .catch((err) => console.log(err))
    }

    const handleIncrement = (e) => {
        setValue(value + 1);
    }

    const handleSaveMyValue = () => {
        // console.log('saved', value);
        localStorage.setItem('myFavVal', value)
        setMyValue(value);
    };
    return (
        <div>
            <section className="hero is-primary">
                <div className='hero-body'>
                    <div className='title is-4'> Smart Home App</div>
                    <p>{value}</p>
                    <p>{myValue ? myValue : '---'}</p>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleSaveMyValue}>Save Favourite</button>
                </div>
            </section>
            <div>
                <div className='container'>
                    <section className='section'>
                        <div className='columns is-2'>
                            <DeviceList data={devices}/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;
