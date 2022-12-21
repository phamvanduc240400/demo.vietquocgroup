
import React, { Component } from 'react'
import './Header1.css'

export default class HeaderHome extends Component {
  render() {
    return (
      <>      
        <div className='header1'>
          <div className='slide_bg'>
              <div className='header2'>
                  <div className='logo'>
                    <img src='../logo/logoviva.png' alt=''/>
                  </div>
                  <div className='menu'>
                    <ul>
                      <li><a href='@'>VỀ VIỆT QUỐC</a></li>
                      <li><a href='@'>LĨNH VỰC HOẠT ĐỘNG</a></li>
                      <li><a href='@'>DỰ ÁN</a></li>
                      <li><a href='@'>TIN TỨC</a></li>
                      <li><a href='@'>LIÊN HỆ</a></li>
                    </ul>
                </div>
            </div>
              <div className='content_hd'>           
                <span>XÂY DỰNG CÔNG TRÌNH</span>
                <p>Tại Vschool, chúng tôi luôn tin tưởng vào sức mạnh của thiết kế kiến trúc,</p>
                <p>có thể biến đổi và nâng tầm cho cá nhân, tổ chức và cộng đồng. </p>
                <p>Chúng tôi đã thay đổi cách nhìn nhận về kiến trúc, về không gian, mang đến những giải pháp độc đáo</p>
                <p>và mang tính nghệ thuật sâu sắc.</p>
              </div>
              <div className='header_last'>
                <ul>
                  <li><a href='@'>Xây dựng công trình</a></li>
                  <li><a href='@'>Thiết kế kiến trúc & nội thất</a></li>
                  <li><a href='@'>Thương mại & dịch vụ</a></li>
                </ul>
              </div>
          </div>
        </div>
     </>

    )
  }
}
