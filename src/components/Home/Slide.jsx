

const Slide = ({ product }) => {

    const { _id, name, manufacturer, price, image, description } = product;

    return (
        <div className="m-5">
            <div className="shadow-lg card lg:card-side bg-base-100">
                <figure><img src={image} className="md:h-[300px] w-full" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl card-title">{name}</h2>
                    <br />
                    <div className="[&>*]:mb-2">
                        <p className="font-semibold">{manufacturer}</p>
                        <p>{description}</p>
                        <p className="font-medium">Price: {price.amount} {price.currency}</p>
                    </div>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;