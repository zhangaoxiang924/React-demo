import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import '../../asset/css/main.css';
import './Header.scss';
class Header extends React.Component {
	render() {
		return(
			<HashRouter>   	
				<div className="Header">
                	<div id='header' className="header width1198P positionR M0">
					    <div className="logo positionA positionH L0">
					      <h1>
					        <a href="./index.html" title="普融网"></a>
					      </h1>
					    </div>
					    <ul className='clearfix fr w800'>
					        <li className='fr '>
					          <Link to="abc3">普融网app</Link>
					        </li>


					        <li className='fr'>
					          <Link to="abc">帮助中心</Link>
					        </li>


					        <li className='fr naveactive'>
					          <Link to="abc2">关于我们</Link>
					        </li>


					        <li className='fr'>
					          <Link to="abc1">首页</Link>
					        </li>

					    </ul>
					  </div>
				</div>	  
              </HashRouter>

		);
	}
}

export default Header;