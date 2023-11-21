

const Post = ({ post }) => {

    const { _id, title, author, authorEmail, authorImage, image, details } = post;

    return (
        <div>
            <div className="w-full shadow-xl card card-compact bg-base-100">
                <figure><img src={image} className="h-[300px] w-full" alt="Blog" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-gray-500 badge shadow-inner font-thin"><span className="mr-2">Author:</span> {author}</p>
                    <br />
                    <div className="text-base [&>*]:mt-3 border-l-4 border-primary pl-8 p-2 card shadow-inner text-justify">
                        <p>{details?.one}</p>
                        <p>{details?.two}</p>
                        <p>{details?.three}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;