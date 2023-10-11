import React from 'react';
import Product from "~/components/main/shopDetailPage/Product";
import image_34 from "~/assets/images/shop/34.jpg";
function RelatedProducts() {
    const products = [
        {
            name:"p1",
            price: 3.5,
            image: image_34,
            category: "Magic",
            rated: 4
        },
        {
            name:"p2",
            price: 3.5,
            image: image_34,
            category: "Magic",
            rated: 4
        },
        {
            name:"p3",
            price: 3.5,
            image: image_34,
            category: "Magic",
            rated: 4
        },
        {
            name:"p4",
            price: 3.5,
            image: image_34,
            category: "Magic",
            rated: 4
        },

    ]
    return (
        <section className="up-sells upsells products">
            <h2>Other Products</h2>
            <div className="divider-30"></div>
            <div className="products">
                {
                    products.map(product => <Product product={product}/>)
                }
            </div>
        </section>
    );
}

export default RelatedProducts;
