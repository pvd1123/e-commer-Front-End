import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png"


const Footer = () =>{
    return(
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img src={newsletter} alt="newsletter" />
                                <h2 className="mb-0 text-white">Đăng Kí Thành Viên</h2>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input 
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Nhập địa chỉ Email của bạn"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-2" id="basic-addon2">
                                    Đăng Kí
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Liên Hệ Chúng Tôi</h4>
                            <div>
                                <address className="text-white fs-6">
                                    Số 83, đường Tản Đà, <br /> phường Hương Sơ, thành Phố Huế <br />
                                </address>
                                <a
                                    href="tel:+84 935026874"
                                    className="mt-3 d-block mb-1 text-white"
                                >+84 935026874</a>
                                <a
                                    href="mailto:phathuynh0106@gmail.com"
                                    className="mt-2 d-block mb-0 text-white"
                                >phathuynh0106@gmail.com</a>
                                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                                    <a className="text-white" href="#">
                                        <BsInstagram className="fs-4" />
                                    </a>
                                    <a className="text-white" href="#">
                                        <BsTwitter className="fs-4" />
                                    </a>
                                    <a className="text-white" href="#">
                                        <BsFacebook className="fs-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Thông Tin Thêm</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                                    Chính Sách Bảo Mật
                                </Link>
                                <Link to="/refund-policy" className="text-white py-2 mb-1">
                                    Chính Sách Hoàn Tiền
                                </Link>
                                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                                    Chính Sách Vận Chuyển
                                </Link>
                                <Link to="/term-conditions" className="text-white py-2 mb-1">
                                    Điều Khoản & Điều Kiện
                                </Link>
                                <Link className="text-white py-2 mb-1">Blogs</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Tài Khoản</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Về Chúng Tôi</Link>
                                <Link className="text-white py-2 mb-1">Faq</Link>
                                <Link className="text-white py-2 mb-1">Liên Hệ</Link>
                             </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Truy Cập Nhanh</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptop</Link>
                                <Link className="text-white py-2 mb-1">Tai Nghe</Link>
                                <Link className="text-white py-2 mb-1">Máy Tính Bảng</Link>
                                <Link className="text-white py-2 mb-1">Đồng Hồ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-cent mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Design By Phat
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;