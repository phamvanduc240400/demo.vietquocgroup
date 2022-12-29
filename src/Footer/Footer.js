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
              <img style={{width:'70px', height:'70px'}} src='../logo/logoviva.png' alt=''></img>
            </div>
            <div className='logo_so'>
              <div className='icon1'>
                <img style={{width:'100%',height:'100%'}} src='../icon/icon1.png' alt=''></img>
              </div>
              <div className='icon2'>
                <img style={{width:'100%',height:'100%'}} src='../icon/icon3.jpg' alt=''></img>
              </div>
            </div>
          </div>
        </div>
      <div className='wrap_footer'>
      
        <div className='wrap_img_ft'>
            <div className='img_ft1'>
                <img style={{width:'100%', height:'100%'}} src='../img/Capture1.JPG' alt=''></img>
            </div>
            <div className='img_ft2'>
                <img style={{width:'100%', height:'100%'}} src='../img/Capture2.JPG' alt=''></img>
            </div>
        </div>
      </div>
      </div>
    )
  }
}
