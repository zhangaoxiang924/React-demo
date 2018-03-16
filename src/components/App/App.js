import React from 'react';
import '../../asset/css/main.css';
import './App.scss';

class App extends React.Component {
	render() {
		return(
			<div className="App">
            	<div className="banner">
    <div className='width1198P M0 positionR height600'>
      <div className="bannerPc positionA"></div>
      <div className="fl positionH">
        <p className='font40 whiteTexFFF textL heigh60'>普融网APP</p>
        <p className='font40 whiteTexFFF textL heigh60'>值得信赖的投资精品</p>
        <div className="lineh4 grayBkgFB6A38"></div>
        <div className="scan fl">
          <img className='fl' src={require("../../asset/image/appDown.png")} alt=""/>
          <div className='fl typeIphone MB24 ML60 w169h50 button checkMoreBtn grayBkgFB6A38 positionR'>
            <div className="logoIphone PT20 PL40 fl width26"></div>
            <div className=" positionH R28P">iPhone下载</div>
          </div>
          <div className='fl typeAndroid MB25 w169h50 ML60 checkMoreBtn grayBkgFB6A38 positionR'>
            <div className="logoAndroid PT20 PL40 fl width26"></div>
            <div className="positionH R28P">Android下载</div>
          </div>
          <p className='whiteTexFFF fl heigh35 font14 textC MT20'>扫一扫下载</p>
        </div>
      </div>
    </div>
  </div>
  <div className="advantage h550 positionR clearfix grayBkg255">
    <div className='positionCenter'>
      <p className='MB15 selection font32 heigh50  black97'>投资优势</p>
      <div className='line3 grayBkgFB6A38 M0'></div>
      <ul className='width1198P M0 clearfix'>
        <li className='fl'>
          <div className='advantageImg'>
            <img src={require("../../asset/image/profit.png")} alt=""/>
          </div>
          <p className='font20 advantagetag grayTex26 heigh40 strong'>生息快 收益随时看</p>
        </li>
        <li className='fl'>
          <div className='advantageImg'>
            <img src={require("../../asset/image/supervise.png")} alt=""/>
          </div>
          <p className='font20 advantagetag grayTex26 heigh40 strong'>资金监管</p>
        </li>
        <li className='fl'>
          <div className='advantageImg'>
            <img src={require("../../asset/image/threshold.png")} alt=""/>
          </div>
          <p className='font20 advantagetag grayTex26 heigh40 strong'>低门槛 百元起投</p>
        </li>
        <li className='fl'>
          <div className='advantageImg'>
            <img src={require("../../asset/image/smart.png")} alt=""/>
          </div>
          <p className='font20 advantagetag grayTex26 heigh40 strong'>更灵活 随存随取</p>
        </li>
      </ul>
    </div>
  </div>
  <div className="downloadBot positionR borderBox">
    <div className='positionCenter PB10'>
      <p className='MB15 selection font32 heigh50 whiteTexFFF'>普融网投资</p>
      <div className='line3 grayBkgFB6A38 M0 MT20'></div>
      <div className="downloadpic positionR width1198P M0 clearfix">
        <img className='fl' src={require("./image/downloadFootImg.png")} alt=""/>
        <span className='edition heigh50 positionA textL whiteTexFFF font32'>1.0版本更新</span>
        <ul className='positionA'>
          <li className='heigh40 font18 textL whiteTexFFF'>新增定期投资产品</li>
          <li className='heigh40 font18 textL whiteTexFFF'>帮助中心</li>
          <li className='heigh40 font18 textL whiteTexFFF'>界面优化</li>
          <li className='heigh40 font18 textL whiteTexFFF'>用户体验升级 </li>
        </ul>
      </div>
    </div>
  </div>
</div>
		);
	}
}

export default App;