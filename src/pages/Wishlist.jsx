import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import Container from '../components/Container';

const Wishlist = () => {
  return (
    <>
        <Meta title={"Danh Sách Yêu Thích"}/>
        <BreadCrumb title = 'Danh Sách Yêu Thích' />
        <Container className='wishlist-wrapper home-wrapper-2 py-5'>
            
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross" 
                                className='position-absolute img-fluid cross' 
                            />
                            <div className="wishlist-card-image">
                                <img src="images/ip13.jpg" className='img-fluid' alt="iphone" />
                            </div>
                            <div className='py-3'>
                                <h5 className="title">Apple Iphone 13 Pro Max</h5>
                                <p className="price">
                                    <span className="red-p">800$</span> &nbsp; <strike>999$</strike>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross" 
                                className='position-absolute img-fluid cross' 
                            />
                            <div className="wishlist-card-image">
                                <img src="images/ip13.jpg" className='img-fluid' alt="iphone" />
                            </div>
                            <div className='py-3'>
                                <h5 className="title">Apple Iphone 13 Pro Max</h5>
                                <p className="price">
                                    <span className="red-p">800$</span> &nbsp; <strike>999$</strike>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img 
                                src="images/cross.svg" 
                                alt="cross" 
                                className='position-absolute img-fluid cross' 
                            />
                            <div className="wishlist-card-image">
                                <img src="images/ip13.jpg" className='img-fluid' alt="iphone" />
                            </div>
                            <div className='py-3'>
                                <h5 className="title">Apple Iphone 13 Pro Max</h5>
                                <p className="price">
                                    <span className="red-p">800$</span> &nbsp; <strike>999$</strike>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </Container>
    </>
  )
}

export default Wishlist