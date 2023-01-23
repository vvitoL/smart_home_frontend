import PostItem from "./device-item";
import 'bulma/css/bulma.css'

const DeviceList = (props) => {
    console.log('devices list', props.data)

    const {data} = props;
    return (
        <div>
            <div className='columns is-4'>
                {data.map((item) => {
                    return (
                        <PostItem
                            key={item.id}
                            name={item.desc}
                            desc={item.name}
                            id={item.id}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default DeviceList
