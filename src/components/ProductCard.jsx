import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) =>{
    const {grid} = props 
    let location = useLocation();
    return(
    <>
        <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link to=':id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image ">
                    <img src="images/watch1.jpg" className="img-fluid" alt="product-brand" />
                    <img src="images/watch-1.avif" className="img-fluid" alt="product-brand" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Apple</h6>
                    <h5 className="product-title">Apple Watch SE2</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value="5"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={` description ${grid === 12 ? "d-block" : "d-none"} `}>
                        Nhìn tổng thể, đồng hồ thông minh Apple Watch SE 2022 vẫn giữ kiểu thiết kế tương tự như thế hệ tiền nhiệm....
                    </p>
                    <b className="price">799$</b>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image ">
                    <img src="images/watch1.jpg" className="img-fluid" alt="product-brand" />
                    <img src="images/watch-1.avif" className="img-fluid" alt="product-brand" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Apple</h6>
                    <h5 className="product-title">Apple Watch SE2</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value="5"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className={` description ${grid === 12 ? "d-block" : "d-none"} `}>
                        Nhìn tổng thể, đồng hồ thông minh Apple Watch SE 2022 vẫn giữ kiểu thiết kế tương tự như thế hệ tiền nhiệm....
                    </p>
                    <b className="price">799$</b>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    </>
    )
};

export default ProductCard;