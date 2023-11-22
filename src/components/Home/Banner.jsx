import kidsFun from "../../assets/kids-fun.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import logo from "../../assets/toycorner-logo.png";

const Banner = () => {

    AOS.init();

    return (
        <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" >
            <div className="hero">
                <div className="grid md:grid-cols-2 hero-content">
                    <div className="col-span-1">
                        <img src={kidsFun} className="w-full" />
                    </div>
                    <div className="col-span-1 text-right">
                        <img src={logo} className="w-full md:w-[300px] md:ml-auto" alt="Toy Corner Logo" />
                        <br />
                        <h1 className="mt-5 text-5xl font-bold">The Joy of Toys</h1>
                        <p className="py-8">Toy Corner is a specialty  toy marketplace with a remarkable selection of toys in one place. Our mission is to provide fun to kids, they can enjoy toys with high play value.</p>
                        <Link to="/login">
                            <button className="btn btn-primary">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;