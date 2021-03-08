import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import "./Home.css";

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>Posts Length: {posts.length}</h1>
            {
                posts.map(post => <Post  post={post} key={post.userId}></Post> )
            }
        </div>
    );
};

export default Home;