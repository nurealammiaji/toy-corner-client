

const Drawer = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="cart-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="w-40 min-h-full p-4 menu md:w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;