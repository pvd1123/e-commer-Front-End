import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs';
import blog from "../images/blog-1.jpg"

const SingleBlog = () => {
  return (
    <>
        <Meta title={"Bài Viết"}/>
        <BreadCrumb title = 'Bài Viết'/>
        <div className="blog-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="single-blog-card">
                  <Link to='/blog' className='d-flex align-items-center gap-10'> <BsArrowLeft className='fs-4'/> Trở Lại Trang Blog</Link>
                  <h3 className='title'>Review Iphone 14</h3>
                  <img src="https://cdn.tgdd.vn/Products/Images/42/251192/Slider/iphone-14-pro-max-thumb-1020x570.jpg" 
                        className='img-fluid w-100 my-4' 
                        alt="blog" />
                  <p>
                    iPhone 14 Pro Max một siêu phẩm trong giới smartphone được nhà Táo tung ra thị trường vào tháng 09/2022. 
                    Máy trang bị con chip Apple A16 Bionic vô cùng mạnh mẽ, 
                    đi kèm theo đó là thiết kế hình màn hình mới, hứa hẹn mang lại những trải nghiệm đầy mới mẻ cho người dùng iPhone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SingleBlog