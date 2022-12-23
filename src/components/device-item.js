const PostItem = (props) => {
    const {name, desc} = props
    return (
        <div>
            <h1>{name}</h1>
            <p>{desc}</p>
        </div>
    );
}

export default PostItem;
