import { useState } from 'react';
import DynamicTitle from '../DynamicTitle/DynamicTitle';
import { useEffect } from 'react';
import Post from './Post';
import { Hourglass } from 'react-loader-spinner';

const Blog = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch('https://toy-corner-server-bd.vercel.app/blog')
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
                        <div className="flex items-center justify-center">
                            <Hourglass
                                visible={true}
                                height="20"
                                width="20"
                                ariaLabel="hourglass-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                colors={['navy', 'crimson']}
                            /><p className='ml-3 text-lg font-medium text-red-700'>Loading ...</p>
                        </div>
                    </>
            }
        </div>
    );
};

export default Blog;