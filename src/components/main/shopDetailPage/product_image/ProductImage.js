import React from 'react';
import image_11 from '~/assets/images/shop/11.jpg'
import image_11_back from '~/assets/images/shop/11_back.jpg'
import image_10 from '~/assets/images/shop/10.jpg'
import image_10_back from '~/assets/images/shop/10_back.jpg'
function ProductImage(){
    return(
        <div className="images" data-columns="4">
                <div className="flex-viewport">
            <figure>

                    <div data-thumb="images/shop/11.jpg">
                        <a href={image_11}>
                            <img src={image_11} alt="img" data-caption="" data-src={image_11}
                                 data-large_image={image_11} data-large_image_width="1000"
                                 data-large_image_height="1000"/>
                        </a>
                    </div>
                    <div data-thumb={image_11_back}>
                        <a href={image_11_back}>
                            <img src={image_11_back} alt="img" data-caption=""
                                 data-src="images/shop/11_back.jpg" data-large_image={image_11_back}
                                 data-large_image_width="1000" data-large_image_height="1000"/>
                        </a>
                    </div>
                    <div data-thumb={image_10_back}>
                        <a href={image_10_back}>
                            <img src={image_10_back} alt="img" data-caption=""
                                 data-src={image_10_back} data-large_image={image_10_back}
                                 data-large_image_width="1000" data-large_image_height="1000"/>
                        </a>
                    </div>
                    <div data-thumb={image_10}>
                        <a href={image_10}>
                            <img src={image_10} alt="img" data-caption="" data-src={image_10}
                                 data-large_image={image_10} data-large_image_width="1000"
                                 data-large_image_height="1000"/>
                        </a>
                    </div>

            </figure>
                </div>
        </div>
    );
}
export default ProductImage;