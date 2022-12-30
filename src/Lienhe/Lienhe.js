import React, { Component } from 'react'
import './Lienhe.css'
export default class Lienhe extends Component {
  render() {
    return (
      <>
          <div className='headerLH'>
                  <div className='logo'>
                    <a href='/'><img src='../logo/logo VQ.png' alt=''/></a>
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
      <div className='Wrap_lienhe'>
        <div className='Lien_he'>
            <div className='img_lienhe'><img style={{width:'100%', height:'100%'}} src='../img/lienhe.JPG' alt=''></img></div>
            <div className='content_lienhe'>
                <img style={{width:'100%', height:'70%'}} src='../img/lienhe2.JPG' alt=''></img>
                <div className='map'>
                   <a href='https://www.google.com/maps/place/Vi%E1%BB%87t+Qu%E1%BB%91c+Group+%7C+C%C3%B4ng+Ty+Thi%E1%BA%BFt+K%E1%BA%BF+X%C3%A2y+D%E1%BB%B1ng+Vi%E1%BB%87t+Qu%E1%BB%91c/@10.7783475,106.6794127,17z/data=!3m1!4b1!4m5!3m4!1s0x31752f26345452dd:0x122b47ce10501a0a!8m2!3d10.7783475!4d106.6794127' target="_blank" rel="noreferrer" ><p>Bản đồ</p></a> 
                </div>
            </div>
        </div>
      </div>
      </>
    )
  }
}
