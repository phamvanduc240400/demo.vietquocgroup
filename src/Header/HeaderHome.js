
import React, { Component } from 'react'
import './Header1.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from "react-router-dom";
export default class HeaderHome extends Component {
  render(){ 

    return (
      <>      
        <div className='header1'>
          <div className='slide_bg'>
              <div className='header2'>
                  <div className='logo'>
                    <a href='/'><img src='../logo/logoviva.png' alt=''/></a>
                  </div>
                  <div className='menu'>
                    <ul className='menu2'>
                      <li><a href='@'>VỀ VIỆT QUỐC</a>
                      <ul className='sub_menu0'>
                          <li style={{padding: '9% 20%' , color:'#fff'}}>
                            <ul style={{display:'flex', justifyContent:'space-evenly', marginTop:'15px'}}>
                              <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header2.jpg' alt=''></img>
                                Nói về chúng tôi
                              </li>
                             <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header5.jpg' alt=''></img>
                                Tầm nhìn - Sứ mệnh
                              </li>
                              <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header1.jpg' alt=''></img>
                                Năng lực VIET QUOC GROUP
                              </li>
                            </ul>
                          </li>
                        </ul>                   
                      </li>
                     <li><a href='@'>LĨNH VỰC HOẠT ĐỘNG</a>
                       <ul className='sub_menu'>
                          <li style={{padding: '9% 20%' , color:'#fff'}}>
                            <ul style={{display:'flex', justifyContent:'space-evenly', marginTop:'15px'}}>
                              <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header1.jpg' alt=''></img>
                                Xây dựng công trình
                              </li>
                             <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header2.jpg' alt=''></img>
                                Thiết kế kiến trúc & nội thất
                              </li>
                              <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header3.jpg' alt=''></img>
                                Thương mại & dịch vụ
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href='du-an'>DỰ ÁN</a>
                      <ul className='sub_menu2'>
                          <li style={{padding: '9% 20%' , color:'#fff'}}>
                            <ul style={{display:'flex', justifyContent:'space-evenly', marginTop:'15px'}}>
                              <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header4.jpg' alt=''></img>
                                Công trình công cộng
                              </li>
                             <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header5.jpg' alt=''></img>
                                Nhà ở
                              </li>
                              <li style={{ width:'300px', height:'200px', textAlign:'center', padding:'0px'}}>
                                 <img style={{width:'100%', height:'100%'}} src='../img/header6.jpg' alt=''></img>
                                Nội thất
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href='tin-tuc'>TIN TỨC</a></li>
                      <li><a href='lien-he'>LIÊN HỆ</a></li>
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
