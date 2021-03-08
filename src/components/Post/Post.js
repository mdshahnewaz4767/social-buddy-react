import React from 'react';

const Post = (props) => {
    const {id, title, body} = props.post;
    console.log(title);
    return (
        <div>
            <h3><strong>Id: {id}</strong> {title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Post;