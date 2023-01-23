import axios from "axios";

const PostItem = (props) => {
    const {name, desc, id} = props
    const handleChangeLights = () => {
        axios
            .get('http://192.168.69.155:8000/api/devices/' + id + '/changestate')
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <div className='card'>
                <div>{name}</div>
                <div>{desc}</div>
                <button onClick={handleChangeLights}>{name}</button>
            </div>
        </div>
    );
}

export default PostItem;
