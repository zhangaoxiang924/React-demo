import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import '../../asset/css/main.css';
import './Header.scss';

class Header extends React.Component {
	state = {
		width: 0,
		overIndex:0	
	}

	handleMouseOver = (overIndex) => {
		this.setState({
			overIndex:overIndex,
		})
	}
	handleMouseOut = ()=>{
		this.setState({
			overIndex:'',
		})
	}

	render() {
		const navList = [
			{ name: '首页',linkA:"/index"},
			{ name: "关于我们",linkA:"/about"},
			{ name: '帮助中心',linkA:"/helpcenter"},
			{ name: '普融网App',linkA:"/purongApp"}
		];
		return(
			<div className="Header">
                	<div id='header' className="header width1198P positionR M0">
					    <div className="logo positionA positionH L0">
					      <h1>
					        <a href="/index" title="普融网"></a>
					      </h1>
					    </div>
					    <ul className='clearfix fr w800'>
					    	{
					    		navList.map((item,index) => {
					    			let width = this.state.overIndex===index?"85%":'';
									return <li key={index} className='fr'  onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver.bind(this,index)}>
											<NavLink className="positionR" to={item.linkA} activeClassName="sliderParent">
												{item.name}
												<span style={{width:width}} className="slider"></span>
											</NavLink>
										</li>
									
								})
					    	}
					    </ul>
					  </div>
				</div>
		);
	}
}

export default Header;