import React from 'react';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image_11 from '~/assets/images/shop/11.jpg'
import image_11_back from '~/assets/images/shop/11_back.jpg'
import image_10 from '~/assets/images/shop/10.jpg'
import image_10_back from '~/assets/images/shop/10_back.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function ProductImage() {
    const images = [
        {
            original: image_11,
            thumbnail: image_11
        },
        {
            original: image_11_back,
            thumbnail: image_11_back
        },
        {
            original: image_10,
            thumbnail: image_10
        },
        {
            original: image_10_back,
            thumbnail: image_10_back
        }

    ];
    return (
        <div className="images" data-columns="4">
            <div className="product-gallery">
                <Gallery items={images}
                         showNav={false}
                         showPlayButton={false}
                         autoPlay={true}
                         slideInterval={1500*images.length}
                         showFullscreenButton={false}
                />
            </div>
        </div>
    );
}

export default ProductImage;