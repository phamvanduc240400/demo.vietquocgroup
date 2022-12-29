import React, { Component } from 'react'
import './home.css'
export default class HomeWrap extends Component {
  render() {
    let outstand = {
    color: '#fff',
    backgroundColor: '#797777',
    textAlign: 'center',
    padding: '20px',
    fontSize: '33px',
    fontWeight: '600',
    }
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
        <div style={outstand}>Công trình tiêu biểu</div>
        <div className='homeWrap'>
          <div className='homeWrap1'>
            <div className='wrapTop1'>
              <img src='../img_home/home1.jpg' alt=''></img>
              <p>Tên công trình</p>
            </div>
            <div className='wrapbottom1'>
              <img src='../img_home/home2.jpg' alt=''></img>
               <p>Tên công trình</p>
            </div>
          </div>
          <div className='homeWrap2'>
            <div className='wrapTop2'>
              <img src='../img_home/home3.jpg' alt=''></img>
              <p>Tên công trình</p>
            </div>
            <div className='wrapMid2'>
              <img src='../img_home/home4.jpg' alt=''></img>
              <p>Tên công trình</p>
            </div>
            <div className='wrapbottom2'>
              <img src='../img_home/home5.jpg' alt=''></img>
              <p>Tên công trình</p>
            </div>
          </div>
          <div className='homeWrap3'>
            <div className='wrapTop3'>
              <img src='../img_home/home6.jpg' alt=''></img>
               <p>Tên công trình</p>
            </div>
            <div className='wrapbottom3'>
              <img src='../img_home/home7.jpg' alt=''></img>
               <p>Tên công trình</p>
            </div>
          </div>
        </div>
        <div style={outstand}>Năng lực VIỆT QUỐC GROUP</div>
        <div className='vid_nl'>
          <div className='wrap_yout'>
            <div className='yout1'>
            <video style={{width:'100%', height:'100%'}} controls><source src='../video/video2.webm' type='video/mp4'></source></video>
            </div>
            <div className='yout2'>
              <video style={{width:'100%', height:'100%'}} controls><source src='../video/video3.webm' type='video/mp4'></source></video>
            </div>
            <div className='yout3'>
              <video style={{width:'100%', height:'100%'}} controls><source src='../video/video4.webm' type='video/mp4'></source></video>
            </div>
          </div>
        </div>
        <div style={outstand}>Gia đình VIỆT QUỐC GROUP và đối tác chiến lược</div>
        <div className='partner'>
          <div className='wrap_pn'>
            <img src='../partner/pn1.png' alt=''></img>
            <img src='../partner/pn3.png' alt=''></img>
            <img src='../partner/pn2.png' alt=''></img>
            
          </div>
        </div>
        {/* <div style={footcontract}>
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
        </div> */}
      </div>
       
    )
  }
}

