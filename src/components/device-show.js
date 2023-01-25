import light_bulb from '../svg/light_bulb.png';
import power_contact from '../svg/power_contact.png';
import move_sensor from '../svg/move_sensor.png';
import power_switch from '../svg/power_switch.png';
import temp_sensor from '../svg/temp_sensor.png';

const svgMap = {
    light_bulb,
    power_contact,
    move_sensor,
    power_switch,
    temp_sensor
}

function DeviceShow({type}) {
    return (
        <div>
            <p>This is:</p>
            <p>  {type}</p>
            <div className='card' style={{
                height: '120px',
                width: '110px',
                backgroundColor: 'lightgray',
            }}>
                <img className='card-image' style={{height: '120px', width: '110px'}} alt="device" src={svgMap[type]}/>
            </div>
        </div>
    );
}

export default DeviceShow;
