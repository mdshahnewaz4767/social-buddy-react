import React from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h3>This is Post Detail: {id}</h3>
        </div>
    );
};

export default PostDetails;