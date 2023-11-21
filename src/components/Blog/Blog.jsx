
import { useState } from 'react';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { useEffect } from 'react';
import Post from './Post';

const Blog = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setPosts(data))
    })

    return (
        <div>
            <DynamicTitle title="Blog"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Blog</h2>
            </div>
            <br /><br />
            {
                (posts) ?
                    <div className='grid md:grid-cols-2 gap-10'>
                        {
                            posts.map(post => <Post key={post._id} post={post}></Post>)
                        }
                    </div> :
                    <>
                        <div className="flex flex-col gap-4 w-52">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </>
            }
        </div>
    );
};

export default Blog;