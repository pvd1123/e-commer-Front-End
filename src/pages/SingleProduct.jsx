import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color"
import { Link } from "react-router-dom";
import {BsHeart} from 'react-icons/bs';
import watch from "../images/watch.jpg"
import Container from "../components/Container";

export const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,

    img: "data:image/jpeg;base64,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",
  };

  const [orderedProduct, setOrderProduct] = useState(true);
  const copyToClipBoard = (text) =>{
    console.log("text",text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }
  return (
    <>
      <Meta title={"Sản Phẩm"} />
      <BreadCrumb title="Sản Phẩm" />
      <Container class1="main-product-wrapper home-wrapper-2 py-5">

          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Apple Watch</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">500$</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="5"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(LeLe)</p>
                  </div>
                  <a className="review-btn" href="#review">Viết Đánh Giá</a>
                </div>
                <div className=" py-3">
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Type: </h3> <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Brand: </h3> <p className="product-data">Apple</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Category: </h3> <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Tags: </h3> <p className="product-data">Watch</p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Availablity: </h3> <p className="product-data">In Stock</p>
                    </div>
                    <div className="d-flex gap-10 align-items-start flex-column mt-2 mb-3">
                        <h3 className="product-heading">Size: </h3>
                        <div className="d-flex flex-wrap gap-15">
                            <span className="badge border border-1 bg-white text-dark border-sencondary ">S</span>
                            <span className="badge border border-1 bg-white text-dark border-sencondary ">M</span>
                            <span className="badge border border-1 bg-white text-dark border-sencondary ">L</span>
                            <span className="badge border border-1 bg-white text-dark border-sencondary ">XL</span>
                            <span className="badge border border-1 bg-white text-dark border-sencondary ">2XL</span>
                        </div>
                    </div>
                    <div className="d-flex gap-10 align-items-start flex-column mt-2 mb-3">
                        <h3 className="product-heading">Color: </h3>
                        <Color />
                    </div>
                    <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                        <h3 className="product-heading">Quantity: </h3> 
                        <div className="">
                            <input  type="number"
                                    name=""
                                    min={1}
                                    max={10}
                                    style={{width:"70px"}} 
                                    id=""
                                    className="form-control"
                             />
                        </div>
                        <div className="d-flex align-items-center gap-30 ms-5 ">
                            <button className="button border=0" type="submit">Thêm Vào Giỏ</button>
                        </div>
                        <button className="button buy-now">Mua ngay</button> 
                    </div>
                    <div className="d-flex gap-15 align-items-center">
                        <a href="">
                            <BsHeart className="fs-5 me-2" />  Yêu Thích</a>
                    </div>
                    <div className="d-flex gap-10 flex-column my-3">
                        <h3 className="product-heading">Shipping & Returns : </h3> 
                        <p className="product-data">Free Ship <b>About 3-5 days</b> </p>
                    </div>
                    <div className="d-flex gap-10 align-items-center my-2">
                        <h3 className="product-heading">Copy Product Link : </h3> 
                        <a href="" 
                          onClick={() => {
                            copyToClipBoard("data:image/jpeg;base64,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");
                            }}>Copy Link</a>
                    </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>

      <Container class1="description-wrapper home-wrapper-2 py-5">
        
          <div className="row">
            <div className="col-12">
              <h4>Mô Tả</h4>
              <div className="bg-white p-3">
                <p>Huỳnh Đăng Phát</p>
              </div>
            </div>
          </div>
       
      </Container>

      <Container class1="reviews-wrapper home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Đánh Giá</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Tất Cả Đánh Giá</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value="5"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Có 2 đánh giá</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className="text-dark text-decoration" href="">
                        Viết đánh giá
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2" style={{ marginTop: "7px" }}>
                    Viết Đánh Giá
                  </h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <ReactStars
                      count={5}
                      size={24}
                      value="5"
                      edit={true}
                      activeColor="#ffd700"
                    />
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="10"
                        placeholder="Đánh giá của bạn..."
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0 ">Đăng</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Tọn</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Sản phẩm với màu sắc đẹp và cấu hình dùng rất ổn định,
                      không bị nóng máy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>

      <Container class1="home-wrapper-2 popular-wrapper py-5 ">
        
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Phổ Biến</h3>
            </div>
            <div className="row">
              <ProductCard />
            </div>
          </div>
      
      </Container>
    </>
  );
};
