import kidsFun from "../../assets/kids-fun.png";

const Banner = () => {
    return (
        <div>
            <div className="hero">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img src={kidsFun} className="w-full" />
                    <div>
                        <h1 className="text-5xl font-bold">The Joy of Toys</h1>
                        <p className="py-6">Toy Corner is a specialty  toy marketplace with a remarkable selection of toys in one place. Our mission is to provide fun to kids, they can enjoy toys with high play value.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;