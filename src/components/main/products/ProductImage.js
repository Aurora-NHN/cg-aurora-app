import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ProductImage({ product }) {
  const images = product.productImageUrlList.map((image) => {
    return {
      original: image.imageUrl,
      thumbnail: image.imageUrl,
    };
  });
   
  return (
    <div className="images" data-columns="4">
      <div className="product-gallery">
        <Gallery
          items={images}
          showNav={false}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={1000 * images.length}
          showFullscreenButton={false}
        />
      </div>
    </div>
  );
}

export default ProductImage;
