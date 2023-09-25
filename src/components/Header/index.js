import logo from "~/assets/images/logo.png"
import {useEffect, useState} from "react";
import cx from "clsx"

function Header() {
    const [headOfPage, setHeadOfPage] = useState(true)
    const [mobileActive, setMobileActive] = useState(false)

    const scrollCallback = (event) => {
        const scrollTop = event.target.scrollingElement.scrollTop
        if (scrollTop > 120) setHeadOfPage(false)
        if (scrollTop < 120) setHeadOfPage(true)
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollCallback)

        return () => {
            window.removeEventListener("scroll", scrollCallback)
        }
    }, [])

    const toggleMenu = () => {
        setMobileActive(prevState => !prevState)
    }
    return (
        <>
            <div className="header_absolute ">
                <section className="page_topline ds s-py-30 ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-4 col-md-4 text-lg-left text-center">
                                <a href="./" className="logo">
                                    <img src={logo} alt="img"/>
                                    <span className="logo-text color-darkgrey">vedi</span>
                                </a>
                            </div>
                            <div
                                className="col-xl-6 col-lg-8 col-md-8 some-links text-center text-lg-right d-flex justify-content-center justify-content-md-end align-items-center mt-2 mt-md-0">
                                <a className="fs-24 links-maincolor-hover font-2" href="tel:+88003532455">
                                    <mark>8 800</mark>
                                    353-24-55</a>
                                <a href="" className="btn btn-outline-maincolor btn-medium  d-none d-md-block">
                                    Book Reading Now
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/*Follow Header*/}
                <div className={cx("page_header_wrapper ds ms")}>
                    <header className={cx(
                        "page_header ds ms s-overlay justify-nav-start"
                        , {"affix-top": headOfPage}
                        , {"affix": !headOfPage}
                        , {"mobile-active": mobileActive})
                    }>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-9 col-1 order-2 order-xl-1">
                                    <div className="nav-wrap">

                                        <nav className="top-nav">
                                            <ul className="nav sf-menu">
                                                <li className="active">
                                                    <a href="index.html">Home</a>
                                                    <ul>
                                                        <li>
                                                            <a href="index.html">MultiPage</a>
                                                        </li>
                                                        <li>
                                                            <a href="index_singlepage.html">Single Page</a>
                                                        </li>
                                                        <li>
                                                            <a href="index_blocks.html">Homeblocks</a>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="blog-right.html">Blog</a>
                                                    <ul>

                                                        <li>
                                                            <a href="blog-right.html">Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-left.html">Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-full.html">No Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="blog-grid.html">Blog Grid</a>
                                                        </li>

                                                        <li>
                                                            <a href="blog-single-right.html">Post</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="blog-single-right.html">Right Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-single-left.html">Left Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-single-full.html">No Sidebar</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="blog-single-video-right.html">Video Post</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="blog-single-video-right.html">Right
                                                                        Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-single-video-left.html">Left
                                                                        Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-single-video-full.html">No Sidebar</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="#">Features</a>
                                                    <div className="mega-menu">
                                                        <ul className="mega-menu-row">
                                                            <li className="mega-menu-col">
                                                                <a href="#">Headers</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="header1.html">Header Type 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header2.html">Header Type 2</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header3.html">Header Type 3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header4.html">Header Type 4</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header5.html">Header Type 5</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header6.html">Header Type 6</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-col">
                                                                <a href="#">Side Menus</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="header-side.html">Push Left</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header-side-right.html">Push Right</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header-side-slide.html">Slide Left</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header-side-slide-right.html">Slide
                                                                            Right</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header-side-sticked.html">Sticked
                                                                            Left</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="header-side-sticked-right.html">Sticked
                                                                            Right</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-col">
                                                                <a href="title1.html">Title Sections</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="title1.html">Title section 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="title2.html">Title section 2</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="title3.html">Title section 3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="title4.html">Title section 4</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="title5.html">Title section 5</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="title6.html">Title section 6</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-col">
                                                                <a href="footer1.html#footer">Footers</a>
                                                                <ul>
                                                                    <li>
                                                                        <a href="footer1.html#footer">Footer Type 1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="footer2.html#footer">Footer Type 2</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="footer3.html#footer">Footer Type 3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="footer4.html#footer">Footer Type 4</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="footer5.html#footer">Footer Type 5</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="footer6.html#footer">Footer Type 6</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li className="mega-menu-col">
                                                                <a href="copyright1.html#copyright">Copyright</a>

                                                                <ul>
                                                                    <li>
                                                                        <a href="copyright1.html#copyright">Copyright
                                                                            1</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="copyright2.html#copyright">Copyright
                                                                            2</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="copyright3.html#copyright">Copyright
                                                                            3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="copyright4.html#copyright">Copyright
                                                                            4</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="copyright5.html#copyright">Copyright
                                                                            5</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="copyright6.html#copyright">Copyright
                                                                            6</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <a href="about.html">Pages</a>
                                                    <ul>


                                                        <li>
                                                            <a href="about.html">About</a>
                                                        </li>

                                                        <li>
                                                            <a href="services.html">Our Services</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="services.html">Services 1</a>
                                                                </li>
                                                                <li>
                                                                    <a href="services2.html">Services 2</a>
                                                                </li>
                                                                <li>
                                                                    <a href="services3.html">Services 3</a>
                                                                </li>
                                                                <li>
                                                                    <a href="service-single.html">Single Service</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="services.html">Our Forecasts</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="forecast.html">Forecasts</a>
                                                                </li>
                                                                <li>
                                                                    <a href="forecast-page.html">Single Forecast</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="pricing.html">Pricing</a>
                                                        </li>

                                                        <li>
                                                            <a href="shop-right.html">Shop</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="shop-account-dashboard.html">Account</a>
                                                                    <ul>

                                                                        <li>
                                                                            <a href="shop-account-details.html">Account
                                                                                details</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-account-addresses.html">Addresses</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-account-address-edit.html">Edit
                                                                                Address</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-account-orders.html">Orders</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-account-order-single.html">Single
                                                                                Order</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-account-downloads.html">Downloads</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-account-password-reset.html">Password
                                                                                Reset</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-account-login.html">Login/Logout</a>
                                                                        </li>

                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-right.html">Right Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-left.html">Left Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-product-right.html">Product Right
                                                                        Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-product-left.html">Product Left
                                                                        Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-cart.html">Cart</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-checkout.html">Checkout</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shop-order-received.html">Order
                                                                        Received</a>
                                                                </li>

                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="shortcodes_iconbox.html">Shortcodes</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="shortcodes_typography.html">Typography</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_buttons.html">Buttons</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_pricing.html">Pricing</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_iconbox.html">Icon Boxes</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_progress.html">Progress</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_tabs.html">Tabs &amp; Collapse</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_bootstrap.html">Bootstrap
                                                                        Elements</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_animation.html">Animation</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_icons.html">Template Icons</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_socialicons.html">Social
                                                                        Icons</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="shortcodes_widgets_default.html">Widgets</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="shortcodes_widgets_default.html">Default
                                                                        Widgets</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_widgets_shop.html">Shop
                                                                        Widgets</a>
                                                                </li>
                                                                <li>
                                                                    <a href="shortcodes_widgets_custom.html">Custom
                                                                        Widgets</a>
                                                                </li>
                                                            </ul>

                                                        </li>


                                                        <li>
                                                            <a href="events-left.html">Events</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="events-left.html">Left Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="events-right.html">Right Sidebar</a>
                                                                </li>
                                                                <li>
                                                                    <a href="events-full.html">Full Width</a>
                                                                </li>
                                                                <li>
                                                                    <a href="event-single-left.html">Single Event</a>
                                                                    <ul>
                                                                        <li>
                                                                            <a href="event-single-left.html">Left
                                                                                Sidebar</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="event-single-right.html">Right
                                                                                Sidebar</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="event-single-full.html">Full
                                                                                Width</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="team.html">Team</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="team.html">Team List</a>
                                                                </li>
                                                                <li>
                                                                    <a href="team-single.html">Team Member</a>
                                                                </li>
                                                            </ul>
                                                        </li>


                                                        <li>
                                                            <a href="comingsoon.html">Comingsoon</a>
                                                        </li>

                                                        <li>
                                                            <a href="faq.html">FAQ</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="faq.html">FAQ</a>
                                                                </li>
                                                                <li>
                                                                    <a href="faq2.html">FAQ 2</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a href="404.html">404</a>
                                                        </li>

                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="gallery-image.html">Gallery</a>
                                                    <ul>
                                                        <li>
                                                            <a href="gallery-image.html">Image Only</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="gallery-image-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-image.html">3 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-image-4-cols-fullwidth.html">4
                                                                        columns
                                                                        fullwidth</a>
                                                                </li>

                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="gallery-title.html">Image With Title</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="gallery-title-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-title.html">3 column</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-title-4-cols-fullwidth.html">4
                                                                        columns
                                                                        fullwidth</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="gallery-excerpt.html">Image with Excerpt</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="gallery-excerpt-2-cols.html">2 columns</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-excerpt.html">3 column</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-excerpt-4-cols-fullwidth.html">4
                                                                        columns fullwdith</a>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <a href="gallery-tiled.html">Tiled Gallery</a>
                                                        </li>

                                                        <li>
                                                            <a href="gallery-single.html">Gallery Item</a>
                                                            <ul>
                                                                <li>
                                                                    <a href="gallery-single.html">Style 1</a>
                                                                </li>
                                                                <li>
                                                                    <a href="gallery-single2.html">Style 2</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                    <ul>
                                                        <li>
                                                            <a href="contact.html">Contact 1</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact2.html">Contact 2</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact3.html">Contact 3</a>
                                                        </li>
                                                        <li>
                                                            <a href="contact4.html">Contact 4</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>

                                        </nav>

                                    </div>
                                </div>
                                <div className="col-xl-3 col-9 order-1 order-xl-2 text-xl-right text-left">
								<span className="social-icons">

									<a href="https://www.facebook.com/" className="fa fa-facebook "
                                       title="facebook"></a>
									<a href="https://twitter.com/" className="fa fa-twitter " title="twitter"></a>
									<a href="https://www.linkedin.com/" className="fa fa-linkedin "
                                       title="linkedin"></a>
									<a href="https://www.instagram.com/" className="fa fa-instagram "
                                       title="instagram"></a>
									<a href="https://www.youtube.com/" className="fa fa-youtube-play "
                                       title="youtube"></a>

								</span>
                                </div>
                            </div>
                        </div>
                        <span onClick={toggleMenu} className={cx("toggle_menu", {"mobile-active": mobileActive})}><span></span></span>
                    </header>
                </div>
            </div>
        </>
    )
}

export default Header