import React, { Component } from 'react'
import './Footer.css'
export default class FooterHome extends Component {
  render() {
    return (
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
    )
  }
}
