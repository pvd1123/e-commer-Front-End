import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () =>{
    return(
    <>
        <div className="card-image">
                <div className="blog-card">
                    <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
                </div>
        </div>
        <div className="blog-content">
                <p className="date">27/06/2023</p>
                <h5 className="title">Review Iphone 14 Pro Max</h5>
                <p className="desc">
                    ...
                </p>
                <Link to="/blog/:id" className="button">
                    Xem Thêm
                </Link>
        </div>
    </>
    )
};

export default BlogCard;