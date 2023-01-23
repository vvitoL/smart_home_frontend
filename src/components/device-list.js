import PostItem from "./device-item";

const DeviceList = (props) => {
    console.log('devices list', props.data)

    const { data } = props;
    return (
        <div>
            {data.map((item) => {
                return (
                    <div className='container'>
                        <section className='section'>
                            <div className='column-is-2'>
                                <PostItem
                                    key={item.id}
                                    name={item.desc}
                                    desc={item.name}
                                />
                            </div>
                        </section>
                    </div>

            )

            })}
        </div>
        // <div>hiho</div>
    );
};

export default DeviceList
