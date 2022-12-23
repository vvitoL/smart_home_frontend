const DeviceList = (props) => {
    console.log('devices list', props.data)

    const { data } = props;
    return (
        <div>
            {data.map((item) => {
                return <div key={item.id}>{item.name}</div>;
            })}
        </div>
        // <div>hiho</div>
    );
};

export default DeviceList
