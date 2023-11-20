import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";


const AddToy = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const color = form.color.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const material = form.material.value;
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
            sellerEmail: user.email,
            subCategory: material,
            color: color,
            ageRange: age,
            description: description,
            price: {
                currency: "USD",
                amount: price,
            },
            availability: availability,
            category: category,
            ratings: {
                scale: 5,
                value: ratings,
                reviews: reviews,
            },
            quantity: quantity,
            image: image
        }

        // Adding Toy to the database
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(result => {
                console.log(result);
                if (result) {
                    Swal.fire({
                        title: "Added !",
                        text: "Toy added successfully",
                        icon: "success"
                    });
                    form.reset();
                    navigate("/my-toys", { replace: true });
                }
                else {
                    return;
                }
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Failed!",
                    text: "Toy adding unsuccessful",
                    icon: "error"
                });
            })
    }

    return (
        <div>
            <div className='text-center'>
                <h2 className='w-full mx-auto text-3xl font-bold text-primary divider md:w-6/12'>Add Toys</h2>
            </div>
            <br /><br />
            <form onSubmit={handleAddToy} className="w-full p-10 mx-auto card md:w-9/12 bg-base-200">
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
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select-bordered select">
                            <option value="Toy Vehicles">Toy Vehicles</option>
                            <option value="Remote Control">Remote Control</option>
                            <option value="Educational">Educational</option>
                            <option value="Classic Toys">Classic Toys</option>
                        </select>
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Material</span>
                        </label>
                        <select className="select select-bordered">
                            <option value="Plastic">Plastic</option>
                            <option value="Metal">Metal</option>
                            <option value="Alloy">Alloy</option>
                            <option value="Composite">Composite</option>
                        </select>
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Availability</span>
                        </label>
                        <select className="select select-bordered">
                            <option value="In Stock">In Stock</option>
                            <option value="Limited Stock">Limited Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Type quantity here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Color</span>
                        </label>
                        <input type="text" name="color" placeholder="Type color here" className="w-full max-w-xs input input-bordered" />
                    </div>
                    <div className="w-full max-w-xs form-control">
                        <label className="label">
                            <span className="label-text">Age Group</span>
                        </label>
                        <select className="select-bordered select">
                            <option value="3-6 years">3-6 years</option>
                            <option value="3-7 years">3-7 years</option>
                            <option value="4-8 years">4-8 years</option>
                            <option value="5-12 years">5-12 years</option>
                        </select>
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
                        <input type="text" name="seller" defaultValue={user.displayName} placeholder="Type seller here" className="w-full max-w-xs input input-bordered" />
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
                    <input type="url" name="image" placeholder="Type image url here" className="input input-bordered" />
                </div>
                <div className="w-full mt-5 form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text" name="description" placeholder="Type description here" className="w-full p-3 rounded-md" rows={4} />
                </div>
                <button type="submit" className="w-full mt-10 btn btn-primary">Add Toy</button>
            </form>
        </div>
    );
};

export default AddToy;