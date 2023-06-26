import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3">
                                <img className="img-fluid rounded-3" src="images/main-banner-1.jpg" alt="main banner" />
                                <div className="main-banner-content position-absolute">
                                    <h4>siêu sale</h4>
                                    <h5>iPhone 14 Pro</h5>
                                    <p>Giá chỉ từ 999$ hoặc 40$/month</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <div className="small-banner position-relative p-3">
                                    <img className="img-fluid rounded-3" src="images/catbanner-01.jpg" alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>siêu sale</h4>
                                        <h5>iPhone 14 Pro</h5>
                                        <p>Giá từ 999$ <br /> 
                                        hoặc $40/tháng</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img className="img-fluid rounded-3" src="images/catbanner-01.jpg" alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>siêu sale</h4>
                                        <h5>iPhone 14 Pro</h5>
                                        <p>Giá từ 999$ <br /> 
                                        hoặc $40/tháng</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img className="img-fluid rounded-3" src="images/catbanner-01.jpg" alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>siêu sale</h4>
                                        <h5>iPhone 14 Pro</h5>
                                        <p>Giá từ 999$ <br /> 
                                        hoặc $40/tháng</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3">
                                    <img className="img-fluid rounded-3" src="images/catbanner-01.jpg" alt="main banner" />
                                    <div className="small-banner-content position-absolute">
                                        <h4>siêu sale</h4>
                                        <h5>iPhone 14 Pro</h5>
                                        <p>Giá từ 999$ <br /> 
                                        hoặc $40/tháng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;