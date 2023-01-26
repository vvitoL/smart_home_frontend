import light_bulb from '../svg/light_bulb.png';
import power_contact from '../svg/power_contact.png';
import move_sensor from '../svg/move_sensor.png';
import power_switch from '../svg/power_switch.png';
import temp_sensor from '../svg/temp_sensor.png';
import heart from '../svg/heart.svg';
import {useState} from "react";
import './device-show.css'

const svgMap = {
    light_bulb,
    power_contact,
    move_sensor,
    power_switch,
    temp_sensor
}

function DeviceShow({type}) {
    const [clicks, setCliks] = useState(0)
    const handleClick = () => {
        setCliks(clicks + 1)
    }

    return (
        <div className='device-show'>
            <p>This is: {type}</p>
            <img className='device' onClick={handleClick} alt="device" src={svgMap[type]}/>
            <img
                className='heart'
                alt="heart"
                src={heart}
                style={{width: 10 + 2 * clicks + 'px'}}
            />
        </div>
    );
}

export default DeviceShow;
