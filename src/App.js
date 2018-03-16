import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

import HelpCenter from './components/HelpCenter/HelpCenter';
import Index from './components/Index/Index';
import About from './components/About/About';
import purongApp from './components/App/App';
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

              <Route path="/abc" component={HelpCenter}/>

              <Route path="/abc1" component={Index}/>

              <Route path="/abc2" component={About}/>

              <Route path="/abc3" component={purongApp}/>
              <Footer/>
            </div>
          </HashRouter>
		);
	}
}

export default App;