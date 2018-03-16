import React from 'react';
import '../../asset/css/main.css';
import  './About.scss';

class About extends React.Component {
    render() {
        return (
               <div className='About'>
               		<div className="PB90 grayBkg250">
    <div className="content PT30 clearfix width1198P  M0">
      <ul className='clearfix height665 width165 fl grayBkg255 PT30'>
        
      </ul>
      <div className="banner positionR fr w1021">
        <p className='positionH font30 whiteTexFFF Left40'>公司概况</p>
      </div>
      <div className="borderBox fr PL30 PT30 MB20 w1021">
        <p className='clearfix MB40 grayTex169'>
          <span className='textL fl lineheight30'>普融网成立于2015年，注册资本1000万元，实缴资金1000万元，总部位于中国深圳。致力于小微金融领域生态场景构筑。联合电商、供应链贸易、场景O2O、大数据服务以及开放API智能硬件平台等优势资源，奠定科技基础，致力于小微民生事业的建设和发展。在普融网的未来三年规划当中，互联网金融将逐步回归小商业金融服务实质，为普融网的O2O移动互联网产业及电商消费平台提供持续的，高效的，低成本的优质金融服务。</span>
        </p>
      </div>
      <div className="development fr w1021">
        <div className='title font24 positionR ML30 heigh35 textL grayTex97'>
          <div className='titleleftline positionH grayBkgFB6A38 fl height25 width6'></div>
          <span className='ML22'>发展历程</span>
        </div>
        <p className='height25 font18 grayTex169 textL ML55'>development path</p>
        <div className='positionR developmentdate'>
          <div className='demarcationLine positionH positionA'></div>
          <ul id='develop' className='positionR'>
            <li className='positionR height132'>
              <div className="timeSlot positionH timeSlotActive">
                <p className='whiteTex245 font20 heigh30 textL'>2015.05</p>
                <p className='whiteTex245 font16 textL height20'>year</p>
                <div className="timePoint positionH timePointActive"></div>
              </div>
              <div className="growthisintroduced fr height25 font16 grayTex169 textL PT55 w800 activeIntroduce">
                <span>深圳市普利融通金融服务有限公司成立</span>
              </div>
            </li>
            <li className='positionR height132'>
              <div className="timeSlot positionH">
                <p className='whiteTex245 font20 heigh30 textL'>2017.12</p>
                <p className='whiteTex245 font16 textL height20'>year</p>
                <div className="timePoint positionH"></div>
              </div>
              <div className="growthisintroduced fr height25 font16 grayTex169 textL PT55 w800">
                <span>普融网迁至深圳市南山区</span>
              </div>
            </li>
            <li className='positionR height132'>
              <div className="timeSlot positionH">
                <p className='whiteTex245 font20 heigh30 textL'>2018.02</p>
                <p className='whiteTex245 font16 textL height20'>year</p>
                <div className="timePoint positionH"></div>
              </div>
              <div className="growthisintroduced fr height25 font16 grayTex169 textL PT55 w800">
                <span>普融网正式上线开展互联网金融服务</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
               </div>
        );
    }
}

export default About;