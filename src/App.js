import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {IndexRoute,Redirect,Router} from 'react-router';



import HelpCenter from './components/HelpCenter/HelpCenter';
import Index from './components/Index/Index';
import About from './components/About/About';
import PurongApp from './components/App/App';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//公用css
import './asset/css/reset.css';
import './asset/css/layout.css';


class App extends Component {
	render() {
		return(
			<HashRouter>
            	<div>
	            	<Header/>
	            		<Route path='/'>
							<div>
								<Route path="/" exact component={Index} />
								<Route path="/helpCenter" component={HelpCenter}/>
	              				<Route path="/about" component={About}/>
	              				<Route path="/purongApp" component={PurongApp}/>
	              				<Route path="/index" component={Index}/>
							</div>
						</Route>
	              	<Footer/>
           		</div>
          </HashRouter>
		);
	}
}

export default App;