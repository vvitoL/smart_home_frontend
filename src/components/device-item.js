import axios from "axios";
import 'bulma/css/bulma.css'

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
        <div className='column'>
            <div className='card'>
                <div className='card-image'>
                    <figure className='is-1'>
                        <img src='https://picsum.photos/150/150' alt='test logo'/>
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='media-content'>
                        <div className='title is-7'>{name}</div>
                        <div className='subtitle is-6'>{desc}</div>
                    </div>
                </div>
                <button className='is-large' onClick={handleChangeLights}>{name}</button>
                <p className='text-danger'>.</p>
            </div>
        </div>
        </div>
    );
}

export default PostItem;
