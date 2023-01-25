import axios from "axios";
import React from "react";
import 'bulma/css/bulma.css'

const DeviceItem = (props) => {
    const {name, desc, id} = props
    const handleChangeLights = () => {
        axios
            .get('http://192.168.69.153:8000/api/devices/' + id + '/changestate')
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <div className='column'>
                <div className='card' style={{
                    height: '260px',
                    width: '130px',
                    backgroundColor: 'lightgray',
                }}>
                    <div className='card-image'>
                        <figure className='is-1'>
                            <img onClick={handleChangeLights} src='https://picsum.photos/150/150' alt='test logo'/>
                        </figure>
                    </div>
                    <div className='card-content'>
                        <div className='media-content'>
                            <div className='title is-7'>{name}</div>
                            <div className='subtitle is-7'>{desc}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeviceItem;
