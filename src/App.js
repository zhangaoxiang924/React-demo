import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import HelpCenter from './components/HelpCenter/HelpCenter';
import Index from './components/Index/Index';
import About from './components/About/About';
import purongApp from './components/App/App';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
	render() {
		return(
			<BrowserRouter>
            <div>
              <br/>
              <Link to="abc">帮助中心</Link>
              <br/>
              <Link to="abc1">首页</Link>
              <br/>
              <Link to="abc2">关于我们</Link>
              <br/>
              <Link to="abc3">普融网app</Link>
              <br/>
              <Route path="/abc" component={HelpCenter}/>
              <br/>
              <Route path="/abc1" component={Index}/>
              <br/>
              <Route path="/abc2" component={About}/>
              <br/>
              <Route path="/abc3" component={purongApp}/>
            </div>
              
          </BrowserRouter>

		);
	}
}

export default App;