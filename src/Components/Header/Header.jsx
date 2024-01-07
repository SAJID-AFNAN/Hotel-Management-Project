import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <section className="flex justify-between bg-gray-400 text-white px-20 py-5">
                <div className="text-3xl font-bold">Bangloo</div>
                <nav className="flex items-center gap-5 font-semibold">
                    <ul className="flex items-center gap-10 font-semibold">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blog</Link>
                        </li>
                    </ul>
                    <div className="flex gap-2">
                        <button className="hover:bg-orange-500 px-3 py-1 rounded-3xl border-orange-500">Login</button>
                        <button className="hover:bg-blue-500 px-3 py-1 rounded-3xl border-orange-500">Sign Up</button>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Header;