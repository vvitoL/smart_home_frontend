import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import DeviceList from "./components/device-list";
import 'bulma/css/bulma.css'

function App() {
    const [value, setValue] = useState(21);
    const [myValue, setMyValue] = useState(null);
    const myFavVal = localStorage.getItem('myFavVal');

    const [devices, setDevices] = useState([])

    useEffect(() => {
        axios
            .get('http://192.168.69.153:8000/api/devices/')
            .then(res => {
                setDevices(res.data)
            })
        if (myFavVal) {
            setMyValue(myFavVal)
        }
    }, [value, myFavVal]);

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
