import React from 'react';

class Footer extends React.Component {
	render() {
		return(
			<div>
                	<div className="foot clearfix">
    <div className="content width1198P M0 clearfix">
      <ul className='fl clearfix MR180 grayTex163'>
        <li className='textL heigh30 font14 font22 MB20 height45 grayTex131'>关于我们</li>
        <li className='textL heigh30 font14'>公司概况</li>
        <li className='textL heigh30 font14'>金融平台简介</li>
        <li className='textL heigh30 font14'>联系我们</li>
      </ul>
      <ul className='fl clearfix MR180 grayTex163'>
        <li className='textL heigh30 font14 font22 MB20 height45 grayTex131'>服务保障</li>
        <li className='textL heigh30 font14'>产品介绍</li>
        <li className='textL heigh30 font14'>安全保障</li>
        <li className='textL heigh30 font14'>服务协议</li>
      </ul>
       <ul className='fl clearfix grayTex163'>
        <li className="height30 textL font14 font22 MB20 height45 grayTex131">服务热线</li>
        <li className="height30 textL font14 ">电话:&nbsp;&nbsp;400-862-2588</li>
        <li className="height30 textL font14 ">服务时间:&nbsp;&nbsp;9:00-18:00</li>
      </ul> 
      <div className="appfoot fr ">
        <div className="appFootImg"></div>
        <p className='grayTexced1d1'>扫描下载手机APP</p>
      </div>
      
    </div>
  </div>
  <div className="copyright">
    <div className='width1198P M0 clearfix'>
      <span className='fl'>普融网版权所有 2017 粤ICP备17160568号-1</span>
      <img className="authentication fr" src="https://static.anquan.org/static/outer/image/gw_124x47.png "></img>
      <a target="_blank" id="_pingansec_bottomimagelarge_p2p" href="http://si.trustutn.org/info?sn=875180206000629858910&certType=4" className="inlineB fr lineHeightInitial">
        <img className='authentication' src="http://v.trustutn.org/images/cert/p2p_official_large.jpg" />
      </a>
    </div>
  </div>
                </div>
		);
	}
}
export default Footer;