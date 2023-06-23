import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';

const Header = () =>{
    return(
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">
                                Free Ship Cho Đơn Hàng Trên 100$
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Hotline: <a className="text-white" href="tel:+84 935026874">+84 935026874</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white">Phat</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="d-flex align-items-center gap-10">
                                        <img src="images/compare.svg" alt="compare" />
                                    </Link>
                                    <p className="text-white mb-0">
                                        So Sánh <br /> Sản Phẩm
                                    </p>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10">
                                        <img src="images/wishlist.svg" alt="wishlist" />
                                    </Link>
                                    <p className="text-white mb-0">
                                        Danh Sách <br /> Yêu Thích
                                    </p>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10">
                                        <img src="images/user.svg" alt="user" />
                                    </Link>
                                    <p className="text-white mb-0">
                                        Đăng Nhập <br /> Tài Khoản Của Tôi
                                    </p>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10">
                                        <img src="images/cart.svg" alt="cart" />
                                    </Link>
                                    <div className="d-flex flex-column gap-10">
                                        <span className="badge bg-white text-dark">0</span>
                                        <p className="text-white mb-0">$1000</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div></div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Trang Chủ</NavLink>
                                        <NavLink to="/">Danh Sách Sản Phẩm</NavLink>
                                        <NavLink to="/">Blogs</NavLink>
                                        <NavLink to="/contact">Liên Hệ</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Header;