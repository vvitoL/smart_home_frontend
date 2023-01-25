import DeviceItem from "./device-item";
import React from "react";
import 'bulma/css/bulma.css'
import '../App.css'

const DeviceList = (props) => {
    console.log('devices list', props.data)

    const {data} = props;
    return (
        <div>
            <div className='columns is-3 device-list'>
                {data.map((item) => {
                    return (
                        <DeviceItem
                            key={item.id}
                            name={item.desc}
                            desc={item.name}
                            id={item.id}
                            extra_info_kind={item.extra_info.device_kind}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default DeviceList
