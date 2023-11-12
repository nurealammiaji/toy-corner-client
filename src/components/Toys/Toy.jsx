

const Toy = ({ toy }) => {

    const { _id, name, manufacturer, price, image, description } = toy;

    return (
        <div>
            <div className="w-full shadow-xl card card-compact bg-base-100">
                <figure><img src={image} className="h-[250px] w-full" alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <br />
                    <div className="justify-end card-actions">
                        <button className="text-sm btn btn-primary btn-sm">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toy;