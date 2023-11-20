
import DynamicTitle from '../DynamicTitle/DynamicTitle';

const Blog = () => {
    return (
        <div>
            <DynamicTitle title="Blog"></DynamicTitle>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold md:w-6/12 text-primary divider'>Blog</h2>
            </div>
            <br /><br />
        </div>
    );
};

export default Blog;