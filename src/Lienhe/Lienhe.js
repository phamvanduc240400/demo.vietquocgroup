import React, { Component } from 'react'
import './Lienhe.css'
export default class Lienhe extends Component {
  render() {
    return (
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
    )
  }
}
