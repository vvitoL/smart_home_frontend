import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import DeviceList from "./components/device-list";
import DeviceShow from "./components/device-show";
import 'bulma/css/bulma.css'

function getRandomDevice() {
    const randoms = ['light_bulb', 'move_sensor', 'power_switch', 'power_contact', 'temp_sensor'];
    return randoms[Math.floor(Math.random() * randoms.length)]
}

function App() {
    const [value, setValue] = useState(21);
    const [myValue, setMyValue] = useState(null);
    const myFavVal = localStorage.getItem('myFavVal');

    const [randoms, setRandoms] = useState([])

    const [devices, setDevices] = useState([])

    const handleClick = () => {
        setRandoms([...randoms, getRandomDevice()])
    }

    const renderedDevices = randoms.map((random_device, index) => {
        return <DeviceShow type={random_device} key={index}/>
    })

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
            <section className="hero is-primary navbar-header">
                <div className='hero-body'>
                    <div className='title is-3'> Smart Home App</div>
                    <div className='columns'>
                        <div className='column'>
                            <p>{value}</p>
                            <p>{myValue ? myValue : '---'}</p>
                            <button onClick={handleIncrement}>Increment</button>
                            <button onClick={handleSaveMyValue}>Save Favourite</button>
                        </div>
                        <div className='column'> VVito</div>
                    </div>
                </div>
            </section>
            <div className='hljs-body'>
                <div className='container'>
                    <section className='section'>
                        <div className='columns is-2'>
                            <DeviceList data={devices}/>
                        </div>
                    </section>
                </div>
            </div>
            <section className="hero is-primary footer">
                <div className='hero-body'>
                    <div className='title is-3'>Tests</div>
                    <div className='deviceApp'>
                        <button onClick={handleClick}>Add random device</button>
                        <p>.</p>
                        <div className='device-list'>{renderedDevices}</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
