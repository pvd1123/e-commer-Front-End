import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';

const Store = () => {
    const [grid, setGrid] = useState(4);
  return (
    <>
        <Meta title={"Cửa Hàng"}/>
        <BreadCrumb title = 'Cửa Hàng'/>
        <Container class1="home-wrapper-2 store-wrapper py-5">
    
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Danh Mục Sản Phẩm
                            </h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Điện Thoại</li>
                                    <li>Laptop</li>
                                    <li>TV</li>
                                    <li>Đồng Hồ</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Lọc Sản Phẩm
                            </h3>
                            <div>
                                <h5 className='sub-title'>
                                    Có Sẵn
                                </h5>
                                <div>
                                    <div className="form-check">
                                        <input className='form-check-input' type="checkbox" value="" id="" />
                                        <label className='form-check-label' htmlFor="">
                                                Còn Hàng
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className='form-check-input' type="checkbox" value="" id="" />
                                        <label className='form-check-label' htmlFor="">
                                            Giảm Giá
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>
                                    Giá
                                </h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className='form-floating'>
                                        <input 
                                            type="email" 
                                            className='form-control' 
                                            id='floatingInput'
                                            placeholder='Từ'
                                        />
                                        <label htmlFor="floatingInput">Từ</label>
                                    </div>
                                    <div className='form-floating'>
                                        <input 
                                            type="email" 
                                            className='form-control' 
                                            id='floatingInput'
                                            placeholder='Đến'
                                        />
                                        <label htmlFor="floatingInput1">Đến</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>
                                    Màu
                                </h5>
                                <div>
                                    <Color />

                                </div>
                                <h5 className='sub-title'>
                                    RAM
                                </h5>
                                <div className='d-flex flex-wrap gap-10'>
                                    <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id="ram-1" />
                                            <label className='form-check-label' htmlFor="ram-1">
                                                    4G
                                            </label>
                                    </div>
                                    <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id="ram-2" />
                                            <label className='form-check-label' htmlFor="ram-2">
                                                    6G
                                            </label>
                                    </div>
                                    <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id="ram-3" />
                                            <label className='form-check-label' htmlFor="ram-3">
                                                    8G
                                            </label>
                                    </div>
                                    <div className="form-check">
                                            <input className='form-check-input' type="checkbox" value="" id="ram-4" />
                                            <label className='form-check-label' htmlFor="ram-4">
                                                    16G
                                            </label>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Tính Năng
                            </h3>
                            <div>
                                <div className="product-feature d-flex flex-wrap align-items-center gap-10">
                                    <span className='badge bg-secondary rounded-3 px-3 py-3'>Gaming</span>
                                    <span className='badge bg-secondary rounded-3 px-3 py-3'>Chụp Ảnh</span>
                                    <span className='badge bg-secondary rounded-3 px-3 py-3'>Pin</span>
                                    <span className='badge bg-secondary rounded-3 px-3 py-3'>Dung Lượng</span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Sản Phẩm Quảng Cáo
                            </h3>
                            <div>
                                <div className="random-products d-flex mb-4">
                                    <div className='w-50'>
                                        <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Android Smart Watch</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="5"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>400$</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className='w-50'>
                                        <img src="images/tab.jpg" className='img-fluid' alt="tag" />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Tablet</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value="5"
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>400$</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{width:"100px"}}>Sắp Xếp:</p>
                                    <select name="" className='form-control form-select' id="">
                                        <option value="manual">Tính Năng</option>
                                        <option value="best-selling" selected="selected">Bán Chạy</option>
                                        <option value="title-ascending">A→Z</option>
                                        <option value="title-descending">Z→A</option>
                                        <option value="price-ascending">Giá từ Thấp đến Cao</option>
                                        <option value="price-descending">Giá từ Cao đến Thấp</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center gap-10">
                                    <p className="total-products mb-0">100 products</p>
                                    <div className='d-flex gap-10 align-items-center grid'>
                                        <img onClick={()=>{setGrid(3);}} src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                                        <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                                        <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                                        <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
    
        </Container>
    </>
  )
}

export default Store