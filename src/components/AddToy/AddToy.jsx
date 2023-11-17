

const AddToy = () => {

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const color = form.color.value;
        const material = form.color.value;
        const availability = form.availability.value;
        const age = form.age.value;
        const ratings = form.ratings.value;
        const reviews = form.reviews.value;
        const seller = form.seller.value;
        const manufacturer = form.manufacturer.value;
        const image = form.image.value;
        const description = form.description.value;
        const toy = {
            name: name,
            manufacturer: manufacturer,
            seller: seller,
            material: material,
            color: color,
            ageRange: age,
            description: description,
            price: {
                currency: "USD",
                amount: price,
            },
            availability: availability,
            category: "Educational",
            ratings: {
                scale: 5,
                value: ratings,
                reviews: reviews,
            },
            image: image
        }
        console.log(toy);
    }

    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-primary'>Add Toys</h2>
                <p className='mt-3 text-lg'>Add your toys here for selling</p>
            </div>
            <br /><br />
            <form onSubmit={handleAddToy} className="w-9/12 p-10 mx-auto bg-base-200">
                <div className="grid gap-5 md:grid-cols-2">
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Type name here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="Type price here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Color</span>
                        </label>
                        <input type="text" name="color" placeholder="Type color here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Material</span>
                        </label>
                        <input type="text" name="material" placeholder="Type variant here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Availability</span>
                        </label>
                        <input type="text" name="availability" placeholder="Type availability here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Age Group</span>
                        </label>
                        <input type="text" name="age" placeholder="Type age group here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input type="number" name="ratings" placeholder="Type manufacturer here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Reviews</span>
                        </label>
                        <input type="number" name="reviews" placeholder="Type reviews here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Seller</span>
                        </label>
                        <input type="text" name="seller" placeholder="Type seller here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Manufacturer</span>
                        </label>
                        <input type="text" name="manufacturer" placeholder="Type manufacturer here" className="w-full max-w-xs input input-bordered" />
                    </div>
                </div>
                <div className="w-full mt-5 form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="url" name="image" placeholder="Type photo url here" className="input input-bordered" />
                </div>
                <div className="w-full mt-5 form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text" name="description" placeholder="Type description here" className="w-full pt-3 input input-bordered" />
                </div>
                <button type="submit" className="w-full mt-10 btn btn-primary">Add Toy</button>
            </form>
        </div>
    );
};

export default AddToy;