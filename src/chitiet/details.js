import React, { Component } from 'react'
import './details.css'
export default class Details extends Component {
  render() {
    return (
      <div className='wrap_detail'>
        <div className='detail'>
            <div className='detail_top'>
                <div className='detail_top_left'>
                    <h2>School Bình Tân</h2>
                    <p>Year: 2020</p>
                    <p>Location: HCM, VIET NAM</p>
                    <p>Site area: 15,000,000m2</p>
                    <p>Floor area: 15,000,00m2</p>
                    <p>Client: Vschool</p>
                    <p>Photographs: Oki hiroyuki</p>
                    <p>Project manager for phrase</p>
                    <p>1: person </p>
                    <p>2: person </p>
                    <p>3: person </p>
                    <p>4: person </p>
                    <div className='detail_yout'>
                        <video style={{width:'fit-content', height:'100%'}} controls><source src='../video/video4.webm' type='video/mp4'></source></video>
                     </div>
                </div>
                <div className='detail_top_right'>
                    <p>Với tư cách là kiến trúc sư, vai trò của chúng tôi là định hình môi trường vật chất 
                        theo cách bền vững và cho phép mọi người thăng tiến cuộc sống: 
                        tạo ra những nơi giúp họ đáp ứng nguyện vọng của mình, sống trọn vẹn hơn và nhận 
                        ra chính mình trong thế giới mà họ chiếm giữ.
                    </p>
                        
                        <p>Với tư cách là kiến trúc sư, vai trò của chúng tôi là định hình môi trường vật chất 
                        theo cách bền vững và cho phép mọi người thăng tiến cuộc sống: 
                        tạo ra những nơi giúp họ đáp ứng nguyện vọng của mình, sống trọn vẹn hơn và nhận 
                        ra chính mình trong thế giới mà họ chiếm giữ.
                    </p>
                </div>
            </div>
            <div className='detail_bottom'>
                <div className='detail_bottom_left'>
                    <h3 style={{margin:'0px 0px 15px 0px'}}>Project gallery</h3>
                    <div className='img_gallery'>
                        <div className='img_gallery_top'>
                            <div className='img_gallery1'>
                                <img style={{width:'100%', height:'100%' }} src='../Tintuc/tintuc1.jpg' alt=''></img>
                            </div>
                            <div className='img_gallery1'>
                                <img style={{width:'100%', height:'100%'}} src='../Tintuc/tintuc2.jpg' alt=''></img>
                            </div>
                            <div className='img_gallery1'>
                                <img style={{width:'100%', height:'100%'}} src='../Tintuc/tintuc3.jpg' alt=''></img>
                            </div>
                            <div className='img_gallery1'>
                                <img style={{width:'100%', height:'100%'}} src='../Tintuc/tintuc4.jpg' alt=''></img>
                            </div>
                        </div>
                        <div className='img_gallery_bottom'>
                            <div className='img_gallery1'>
                                <img style={{width:'100%', height:'100%'}} src='../Tintuc/tintuc5.jpg' alt=''></img>
                            </div>
                            <div className='img_gallery1'>
                                <img style={{width:'100%', height:'100%'}} src='../Tintuc/tintuc6.jpg' alt=''></img>
                            </div>
                            <div className='img_gallery1'>
                                <img style={{width:'100%', height:'100%'}} src='../Tintuc/tintuc7.jpg' alt=''></img>
                            </div>
                            <div className='img_gallery1'>
                                <img style={{width:'100%', height:'100%'}} src='../Tintuc/tintuc8.jpg' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='detail_bottom_right'>
                     <p>Với tư cách là kiến trúc sư, vai trò của chúng tôi là định hình môi trường vật chất 
                        theo cách bền vững và cho phép mọi người thăng tiến cuộc sống: 
                        
                    </p>
                    <p>tạo ra những nơi giúp họ đáp ứng nguyện vọng của mình, sống trọn vẹn hơn và nhận 
                        ra chính mình trong thế giới mà họ chiếm giữ.</p>
                </div>
            </div>

        </div>
      </div>
    )
  }
}
