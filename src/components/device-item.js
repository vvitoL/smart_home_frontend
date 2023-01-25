import axios from "axios";
import React from "react";
import 'bulma/css/bulma.css'
import light_bulb from '../svg/light_bulb.png';
import power_contact from '../svg/power_contact.png';

const DeviceItem = (props) => {
    let image_src = ''
    const {name, desc, id, extra_info_kind} = props
    const handleChangeLights = () => {
        axios
            .get('http://192.168.69.153:8000/api/devices/' + id + '/changestate')
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }
    // console.log(extra_info_kind)
    // console.log(name)
    if (extra_info_kind === 'BU') {
        image_src = light_bulb;
    } else {
        image_src = power_contact;
    }
    return (
        <div>
            <div className='column'>
                <div className='card' style={{
                    height: '260px',
                    width: '120px',
                    backgroundColor: 'lightgray',
                }}>
                    <div className='card-image'>
                        <figure className='is-1'>
                            <img onClick={handleChangeLights} src={image_src} alt='test logo'/>
                        </figure>
                    </div>
                    {/*<div className='card-content'>*/}
                    {/*    <div className='media-content'>*/}
                            <div className='title is-7'>{name}</div>
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className='subtitle is-7'>{desc}</div>
                </div>
            </div>
        </div>
    );
}

export default DeviceItem;
