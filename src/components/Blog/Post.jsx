import { PiPushPinBold } from "react-icons/pi";

const Post = ({ post, user, blogPinHandler }) => {

    const { _id, title, author, authorEmail, authorImage, image, details } = post;

    return (
        <div>
            <div className="w-full shadow-xl card card-compact bg-base-100">
                <figure><img src={image} className="h-[300px] w-full" alt="Blog" /></figure>
                <div className="card-body">
                    <div className="flex">
                        <div className="flex-grow">
                            <h2 className="card-title">{title}</h2>
                            <p className="font-thin text-gray-500 shadow-inner badge"><span className="mr-2">Author:</span> {author}</p>
                        </div>
                        <div>
                            {
                                (user) &&
                                <button onClick={() => blogPinHandler(title)} className="p-0 btn btn-sm btn-ghost tooltip" data-tip="Pin this blog"><PiPushPinBold className="text-lg text-primary" /></button>
                            }
                        </div>
                    </div>
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