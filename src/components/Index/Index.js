import React from 'react';
import '../../asset/css/main.css';
import './Index.scss';


class Index extends React.Component {
    render() {
        return (
               <div className="Index">
               		<div className="bannerIndex positionR" id='banner'>
    <div className='positionCenter PB10'>
      <p className='font40 whiteTexFFF textC heigh60'>普融网APP</p>
      <p className='textC whiteTexFFF font40 heigh60 MB37P'>值得信赖的投资精品</p>
      <div className='whiteTexFFF font16 height36 MB30 '>
        <span className='MarginLR20'>真诚透明稳健规范</span>
        <span className='MarginLR20'>多重风控品质服务</span>
        <span className='MarginLR20'>等保备案权威认证</span>
      </div>
      <div className='line3 grayBkgFB6A38 M0'></div>
      <div className='checkMoreBtn w243 grayBkgFB6A38  font18 heigh60 M0'>下载普融网APP</div>
    </div>
  </div>
  <div className="product grayBkg250 positionR">
    <div className="positionCenter">
      <p className='MB15 selection font32 heigh50  black97'>精选投资产品</p>
      <div className='line3 grayBkgFB6A38 M0'></div>
      <ul className='width1198P M0 clearfix'>
        <li className='fl grayBkg255 PT30 positionR MB10'>
          <p className='MB10 black heigh40 font20'>优享计划1个月</p>
          <div className='linew26 MB25 M0 grayBkg224'></div>
          <div className='M0 textC orangeTexFB6A38'>
            <span className='font68 orangeTexFB6A38'>7</span>
            <span className='font18 orangeTexFB6A38'>%</span>
          </div>
          <p className='height25 font14 MB30 grayTex153'>年化收益率</p>
          <p className='heigh35 MT25 grayTex616161'>
            <span className='grayTex163'>100元起投</span>
          </p>
          <div className="productFlag"></div>
        </li>
        <li className='fl grayBkg255 PT30 positionR MB10 MAbout32'>
          <p className='MB10 black heigh40 font20'>优享计划3个月</p>
          <div className='linew26 MB25 M0 grayBkg224'></div>
          <div className='M0 textC orangeTexFB6A38'>
            <span className='font68 orangeTexFB6A38'>10</span>
            <span className='font18 orangeTexFB6A38'>%</span>
          </div>
          <p className='height25 font14 MB30 grayTex153'>年化收益率</p>
          <p className='heigh35 MT25 grayTex616161'>
            <span className='grayTex163'>100元起投</span>
          </p>
          <div className="productFlag"></div>
        </li>
        <li className='fl grayBkg255 PT30 positionR MB10'>
          <p className='MB10 black heigh40 font20'>优享计划6个月</p>
          <div className='linew26 MB25 M0 grayBkg224'></div>
          <div className='M0 textC orangeTexFB6A38'>
            <span className='font68 orangeTexFB6A38'>12</span>
            <span className='font18 orangeTexFB6A38'>%</span>
          </div>
          <p className='height25 font14 MB30 grayTex153'>年化收益率</p>
          <p className='heigh35 MT25 grayTex616161'>
            <span className='grayTex163'>100元起投</span>
          </p>
          <div className="productFlag"></div>
        </li>
      </ul>
    </div>
  </div>
  <div className="advantage grayBkg255 positionR clearfix">
    <div className='positionCenter'>
      <p className='MB15 selection font32 heigh50  black97'>投资优势</p>
      <div className='line3 grayBkgFB6A38 M0'></div>
      <ul className='width1198P M0 clearfix'>
        <li className='fl'>
          <div className='advantageImg'>
            <img src={require("../../asset/image/profit.png")} alt=""/>
          </div>
          <p className='font20 advantagetag  heigh40  grayTex26 strong'>生息快 收益随时看</p>

        </li>
        <li className='fl'>
          <div className='advantageImg'>
            <img src={require("../../asset/image/supervise.png")} alt=""/>
          </div>
          <p className='font20 advantagetag  heigh40  grayTex26 strong'>资金监管</p>

        </li>
        <li className='fl'>
          <div className='advantageImg'>
            <img src={require("../../asset/image/threshold.png")} alt=""/>
          </div>
          <p className='font20 advantagetag  heigh40  grayTex26 strong'>低门槛 百元起投</p>

        </li>
        <li className='fl'>
          <div className='advantageImg'>
            <img src={require("../../asset/image/smart.png")} alt=""/>
          </div>
          <p className='font20 advantagetag  heigh40 grayTex26 strong'>更灵活 随存随取</p>

        </li>
      </ul>
    </div>
  </div>
  <div className="aboutUs grayBkg250 positionR">
    <div className='positionCenter'>
      <h3 className='MB15 selection font32 heigh50  black97'>关于我们</h3>
      <div className='line3 grayBkgFB6A38 M0 MB55P'></div>
      <div className='video MB40 positionR width1198P'>
        <div className='videoplay positionCenter width40P heigh40'>
          <div className='playShow positionCenter'></div>
        </div>
      </div>
      <p className='height25 font16 grayTex153'>普融网成立于2015年，注册资本1000万元，实缴资金1000万元，总部位于中国深圳。</p>
      <p className='height25 font16 grayTex153'>致力于小微金融领域生态场景构筑。联合电商、供应链贸易、场景O2O、大数据服务以及开放API智能硬件平台等优势资源，奠定科技基础，</p>
      <p className='height25 font16 grayTex153'>致力于小微民生事业的建设和发展。</p>
      <div className='checkMoreBtn downloadApp MB10  grayBkgFB6A38  font18 heigh60 MT20 positionX w243 heigh60 '>查看更多</div>
    </div>
  </div>
  <div className="download positionR ">
    <div className='positionCenter'>
      <p className='MB15 selection font32 heigh50 whiteTexFFF'>普融网投资</p>
      <div className='line3 grayBkgFB6A38 M0 MT20'></div>
      <div className="MT45 positionR width1198P M0">
        <img className='fl MB10' src={require("./image/footPicture.png")} alt=""/>
        <div className='downloadQrcode PT60 fl clearfix'>
          <p className='heigh40 textL whiteTexFFF font32 trustin'>值得信赖的投资精品</p>
          <p className='grayTexc2c6c7 font16 height30 textL MB35 advantagePoint'>随存随取、即时起息、多重安全保障
          </p>
          <div className='qrcode'>
            <div className="app fl">
              <div className='indexDownApp MB5'></div>
              <p className='grayTexbdc1c1 textC'>扫描下载手机APP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
               </div>
        );
    }
}

export default Index;