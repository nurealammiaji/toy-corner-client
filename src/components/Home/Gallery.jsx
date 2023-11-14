import PhotoAlbum from "react-photo-album";

const Gallery = () => {

    const photos = [
        { src: "https://www.outdoortoys.com/cdn/shop/products/desert-adventurer-24v-childrens-utv-off-road-style-ride-on-buggy-735930_1024x.jpg", width: 800, height: 600 },
        { src: "https://i5.walmartimages.com/seo/Worx-Toys-Speedster-Race-car-colors-May-Vary_0f2e1e93-6d91-4c03-be90-175f3ddea157.c56d45d569c8dd700093bb62ad254c01.jpeg", width: 1600, height: 900 },
        { src: "https://www.huffy.com/media/catalog/product/g/m/gmc-canyon-12v-truck-17142-1.jpg", width: 1600, height: 900 },
        { src: "https://ibuygreat.co.uk/cdn/shop/products/Remote-Control-Advanced-Speed-Night-Racer-Car-4.jpg", width: 1600, height: 900 },

        { src: "https://www.outdoortoys.com/cdn/shop/products/desert-adventurer-24v-childrens-utv-off-road-style-ride-on-buggy-735930_1024x.jpg", width: 1080, height: 608 },
        { src: "https://i5.walmartimages.com/seo/Worx-Toys-Speedster-Race-car-colors-May-Vary_0f2e1e93-6d91-4c03-be90-175f3ddea157.c56d45d569c8dd700093bb62ad254c01.jpeg", width: 1080, height: 720 },
        { src: "https://www.huffy.com/media/catalog/product/g/m/gmc-canyon-12v-truck-17142-1.jpg", width: 1080, height: 1549 },
        { src: "https://ibuygreat.co.uk/cdn/shop/products/Remote-Control-Advanced-Speed-Night-Racer-Car-4.jpg", width: 1080, height: 720 },
        { src: "https://www.littleriders.com.au/assets/alt_2/DK-F650-BK.jpg", width: 1080, height: 694 },
        { src: "https://www.outdoortoys.com/cdn/shop/products/desert-adventurer-24v-childrens-utv-off-road-style-ride-on-buggy-735930_1024x.jpg", width: 1080, height: 1620 },
        { src: "https://i5.walmartimages.com/seo/Worx-Toys-Speedster-Race-car-colors-May-Vary_0f2e1e93-6d91-4c03-be90-175f3ddea157.c56d45d569c8dd700093bb62ad254c01.jpeg", width: 1080, height: 720 },
        { src: "https://www.huffy.com/media/catalog/product/g/m/gmc-canyon-12v-truck-17142-1.jpg", width: 1080, height: 1440 },
        { src: "https://i5.walmartimages.com/seo/Worx-Toys-Speedster-Race-car-colors-May-Vary_0f2e1e93-6d91-4c03-be90-175f3ddea157.c56d45d569c8dd700093bb62ad254c01.jpeg", width: 1080, height: 1620 },
        { src: "https://ibuygreat.co.uk/cdn/shop/products/Remote-Control-Advanced-Speed-Night-Racer-Car-4.jpg", width: 1080, height: 810 },
        { src: "https://www.outdoortoys.com/cdn/shop/products/desert-adventurer-24v-childrens-utv-off-road-style-ride-on-buggy-735930_1024x.jpg", width: 1080, height: 610 },
        { src: "https://ibuygreat.co.uk/cdn/shop/products/Remote-Control-Advanced-Speed-Night-Racer-Car-4.jpg", width: 1080, height: 500 },
        { src: "https://www.littleriders.com.au/assets/alt_2/DK-F650-BK.jpg", width: 1080, height: 810 },
        { src: "https://i5.walmartimages.com/seo/Worx-Toys-Speedster-Race-car-colors-May-Vary_0f2e1e93-6d91-4c03-be90-175f3ddea157.c56d45d569c8dd700093bb62ad254c01.jpeg", width: 1080, height: 720 },
        { src: "https://www.huffy.com/media/catalog/product/g/m/gmc-canyon-12v-truck-17142-1.jpg", width: 1080, height: 1440 },
    ];

    return (
        <div>
            <br />
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-primary'>Products Gallery</h2>
                <p className='mt-3 text-lg'>Choose your product from featured products</p>
            </div>
            <br /><br />
            <PhotoAlbum layout="columns" photos={photos} />
            <br />
        </div>
    );
};

export default Gallery;