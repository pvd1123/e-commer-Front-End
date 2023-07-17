import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import SpecialProduct from "../components/SpecialProduct";
import ProductCard from "../components/ProductCard";

const Home = () =>{
    return (
      <>
        <section className="home-wrapper-1  py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <div className="main-banner position-relative p-3">
                  <img
                    className="img-fluid rounded-3"
                    src="images/main-banner-1.jpg"
                    alt="main banner"
                  />
                  <div className="main-banner-content position-absolute">
                    <h4>siêu sale</h4>
                    <h5>iPhone 14 Pro</h5>
                    <p>Giá chỉ từ 999$ hoặc 40$/tháng</p>
                    <Link className="button">BUY NOW</Link>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="small-banner position-relative p-3">
                    <img
                      className="img-fluid rounded-3"
                      src="images/catbanner-01.jpg"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>siêu sale</h4>
                      <h5>MacBook Air M1</h5>
                      <p>
                        Giá từ 1500$ <br />
                        hoặc $60/tháng
                      </p>
                    </div>
                  </div>
                  <div className="small-banner position-relative p-3">
                    <img
                      className="img-fluid rounded-3"
                      src="images/catbanner-02.jpg"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>siêu sale</h4>
                      <h5>Apple Watch SE</h5>
                      <p>
                        Giá từ 499$ <br />
                        hoặc $25/tháng
                      </p>
                    </div>
                  </div>
                  <div className="small-banner position-relative p-3">
                    <img
                      className="img-fluid rounded-3"
                      src="images/catbanner-03.jpg"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>siêu sale</h4>
                      <h5>Ipad Pro 2023</h5>
                      <p>
                        Giá từ 599$ <br />
                        hoặc $30/tháng
                      </p>
                    </div>
                  </div>
                  <div className="small-banner position-relative p-3">
                    <img
                      className="img-fluid rounded-3"
                      src="images/catbanner-04.jpg"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>siêu sale</h4>
                      <h5>Airpod Max</h5>
                      <p>
                        Giá từ 799$ <br />
                        hoặc $40/tháng
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                <div className="col-12">
                    <div className="services d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-15">
                        <img src="images/service.png" alt="services" />
                        <div>
                        <h6>Free Shipping</h6>
                        <p className="mb-0">Đơn Hàng trên 100$</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                        <img src="images/service-02.png" alt="services" />
                        <div>
                        <h6>Quà Hằng Ngày</h6>
                        <p className="mb-0">Mã giảm giá lên tận 25%</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                        <img src="images/service-03.png" alt="services" />
                        <div>
                        <h6>Hỗ Trợ Khách Hàng</h6>
                        <p className="mb-0">Tư Vấn</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                        <img src="images/service-04.png" alt="services" />
                        <div>
                        <h6>Flash Sale</h6>
                        <p className="mb-0">
                            Khung Giờ Sale: 20/06/2023
                            <div className="d-flex gap-10 align-items-center">
                              <span className="badge rounded-circle p-3 bg-dark">1</span>:
                              <span className="badge rounded-circle p-3 bg-dark">1</span>:
                              <span className="badge rounded-circle p-3 bg-dark">1</span>
                            </div>
                        </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-15">
                        <img src="images/service-05.png" alt="services" />
                        <div>
                        <h6>Phương thức thanh toán</h6>
                        <p className="mb-0">Trực tiếp hoặc Ví Điện Tử</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart Watch</h6>
                                    <p>Sản Phẩm</p>
                                </div>
                                <img src="images/watch.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Máy Ảnh <br/> Máy Quay Phim</h6>
                                    <p>Sản Phẩm</p>
                                </div>
                                <img src="images/camera.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>Sản Phẩm</p>
                                </div>
                                <img src="images/tv.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Tai Nghe</h6>
                                    <p>Sản Phẩm</p>
                                </div>
                                <img src="images/headphone.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Loa</h6>
                                    <p>Sản Phẩm</p>
                                </div>
                                <img  src="images/speaker.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>PC</h6>
                                    <p>PC Gaming</p>
                                </div>
                                <img src="images/homeapp.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Laptop</h6>
                                    <p>Sản Phẩm</p>
                                </div>
                                <img src="images/laptop.jpg" alt="camera" />
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Tai Nghe Không Dây</h6>
                                    <p>Sản Phẩm</p>
                                </div>
                                <img src="images/acc.jpg" alt="camera" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="home-wrapper-2 featured-wrapper py-5 ">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Sản Phẩm Apple</h3>
              </div>
              <ProductCard />
              <ProductCard />
            </div>  
          </div>
        </section>

        <section className="home-wrapper-2 famous-wrapper py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous-1.webp" className="img-fluid" alt="famous" />
                  <div className="famous-content position-absolute">
                    <h6 className="text-white">Tính Năng Mới</h6>
                    <h5 className="text-white">Smart Watch Series 8</h5>
                    <p className="text-white">Giá từ ...</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous-2.webp" className="img-fluid" alt="famous" />
                  <div className="famous-content position-absolute">
                    <h6 className="text-dark">Thế Hệ Mới với Chip M2</h6>
                    <h5 className="text-dark">Macbook Air</h5>
                    <p className="text-dark">Giá từ ...</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous-3.webp" className="img-fluid" alt="famous" />
                  <div className="famous-content position-absolute">
                    <h6 className="text-dark">Phiên Bản Cao Cấp</h6>
                    <h5 className="text-dark">IPhone 13 Pro Max</h5>
                    <p className="text-dark">Giá từ ...</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="famous-card position-relative">
                  <img src="images/famous4.webp" className="img-fluid" alt="famous" />
                  <div className="famous-content-2 position-absolute">
                    <h6 className="text-white">Siêu Phẩm Android</h6>
                    <h5 className="text-white">Samsung Galaxy S23 Ultra</h5>
                    <p className="text-white">Giá từ ...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-wrapper-2 special-wrapper py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Sản Phẩm Khuyến Mãi Đặc Biệt</h3>
              </div>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </section>
        
        <section className="home-wrapper-2 popular-wrapper py-5 ">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Phổ Biến</h3>
              </div>
              <ProductCard />
              <ProductCard />
            </div>  
          </div>
        </section>

        <section className="marque-wrapper py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="marque-inner-wrapper card-wrapper">
                  <Marquee className="d-flex">
                    <div className="mx-4 w-25">
                      <img src="images/brand-01.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-02.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-03.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-04.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-05.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-06.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-07.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-08.png" alt="brand" />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="home-wrapper-2 blog-wrapper py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Các Đánh Giá Nổi Bật</h3>
              </div>  
            </div>
              <div className="row">
                <div className="col-3">
                  <BlogCard />
                </div>
                <div className="col-3">
                  <BlogCard />
                </div>
                <div className="col-3">
                  <BlogCard />
                </div>
                <div className="col-3">
                  <BlogCard />
                </div>
              </div>
          </div>
        </section>
        
      </>
    );
};

export default Home;

// 62644