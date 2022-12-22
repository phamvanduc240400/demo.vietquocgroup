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
    return (
      <div>
        <div style={outstand}>Công trình tiêu biểu</div>
        <div className='homeWrap'>
          <div className='homeWrap1'>
            <div className='wrapTop1'>
              
            </div>
            <div className='wrapbottom1'></div>
          </div>
          <div className='homeWrap2'>
            <div className='wrapTop2'></div>
            <div className='wrapMid2'></div>
            <div className='wrapbottom2'></div>
          </div>
          <div className='homeWrap3'>
            <div className='wrapTop3'></div>
            <div className='wrapbottom3'></div>
          </div>
        </div>
      </div>
       
    )
  }
}

