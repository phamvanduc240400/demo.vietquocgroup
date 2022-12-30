import React, { Component } from 'react'
import './Footer.css'
export default class FooterHome extends Component {
  
  render() {
    let footcontract={
      backgroundColor: '#000000',
      height:'80px',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '0.5px solid #fff'
    }
    return (
      <div>
        <div style={footcontract}>
          <div className='wrap_ft'>
            <div className='logo_ft'>
              <a href='/'><img style={{width:'70px', height:'70px'}} src='../logo/logo VQ2.png' alt=''></img></a>
            </div>
            <div className='logo_so'>
              <div className='icon1'>
                <img style={{width:'75%',height:'75%'}} src='../icon/icon1.png' alt=''></img>
              </div>
              <div className='icon2'>
                <img style={{width:'75%',height:'75%'}} src='../icon/icon3.jpg' alt=''></img>
              </div>
            </div>
          </div>
        </div>
      <div className='wrap_footer'>
      
        <div className='wrap_img_ft'>
            <div className='img_ft1'>
                
                <h2>VIET QUOC GROUP</h2>
                <p>Địa chỉ: 283/28-26 CMT8, Phường 12, Quận 10, TP HCM</p>
                <p>Hotline: 200000000. 30000000</p>
                <p>Email: vietquocgroup@gmail.com</p>
            </div>
            <div className='img_ft2'>
                
                <h3>LĨNH VỰC HOẠT ĐỘNG</h3>
                <p>Xây dựng công trình</p>
                <p>Kiến trúc & nội thất</p>
                <p>Đầu tư & thương mại</p>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
