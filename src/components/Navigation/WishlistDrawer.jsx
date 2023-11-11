
const WishlistDrawer = () => {
    return (
        <div>
            <div className="drawer drawer-end">
                <input id="wishlist-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="wishlist-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="w-40 min-h-full p-4 menu md:w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><a>Wishlist Item 1</a></li>
                        <li><a>Wishlist Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WishlistDrawer;