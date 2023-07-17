import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";

export const SingleProduct = () => {
    const [orderedProduct, setOrderProduct] = useState(true);
  return (
    <>
        <Meta title={"Sản Phẩm"}/>
        <BreadCrumb title = 'Sản Phẩm'/>
        <div className="main-product-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-6"></div>
                    <div className="col-6"></div>
                </div>
            </div>
        </div>

        <div className="description-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className='bg-white p-3'>
                            <h4>Mô Tả</h4>
                            <p>Huỳnh Đăng Phát</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className='reviews-wrapper home-wrapper-2 py-'>
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className='mb-2'>Tất Cả Đánh Giá</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="5"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Có 2 đánh giá</p>
                                    </div>
                                </div>
                                {
                                    orderedProduct && (
                                        <div>
                                            <a className='text-dark text-decoration' href="">Viết đánh giá</a>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="review-form">
                                <h4 className='mb-2'>Viết Đánh Giá</h4>
                                <form action="" className="d-flex flex-column gap-15">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value="5"
                                        edit={true}
                                        activeColor="#ffd700"
                                    />                         
                                        <div>
                                                <input type="text" className="form-control" placeholder="Tên" />
                                        </div>
                                        <div>
                                                <input type="email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div>
                                                <input type="tel" className="form-control" placeholder="SĐT" />
                                        </div>
                                        <div>
                                                <textarea 
                                                    name="" 
                                                    id="" 
                                                    className="w-100 form-control" 
                                                    cols="30" 
                                                    rows="10"
                                                    placeholder="Bạn Nghĩ Gì..."
                                                ></textarea>
                                        </div>
                                        <div>
                                            <button className="button border-0 ">Đăng</button>
                                        </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="home-wrapper-2 popular-wrapper py-5 ">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Phổ Biến</h3>
              </div> 
              <div className='row'>
                <ProductCard />
              </div>
            </div>  
          </div>
        </section>
    </>
  )
}
