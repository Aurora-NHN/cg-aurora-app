import React from 'react';
import CustomerReviews from "~/components/main/shopDetailPage/review/CustomerReviews";
import CustomerFormReview from "~/components/main/shopDetailPage/review/CustomerFormReview";
function ReviewProduct() {
    const customerReviewList = [
        {
            image: "http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=60&amp;d=mm&amp;r=g",
            imageSet:"http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=120&amp;d=mm&amp;r=g 2x",
            rated: 4,
            name: "john",
            date:"June 7, 2013",
            description: "Nice T-shirt, I got one in black. Goes with anything!"
        },
        {
            image: "http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=60&amp;d=mm&amp;r=g",
            imageSet:"http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=120&amp;d=mm&amp;r=g 2x",
            rated: 4,
            name: "john",
            date:"June 7, 2013",
            description: "Nice T-shirt, I got one in black. Goes with anything!"
        },
        {
            image: "http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=60&amp;d=mm&amp;r=g",
            imageSet:"http://2.gravatar.com/avatar/babdd787a9577a0e615246ac79cf2826?s=120&amp;d=mm&amp;r=g 2x",
            name: "john",
            rated: 4,
            date:"June 7, 2013",
            description: "Nice T-shirt, I got one in black. Goes with anything!"
        }
    ]
    return (
        <div className="panel wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
            <div id="reviews">
                <div id="comments">
                    <h2>3 reviews for <span>Ship Your Idea</span></h2>
                    <div className="commentlist">

                        {
                            customerReviewList.map(customerReview => <CustomerReviews customerReview = {customerReview}/>)
                        }

                    </div>
                </div>
                <CustomerFormReview/>
                <div className="clear"></div>
            </div>
        </div>
    );
}

export default ReviewProduct;
