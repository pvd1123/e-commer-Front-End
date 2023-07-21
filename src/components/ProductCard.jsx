import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch1.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import prod from "../images/prodcompare.svg";


const ProductCard = (props) =>{
    const {grid} = props 
    let location = useLocation();
    return(
    <>
        <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link to=':id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src={wish} alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image ">
                    <img src={watch} className="img-fluid" alt="product-brand" />
                    <img src={watch2} className="img-fluid" alt="product-brand" />
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
                            <img src={prod} alt="compare" />
                        </Link>
                        <Link>
                            <img src={view} alt="view" />
                        </Link>
                        <Link>
                            <img src={addcart} alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3"} `}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src={wish} alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image ">
                    <img src={watch} className="img-fluid" alt="product-brand" />
                    <img src={watch2} className="img-fluid" alt="product-brand" />
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
                            <img src={prod} alt="compare" />
                        </Link>
                        <Link>
                            <img src={view} alt="view" />
                        </Link>
                        <Link>
                            <img src={addcart} alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    </>
    )
};

export default ProductCard;